import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <nav className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg">
          <Link to="/" className="text-white text-lg font-semibold">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg font-semibold">
            About
          </Link>
          <Link to="/blogs" className="text-white text-lg font-semibold">
            Blogs
          </Link>
        </nav>
      </header>
      <main>
        {/* mirip @yield laravel */}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
