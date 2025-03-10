import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const others = ({ others }) => {
  return (
    <section className="container mx-auto px-6">
      <div className="my-5">
        <h3 className="text-base leading-normal text-left-top dark:text-gray-500 mt-4">
          Solutions &gt; Others
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {others.map((post, index) => (
          <Link href={`/others/${post.othersSlug}`} key={index} className="no-underline">
            <div className="w-[400px] h-[480px] bg-white shadow-lg rounded-lg p-5 flex flex-col transition-transform hover:scale-105 mb-8">
              {/* Image Section */}
              <div className="h-[220px] w-full overflow-hidden">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={post.othersMatter.coverImage}
                  alt={post.othersMatter.title}
                />
              </div>

              {/* Title with Hover Effect */}
              <h1 className="font-semibold text-gray-900 leading-normal text-lg mt-4 line-clamp-2 hover:text-blue-500 transition-colors duration-300">
                {post.othersMatter.title}
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

export default others;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("others"));

  const othersPosts = files.map((filename) => {
    const othersSlug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("others", filename),
      "utf-8"
    );

    const { data: othersMatter } = matter(markdownWithMeta);

    return {
      othersSlug,
      othersMatter,
    };
  });

  const desiredOrder = [
    "vision-systems",
    "weighbridge-integrated-system"

  ]

  const sortedPosts = desiredOrder
    .map(slug => othersPosts.find(post => post.othersSlug === slug))
    .filter(Boolean); // This removes any undefined items in case a file is missing


  return {
    props: {
      others: sortedPosts,
    },
  };
}
