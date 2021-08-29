import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query OnePost($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
            author {
              node {
                avatar {
                  url
                }
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            id
            title
            slug
            content
          }
        }
      `,
      variables: {
        id: context.params.slug,
        idType: "SLUG",
      },
    }),
  });
  const json = await res.json();

  return {
    props: {
      blog: json.data.post,
    },
  };
}

export default function Slug({ blog }) {
  return (
    <div>
      <Head>
        <title>MJS Profile | {blog.title} Page</title>
      </Head>
      <Link href="/blog">
        <div className="mb-3 text-lg bg-blue-400 bg-opacity-20 rounded-lg px-2 max-w-max cursor-pointer">
          <i className="far fa-angle-double-left mr-2"></i>Back
        </div>
      </Link>
      <div className="rounded-md overflow-hidden">
        <img src={blog.featuredImage.node.sourceUrl}></img>
      </div>
      <div className="flex items-center justify-center py-3">
        <img
          className="rounded-full w-10 h-10 mr-3"
          src={blog.author.node.avatar.url}
        ></img>
        <div>
          <span className="text-gray-400 font-medium">Author by</span>{" "}
          {blog.author.node.name}
        </div>
      </div>
      <div className="py-2 lg:px-5 font-semibold text-xl">{blog.title}</div>
      <article
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="py-2 lg:px-5"
      ></article>
    </div>
  );
}
