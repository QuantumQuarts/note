import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import dotenv from "dotenv";
dotenv.config();

// components
import Navbar from "@/app/components/Navbar.jsx";

export default async function DashboardLayout({ children }) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const supabase = createServerComponentClient({ supabaseKey, supabaseUrl, cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
}
