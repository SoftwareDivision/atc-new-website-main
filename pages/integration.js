import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const Integration = ({ integration }) => {
  return (
    <section className="container mx-auto px-6">
      <div className="my-5 text-center">
        <h1 className="xl:text-5xl md:text-4xl text-2xl font-bold text-dark dark:text-white">
          Our Integrations
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {integration.map((post, index) => (
          <Link
            href={`/integration/${post.integrationSlug}`}
            key={index}
            className="no-underline"
          >
            <div className="w-[400px] h-[480px] bg-white shadow-lg rounded-lg p-5 flex flex-col transition-transform hover:scale-105 mb-8">
              {/* Image Section */}
              <div className="h-[220px] w-full overflow-hidden">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={post.integrationMatter.coverImage}
                  alt={post.integrationMatter.title}
                />
              </div>

              {/* Title with Hover Effect */}
              <h1 className="font-semibold text-gray-900 leading-normal text-lg mt-4 line-clamp-2 hover:text-blue-500 transition-colors duration-300">
                {post.integrationMatter.title}
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

export default Integration;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("integration"));

  const integrationPosts = files.map((filename) => {
    const integrationSlug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("integration", filename),
      "utf-8"
    );

    const { data: integrationMatter } = matter(markdownWithMeta);

    return {
      integrationSlug,
      integrationMatter,
    };
  });

  const desiredOrder = [
    "ANPR Camera Integration",
    "Email Integration",
    "ERP SOFT INTEGRATION",
    "GO-FRUGAL API",
    "PLC Integration",
    "SAP Integration",
    "Tally Integration",
    "TCS ION API",
    "Weighbridge",
    "Weighing Scale"

  ]

  const sortedPosts = desiredOrder
    .map(slug => integrationPosts.find(post => post.integrationSlug === slug))
    .filter(Boolean); // This removes any undefined items in case a file is missing


  return {
    props: {
      integration: sortedPosts,
    },
  };
}
