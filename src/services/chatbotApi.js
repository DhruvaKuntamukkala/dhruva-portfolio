const API_URL = "http://localhost:8000/chat"; // change after deploy

export async function sendMessageToBot(message) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  if (!response.ok) {
    throw new Error("Chatbot server error");
  }

  return response.json();
}
