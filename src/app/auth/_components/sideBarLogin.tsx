import Image from "next/image";
import loginImage from "@/public/images/login.png";

export function SideBarLogin() {
  return (
    <div className="hidden 2xl:flex flex-col bg-sky-100 h-full w-[30rem] p-8 gap-52">
      <span className="text-4xl font-bold text-sky-500">SMTC</span>
      <div className="flex flex-col items-center justify-center text-center text-base">
        <Image src={loginImage} width={350} height={350} alt="Our team" />
        <p>
          Hacemos <strong>fácil y simple</strong> <br />
          la gestión de <strong>riesgos</strong>
        </p>
      </div>
    </div>
  );
}
