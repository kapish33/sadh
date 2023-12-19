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
    console.log("productId", productId);
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
      amount: order.amount,
      currency: "INR",
      name: "6 Pack Programmer",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: "http://localhost:3000",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
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
