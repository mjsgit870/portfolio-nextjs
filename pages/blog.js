import Image from "next/image";
import Link from "next/link";


export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
      `
    })
  })

  const posts = await res.json()

  return {
    props: {
      posts: posts.data.posts.edges
    }
  }

}

export default function Blog({ posts }) {
  console.log(posts)
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.node.id} href={`/blog/${post.node.slug}`}>
          <a>
            <div className="grid lg:grid-cols-3 lg:gap-3 shadow-sm hover:shadow-lg hover:gray-400 transition ease-in-out duration-300 mb-3">
              <div className="lg:col-span-1 bg-gray-300 rounded-lg overflow-hidden">
                <img src={post.node.featuredImage.node.sourceUrl} className="min-w-full min-h-full object-cover"></img>
              </div>
              <div className="lg:col-span-2 py-3 px-2 lg:p-0">
                <div className="text-color font-medium tracking-wide text-xl">
                  {post.node.title}
                </div>
                <div>
                  <span className="font-light text-sm">Author :</span>
                  {post.node.author.node.name}
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
