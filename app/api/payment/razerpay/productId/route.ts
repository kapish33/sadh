import { raz_pay } from "@/source/config/razorPayConfig";
import { NextResponse } from "next/server";

const dummyProducts = [
  {
    id: "1",
    amountInr: 2345,
    amountNonInr: 22132323,
  },
  {
    id: "2",
    amountInr: 323,
    amountNonInr: 38467384,
  },
  {
    id: "3",
    amountInr: 4563,
    amountNonInr: 958863,
  },
  {
    id: "4",
    amountInr: 48735,
    amountNonInr: 387435,
  },
];

export async function POST(request: Request) {
  const { productId } = await request.json();

  const findProductForAmount = dummyProducts.find((product) => {
    return product.id === productId;
  });

  if (!findProductForAmount) {
    return NextResponse.json(
      {
        message: "fail",
      },
      {
        status: 400,
      }
    );
  }

  const options = {
    amount: findProductForAmount.amountInr * 100,
    currency: "INR",
    receipt: "order_receipt_123",
    payment_capture: 1,
  };

  const order = await raz_pay.orders.create(options);
  console.log("findProductForAmount", order);
  return NextResponse.json(
    { order },
    {
      status: 200,
    }
  );
}
