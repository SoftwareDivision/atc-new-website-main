import React from "react";
import Link from "next/link";
import PostBody from "./post-body";
import { marked } from "marked";

const AgricultureDetail = ({ agricultureMatter: { title }, content }) => {
  // Function to truncate the title only in the breadcrumb
  const truncateTitle = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="container mb-32">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb my-3 ml-2 py-2 px-4"> {/* Added Left Margin */}
        <Link href="/">
          <a className="text-blue-500">Home</a>
        </Link>
        {" > "}
        <Link href="/agriculture">
          <a className="text-blue-500 hover:underline">Agriculture</a>
        </Link>
        {" > "}
        <span className="text-gray-600">{truncateTitle(title, 40)}</span> {/* Truncated Title in Breadcrumb */}
      </nav>

      {/* Post Content */}
      <article>
        <h1 className="text-3xl font-bold my-4 text-center">{title}</h1> {/* Full Title */}
        <PostBody content={marked(content)} />
      </article>
    </div>
  );
};

export default AgricultureDetail;
