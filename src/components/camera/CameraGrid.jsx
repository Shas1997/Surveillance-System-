import CameraCard from "./CameraCard";

// import videos here ⬇
import video1 from "../../assets/feeds/video1.mp4";
import vid from "../../assets/feeds/vid.mp4";

export default function CameraGrid() {
  const feeds = [
    { id: "A", label: "North Exit", alert: false, status: "SECURE", src: video1 },
    { id: "B", label: "Main Lobby", alert: true, status: "ALERT", src: vid },
    { id: "C", label: "Parking L1", alert: false, status: "SECURE", src: video1 },
    { id: "D", label: "Perimeter", alert: false, status: "SECURE", src: vid }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {feeds.map((f) => (
        <CameraCard key={f.id} {...f} />
      ))}
    </div>
  );
}