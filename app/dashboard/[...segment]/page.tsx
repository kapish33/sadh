import Table from "@/source/components/server/Table";
import { authOptions } from "@/source/config/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard({
  params,
}: {
  params: { segment: [string, string] };
}) {
  const userDetails = await getServerSession(authOptions);
  if (!userDetails?.user) redirect("/");

  const [page, size] = params?.segment;

  return (
    <main className="">
      <Table page={+page} size={+size} />
    </main>
  );
}
