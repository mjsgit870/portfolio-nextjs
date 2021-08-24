export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/blogs`);
  const datas = await res.json();

  return {
    paths: datas.map((data) => ({
      params: {
        slug: String(data.slug),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${process.env.API_URL}/blogs?slug=${slug}`);
  const dts = await res.json();

  return {
    props: {
      blog: dts[0],
    },
  };
}

export default function Slug({ blog }) {
  return (
    <div>
      <div>
        <img src={blog.header.name}></img>
      </div>
      <div>{blog.author.name}</div>
      <div>{blog.title}</div>
      <div>{blog.body}</div>
    </div>
  );
}
