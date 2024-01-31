"use client";

import { loginAction } from "@/actions/loginAction";
import { LoginInputs } from "@/types/form";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInputs>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const res = await loginAction(data);

    if (res?.error) setErrorMessage(res.error);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-14 justify-center items-center p-7 rounded 2xl:mr-[30rem]"
    >
      <div className="flex flex-col items-center justify-center text-center gap-8">
        <span className="text-4xl">
          Iniciar sesión en <span className="text-sky-500">SMTC</span>
        </span>
        <div className="flex justify-center items-center w-full">
          <hr className="w-full border-t border-gray-400" />
          <p className="mx-1 text-gray-600 uppercase text-[10px]">
            Desarrollado por company
          </p>
          <hr className="w-full border-t border-gray-400" />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <fieldset className="flex flex-col">
          <label className="text-base text-gray-700 pl-4">
            Nombre de usuario
          </label>
          <input
            type="text"
            placeholder="user@superadmin.com"
            {...register("username", { required: true })}
            className="px-4 py-2 w-80 rounded-lg text-black border-2 border-gray-200 text-sm md:focus:border-white sm:w-96 outline-sky-500"
          />
          {errors.username?.type === "required" && (
            <span className="text-red-500 text-sm font-light pl-1">
              Nombre de usuario requerido.
            </span>
          )}
        </fieldset>
        <fieldset className="flex flex-col">
          <div className="flex gap-16 items-center sm:gap-32">
            <label className="text-base text-gray-700 pl-4">Contraseña</label>
            <Link href={"#"} className="text-xs text-sky-500 underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <input
            type="password"
            placeholder="3 + caracteres"
            {...register("password", { required: true })}
            className="px-4 py-2 rounded-lg text-black border-2 border-gray-200 text-sm outline-sky-500"
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500 text-sm font-light pl-1">
              Contraseña requerida.
            </span>
          )}
        </fieldset>
        {errorMessage && (
          <span className="text-red-600 bg-red-300 px-4 py-2 rounded">
            {errorMessage}
          </span>
        )}
        <button className="px-4 py-3 bg-transparent rounded-full hover:scale-105 transition border-2 border-sky-300 hover:border-sky-500">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
}
