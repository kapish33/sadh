import { NextRequest, NextResponse } from "next/server";
import requestIp from "request-ip";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const detectedIp = requestIp.getClientIp(request);
  console.log("detectedIp", detectedIp);

  try {
    let ip = request.ip || request.headers.get("x-real-ip");
    const forwardedFor = request.headers.get("x-forwarded-for");

    if (!ip && forwardedFor) {
      ip = forwardedFor.split(",").at(0) || "Unknown";
    }

    // Get country information based on the IP
    const ipInfoResponse = await fetch(
      `https://ipinfo.io/${ip}?token=f12b2b00b2fa02`
    );
    console.log("ipInfoResponse", ipInfoResponse);

    if (ipInfoResponse.ok) {
      const ipInfoData = await ipInfoResponse.json();
      const country = ipInfoData.country || "Unknown";
      console.log("IP:", ip, "Country:", country);
    } else {
      console.error(
        "Failed to fetch IP information:",
        ipInfoResponse.statusText
      );
    }
  } catch (error) {
    console.error("Error processing IP information:", error);
  }

  return res;
}
