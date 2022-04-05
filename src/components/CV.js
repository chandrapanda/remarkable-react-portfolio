import React from "react";
import resume from "../images/full-stack-CV.pdf";

function CV() {
  return (
    <section id="CV" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <a
            href={resume}
            download="ChandraCV"
            className="w-1/3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Download my CV (updated March 2022)
          </a>
        </div>
      </div>
    </section>
  );
}
export default CV;
