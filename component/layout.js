import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";

export default function Layout({ children }) {
  const date = new Date();

  return (
    <div className="md:px-20 py-2 px-1 grid md:grid-cols-3 gap-2">
      <Sidebar />
      <div className="secondary md:col-span-2 py-2 px-3 radius">
        <div className="mb-8">
          <Navbar />
        </div>
        <div className="content">{children}</div>
      </div>
      <div className="secondary md:col-span-3 py-4 px-3 radius text-center font-medium antialiased">
        2020 - {date.getFullYear()} MAKE WITH &#10084;{" "}
        <span className="font-medium">By Muhammad Julian Saputra</span>
      </div>
    </div>
  );
}
