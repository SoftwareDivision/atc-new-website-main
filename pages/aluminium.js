import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const aluminium = ({ aluminium }) => {
  return (
    <section className="container mx-auto px-6">
      <div className="my-5">
        <h3 className="text-base leading-normal text-left-top dark:text-gray-500 mt-4">
          Solutions &gt; Aluminium
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {aluminium.map((post, index) => (
          <Link href={`/aluminium/${post.aluminiumSlug}`} key={index} className="no-underline">
            <div className="w-[400px] h-[480px] bg-white shadow-lg rounded-lg p-5 flex flex-col transition-transform hover:scale-105 mb-8">
              {/* Image Section */}
              <div className="h-[220px] w-full overflow-hidden">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={post.aluminiumMatter.coverImage}
                  alt={post.aluminiumMatter.title}
                />
              </div>

              {/* Title with Hover Effect */}
              <h1 className="font-semibold text-gray-900 leading-normal text-lg mt-4 line-clamp-2 hover:text-blue-500 transition-colors duration-300">
                {post.aluminiumMatter.title}
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

export default aluminium;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("aluminium"));

  const aluminiumPosts = files.map((filename) => {
    const aluminiumSlug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("aluminium", filename),
      "utf-8"
    );

    const { data: aluminiumMatter } = matter(markdownWithMeta);

    return {
      aluminiumSlug,
      aluminiumMatter,
    };
  });

  const desiredOrder = [
    "Asset Verification",
    "Castor Roll Weight Capture",
    "Data Capture System",
    "Digital Signage solutions",
    "Earth Pit Tracking System",
    "Furnace Raw-Material",
    "Gate Entry to Storage to  Delivery",
    "Payroll Software Integration",
    "Re-verification & Management System",
    "System with ERP Integration",
    "Tagging & Tracking System",
    "WIP Tracking System"
  ];

  // Sort posts based on desired order
  const sortedPosts = desiredOrder
    .map(slug => aluminiumPosts.find(post => post.aluminiumSlug === slug))
    .filter(Boolean); // This removes any undefined items in case a file is missing

  return {
    props: {
      aluminium: sortedPosts,
    },
  };
}
