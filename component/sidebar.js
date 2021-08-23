import Image from "next/image";
import profile from "../src/img/profile.png";

export default function Sidebar() {
  return (
    <div className="secondary md:pt-20 pt-2 pb-2 px-3 radius flex justify-center">
      <div className="md:inline flex items-center">
        <div className="w-20 md:w-full mr-2">
          <Image src={profile} />
        </div>
        <div className="antialiased">
          <h1 className="md:mt-6 md:mb-2 font-semibold md:font-normal">
            MUHAMMAD JULIAN SAPUTRA
          </h1>
          <div className="md:text-center">
            <p className="font-light text-sm hidden md:block">umur</p>
            <p className="tracking-widest">19 Tahun</p>
          </div>
          <div className="md:text-center">
            <p className="font-light text-sm hidden md:block">jurusan</p>
            <p className="tracking-widest">Sistem Informasi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
