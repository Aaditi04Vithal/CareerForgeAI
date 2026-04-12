import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';

const envFile = fs.readFileSync('.env', 'utf-8');
const match = envFile.match(/GEMINI_API_KEY="([^"]+)"/);

const genAI = new GoogleGenerativeAI(match[1]);

async function testModel(modelName) {
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent("Say 'OK'");
    console.log(`${modelName}: SUCCESS - ${result.response.text().trim()}`);
    return true;
  } catch(e) {
    console.log(`${modelName}: ERROR - ${e.message}`);
    return false;
  }
}

async function run() {
  await testModel("gemini-2.5-flash");  // Might fail
  await testModel("gemini-2.0-flash");
  await testModel("gemini-2.0-flash-lite");
  await testModel("gemini-1.5-pro");
}
run();
