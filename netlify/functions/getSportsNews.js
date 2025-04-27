export async function handler(event, context) {
    const API_KEY = "3a6da55f29714013a7ae7d0875c9f219";
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Server error", error: error.message }),
      };
    }
  }
  