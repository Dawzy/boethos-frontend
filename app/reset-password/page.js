"use client"

import Constants from "@/constants/Constants";
import AuthTitle from "@/components/Auth/AuthTitle";
import Input from "@/components/UIElements/Input";
import { useState } from "react";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");

  const onReset = () => {}

  return (
    <div className="w-11/12">
      <AuthTitle>
        {Constants.resetPassword}
      </AuthTitle>

      <Input
        placeholder={Constants.newPassword}
        setValue={setNewPassword}
      />

      <button className="btn" onClick={onReset}>
        {Constants.reset}
      </button>
    </div>
  )
}
export default ResetPassword;