"use client";

import Link from "next/link";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Tags,
  Mail,
  Search,
  Settings,
  ChevronRight,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Blogs",
    path: "/admin/blogs",
    icon: FileText,
  },

  {
    name: "Categories",
    path: "/admin/categories",
    icon: FolderOpen,
  },

  {
    name: "Tags",
    path: "/admin/tags",
    icon: Tags,
  },

  {
    name: "Enquiries",
    path: "/admin/enquiries",
    icon: Mail,
  },

  {
    name: "SEO",
    path: "/admin/seo",
    icon: Search,
  },

  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname =
    usePathname();

  const router = useRouter();

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem(
      "admin_token"
    );

    router.push("/admin/login");
  };

  return (
    <aside className="w-[290px] h-screen bg-[#07111f] border-r border-white/10 text-white flex flex-col relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] bg-[#cd2b14]/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] bg-[#981d13]/20 blur-3xl rounded-full"></div>

      {/* LOGO */}
      <div className="relative z-10 px-7 pt-8 pb-7 border-b border-white/10">

        <div className="flex items-center gap-4">

          {/* LOGO ICON */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center text-white text-2xl font-black shadow-2xl">

            W
          </div>

          {/* TEXT */}
          <div>

            <h2 className="text-2xl font-black tracking-wide">
              Welldone
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Admin Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="relative z-10 flex-1 px-5 py-7 space-y-3 overflow-y-auto">

        {menuItems.map((item) => {

          const Icon = item.icon;

          const isActive =
            pathname.startsWith(
              item.path
            );

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`group relative flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] shadow-2xl"
                  : "hover:bg-white/5"
              }`}
            >

              {/* LEFT */}
              <div className="flex items-center gap-4">

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-white/5 text-gray-300 group-hover:bg-white/10"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <span
                  className={`font-semibold text-[15px] ${
                    isActive
                      ? "text-white"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </span>
              </div>

              {/* RIGHT */}
              <ChevronRight
                size={18}
                className={`transition-all ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 group-hover:text-white"
                }`}
              />

              {/* ACTIVE GLOW */}
              {isActive && (
                <div className="absolute inset-0 bg-white/5"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="relative z-10 p-5 border-t border-white/10">

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-red-500 transition-all duration-300 rounded-2xl py-4 font-semibold text-gray-300 hover:text-white"
        >
          <LogOut size={20} />

          Logout
        </button>
      </div>
    </aside>
  );
}