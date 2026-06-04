function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-full object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-3">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold mt-2">
        ₹{product.price}
      </p>

      <button className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full">
        Add To Cart
      </button>
    </div>
  )
}

export default ProductCard