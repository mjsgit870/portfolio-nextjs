import {useRouter} from 'next/router'

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/blogs`);
  const datas = await res.json();

  return {
    paths: datas.map((data) => ({
      params: {
        slug: String(data.slug),
      },
    })),
    fallback: true,
  };
}

export const api_uri = 'https://web-profile-mjs.herokuapp.com'

export async function getStaticProps({ params: { slug } }) {
  
  const res = await fetch(`${api_uri}/blogs?slug=${slug}`);
  const dts = await res.json();
  
  return {
    props: {
      blog: dts[0],
    },
  };
}

export default function Slug({ blog }) {

  const router = useRouter()

  if(router.isFallback) {
    return <h1>Loading</h1>
  }

  return (
    <div>
      <div>
        <img
          src={`${api_uri}${blog.header.formats.url}`}
          className="md:h-60 mx-auto rounded-md"
        ></img>
      </div>
      <div>{blog.author.name}</div>
      <div>{blog.title}</div>
      <div>{blog.body}</div>
    </div>
  );
}
