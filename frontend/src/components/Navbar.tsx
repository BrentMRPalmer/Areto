import { Link } from "react-router-dom"
import { Monitor, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  console.log("Navbar is rendering!");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold">
          Areto
        </Link>

        {/* Right side group */}
        <div className="flex items-center gap-6">
          <Link to="/classes" className="text-sm font-medium">
            Classes
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Monitor className="h-5 w-5" />
              <span className="sr-only">Monitor view</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User profile</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}