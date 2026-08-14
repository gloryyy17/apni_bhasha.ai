import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";
import { analyzeTextbook } from "../api/scannerApi";

function TextbookScannerPage() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [concepts, setConcepts] = useState(null);

  const handleScan = async () => {
    setScanning(true);
    const result = await analyzeTextbook(null);
    setConcepts(result.concepts);
    setScanning(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-margin-mobile text-center max-w-md mx-auto">
      <h1 className="font-display font-semibold text-3xl text-on-background mb-12">Ask from your textbook</h1>

      {!concepts && !scanning && (
        <button onClick={handleScan} className="w-24 h-24 rounded-full bg-surface-container border border-outline-variant/20 flex items-center justify-center mb-6">
          <Camera size={28} className="text-primary" />
        </button>
      )}

      {scanning && <p className="font-mono text-sm text-on-surface-variant">Scanning...</p>}

      {concepts && (
        <div className="w-full">
          <p className="font-body text-on-surface-variant mb-4">We found {concepts.length} concepts:</p>
          <div className="flex flex-col gap-3">
            {concepts.map((c) => (
              <button
                key={c}
                onClick={() => navigate("/learning?topic=light")}
                className="h-14 rounded-base border border-outline-variant/30 font-body text-on-surface"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TextbookScannerPage;