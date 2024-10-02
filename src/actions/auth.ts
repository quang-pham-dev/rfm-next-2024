'use server'

import { User } from '@/interfaces'

import { signIn } from '@/lib'

export async function signInAction(user: User) {
  await signIn(user)
}
