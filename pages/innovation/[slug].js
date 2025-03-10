import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import markdownStyles from "../../components/markdown-styles.module.css";
import PostTitle from "../../components/post-title";
import CoverImage from "../../components/cover-image";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";

function innovationPage({
  innovationMatter: { title, date, coverImage, author },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/">
        <a className="btn btn-dark m-3">Go back</a>
      </Link>

      <>
        <article className="container mb-32">
          <PostHeader title={title} coverImage={coverImage} author={author} />
          <PostBody content={marked(content)} />
        </article>
      </>
    </>
  );
}

export default innovationPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("innovation"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownwithMeta = fs.readFileSync(
    path.join("innovation", slug + ".md"),
    "utf-8"
  );

  const { data: innovationMatter, content } = matter(markdownwithMeta);

  return {
    props: {
      innovationMatter,
      slug,
      content,
    },
  };
}
