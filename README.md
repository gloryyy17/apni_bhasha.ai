# Apni Bhasha.ai 🇮🇳

**Apni Bhasha** ("Our Own Language") is an AI-powered learning companion for Indian school students that teaches in the student's **own regional language** instead of forcing them through English or Hindi.

The app lets a student pick their language and class, then:
- **Ask questions by voice or text** and get answers from a local AI model — always in the same Indian language and script the student asked in (Hindi, Bengali, Telugu, Tamil, Marathi, Kannada, Gujarati, Punjabi, Malayalam, Odia, Assamese, Urdu, English, etc.)
- **Work through bite-sized lessons** (explanations + MCQs) on school topics like Science, generated per-topic
- **Scan a textbook page** with their camera to pull out key concepts (OCR via Tesseract.js)
- **Track progress** across subjects and see topic-level gaps ("mastered" / "learning" / "gap")
- Go through an onboarding flow, dashboard, learning session, progress view, and profile — all built as a React SPA

The idea: most online lecture and lesson content in India is only in English or Hindi, which leaves out students from regional-medium and rural backgrounds. Apni Bhasha removes that language barrier at the point of learning.

## Tech Stack

**Frontend** (`apni-bhasha/`)
- React 19 + Vite
- React Router
- Tailwind CSS v4
- Tesseract.js (in-browser OCR for the textbook scanner)
- Browser Web Speech API (voice input)
- lucide-react (icons)

**Backend** (`apni-bhasha/backend/`)
- Node.js + Express 5
- CORS + dotenv
- Calls a **locally running [Ollama](https://ollama.com)** instance (`gemma2:2b` model) to answer student questions
- Lesson content and progress data are currently served from in-memory mock data (no database yet)

> Note: the backend also lists `@google/genai` as a dependency, but it isn't wired into any route yet — the live AI Q&A path goes through Ollama. You can ignore that package for now unless you're extending the AI route.

## Prerequisites

Before you start, install:

1. **Node.js 18+** and npm — [nodejs.org](https://nodejs.org)
2. **Git**
3. **[Ollama](https://ollama.com/download)** — required for the AI Q&A feature to work locally
   - After installing, pull the model the backend expects:
     ```bash
     ollama pull gemma2:2b
     ```
   - Ollama needs to be running (it listens on `http://localhost:11434` by default) whenever you use the "Ask AI" / voice query feature.

## 1. Clone the repo

```bash
git clone https://github.com/gloryyy17/apni_bhasha.ai.git
cd apni_bhasha.ai/apni-bhasha
```

Everything (frontend + backend) lives inside the `apni-bhasha/` folder.

## 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` (optional — it'll default to port 5000 if you skip this):

```bash
PORT=5000
```

Start the backend:

```bash
npm run dev      # with nodemon (auto-restart)
# or
npm start        # plain node
```

You should see:

```
Backend running at http://localhost:5000
```

Sanity check it's alive:

```bash
curl http://localhost:5000/api/health
```

Make sure **Ollama is running** in a separate terminal before you try the AI query feature, otherwise `/api/ai/query` will fail:

```bash
ollama serve
```

## 3. Set up the frontend

Open a new terminal:

```bash
cd apni-bhasha
npm install
```

Create a `.env` file in `apni-bhasha/` (project root, next to `package.json`):

```bash
VITE_API_BASE_URL=http://localhost:5000/api
```

(This is optional too — if omitted, the frontend already defaults to `http://localhost:5000/api`.)

Start the dev server:

```bash
npm run dev
```

Vite will print a local URL, typically:

```
http://localhost:5173
```

Open that in your browser.

## 4. Using the app locally

With both servers running (backend on `:5000`, Ollama on `:11434`, frontend on `:5173`):

- `/` — Landing page
- `/onboarding` — Pick your language and class
- `/dashboard` — Main hub
- `/learning` — Take a lesson (explanations + MCQs)
- `/scanner` — Scan a textbook page (camera/image upload → OCR)
- `/progress` — View subject-wise progress and gaps
- `/profile` — Profile page

Voice input works best in Chromium-based browsers (Chrome/Edge), since it relies on the Web Speech API — it falls back to a canned transcript if the browser doesn't support it.

## Project Structure

```
apni_bhasha.ai/
└── apni-bhasha/
    ├── backend/
    │   ├── routes/
    │   │   ├── ai.js         # /api/ai/query → calls local Ollama (gemma2:2b)
    │   │   ├── lesson.js     # /api/lesson/generate → mock lesson content
    │   │   └── progress.js   # /api/progress → mock progress data
    │   └── server.js
    └── src/
        ├── pages/            # Landing, Onboarding, Dashboard, LearningSession, Progress, TextbookScanner, Profile
        ├── components/landing/
        ├── api/              # frontend fetch wrappers (aiApi, lessonApi, progressApi, scannerApi)
        ├── context/          # LanguageContext
        ├── hooks/            # useSpeechRecognition
        └── data/             # languages, subjects, translations, mock lessons
```

## Known limitations (as of this build)

- Lesson content and student progress are hardcoded mock data — there's no database wired in yet.
- The textbook scanner's concept-extraction (`scannerApi.js`) is a mocked stub, not yet connected to real OCR + AI analysis.
- The AI Q&A feature requires Ollama running locally with `gemma2:2b` pulled — there's no cloud fallback configured yet, despite `@google/genai` being present in `package.json`.
