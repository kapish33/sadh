import { NextApiRequest } from 'next';
import requestIp from 'request-ip'

export async function GET(request: NextApiRequest) {
  const detectedIp = requestIp.getClientIp(request)
  return Response.json({ data: detectedIp });
}
