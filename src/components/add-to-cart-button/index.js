"use client";

import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

function AddToCartButton({ productItem }) {
  const cart = useSelector((state) => state);
  console.log(cart?.cartItems);

  return (
    <div className="mt-8 max-w-md">
      <Button>{}</Button>
    </div>
  );
}

export default AddToCartButton;
