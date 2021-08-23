import { createClient } from "contentful";
import Image from "next/image";

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
        <div
          key={blog.sys.id}
          className="flex flex-col lg:flex-row shadow-lg mb-3"
        >
          <div className="lg:w-60 w-full bg-gray-300 mr-3 rounded-lg overflow-hidden">
            {/* <Image
              src={"https:" + blog.fields.thumbnail.fields.file.url}
              width={blog.fields.thumbnail.fields.file.details.image.width}
              height={blog.fields.thumbnail.fields.file.details.image.height}
            /> */}
            <img
              src={`https:${blog.fields.thumbnail.fields.file.url}`}
              className=""
            ></img>
          </div>
          <div className="py-1">
            <div className="text-color font-medium tracking-wide text-xl">
              {blog.fields.title}
            </div>
            <div>
              <span className="font-light text-sm">Created At :</span>{" "}
              {blog.sys.createdAt}
            </div>
            <div>{blog.fields.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
