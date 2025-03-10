import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const Towers = ({ towers }) => {
  return (
    <section className="container mx-auto px-6">
      <div className="my-5">
        <h3 className="text-base leading-normal text-left-top dark:text-gray-500 mt-4">
          Solutions &gt; Towers
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {towers.map((post, index) => (
          <Link href={`/towers/${post.towersSlug}`} key={index} className="no-underline">
            <div className="w-[400px] h-[480px] bg-white shadow-lg rounded-lg p-5 flex flex-col transition-transform hover:scale-105 mb-8">
              {/* Image Section */}
              <div className="h-[220px] w-full overflow-hidden">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={post.towersMatter.coverImage}
                  alt={post.towersMatter.title}
                />
              </div>

              {/* Title with Hover Effect */}
              <h1 className="font-semibold text-gray-900 leading-normal text-lg mt-4 line-clamp-2 hover:text-blue-500 transition-colors duration-300">
                {post.towersMatter.title}
              </h1>

              {/* Spacer for Flexbox Alignment */}
              <div className="flex-grow"></div>

              {/* Footer Section */}
              {/* <p className="text-gray-500 font-semibold text-sm mt-4">
                {post.towersMatter.date}
              </p> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Towers;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("towers"));

  const towersPosts = files.map((filename) => {
    const towersSlug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("towers", filename),
      "utf-8"
    );

    const { data: towersMatter } = matter(markdownWithMeta);

    return {
      towersSlug,
      towersMatter,
    };
  });

  const desiredOrder = [
    "Asset Verification",
    "Content Management System",
    "Employee Attendance Management",
    "Storage to Despatch System",
    "Tracking & Tracing Solution",
    
  ]

  const sortedPosts = desiredOrder
    .map(slug => towersPosts.find(post => post.towersSlug === slug))
    .filter(Boolean); // This removes any undefined items in case a file is missing


  return {
    props: {
      towers: sortedPosts,
    },
  };
}
