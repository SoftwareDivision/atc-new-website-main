import fs from "fs";
import path from "path";
import matter from "gray-matter";
import AgricultureDetail from "../../components/AgricultureDetail";

function AgriculturePage({ agricultureMatter, content }) {
  return <AgricultureDetail agricultureMatter={agricultureMatter} content={content} />;
}

export default AgriculturePage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("agriculture"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("agriculture", slug + ".md"),
    "utf-8"
  );

  const { data: agricultureMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      agricultureMatter,
      content,
    },
  };
}

