import React from "react";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen bg-background">
      <div className="py-2 bg-primary">
        <nav className="w-1/2 mx-auto text-center text-white">
          <h1 className="text-xl font-semibold">Supa Smoothies</h1>
          <div className="flex items-center justify-center mt-3 gap-x-5">
            <Link to="/">Home</Link>
            <Link to="/create">Create New Smoothie</Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
