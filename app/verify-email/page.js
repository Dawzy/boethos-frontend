"use client"

import Constants from "@/constants/Constants";
import AuthTitle from "@/components/Auth/AuthTitle";
import Input from "@/components/UIElements/Input";
import { useState } from "react";

const VerifyEmail = () => {
  const [code, setCode] = useState("");

  const onVerify = () => {}
  const onResend = () => {}
  
  return (
    <div className="w-11/12">
      <AuthTitle>
        {Constants.verifyEmail}
      </AuthTitle>

      <Input
        placeholder={Constants.code}
        setValue={setCode}
      />

      <button className="btn" onClick={onVerify}>
        {Constants.verify}
      </button>

      <button className="btn" onClick={onResend}>
        {Constants.resend}
      </button>
    </div>
  )
}
export default VerifyEmail;