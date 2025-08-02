export function calculateSubtotal(cartItems: { price: number; quantity?: number }[]) {
  return cartItems.reduce((total, item) => {
    const quantity = item.quantity ?? 1;
    return total + item.price * quantity!;
  }, 0);
}
