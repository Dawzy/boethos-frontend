"use client"

import Constants from "@/constants/Constants";
import AuthTitle from "@/components/Auth/AuthTitle";
import Input from "@/components/UIElements/Input";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogIn = () => {
    console.log({
      email: email,
      password: password
    })
  }

  return (
    <div className="w-11/12">
      <AuthTitle>
        {Constants.logIn}
      </AuthTitle>

      <Input
        placeholder={Constants.email}
        setValue={setEmail}
      />
      
      <Input
        placeholder={Constants.password}
        type="password"
        setValue={setPassword}
      />

      <button className="btn" onClick={onLogIn}>
        {Constants.logIn}
      </button>
    </div>
  )
}
export default LogIn;