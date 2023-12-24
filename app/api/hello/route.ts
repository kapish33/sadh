import IPinfoWrapper from "node-ipinfo";

const ip = require("ip");

export async function GET(request: Request) {
  try {
    const address = ip.address();
    const info = new IPinfoWrapper("f12b2b00b2fa02");
    const data = await info.lookupIp(address);

    return Response.json(data);
  } catch (error) {
    console.error("Error retrieving IP information:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
