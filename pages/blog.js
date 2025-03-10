import React from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const Blog = ({ blogs }) => {
  return (
    <section className="container mx-auto px-6">
      <div className="my-5 text-center">
        <h1 className="xl:text-5xl md:text-4xl text-2xl font-bold text-dark dark:text-white">
          Our Case Studies
        </h1>
        <p className="text-base leading-normal text-center text-dark dark:text-gray-200 mt-4">
          Let's Co-Create Eco Friendly Systems Together!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {blogs.map((post, index) => (
          <Link
            href={`/blog/${post.blogSlug}`}
            key={index}
            className="no-underline"
          >
            <div className="w-[400px] h-[480px] bg-white shadow-lg rounded-lg p-5 flex flex-col transition-transform hover:scale-105 mb-8">
              {/* Image Section */}
              <div className="h-[220px] w-full overflow-hidden">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={post.blogMatter.coverImage}
                  alt={post.blogMatter.title}
                />
              </div>

              {/* Category */}
              <p className="text-blue-500 font-semibold text-base mt-2">
                {post.blogMatter.category}
              </p>

              {/* Title with Hover Effect */}
              <h1 className="font-semibold text-gray-900 leading-normal text-lg mt-2 line-clamp-2 hover:text-blue-500 transition-colors duration-300">
                {post.blogMatter.title}
              </h1>

              {/* Spacer for Flexbox Alignment */}
              <div className="flex-grow"></div>

              {/* Author and Date */}
              <div className="mt-4">
                <p className="text-gray-900 font-semibold">
                  {post.blogMatter.author.name}
                </p>
                <p className="text-gray-500 font-semibold text-sm">
                  {post.blogMatter.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("blogs"));

  const blogPosts = files.map((filename) => {
    const blogSlug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("blogs", filename),
      "utf-8"
    );

    const { data: blogMatter } = matter(markdownWithMeta);

    return {
      blogSlug,
      blogMatter,
    };
  });

  return {
    props: {
      blogs: blogPosts,
    },
  };
}
