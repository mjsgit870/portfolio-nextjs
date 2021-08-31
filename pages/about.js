import Head from "next/head";
import Image from "next/image";
import getAge from "../component/getAge";
import Alisya from "../src/img/alisya-cropped.png";
import Portfolio from "../src/img/portfolio-cropped.png";

import profile from "../src/img/profile.png";

export default function About({ age }) {
  return (
    <div>
      <Head>
        <title>MJS Profile | About</title>
      </Head>
      <div className="flex flex-col justify-center items-center mb-6">
        <div className="mr-2">
          <Image src={profile} width="100" height="100" />
        </div>
        <div className="antialiased text-xs md:text-base">
          <h1 className="md:mt-6 md:mb-2 font-semibold md:font-normal">
            MUHAMMAD JULIAN SAPUTRA
          </h1>
          <div className="text-center">
            <p className="font-light text-sm hidden md:block">umur</p>
            <p className="tracking-widest">{getAge(age)} Tahun</p>
          </div>
          <div className="text-center">
            <p className="font-light text-sm hidden md:block">jurusan</p>
            <p className="tracking-widest">Sistem Informasi</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 place-items-center">
          <a
            target="_blank"
            href="https://wa.me/+6281933511948"
            className="bg-green-300 bg-opacity-20 hover:bg-opacity-50 duration-300 cursor-pointer min-w-full py-1 px-4 text-center rounded-full"
          >
            <i className="fab mr-2 fa-whatsapp"></i>
            Whatsapp
          </a>
          <a
            target="_blank"
            href="https://www.github.com/mjsgit870"
            className="bg-gray-300 bg-opacity-20 hover:bg-opacity-50 duration-300 cursor-pointer min-w-full py-1 px-4 text-center rounded-full"
          >
            <i className="fas mr-2 fa-code-branch"></i>
            Github
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/m.julian.sa"
            className="bg-pink-300 bg-opacity-20 hover:bg-opacity-50 duration-300 cursor-pointer min-w-full py-1 px-4 text-center rounded-full"
          >
            <i className="fab mr-2 fa-instagram"></i>
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.tutorialit.ml"
            className="bg-yellow-300 bg-opacity-20 hover:bg-opacity-50 duration-300 cursor-pointer min-w-full py-1 px-4 text-center rounded-full"
          >
            <i className="fas mr-2 fa-rss"></i>
            Blog
          </a>
          <a
            target="_blank"
            href="mailto:saputraj870@gmail.com"
            className="bg-red-300 bg-opacity-20 hover:bg-opacity-50 duration-300 cursor-pointer min-w-full py-1 px-4 text-center rounded-full"
          >
            <i className="fas mr-2 fa-rss"></i>
            Email
          </a>
        </div>
      </div>
      <div className="mt-5 text-center bg-gradient-to-t from-gray-500 py-5">
        <div className="font-semibold text-2xl tracking-wide mb-3">
          PROJECTS
        </div>
        <div className="grid lg:grid-cols-2 w-3/4 gap-5 mx-auto">
          <div>
            <Image src={Alisya} />
            <div className="bg-gray-800 bg-opacity-80">Aslisya Shop</div>
          </div>
          <div>
            <Image src={Portfolio} />
            <div className="bg-gray-800 bg-opacity-80">MJS Web Portfolio</div>
          </div>
        </div>
      </div>
    </div>
  );
}
