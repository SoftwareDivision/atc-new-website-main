import Image from "next/image";
import React, { useState } from "react";

import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import HeroPost from "../components/hero-post";
import CoverImage from "../components/cover-image";
import DateFormatter from "../components/date-formatter";

import Product1 from "../public/gifs/product1.gif";
import Product2 from "../public/gifs/product2.gif";
import Product3 from "../public/gifs/product3.gif";
import Product4 from "../public/gifs/product4.gif";
import Product5 from "../public/gifs/product5.gif";
import Product6 from "../public/gifs/product6.gif";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const products = ({ prodPosts }) => {
  const [categoryName, setCategoryName] = useState("all");
  console.log(categoryName);
  const [activeCategory, setActiveCategory] = useState("all");
  const [openTab, setOpenTab] = useState(1);

  const features = [
    {
      name: "Warehouse Management System",
      description:
        "Warehouse Management Systems (WMS) are known for advanced automation and escalated productivity. WMS play a critical role in controlling the placement, storage and movement of cargo within a warehouse, along with carrying out associated transactions.",
      icon: GlobeAltIcon,
    },
    {
      name: "Dispatch Management Systems",
      description:
        "DMS ensures you that only valid FG cartons/bales/rolls/palettes/crates etc. to be dispatched from valid transport truck/vehicle against the delivery order (DO).",
      icon: ScaleIcon,
    },
    {
      name: "Barcode-based Material Tracking System",
      description:
        "Material tracking System or WIP is an approach to have each and every details regarding the raw material, processed material, FG material on single scan or click in system.",
      icon: LightningBoltIcon,
    },
    {
      name: "RFID Technology-Based Solutions",
      description:
        "Radio Frequency Identification (RFID) technology allows you to use electromagnetic fields to automatically identify and track tags attached to objects. The tags contain electronically-stored information.",
      icon: AnnotationIcon,
    },
  ];

  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Our Products
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Committed to excellency
            </p>
          </div>

          {/* NAV */}
          {/*
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row "
                role="tablist"
              >
                <li className="-mb-px mr-2 ml-0 flex-auto text-center ">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal no-underline " +
                      (openTab === 0
                        ? "text-white bg-" + "blue" + "-600"
                        : "text-" + "dark" + "bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(0);
                      setCategoryName("all");
                    }}
                    data-toggle="tab"
                    href="#link0"
                    role="tablist"
                  >
                    All
                  </a>
                </li>

                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal no-underline " +
                      (openTab === 1
                        ? "text-white bg-" + "blue" + "-600"
                        : "text-" + "dark" + "bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                      setCategoryName("barcode-rfid-systems");
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Barcode and RFID systems
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal no-underline " +
                      (openTab === 2
                        ? "text-white bg-" + "blue" + "-600"
                        : "text-" + "dark" + "bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                      setCategoryName("customized-software");
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Customized Software
                  </a>
                </li>
                <li className="-mb-px last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal no-underline " +
                      (openTab === 3
                        ? "text-white bg-" + "blue" + "-600"
                        : "text-dark" + "bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                      setCategoryName("sensors-and-devices");
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Sensors and Devices
                  </a>
                </li>
              </ul>
            </div>
          </div>

            */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 lg:gap-y-18 my-32 ">
            {/* ::Partner 1 -> ALL */}

            {categoryName === "all"
              ? prodPosts.map((post, index) => (
                <Link href={`/products/${post.productSlug}`}>
                  <div className="px-4 py-5 flex-auto text-center shadow-lg m-3 cursor-pointer">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400 ">
                      <img src={post.productMatter.coverImage} />
                    </div>
                    <h6 className="text-xl font-semibold">
                      {post.productMatter.title}
                    </h6>
                  </div>
                </Link>
              ))
              : prodPosts
                .filter((post) => {
                  return post.productMatter.category === categoryName;
                })
                .map((post, index) => (
                  <Link href={`/products/${post.productSlug}`}>
                    <div className="px-4 py-5 flex-auto  text-center shadow-lg m-3">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5  rounded-full bg-blue-400">
                        <img src={post.productMatter.coverImage} />
                      </div>
                      <h6 className="text-xl font-semibold">
                        {post.productMatter.title}
                      </h6>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default products;

export async function getStaticProps() {
  // get files from posts directory

  const files = fs.readdirSync(path.join("products"));

  // get slug and front matter from posts

  const productPosts = files.map((filename) => {
    // Create slug

    const productSlug = filename.replace(".md", "");

    // get matter

    const markdownWithMeta = fs.readFileSync(
      path.join("products", filename),
      "utf-8"
    );

    const { data: productMatter } = matter(markdownWithMeta);

    return {
      productSlug,
      productMatter,
    };
  });

  return {
    props: {
      prodPosts: productPosts,
    },
  };
}
