import { createClient } from "contentful";
import Link from "next/link";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "blog",
  });

  return {
    props: {
      blogs: res.items,
    },
  };
}

export default function Blog({ blogs }) {
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <Link href={`blog/${blog.fields.slug}`}>
          <a>
            <div
              key={blog.sys.id}
              className="flex flex-col lg:flex-row shadow-sm hover:shadow-lg transition ease-in-out duration-300 mb-3"
            >
              <div className="lg:w-60 bg-gray-300 mr-3 rounded-lg overflow-hidden">
                {/* <Image
              src={"https:" + blog.fields.thumbnail.fields.file.url}
              width={blog.fields.thumbnail.fields.file.details.image.width}
              height={blog.fields.thumbnail.fields.file.details.image.height}
            /> */}
                <img
                  src={`https:${blog.fields.thumbnail.fields.file.url}`}
                ></img>
              </div>
              <div className="py-1">
                <div className="text-color font-medium tracking-wide text-xl">
                  {blog.fields.title}
                </div>
                <div>
                  <span className="font-light text-sm">Created At :</span>
                  {blog.sys.createdAt}
                </div>
                <div>{blog.fields.title}</div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
