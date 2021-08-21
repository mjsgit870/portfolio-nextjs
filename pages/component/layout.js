import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="md:px-20 md:py-2 grid md:grid-cols-3 gap-2">
      <Sidebar />
      <div className="secondary col-span-2 py-2 px-3 radius">
        <Navbar />
        <div className="content">{children}</div>
      </div>
      <div className="secondary col-span-3 py-4 px-3 radius">Footer</div>
    </div>
  );
}
