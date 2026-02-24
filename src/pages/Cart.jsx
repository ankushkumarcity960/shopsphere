import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price, 0)
    );
  }, [cart]);

  return (
    <div className="w-11/12 max-w-6xl mx-auto mt-10">

      {cart.length > 0 ? (
        <div className="flex gap-12">

          {/* LEFT - CART ITEMS */}
          <div className="w-[70%]">
            {cart.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                itemIndex={index}
              />
            ))}
          </div>

          {/* RIGHT - SUMMARY */}
          <div className="w-[30%] h-fit p-6 bg-gray-100 rounded-lg">

            <h2 className="text-green-600 font-semibold">
              YOUR CART
            </h2>
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              SUMMARY
            </h1>

            <p className="text-gray-700">
              Total Items: <span className="font-semibold">{cart.length}</span>
            </p>

            <div className="mt-6 border-t pt-4">
              <p className="text-lg font-semibold text-gray-800">
                Total Amount:
                <span className="text-green-600">
                  {" "}${totalAmount.toFixed(2)}
                </span>
              </p>

              <button
              onClick={() => toast.success("Proceeding to Checkout")}
              className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg"
               >
               Checkout Now
               </button>


            </div>

          </div>
        </div>
      ) : (
        /* EMPTY CART */
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
          <h1 className="text-2xl font-semibold">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
