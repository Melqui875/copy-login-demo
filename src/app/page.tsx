import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth()
  if (!session) redirect('/api/auth/signin')
  if (session.user?.role === 'ADMIN') redirect('/admin')
  return (
    <>
    Home Page
    <Link href='/api/auth/signout'>Cerrar Sesion</Link>
    </>
  );
}
