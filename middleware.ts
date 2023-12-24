import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const res = await fetch("https://ipinfo.io/json?token=f12b2b00b2fa02");

    if (!res.ok) {
      // Handle fetch errors, e.g., log the error and proceed without modifying headers.
      console.error("Failed to fetch country information:", res.status, res.statusText);
      return NextResponse.next();
    }

    const { country } = await res.json();
    // console.log("Country:", country);

    const requestHeaders = new Headers(request.headers);
    // Use a custom header prefix like "X-"
    requestHeaders.set("X-Country", country);

    // You can also set request headers in NextResponse.rewrite
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    // Set a new response header `X-Country`
    response.headers.set("X-Country", country);
    return response;
  } catch (error) {
    console.error("Error in middleware:", error);
    // Handle errors and proceed without modifying headers.
    return NextResponse.next();
  }
}
