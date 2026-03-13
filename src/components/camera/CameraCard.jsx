import { API_URL } from "../../config";

export default function CameraCard({ label, status, alert, src }) {

  const sendFrameToBackend = async (blob) => {
    const formData = new FormData();
    formData.append("file", blob, "frame.jpg");

    const res = await fetch(`${API_URL}/predict`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("Prediction:", data);
  };

  return (
    <div>
      <video
        src={src}
        autoPlay
        loop
        muted
        onLoadedData={(e) => console.log("Video loaded")}
      />
      <div className="text-white p-2 text-sm">
        {label} | {status}
      </div>
    </div>
  );
}
