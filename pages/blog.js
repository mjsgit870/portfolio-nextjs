import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  console.log(process.env.API_URL);
  const data = await fetch(`${process.env.API_URL}/blogs`);
  const res = await data.json();

  return {
    props: {
      blogs: res,
    },
  };
}

export default function Blog({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => (
        <Link href={`/blog/${blog.slug}`} key={blog.id}>
          <a>
            <div className="grid lg:grid-cols-3 lg:gap-3 shadow-sm hover:shadow-lg transition ease-in-out duration-300 mb-3">
              <div className="lg:col-span-1 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={`https://web-profile-mjs.herokuapp.com${blog.header.url}`}
                  className="lg:h-full w-full"
                ></img>
              </div>
              <div className="lg:col-span-2 py-3 px-2 lg:p-0">
                <div className="text-color font-medium tracking-wide text-xl">
                  {blog.title}
                </div>
                <div>
                  <span className="font-light text-sm">Author :</span>
                  {blog.author.name}
                </div>
                <div>{blog.body}</div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
