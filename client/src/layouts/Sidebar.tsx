// src/layouts/Sidebar.tsx
import React from "react";

type SidebarProps = {
  setPage: (page: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setPage }) => {
  const menu = ["users", "products", "complaints", "notifications", "orders"];

  return (
    <aside className="w-64 bg-[#20232a] text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Complaint</h2>
      <nav className="space-y-4">
        {menu.map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            className="block text-left w-full py-2 px-3 rounded hover:bg-[#61dafb] hover:text-black capitalize"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
