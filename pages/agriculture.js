import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const Agriculture = ({ agriculture }) => {
  return (
    <section className="container mx-auto px-6">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb my-3 ml-6 py-2 px-4 bg-gray-100 rounded-md">
        <Link href="/">
          <a className="text-blue-500">Home</a>
        </Link>
        {" > "}
        <span className="text-gray-600">Agriculture</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {agriculture.map((post, index) => (
          <Link href={`/agriculture/${post.agricultureSlug}`} key={index} className="no-underline">
            <div className="w-[400px] h-[480px] bg-white shadow-lg rounded-lg p-5 flex flex-col transition-transform hover:scale-105 mb-8">
              {/* Image Section */}
              <div className="h-[220px] w-full overflow-hidden">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={post.agricultureMatter.coverImage}
                  alt={post.agricultureMatter.title}
                />
              </div>

              {/* Title with Hover Effect */}
              <h1 className="font-semibold text-gray-900 leading-normal text-lg mt-4 line-clamp-2 hover:text-blue-500 transition-colors duration-300">
                {post.agricultureMatter.title}
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

export default Agriculture;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("agriculture"));

  const agriculturePosts = files.map((filename) => {
    const agricultureSlug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("agriculture", filename),
      "utf-8"
    );

    const { data: agricultureMatter } = matter(markdownWithMeta);

    return {
      agricultureSlug,
      agricultureMatter,
    };
  });

  const desiredOrder = [
    "Asset Verification, Re-verification & Management System",
    "Employee Attendance Management System",
    "Production Capture to Storage & Despatch Management",
    "Secondary and Tertiary Carton Packing",
    "Warehouse Mangement System for Fertilizers, Seeds & Pesticides",
  ];

  // Sort posts based on desired order
  const sortedPosts = desiredOrder
    .map(slug => agriculturePosts.find(post => post.agricultureSlug === slug))
    .filter(Boolean); // This removes any undefined items in case a file is missing

  return {
    props: {
      agriculture: sortedPosts,
    },
  };
}
