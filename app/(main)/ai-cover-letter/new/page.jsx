"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/use-fetch";
import { coverLetterSchema } from "@/app/lib/schema";
import { generateCoverLetter } from "@/actions/cover-letter";

export default function CreateCoverLetterPage() {
  const router = useRouter();

  const {
    loading: generateLoading,
    fn: generateCoverLetterFn,
    data: generateResult,
  } = useFetch(generateCoverLetter);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(coverLetterSchema),
  });

  const onSubmit = async (values) => {
    try {
      await generateCoverLetterFn(values);
    } catch (error) {
      console.error("Cover letter generation error:", error);
    }
  };

  useEffect(() => {
    if (generateResult?.id && !generateLoading) {
      toast.success("Cover letter generated successfully!");
      router.push(`/ai-cover-letter/${generateResult.id}`);
    }
  }, [generateResult, generateLoading, router]);

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-2">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-center mt-6">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="gradient-title text-4xl">
              Create New Cover Letter
            </CardTitle>
            <CardDescription>
              Provide the job details and our AI will generate a tailored, professional cover letter for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    placeholder="e.g., Senior Software Engineer"
                    {...register("jobTitle")}
                  />
                  {errors.jobTitle && (
                    <p className="text-sm text-red-500">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="e.g., Acme Corp"
                    {...register("companyName")}
                  />
                  {errors.companyName && (
                    <p className="text-sm text-red-500">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobDescription">Job Description</Label>
                <Textarea
                  id="jobDescription"
                  placeholder="Paste the key responsibilities and requirements of the job posting..."
                  className="h-48"
                  {...register("jobDescription")}
                />
                {errors.jobDescription && (
                  <p className="text-sm text-red-500">
                    {errors.jobDescription.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={generateLoading}>
                {generateLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Cover Letter...
                  </>
                ) : (
                  "Generate Cover Letter"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
