"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-black text-white">
      {/* Top navigation */}
      <nav className="flex-1 space-y-2 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>

        <Link
          href="/dashboard/create-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <PlusCircle className="h-4 w-4" />
          Create Blog
        </Link>
      </nav>

      {/* Bottom action */}
      <div className="p-4 border-t border-gray-500">
        <Button
          variant="destructive"
          className="w-full justify-start gap-2 cursor-pointer"
          onClick={() => {
            console.log("Logout clicked");
          }}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
