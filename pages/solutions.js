import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import HeroPost from "../components/hero-post";
import CoverImage from "../components/cover-image";
import DateFormatter from "../components/date-formatter";

const solutions = ({ solutionss }) => {
  return (
    <section className="container">
      <div className="my-5">
        <h1
          role="heading"
          class="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-dark dark:text-white"
        >
          Our Case Studies
        </h1>
        <p
          role="contentinfo"
          class="text-base leading-normal text-center text-dark dark:text-gray-200 mt-4"
        >
          Let's Co-Create Eco Friendly Systems Together !
        </p>
      </div>
      <div className="my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-5">
          {solutionss.map((post, index) => {
            return (
              <Link href={`/solutions/${post.solutionsSlug}`} key={index}>
                <a className="no-underline">
                  <div className="md:p-8 p-2 bg-white shadow-lg m-2 rounded-md">
                    <img
                      className="rounded-lg w-full"
                      src={post.solutionsMatter.coverImage}
                    />
                    <p className="text-blue-500 font-semibold text-base mt-2">
                      {post.solutionsMatter.category}
                    </p>
                    <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
                      {post.solutionsMatter.title}
                    </h1>
                    <div className="max-w-full">
                      <p className="text-base tracking-wide text-gray-600 mt-1">
                        {post.solutionsMatter.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 mt-20">
                      <img
                        className="w-10 h-10 object-cover object-center rounded-full"
                        src={post.solutionsMatter.author.picture}
                        alt="random user"
                      />
                      <div>
                        <p className="text-gray-900 font-semibold">
                          {" "}
                          {post.solutionsMatter.author.name}
                        </p>
                        <p className="text-gray-500 font-semibold text-sm">
                          {post.solutionsMatter.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default solutions;

export async function getStaticProps() {
  // get files from posts directory

  const files = fs.readdirSync(path.join("solutions"));

  // get slug and front matter from posts

  const solutionsPosts = files.map((filename) => {
    // Create slug

    const solutionsSlug = filename.replace(".md", "");

    // get matter

    const markdownWithMeta = fs.readFileSync(
      path.join("solutions", filename),
      "utf-8"
    );

    const { data: solutionsMatter } = matter(markdownWithMeta);

    return {
      solutionsSlug,
      solutionsMatter,
    };
  });

  return {
    props: {
      solutionss: solutionsPosts,
    },
  };
}
