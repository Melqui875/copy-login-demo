import Link from "next/link";

export default async function AdminPage() {
  return (
    <>
      Pagina solo de admins
      <Link href='/api/auth/signout'>Cerrar Sesion</Link>
    </>
  );
}
