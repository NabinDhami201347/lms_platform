import Link from "next/link";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <Link href="/" className="p-5 font-semibold text-rose-600">
        Creative Nepal
      </Link>

      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
