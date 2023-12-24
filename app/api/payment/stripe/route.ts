import { Const } from "@/source/config/const";
import { NextResponse } from "next/server";

const stripe = require("stripe")(Const.STRIPE.SECRET_KEY);

export async function POST(request: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1OQpyQSC25q0wv3OTjCUKM3B", // EDIT
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.headers.get("origin")}/?success=true`,
      cancel_url: `${request.headers.get("origin")}/?canceled=true`,
    });
    return NextResponse.redirect(session.url, 303);
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

export async function GET(request: Request) {
  return NextResponse.json(
    {
      success: false,
      error: "Internal GET Server Error",
    },
    {
      status: 500,
    }
  );
}
