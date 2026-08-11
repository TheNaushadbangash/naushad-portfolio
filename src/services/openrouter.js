export async function askAI(question) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
     model: "openrouter/free",
        max_tokens: 500,
        messages: [
          {
            role: "system",
            content: `
You are Muhammad Naushad's AI Portfolio Assistant.

Only answer questions about:
- Frontend developer

- React developer
- MongoDB
- Next.js
- Ai-chatbot
- Muhammad Naushad
- Portfolio
- React
- JavaScript
- HTML
- CSS
- Tailwind CSS
- Bootstrap
- Frontend Development
- Projects

If the question is unrelated, politely say:
"I am Muhammad Naushad's Portfolio AI Assistant. Please ask about Naushad or frontend development."
            `,
          },
          {
            role: "user",
            content: question,
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("STATUS:", response.status);
    console.log(data);

    if (!response.ok) {
      return data.error?.message || "Something went wrong.";
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}