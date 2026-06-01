function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-3xl shadow-lg w-[400px]">

        <h1 className="text-4xl text-cyan-400 font-bold text-center mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-4 mb-5 rounded-xl bg-slate-800 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-4 mb-6 rounded-xl bg-slate-800 text-white outline-none"
        />

        <button className="w-full bg-cyan-500 py-4 rounded-xl text-white text-lg hover:bg-cyan-400">
          Login
        </button>

      </div>

    </div>
  )
}

export default Login