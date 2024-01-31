import { LoginForm } from "../_components/loginForm";
import { SideBarLogin } from "../_components/sideBarLogin";

export default function loginPage() {
  return (
    <section className="h-full w-full flex justify-center items-center 2xl:justify-between">
      <SideBarLogin />
      <LoginForm />
    </section>
  )
}