import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const Explosives = ({ explosives }) => {
  return (
    <section className="container mx-auto px-6">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb my-4">
        <Link href="/">
          <a className="text-gray-300 font-semibold">Home</a>
        </Link>
        {" / "}
        <span className="text-gray-600 font-bold">Explosives</span>
      </nav>

      {/* Explosives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {explosives.map((post, index) => (
          <Link href={`/explosives/${post.explosivesSlug}`} key={index} className="no-underline">
            <div className="w-[400px] h-[480px] bg-white shadow-lg rounded-lg p-5 flex flex-col transition-transform hover:scale-105 mb-8">
              {/* Image Section */}
              <div className="h-[220px] w-full overflow-hidden">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={post.explosivesMatter.coverImage}
                  alt={post.explosivesMatter.title}
                />
              </div>

              {/* Title with Hover Effect */}
              <h1 className="font-semibold text-gray-900 leading-normal text-lg mt-4 line-clamp-2 hover:text-blue-500 transition-colors duration-300">
                {post.explosivesMatter.title}
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

export default Explosives;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("explosives"));

  const explosivesPosts = files.map((filename) => {
    const explosivesSlug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("explosives", filename),
      "utf-8"
    );

    const { data: explosivesMatter } = matter(markdownWithMeta);

    return {
      explosivesSlug,
      explosivesMatter,
    };
  });

  // Define your custom order by filename (without .md)
  const desiredOrder = [
    "Aarkay Explo Print", 
    "Packaging & Rejection SPM System", 
    "Explo Print LD - Emulsion", 
    "Online Post Printing System", 
    "L3 Online Post Printing & Scanning System", 
    "L3 Online Post Printing", 
    "L3 Printing System", 
    "Dispatch & Consumption Management System", 
    "Track n Trace", 
    "Asset Verification", 
    "Employee Attendance Management",
    "Digital Signage solutions"
  ];

  // Sort posts based on desired order
  const sortedPosts = desiredOrder
    .map(slug => explosivesPosts.find(post => post.explosivesSlug === slug))
    .filter(Boolean); // This removes any undefined items in case a file is missing

  return {
    props: {
      explosives: sortedPosts,
    },
  };
}
