import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// ESTO SERIA EL AUTH.JS

export const {
  auth,
  signIn,
  handlers: { GET, POST }
} = NextAuth({
  session: { strategy: 'jwt' },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/login'
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials) {

        // const getUserByName = await db.get(username = credentials.username)

        // si es null retun null
        // si trar algo, el usuario existe ENTONCES...
        // evaluamos el password y...
        // si todo esta bien retun userData / getUserByName

        const testUser = [  // <-- ESTO SERIA LA DB
          { 
            id: '123',
            name: 'melqui',
            password: '123',
            role: 'USER'
          },
          { 
            id: '123',
            name: 'melquiAdmin',
            password: '123',
            role: 'ADMIN'
          },
        ]

        const findUser = testUser.find(({name}) => name === credentials.username)

        if (
          credentials?.username === findUser.name &&
          credentials?.password === findUser.password
        ) return findUser

        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
      return session
    }
  }
})