"use client";
import { useState, createContext } from "react"

const mokeUpUser = {
  id: null,
  phoneNumber: "",
  required_package: null,
}

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(mokeUpUser)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
