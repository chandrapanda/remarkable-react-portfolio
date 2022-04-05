import { ArrowCircleUpIcon, UserCircleIcon } from "@heroicons/react/solid";
import React from "react";

function Footer() {
  return (
    <footer
      id="footer"
      className="center bg-black-700
    text-3xl text-white text-center
    border-t-4 border-gray-500
    inset-x-0
    bottom-0
    p-4"
    >
      <div className="table-footer-group flex space-x-4">
        <UserCircleIcon className="mx-auto inline-block w-10 mb-4" />
        <a
          href="https://github.com/chandrapanda"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
        <UserCircleIcon className="mx-auto inline-block w-10 mb-4" />
        <a
          href="https://www.linkedin.com/in/chandra-holt-1600a25a/"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
        <UserCircleIcon className="mx-auto inline-block w-10 mb-4" />
        <a
          href="https://twitter.com/LaVidaChandra"
          target="_blank"
          rel="noreferrer noopener"
        >
          Twitter
        </a>
        <ArrowCircleUpIcon className="mx-auto inline-block w-10 mb-4" />
        <a href="#about" className="ml-3 text-xl">
          Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
