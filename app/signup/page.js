"use client"

import Constants from "@/constants/Constants";
import AuthTitle from "@/components/Auth/AuthTitle";
import Input from "@/components/UIElements/Input";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = async () => {
    try {
      const response = await axios.post("/api/register", {
        firstName,
        lastName,
        email,
        password
      })

    } catch(error) {
      console.log(error)
    }
    
    
  }

  return (
    <div className="w-11/12">
      <AuthTitle>
        {Constants.createAccount}
      </AuthTitle>

      <Input
        placeholder={Constants.firstName}
        setValue={setFirstName}
      />
      
      <Input
        placeholder={Constants.lastName}
        setValue={setLastName}
      />
      
      <Input
        placeholder={Constants.email}
        setValue={setEmail}
      />
      
      <Input
        placeholder={Constants.password}
        type="password"
        setValue={setPassword}
      />

      <button className="btn" onClick={onSignUp}>
        {Constants.signUp}
      </button>
    </div>
  )
}
export default SignUp;