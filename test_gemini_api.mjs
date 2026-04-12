import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';

const envFile = fs.readFileSync('.env', 'utf-8');
const match = envFile.match(/GEMINI_API_KEY="([^"]+)"/);
if (!match) {
  console.log("No API key found");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(match[1]);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function test() {
  try {
    const result = await model.generateContent("Hello, say 'Test successful'");
    console.log("SUCCESS:");
    console.log(result.response.text());
  } catch(e) {
    console.log("ERROR:");
    console.log(e.message);
  }
}
test();
