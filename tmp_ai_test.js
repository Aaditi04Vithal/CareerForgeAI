require('dotenv').config({ path: '.env' });
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function run() {
  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.error("NO API KEY FOUND");
      return;
    }
    
    console.log("Using Key length:", key.length);
    
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    
    const industry = 'tech-software-development';
    const prompt = `Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
{
  "salaryRanges": [
    { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
  ],
  "growthRate": number,
  "demandLevel": "High" | "Medium" | "Low",
  "topSkills": ["skill1", "skill2"],
  "marketOutlook": "Positive" | "Neutral" | "Negative",
  "keyTrends": ["trend1", "trend2"],
  "recommendedSkills": ["skill1", "skill2"]
}

IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
Include at least 5 common roles for salary ranges.
Growth rate should be a percentage.
Include at least 5 skills and trends.`;

    const result = await model.generateContent(prompt);
    console.log("SUCCESS:");
    console.log(result.response.text());
  } catch(e) {
    console.error('AI ERROR:', e);
  }
}
run();
