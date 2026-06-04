function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">MiniShop</h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar