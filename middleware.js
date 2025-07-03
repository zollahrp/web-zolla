import { NextResponse } from 'next/server';
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/icons') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/api')
  ) {
    return res;
  }

  if (pathname === '/masuk') {
    return res;
  }

  if (pathname.startsWith('/zaga')) {
    if (!session) {
      return NextResponse.redirect(new URL('/masuk', req.url));
    }
    return res;
  }

  if (!session) {
    return NextResponse.rewrite(new URL('/404', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/', '/((?!api|_next|favicon|images|icons).*)'],
};
