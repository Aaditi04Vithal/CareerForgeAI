import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";



const Header = () => {

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-3xl tracking-tighter text-blue-500">
          CareerForgeAI
        </Link>

        {/* Right side */}
        <div className="flex items-center space-x-2 md:space-x-4">

          {/* Dashboard */}
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">
                  Industry Insights
                </span>
              </Button>
            </Link>
          

          {/* Growth Tools Dropdown */}
          <DropdownMenu>

            <DropdownMenuTrigger asChild>
              <Button  className="flex items-center gap-2">
                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block">
                  Growth Tools
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">

              <DropdownMenuItem asChild>
                <Link href="/resume" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Build Resume
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/ai-cover-letter" className="flex items-center gap-2">
                  <PenBox className="h-4 w-4" />
                  Cover Letter
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/interview" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Interview Prep
                </Link>
              </DropdownMenuItem>

            </DropdownMenuContent>

          </DropdownMenu>
          </SignedIn>

          {/* Sign In */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant={"outline"}>Sign In</Button>
            </SignInButton>
          </SignedOut>

          {/* User */}
          <SignedIn>
            <UserButton appearance={
                {
                    elements:{
                        avtarBox: "w-10 h-10",
                        userButtonPopoverCard: "shadow-xl",
                        userPreviewMainIdentifier: "font-semibold",
                    },
                }
            } 
            afterSignOutUrl="/"
            />
          </SignedIn>

        </div>

      </nav>

    </header>
  );
};

export default Header;
