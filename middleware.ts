import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import { 
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes
} from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth(async(req) => {
  const { nextUrl } = req;
  const isLogged = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix); 
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLogged) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return;
  }

  if (!isLogged && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl))
  }

  return;
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
