import React from "react";
import avatar from "../../assets/avatar.svg";
const Login = () => {
  return (
    <div>
      <img
        src={avatar}
        alt="avatar"
        className="w-[42px] h-[42px] rounded-3xl object-cover cursor-pointer border border-white"
      />
    </div>
  );
};

export default Login;
