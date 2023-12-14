import getPaginatedData from "@/firebase/RealTime-Database/paginated";
import Link from "next/link";
import React from "react";

const Table: React.FC<{ page: number; size: number }> = async ({
  page,
  size,
}) => {
  const result = await getPaginatedData("users", 1, 10);
  const { data, hasNext, hasPrevious } = result;

  return (
    <div>
      <div className="flex gap-2 justify-between">
        <div>
          <input className="bg-red-400" type="text" name="" id="" />
        </div>
        <div className="flex">
          {/* Previous Page Link */}

          <Link href={hasPrevious ? `/admin/${page - 1}/${size}` : ""}>
            <button
              className={`btn primary me-2 ${!hasPrevious && "disabled"}`}
            >
              Previous
            </button>
          </Link>

          {/* Next Page Link */}
          <Link href={hasNext ? `/admin/${page + 1}/${size}` : ""}>
            <button className={`btn primary ${!hasNext && "disabled"}`}>
              Next
            </button>
          </Link>
        </div>
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
    </div>
  );
};

export default Table;
