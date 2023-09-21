import { db } from "@/lib/db";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

const Courses = async () => {
  const { userId } = auth();
  if (!userId) return redirectToSignIn();

  const courses = await db.course.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default Courses;
