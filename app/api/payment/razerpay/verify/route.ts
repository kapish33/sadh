import crudOperations from "@/firebase/RealTime-Database/crud";
import { tables } from "@/firebase/collection.names";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = data;
   

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", "g5DilmQrbCfT7sPwk05PEi0i")
      .update(body)
      .digest("hex");

    console.log("expectedSignature end", expectedSignature, razorpay_signature);

    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
      // Database operation goes here
      const rea = await crudOperations("POST", tables.customer, data);
      // Now Send Response
      return NextResponse.redirect(`/payment?reference=${razorpay_payment_id}`);
    } else {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
