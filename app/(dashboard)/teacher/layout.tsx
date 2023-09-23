import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!isTeacher(userId)) {
    return redirect("/");
  }
  return <>{children}</>;
};

export default TeacherLayout;
