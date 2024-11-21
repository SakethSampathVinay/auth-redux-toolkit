"use client";

import { Button } from "@/components/ui/button";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

function AddToCartButton({ productItem }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item.id === productItem.id);
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(productItem));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(productItem.id));
  }

  return (
    <div className="mt-8 max-w-md">
      <Button type="button" onClick={isInCart ? handleRemoveFromCart : handleAddToCart}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </div>
  );
}

export default AddToCartButton;
