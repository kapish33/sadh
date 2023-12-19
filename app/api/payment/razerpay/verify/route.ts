import { Const } from "@/source/config/const";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    await request.json(); // Request Body

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", Const.RAZORPAY_KEY_ID as any)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    NextResponse.redirect(`/payment?reference=${razorpay_payment_id}`);
  } else {
    NextResponse.json(
      {
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
