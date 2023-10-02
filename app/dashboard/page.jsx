import Navbar from "@/components/Navbar";
import UserInfo from "@/components/UserInfo";
import Image from "next/image";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 md:p-8 lg:p-12 flex justify-center items-center flex-col gap-4 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20 text-center md:text-left text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display">
      {/* </div> */}
        <Image className="hero" 
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
        priority
        quality={100} src='/hero.jpg' width={1000} height={1000} alt="hero"/>
      </div>
      <UserInfo />
    </>
  );
}
