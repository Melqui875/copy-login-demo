'use client'

import { loginAction } from "@/actions/loginAction"
import { LoginInputs } from "@/types/form"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

export function LoginForm() {
  const { register, formState: { errors }, handleSubmit } = useForm<LoginInputs>()
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const res = await loginAction(data)

    if(res?.error) setErrorMessage(res.error)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 justify-center items-center bg-slate-900 p-8 rounded">
      <span className="text-4xl font-bold">Iniciar secion</span>
      <fieldset className="flex flex-col">
        <label>Nombre de usuario</label>
        <input
          type="text"
          {...register('username', { required: true })}
          className="px-4 py-2 rounded text-black"
        />
        {
          errors.username?.type === 'required' && (
            <span className="text-yellow-500 text-sm font-light">Nombre de usuario requerido.</span>
          )
        }
      </fieldset>
      <fieldset className="flex flex-col">
        <label>Contraseña</label>
        <input
          type="password"
          {...register('password', { required: true })}
          className="px-4 py-2 rounded text-black"
        />
        {
          errors.password?.type === 'required' && (
            <span className="text-yellow-500 text-sm font-light">Contraseña requerida.</span>
          )
        }
      </fieldset>
      {
        errorMessage && (
          <span className="text-red-600 bg-red-300 px-4 py-2 rounded">{errorMessage}</span>
        )
      }
      <button className="px-4 py-2 bg-sky-500 rounded hover:scale-105 transition">Iniciar secion</button>
    </form>
  )
}