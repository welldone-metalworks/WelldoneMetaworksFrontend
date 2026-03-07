"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--color-dark)] text-white p-6">
        <h2 className="text-xl font-bold mb-8">Welldone Admin</h2>

        <nav className="space-y-4">
          <Link
            href="/admin/dashboard"
            className={`block ${
              pathname.includes("dashboard") ? "text-[var(--color-secondary)]" : ""
            }`}
          >
            Dashboard
          </Link>
        </nav>

        <button
          onClick={logout}
          className="mt-10 text-sm text-red-400"
        >
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
