import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar radius overflow-hidden antialiased m-2">
      <ul className="flex justify-around font-bold">
        <li className={router.pathname == "/" ? "active-link li" : "li"}>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li className={router.pathname == "/blog" ? "active-link li" : "li"}>
          <Link href="/blog">
            <a>BLOG</a>
          </Link>
        </li>
        <li className={router.pathname == "/about" ? "active-link li" : "li"}>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
