import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import HeroPost from "../components/hero-post";
import CoverImage from "../components/cover-image";
import DateFormatter from "../components/date-formatter";

const expertise = ({ expPosts }) => {
  return (
    <div className="bg-white px-1 py-5 mx-3">
      <div className="caseStudiesHeading">
        <h1 className="text-dark text-center text-4xl font-semibold">
          Our Expertise
        </h1>
      </div>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32 container gap-x-8 gap-y-4">
        {expPosts.map((post, index) => (
          <div className="flex rounded bg-white shadow-lg flex-col justify-between p-3">
            <div className="my-1 ">
              <img
                className="w-full h-48 object-cover"
                src={post.expertiseMatter.coverImage}
                loading="lazy"
                alt={""}
              />
            </div>
            <div className="my-1 grow">
              <h4>{post.expertiseMatter.title}</h4>
            </div>
            <div className="my-1 grow">
              <p className="">{post.expertiseMatter.excerpt}</p>
            </div>
            <div className="my-1 text-center flex justify-center">
              <Link href={`/expertise/${post.expertiseSlug}`}>
                <div className="btn btn-dark ">Read more</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default expertise;

export async function getStaticProps() {
  // get files from posts directory

  const files = fs.readdirSync(path.join("expertise_posts"));

  // get slug and front matter from posts

  const expertisePosts = files.map((filename) => {
    // Create slug

    const expertiseSlug = filename.replace(".md", "");

    // get matter

    const markdownWithMeta = fs.readFileSync(
      path.join("expertise_posts", filename),
      "utf-8"
    );

    const { data: expertiseMatter } = matter(markdownWithMeta);

    return {
      expertiseSlug,
      expertiseMatter,
    };
  });

  return {
    props: {
      expPosts: expertisePosts,
    },
  };
}
