'use server'

// ESTO SERIA EL SERVER ACTION!!

import { signIn } from "@/auth";
import { LoginInputs } from "@/types/form";
import { AuthError } from "next-auth";

export async function loginAction (formDate: LoginInputs) {
  try {
    await signIn('credentials', {
      username: formDate.username,
      password: formDate.password,
      redirectTo: '/'
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Credenciales invalidas' }
        default:
          return { error: 'Hubo un error inesperado!' }
      }
    }
    throw error
  }
}
