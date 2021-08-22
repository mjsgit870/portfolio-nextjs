import React from "../../src/img/atom.png";
import Php from "../../src/img/php-code.png";
import Javascript from "../../src/img/javascript.png";
import Html from "../../src/img/html.png";
import Css from "../../src/img/css.png";
import Ide from "../../src/img/visual-studio.png";

import Image from "next/image";

export default function Card() {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold antialiased tracking-wide text-color">
        PROGRAMMING LANGUAGES
      </h1>
      <div className="flex flex-wrap justify-around">
        <div className="mt-5">
          <div className="card">
            <Image src={Html} />
          </div>
          <div className="bg-red-400 card-text">HTML</div>
        </div>
        <div className="mt-5">
          <div className="w-40 p-6 bg-gray-300 bg-opacity-50 rounded-lg mb-2">
            <Image src={Css} />
          </div>
          <div className="bg-blue-400 card-text">CSS</div>
        </div>
        <div className="mt-5">
          <div className="w-40 p-6 bg-gray-300 bg-opacity-50 rounded-lg mb-2">
            <Image src={Javascript} />
          </div>
          <div className="bg-yellow-400 card-text">JAVASCRIPT</div>
        </div>
        <div className="mt-5">
          <div className="w-40 p-6 bg-gray-300 bg-opacity-50 rounded-lg mb-2">
            <Image src={Php} />
          </div>
          <div className="bg-purple-400 card-text">PHP</div>
        </div>
        <div className="mt-5">
          <div className="w-40 p-6 bg-gray-300 bg-opacity-50 rounded-lg mb-2">
            <Image src={React} />
          </div>
          <div className="bg-green-400 card-text">REACT</div>
        </div>
      </div>

      <h1 className="text-center text-2xl font-semibold antialiased tracking-wide text-color mt-5">
        IDE/TEXT EDITOR
      </h1>
      <div className="flex justify-center my-5">
        <div className="w-44">
          <Image src={Ide} />
        </div>
      </div>
    </div>
  );
}
