import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    const isDev = process.env.NODE_ENV !== 'production';

    // CSP Directives
    // 'unsafe-eval' is often required during development for HMR and some libraries.
    // 'strict-dynamic' allows scripts trusted by the nonce to load other scripts.
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' https: http: ${isDev ? "'unsafe-eval'" : ''};
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://firebasestorage.googleapis.com https://img.youtube.com https://images.unsplash.com https://pbs.twimg.com;
    font-src 'self' https://fonts.gstatic.com data:;
    connect-src 'self' https://firebasestorage.googleapis.com;
    base-uri 'self';
    frame-src 'self' https://www.youtube.com;
    frame-ancestors 'none';
    ${!isDev ? "require-trusted-types-for 'script';" : ''}
    upgrade-insecure-requests;
  `
        .replace(/\s{2,}/g, ' ')
        .trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', cspHeader);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.headers.set('Content-Security-Policy', cspHeader);

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
};
