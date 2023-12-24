"use client";
import React from "react";
import Card from "./Card";
import axios from "axios";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Home = () => {
  const checkoutHandler = async (productId: string) => {
    const {
      data: { order },
    } = await axios.post(
      "http://localhost:3000/api/payment/razerpay/productId",
      {
        productId,
      }
    );
    const options = {
      key: "rzp_test_L9zPSRr4rnszx5",
      name: "Product Name",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      description: "We Can Put Anything!!",
      // image: logoBase64,
      handler: async function (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) {
        await fetch("http://localhost:3000/api/payment/razerpay/verify", {
          method: "POST",
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
      },
      prefill: {
        name: "mmantratech",
        email: "mmantratech@gmail.com",
        contact: "8707559567",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();

    razor.on("payment.failed", function () {
      alert("Payment failed. Please try again. Contact support for help");
    });
  };

  return (
    <>
      <Card
        id={"2"}
        img={
          "https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"
        }
        checkoutHandler={checkoutHandler}
      />
      <Card
        id={"1"}
        img={
          "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
        }
        checkoutHandler={checkoutHandler}
      />
    </>
  );
};

export default Home;
