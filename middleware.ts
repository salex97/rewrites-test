import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.geo?.country);
  const path = request.nextUrl.pathname.replace("/de", "");
  if (request.nextUrl.pathname.startsWith("/de/")) {
    const country = request.geo?.country ?? "de";
    return NextResponse.rewrite(new URL(`/de/${country}${path}`, request.url));
  } else {
    const country = request.geo?.country ?? "wr";
    return NextResponse.rewrite(new URL(`/en/${country}${path}`, request.url));
  }
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
    },
  ],
};
