import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import CoverImage from "../../components/cover-image";
import Avatar from "../../components/avatar";
import DateFormatter from "../../components/date-formatter";
import markdownStyles from "../../components/markdown-styles.module.css";
import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";

function ProductPage({
  productMatter: { title, date, coverImage, author },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/products">
        <a className="btn btn-dark m-3">Go back</a>
      </Link>
      <div className="container my-5 ">
        <div className="mb-8 md:mb-16 sm:mx-0">
          <PostTitle>{title}</PostTitle>
        </div>
        <div className="p-5">
          <div className={markdownStyles["markdown"]}>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("products"));

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
    path.join("products", slug + ".md"),
    "utf-8"
  );

  const { data: productMatter, content } = matter(markdownwithMeta);

  return {
    props: {
      productMatter,
      slug,
      content,
    },
  };
}
