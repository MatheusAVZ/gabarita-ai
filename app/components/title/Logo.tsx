import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex flex-col justify-center md:justify-start">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        Gabarita A.I
      </h1>
    </Link>
  );
}

export default Logo;