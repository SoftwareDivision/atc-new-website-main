import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const Fmcg = ({ fmcg }) => {
  return (
    <section className="container mx-auto px-6">
      <div className="my-5">
        <h3 className="text-base leading-normal text-left-top dark:text-gray-500 mt-4">
          Solutions &gt; FMCG
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {fmcg.map((post, index) => (
          <Link href={`/fmcg/${post.fmcgSlug}`} key={index} className="no-underline">
            <div className="w-[400px] h-[480px] bg-white shadow-lg rounded-lg p-5 flex flex-col transition-transform hover:scale-105 mb-8">
              {/* Image Section */}
              <div className="h-[220px] w-full overflow-hidden">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={post.fmcgMatter.coverImage}
                  alt={post.fmcgMatter.title}
                />
              </div>

              {/* Title with Hover Effect */}
              <h1 className="font-semibold text-gray-900 leading-normal text-lg mt-4 line-clamp-2 hover:text-blue-500 transition-colors duration-300">
                {post.fmcgMatter.title}
              </h1>

              {/* Spacer for Flexbox Alignment */}
              <div className="flex-grow"></div>

              {/* Footer Section */}
              <p className="text-gray-500 font-semibold text-sm mt-4">
                {post.fmcgMatter.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Fmcg;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("fmcg"));

  const fmcgPosts = files.map((filename) => {
    const fmcgSlug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("fmcg", filename),
      "utf-8"
    );

    const { data: fmcgMatter } = matter(markdownWithMeta);

    return {
      fmcgSlug,
      fmcgMatter,
    };
  });

  const desiredOrder = [
    "Asset Management System",
    "Attendance Management System",
    "checkweighing",
    "Digital Signage solutions",
    "in-outbound",
    "order booking_ms",
    "Storage & Despatch",
    "store_inventory",
    "tracking_tracing",
    "wms_anpr",
  ]

  const sortedPosts = desiredOrder
    .map(slug => fmcgPosts.find(post => post.fmcgSlug === slug))
    .filter(Boolean); // This removes any undefined items in case a file is missing


  return {
    props: {
      fmcg: sortedPosts,
    },
  };
}
