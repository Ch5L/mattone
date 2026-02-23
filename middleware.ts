import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /images, /docs (static files)
    // - /_vercel (Vercel internals)
    // - files with extensions (e.g. favicon.ico)
    '/((?!api|_next|_vercel|images|docs|.*\\..*).*)'
  ],
};
