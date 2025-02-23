import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Posts", path: "/dashboard/posts" },
    { name: "Categories", path: "/dashboard/categories" },
    { name: "Users", path: "/dashboard/users" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Blog Admin</h2>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <a
                    className={cn(
                      "block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200", 
                      router.pathname === item.path ? "bg-gray-300" : ""
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
