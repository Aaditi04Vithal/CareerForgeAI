import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-5 pt-28">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-6xl font-bold gradient-title">
          Industry Insights
        </h1>
      </div>

      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}