import React, { useState } from "react";
import HeroPost from "../components/hero-post";
import CoverImage from "../components/cover-image";
import DateFormatter from "../components/date-formatter";
import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const services = ({ servicePosts }) => {
  return (
    <>
      <div className="bg-white px-1 py-5">
        <div className="caseStudiesHeading">
          <h1 className="text-4xl font-semibold text-center">Our Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32 container">
          {servicePosts.map((post, index) => (
            <div className="card m-4 border-0 shadow-lg p-3 mb-5 bg-white rounded">
              <div className="mb-5">
                <CoverImage
                  title={post.servicesMatter.title}
                  src={post.servicesMatter.coverImage}
                  height={278}
                  width={556}
                />
              </div>
              <h3 className="">{post.servicesMatter.title}</h3>
              <div className="mb-3">
                <DateFormatter dateString={post.servicesMatter.date} />
              </div>
              <Link href={`/services/${post.servicesSlug}`}>
                <a className="btn btn-dark">Read More</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default services;

export async function getStaticProps() {
  // get files from posts directory

  const files = fs.readdirSync(path.join("services_posts"));

  // get slug and front matter from posts

  const servicesPosts = files.map((filename) => {
    // Create slug

    const servicesSlug = filename.replace(".md", "");

    // get matter

    const markdownWithMeta = fs.readFileSync(
      path.join("services_posts", filename),
      "utf-8"
    );

    const { data: servicesMatter } = matter(markdownWithMeta);

    return {
      servicesSlug,
      servicesMatter,
    };
  });

  return {
    props: {
      servicePosts: servicesPosts,
    },
  };
}
