const API_URL = "http://localhost:3333";

export async function getQuestions() {
  const response = await fetch(`${API_URL}/questions`);
  return response.json();
}

export async function createQuestion(question: string) {
  const response = await fetch(`${API_URL}/questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: question,
      subject: "Geral"
    })
  });

  return response.json();
}

export async function generateExam() {
  const response = await fetch(`${API_URL}/questions/generate`);
  return response.json();
}
