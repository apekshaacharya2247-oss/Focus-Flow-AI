import { useState } from "react"

import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from "../firebase"

function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert("Account Created Successfully 🚀")

    } catch (error) {

      alert(error.message)

    }

  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-3xl shadow-lg w-[400px]">

        <h1 className="text-4xl text-cyan-400 font-bold text-center mb-8">
          Signup
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-4 mb-5 rounded-xl bg-slate-800 text-white outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-4 mb-6 rounded-xl bg-slate-800 text-white outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-cyan-500 py-4 rounded-xl text-white text-lg hover:bg-cyan-400"
        >
          Create Account
        </button>

      </div>

    </div>
  )
}

export default Signup