// src/App.tsx
import { useState } from "react";
import Sidebar from "./layouts/Sidebar";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Complaints from "./pages/Complaints/Complaints";
import Notifications from "./pages/Notifications/Notifications";
import Orders from "./pages/Orders/Orders";

function App() {
  const [page, setPage] = useState("users");

  const renderPage = () => {
    switch (page) {
      case "users":
        return <Users />;
      case "products":
        return <Products />;
      case "complaints":
        return <Complaints />;
      case "notifications":
        return <Notifications />;
      case "orders":
        return <Orders />;
      default:
        return <Users />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setPage={setPage} />
      <main className="flex-1 p-6">{renderPage()}</main>
    </div>
  );
}

export default App;
