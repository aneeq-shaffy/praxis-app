import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJWT } from './lib/auth'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  const { pathname } = request.nextUrl

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/auth/signin', '/auth/signup', '/auth/company-pending']
  
  // Check if the current path is public
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))

  // If it's a public route, allow access
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // For protected routes, check authentication
  if (!token) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  // Verify JWT token
  const user = verifyJWT(token)
  if (!user) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  // Role-based access control
  if (pathname.startsWith('/dashboard/admin') && user.role !== 'admin') {
    return NextResponse.redirect(new URL('/dashboard/student', request.url))
  }

  if (pathname.startsWith('/dashboard/company') && user.role !== 'company') {
    return NextResponse.redirect(new URL('/dashboard/student', request.url))
  }

  if (pathname.startsWith('/dashboard/mentor') && user.role !== 'mentor') {
    return NextResponse.redirect(new URL('/dashboard/student', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}