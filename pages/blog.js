import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const data = await fetch("http://localhost:1337/blogs");
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
            <div className="flex flex-col lg:flex-row shadow-sm hover:shadow-lg transition ease-in-out duration-300 mb-3">
              <div className="lg:w-60 bg-gray-300 mr-3 rounded-lg overflow-hidden">
                {/* <Image
                  src={blog.header.name}
                  height={blog.header.height}
                  width={blog.header.width}
                /> */}
                <img src={blog.header.name}></img>
              </div>
              <div className="py-1">
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
