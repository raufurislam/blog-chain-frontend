// app/dashboard/page.tsx
import Image from "next/image";
import { getUserSession } from "@/helpers/getUserSession";

export default async function DashboardHome() {
  const session = await getUserSession();
  console.log("Session data:", session);

  const quote = "The secret of getting ahead is getting started. – Mark Twain";

  return (
    <div className="min-h-screen mx-auto flex flex-col justify-center items-center bg-gradient-to-b p-8">
      <div className="bg-card rounded-2xl shadow-xl p-10 w-full mx-auto text-center">
        {/* Profile Image */}
        {session?.user?.image && (
          <div className="flex justify-center mb-6">
            <Image
              src={session.user.image}
              alt={session.user.name ?? "User avatar"}
              width={100}
              height={100}
              className="rounded-full border-4 border-indigo-200 shadow-md"
            />
          </div>
        )}

        {/* User Info */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome, {session?.user?.name ?? "Guest"} 👋
        </h1>
        <p className="text-gray-600 mb-6">
          {session?.user?.email ?? "No email available"}
        </p>

        {/* Quote */}
        <blockquote className="italic text-indigo-700 bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400 shadow-sm">
          {quote}
        </blockquote>
      </div>
    </div>
  );
}
