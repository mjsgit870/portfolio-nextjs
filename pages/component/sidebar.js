import Image from "next/image";
import profile from "../img/profile.png";

export default function Sidebar() {
  return (
    <div className="secondary md:pt-20 pt-2 pb-2 px-3 radius flex justify-center">
      <div className="md:inline flex items-center">
        <div className="w-20 md:w-full">
          <Image src={profile} />
        </div>
        <div>
          <h1 className="md:mt-6 md:mb-2">MUHAMMAD JULIAN SAPUTRA</h1>
          <div className="text-center">
            <p className="font-light text-sm hidden md:block">umur</p>
            <p className="tracking-widest">19 Tahun</p>
          </div>
          <div className="text-center">
            <p className="font-light text-sm hidden md:block">jurusan</p>
            <p className="tracking-widest">Sistem Informasi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
