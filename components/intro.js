import { CMS_NAME } from "../lib/constants";
import Image from "next/image";
import cn from "classnames";

export default function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between pt-16 pb-16 pd:pb-12 position-absolute top-0 ">
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Conjointly moving forward with Technology
      </h4>
    </section>
  );
}
