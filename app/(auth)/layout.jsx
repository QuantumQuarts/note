import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logo from "../imgs/head.png";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function AuthLayout({ children }) {
  const supabasae = createServerComponentClient({ cookies });
  const { data } = await supabasae.auth.getSession();

  if (data.session) {
    redirect("/");
  }

  return (
    <>
      <nav>
        <Image src={Logo} alt="segitiga anomali" width={70} placeholder="blur" quality={100} />
        <h1>Leave Your thought</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  );
}
