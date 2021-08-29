export default function Test({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.node.id}>{post.node.title}</div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
            query AllPost {
              posts {
                edges {
                  node {
                    id
                    slug
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    content
                    author {
                      node {
                        name
                        nickname
                      }
                    }
                  }
                }
              }
            }
          `,
    }),
  });
  const posts = await res.json();

  return {
    props: {
      posts: posts.data.posts.edges,
    },
  };
}
