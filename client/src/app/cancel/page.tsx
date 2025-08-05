export default function CancelPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20 bg-red-50">
      <div className="text-center max-w-2xl mx-auto bg-white p-10 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment cancelled</h1>
        <p className="text-lg text-gray-700 mb-6">There was a problem with the payment or you declined it.</p>
        <a
          href="/cart"
          className="bg-black text-white py-2 px-5 rounded hover:bg-gray-800 transition"
        >
         Return to cart
        </a>
      </div>
    </section>
  );
}
