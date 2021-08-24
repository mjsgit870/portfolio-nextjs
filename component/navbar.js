import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar radius overflow-hidden">
      <ul className="flex justify-around font-bold">
        <Link href="/">
          <li className={router.pathname == "/" ? "active-link li" : "li"}>
            <a>HOME</a>
          </li>
        </Link>
        <Link href="/blog">
          <li className={router.pathname == "/blog" ? "active-link li" : "li"}>
            <a>BLOG</a>
          </li>
        </Link>
        <Link href="/about">
          <li className={router.pathname == "/about" ? "active-link li" : "li"}>
            <a>ABOUT</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}
