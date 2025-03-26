import { Link } from "react-router-dom";
import { MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  console.log("Navbar is rendering!");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex h-16 items-center justify-between pl-16 pr-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold">
          Areto
        </Link>

        {/* Right side group */}
        <div className="flex items-center gap-6">
          <Link to="/classes" className="text-sm font-medium">
            Classes
          </Link>
          <Link to="/clubs" className="text-sm font-medium">
            Clubs
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon">
              <Link to="/messages">
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Messages</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link to="/profile">
                <User className="h-5 w-5" />
                <span className="sr-only">User profile</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
