import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import CoverImage from "../../components/cover-image";
import Avatar from "../../components/avatar";
import DateFormatter from "../../components/date-formatter";
import markdownStyles from "../../components/markdown-styles.module.css";

function ExpPostPage({
  expPostMatter: { title, date, coverImage },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/expertise">
        <a className="btn btn-dark m-3">Go back</a>
      </Link>
      <div className="container my-5 ">
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage
            title={title}
            src={coverImage}
            height={620}
            width={1240}
          />
        </div>
        <div className="p-5">
          <div className={markdownStyles["markdown"]}>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
        <div className="">
          <div className="text-lg postDate">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpPostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("expertise_posts"));

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
    path.join("expertise_posts", slug + ".md"),
    "utf-8"
  );

  const { data: expPostMatter, content } = matter(markdownwithMeta);

  return {
    props: {
      expPostMatter,
      slug,
      content,
    },
  };
}
