import {Button} from "@/components/ui/button";
import HeroSection from "@/components/ui/hero";
import {faqs} from "@/data/faqs";
import { features } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import {howItWorks} from "@/data/howItWorks";
import {testimonial} from "@/data/testimonial";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, FileText, Users, LineChart, ArrowRight } from "lucide-react";




// const howItWorks = [
//   {
//     title: "Professional Onboarding",
//     description:
//       "Share your industry and expertise for personalized guidance",
//     icon: <UserPlus size={24} />,
//   },
//   {
//     title: "Craft Your Documents",
//     description:
//       "Create ATS-optimized resumes and compelling cover letters",
//     icon: <FileText size={24} />,
//   },
//   {
//     title: "Prepare for Interviews",
//     description:
//       "Practice with AI-powered mock interviews tailored to your role",
//     icon: <Users size={24} />,
//   },
//   {
//     title: "Track Your Progress",
//     description:
//       "Monitor improvements with detailed performance analytics",
//     icon: <LineChart size={24} />,
//   },
// ];

// const testimonials = [
//   {
//     name: "Sarah Chen",
//     role: "Software Engineer",
//     company: "Google",
//     feedback:
//       "This platform completely transformed my interview preparation. The AI feedback was incredibly detailed.",
//   },
//   {
//     name: "Michael Rodriguez",
//     role: "Product Manager",
//     company: "Microsoft",
//     feedback:
//       "Practicing with real-world questions helped me land my dream job. Highly recommended!",
//   },
//   {
//     name: "Emily Johnson",
//     role: "Data Scientist",
//     company: "Amazon",
//     feedback:
//       "The personalized feedback helped me improve my answers and confidence during interviews.",
//   },
// ];

export default function Home() {
  return (
    <div> 
      <div className="grid-background"></div>
      <HeroSection/>

<section className="w-full py-16 md:py-24 lg:py-32 relative">
  
  <div className="container mx-auto px-4 md:px-6 relative z-10">

    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
      Powerful Features for Your Career Growth
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

      {features.map((feature, index) => (
        <Card
          key={index}
          className="
          group
          bg-white/5
          backdrop-blur-md
          border border-white/10
          hover:border-white/40
          rounded-xl
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:shadow-xl
          "
        >
          <CardContent className="p-8 text-center flex flex-col items-center gap-4">

            <div className="text-white/80 group-hover:text-white transition">
              {feature.icon}
            </div>

            <h3 className="text-lg font-semibold text-white">
              {feature.title}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {feature.description}
            </p>

          </CardContent>
        </Card>
      ))}

    </div>

  </div>

</section>

<section className="w-full py-16 bg-zinc-900">
  <div className="max-w-6xl mx-auto px-4">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-white">50+</h3>
        <p className="text-gray-400 mt-2">Industries Covered</p>
      </div>

      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-white">1000+</h3>
        <p className="text-gray-400 mt-2">Interview Questions</p>
      </div>

      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-white">95%</h3>
        <p className="text-gray-400 mt-2">Success Rate</p>
      </div>

      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-white">24/7</h3>
        <p className="text-gray-400 mt-2">AI Support</p>
      </div>

    </div>

  </div>
</section>

<section className="w-full py-24 bg-black">

  <div className="max-w-6xl mx-auto px-4">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        How It Works
      </h2>

      <p className="text-gray-400">
        Four simple steps to accelerate your career growth
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {howItWorks.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >

          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-5 text-white">
            {item.icon}
          </div>

          <h3 className="text-lg font-semibold text-white mb-2">
            {item.title}
          </h3>

          <p className="text-gray-400 text-sm max-w-xs">
            {item.description}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>

<section className="w-full py-12 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-background bg-black">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="w-full">
   <div className="mx-auto py-24 gradient rounded-lg">
    
     <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Ready to Accelerate Your Career?
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
        Join thousands of professionals who are advancing their careers
        with AI-powered guidance.
      </p>

      <Link href="/dashboard">
        <Button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto">
          Start Your Journey Today
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>

    </div>

  </div>
</section>
    </div>
  );
}
