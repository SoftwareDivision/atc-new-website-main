import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const Innovation = ({ innovation }) => {
  return (
    <section className="container mx-auto px-6">
      <div className="my-5">
        <h1 className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-dark dark:text-white">
          Our Innovations
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {innovation.map((post, index) => (
          <Link href={`/innovation/${post.innovationSlug}`} key={index} className="no-underline">
            <div className="w-[400px] h-[480px] bg-white shadow-lg rounded-lg p-5 flex flex-col transition-transform hover:scale-105 mb-8">
              {/* Image Section */}
              <div className="h-[220px] w-full overflow-hidden">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={post.innovationMatter.coverImage}
                  alt={post.innovationMatter.title}
                />
              </div>

              {/* Title with Hover Effect */}
              <h1 className="font-semibold text-gray-900 leading-normal text-lg mt-4 line-clamp-2 hover:text-blue-500 transition-colors duration-300">
                {post.innovationMatter.title}
              </h1>

              {/* Spacer for Flexbox Alignment */}
              <div className="flex-grow"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Innovation;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("innovation"));

  const innovationPosts = files.map((filename) => {
    const innovationSlug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("innovation", filename),
      "utf-8"
    );

    const { data: innovationMatter } = matter(markdownWithMeta);

    return {
      innovationSlug,
      innovationMatter,
    };
  });

  const desiredOrder = [
    "FIDL",
    "India's First Explosives",
    "Conveyor Packaging System",

  ]

  const sortedPosts = desiredOrder
    .map(slug => innovationPosts.find(post => post.innovationSlug === slug))
    .filter(Boolean); // This removes any undefined items in case a file is missing


  return {
    props: {
      innovation: sortedPosts,
    },
  };
}
