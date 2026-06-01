function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 bg-slate-900 shadow-lg">

      <h1 className="text-3xl font-bold text-cyan-400">
        FocusFlow AI
      </h1>

      <ul className="flex gap-8 text-white">
        <li className="hover:text-cyan-400 cursor-pointer">Home</li>
        <li className="hover:text-cyan-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-cyan-400 cursor-pointer">Analytics</li>
        <li className="hover:text-cyan-400 cursor-pointer">Goals</li>
      </ul>

    </nav>
  )
}

export default Navbar