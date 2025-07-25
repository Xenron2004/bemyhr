import React from "react";
import Link from "next/link";

const Bg = () => {
  return (
    <div className="flex max-w-[1280px] text-[#666D80] mt-8  pt-2 w-full items-start justify-between text-mainBodytext text-sm font-montserrat font-medium ">
      <div>© Bemyhr 2025. All Rights Reserved.</div>
      <div className="flex gap-4 items-center justify-between">
        <Link
          href="https://www.freeprivacypolicy.com/live/5d3adfa6-29f4-4864-aeb9-5e392f2a06eb"
          className="text-mainBodytext duration-300 ease-in-out hover:text-bodyText text-sm font-montserrat font-medium  "
        >
          Privacy Policy{" "}
        </Link>
      </div>
    </div>
  );
};

export default Bg;