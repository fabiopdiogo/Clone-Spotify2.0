import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import NextAuth from 'next-auth'
import NextAuthSession from 'next-auth/session'

export async function middleware(req){
  //Token will exist if user is logged in

  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  console.log("token",token);
  const { pathname } = req.nextUrl;

  //Allow the requests if the following is true...
  // 1) Its a request for next-auth session & provider fetching
  // 2) the token exists

  if ( pathname.includes('/api/auth') || token ){
    return NextResponse.next();
  }

  // Redirect them to login if they dont have token and are requesting a protected route
  if (!token && pathname !== '/login'){
    return NextResponse.res.redirect('/login');
  }
}