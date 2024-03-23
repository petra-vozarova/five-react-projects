import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";
export const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(product));
  }
  return (
    <div>
      <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={product?.image}
            className="h-28 rounded-lg"
            alt={product?.title}
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{product?.title}</h1>
            <p className="text-white font-extrabold">{product?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove From cart
          </button>
        </div>
      </div>
    </div>
  );
};
