'use client';

import { IoIosRemoveCircleOutline } from "react-icons/io";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

type Props = {
  item: {
    id: string;
    title: string;
    image: string;
    price: number;
    quantity?: number;
  };
};

const CartItemRow = ({ item }: Props) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQty = parseInt(e.target.value, 10);
    if (!isNaN(newQty) && newQty >= 1) {
      updateQuantity(item.id, newQty);
    }
  };

  return (
    <tr key={item.id} className="text-center">
      <td className="p-3 border border-[#ccc]">
        <Image
          src={item.image}
          alt={item.title}
          width={80}
          height={80}
          className="mx-auto object-contain"
          quality={100}
        />
      </td>
      <td className="p-3 border text-[#5a6069] text-[13px] border-[#ccc]">{item.title}</td>
      <td className="p-3 border border-[#ccc]">
        <div className="flex min-h-[50px] items-center justify-center gap-2">
          <input
            type="number"
            value={item.quantity ?? 1}
            min={1}
            onChange={handleQuantityChange}
            className="h-[40px] w-20 border focus:outline-none border-[#ccc] px-3 text-[#5a6069] text-left rounded"
          />

          <button
            onClick={() => removeFromCart(item.id)}
            className="h-[40px] w-[40px] flex items-center justify-center bg-[#e51515] text-white rounded"
          >
            <IoIosRemoveCircleOutline />
          </button>
        </div>
      </td>
      <td className="p-3 border text-[#5a6069] border-[#ccc]">${item.price.toLocaleString('de-DE', { minimumFractionDigits: 0 })}
      </td>
      <td className="p-3 border text-[#5a6069] border-[#ccc]">
        ${(item.price * (item.quantity ?? 1)).toLocaleString('de-DE', { minimumFractionDigits: 0 })}

      </td>
    </tr>
  );
};

export default CartItemRow;
