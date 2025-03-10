import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ExplosiveDetail from "../../components/ExplosiveDetail"; // Import the new component

function ExplosivesPage({ explosivesMatter, content }) {
  return <ExplosiveDetail explosivesMatter={explosivesMatter} content={content} />;
}

export default ExplosivesPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("explosives"));

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
    path.join("explosives", slug + ".md"),
    "utf-8"
  );

  const { data: explosivesMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      explosivesMatter,
      content,
    },
  };
}
