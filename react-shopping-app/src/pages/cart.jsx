import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../components/cart-item/cart-item";

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex justify-center">
      {cart && cart.length > 0 ? (
        <div>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((item, index) => (
                <CartItem product={item} key={index} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-red-800 rext-lg">
                Your cart summary
              </h1>
              <p>
                <span className="text-gray-800 text-bold">Total Items</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 text-bold">Total Amount</span>
                <span>: {total}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center ">
          <h1 className="text-gray-800 text-bold mb-2 text-xl">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
