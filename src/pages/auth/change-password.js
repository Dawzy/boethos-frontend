import Constants from "@/constants/Constants";
import AuthTitle from "@/components/Auth/AuthTitle";
import Input from "@/components/UIElements/Input";
import { useState } from "react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onChange = () => {}

  return (
    <div className="w-11/12">
      <AuthTitle>
        {Constants.changePassword}
      </AuthTitle>

      <Input
        placeholder={Constants.oldPassword}
        setValue={setOldPassword}
      />

      <Input
        placeholder={Constants.newPassword}
        setValue={setNewPassword}
      />

      <button className="btn" onClick={onChange}>
        {Constants.change}
      </button>
    </div>
  )
}
export default ChangePassword;