import { authOptions } from "@/source/config/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getServerSession(authOptions);
  if (user?.user) redirect(`/dashboard/1/10`);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      UI
    </main>
  );
}
