import { db } from "./lib/prisma.js";

async function run() {
  try {
    const user = await db.user.findFirst();
    if (!user) {
      console.log("No user found");
      return;
    }
    
    // Simulate generation result
    const content = "This is a test cover letter";
    
    const coverLetter = await db.coverLetter.create({
      data: {
        content,
        jobDescription: "Job desc",
        companyName: "wipro",
        jobTitle: "trainee",
        status: "completed",
        userId: user.id,
      },
    });
    console.log("SUCCESS:", coverLetter);
    
    // Cleanup
    await db.coverLetter.delete({ where: { id: coverLetter.id }});
  } catch(e) {
    console.log("ERROR:", e);
  }
}
run();
