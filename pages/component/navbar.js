import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar radius overflow-hidden">
      <ul className="flex justify-around">
        <li className="w-full h-full text-center hover:bg-gray-400 hover:text-black py-2">
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li className="w-full h-full text-center hover:bg-gray-400 hover:text-black py-2">
          <Link href="/blog">
            <a>BLOG</a>
          </Link>
        </li>
        <li className="w-full h-full text-center hover:bg-gray-400 hover:text-black py-2">
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
