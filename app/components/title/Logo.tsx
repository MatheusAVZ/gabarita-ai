import Image from "next/image";
import Link from "next/link";
import logoImg from '@/app/img/logo.png'

const Logo = () => {
  return (
    <Link href={"/"} className="flex flex-col justify-center md:justify-start">
        <div className="flex items-center mb-4">
          <Image 
            src={logoImg}
            alt="Gabarita_A.I"
            width={120}
            className="mr-4"
            priority
          />
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white">
            Gabarita A.I
          </h1>
        </div>
    </Link>
  );
}

export default Logo;