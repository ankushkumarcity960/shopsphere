import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center gap-6 py-6 border-b">

      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="w-[160px] h-[160px] object-contain"
      />

      {/* DETAILS */}
      <div className="flex flex-col flex-1 gap-2">
        <h1 className="text-lg font-semibold">
          {item.title}
        </h1>

        <p className="text-sm text-gray-600">
          {item.description.substring(0, 90)}...
        </p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-green-600 font-semibold text-lg">
            ${item.price}
          </p>

          <div
            onClick={removeFromCart}
            className="cursor-pointer bg-red-100 p-2 rounded-full hover:bg-red-200"
          >
            <FcDeleteDatabase size={20} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
