import React from "react";
import Link from "next/link";
import { marked } from "marked";

const ExplosiveDetail = ({ explosivesMatter: { title }, content }) => {
  // Function to truncate the title only in the breadcrumb
  const truncateTitle = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="container mb-32 mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb my-3 py-2 px-4">
        <Link href="/">
          <a className="text-gray-500">Home</a>
        </Link>
        {" > "}
        <Link href="/explosives">
          <a className="text-gray-500 hover:underline">Explosives</a>
        </Link>
        {" > "}
        <span className="text-gray-600 font-semibold">{truncateTitle(title, 40)}</span>
      </nav>

      {/* Post Content max-w-[900px]*/}
      <div className="flex items-center">
        <article className="text-left px-4  ">
          <h1 className="text-2xl font-bold my-4">{title}</h1>
          <div
            className="text-left tracking-wide"
            style={{
              wordBreak: "break-word",        // Prevent text breaking
              whiteSpace: "pre-wrap",         // Maintain paragraph spacing
              overflowWrap: "break-word",     // Force words to wrap properly
              lineHeight: "1.8",              // Improve readability
            }}
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
        </article>
      </div>
    </div>
  );
};

export default ExplosiveDetail;
