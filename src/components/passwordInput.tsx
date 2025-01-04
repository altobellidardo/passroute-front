'use client'

import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-800"
        placeholder="Password"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center"
        onClick={togglePasswordVisibility}
      >
        {showPassword
          ? <EyeOff className="h-5 w-5 text-gray-400" />
          : <Eye className="h-5 w-5 text-gray-400" />
        }
      </button>
    </div>
  )
}

export default PasswordInput
