import Link from "next/link";
import Image from "next/image";
import Logo from "../imgs/icon.png";
import LogoutButton from "./LogoutButton.jsx";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="segitiga anomali" width={70} placeholder="blur" quality={100} />
      <h1>Leave Your thought</h1>
      <Link href="/">Home</Link>
      <Link href="/notes" className="mr-auto">
        Notes
      </Link>
      <Link href="/hey" className="secret">
        Info
      </Link>
      <LogoutButton />
    </nav>
  );
}
