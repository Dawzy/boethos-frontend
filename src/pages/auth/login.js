import Constants from "@/constants/Constants";
import AuthTitle from "@/components/Auth/AuthTitle";
import Input from "@/components/UIElements/Input";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogIn = async () => {
    try {
      const response = await axios.post("/api/user", { email, password });
      // const { token } = response;
      toast.success(response.statusText);
    } catch(error) {
      const errorText = error.response?.statusText || "Error";
      toast.error(errorText);
    }
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