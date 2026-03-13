import { API_URL } from "../config";

async function getPrediction(frameBlob) {
  const formData = new FormData();
  formData.append("file", frameBlob, "frame.jpg");

  const res = await fetch(`${API_URL}/predict`, {
    method: "POST",
    body: formData,
  });

  return await res.json();
}