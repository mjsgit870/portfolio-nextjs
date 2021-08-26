export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query AllPost {
          posts {
            nodes {
              slug
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();
  const datas = json.data.posts.nodes;

  const paths = datas.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
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
      <article
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="py-2 lg:px-5"
      ></article>
    </div>
  );
}
