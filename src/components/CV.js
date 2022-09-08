import React from "react";
import { FolderDownloadIcon } from "@heroicons/react/solid";
import resume from "../images/full-stack-CV.pdf";

function CV() {
  return (
    <section id="CV" className="text-gray-400 bg-gray-900 body-font">
      <div className="text-center">
        <FolderDownloadIcon className="w-10 inline-block mb-0" />
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <a
            id="CV-button"
            href={resume}
            download="ChandraCV"
            className="w-1/3 border-8 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Download my CV (updated August 2022)
          </a>
        </div>
      </div>
    </section>
  );
}
export default CV;
