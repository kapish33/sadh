import getPaginatedData from "@/firebase/RealTime-Database/paginated";
import Link from "next/link";
import React from "react";
import { SignOut } from "../../Button/SignOut";
import { Filter } from "../../Filter/Admin";

const Table: React.FC<{ page: number; size: number }> = async ({
  page,
  size,
}) => {
  const { data, hasNext, hasPrevious } = await getPaginatedData(
    "customer",
    page,
    size
  );

  return (
    <div>
      <div className="text-right bg-gradient-to-r from-primary-600/40 from-10% via-primary-600/70 via-30% to-primary-600/50 to-90% p-2">
        <Filter />
        <SignOut />
        {/* https://next-auth.js.org/configuration/pages#credentials-sign-in */}
      </div>

      {/* Display the fetched data */}
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right py-2">
        <Link href={hasPrevious ? `/dashboard/${page - 1}/${size}` : ""}>
          <button className={`btn primary me-2 ${!hasPrevious && "disabled"}`}>
            Previous
          </button>
        </Link>

        {/* Next Page Link */}
        <Link href={hasNext ? `/dashboard/${page + 1}/${size}` : ""}>
          <button className={`btn primary ${!hasNext && "disabled"}`}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Table;
