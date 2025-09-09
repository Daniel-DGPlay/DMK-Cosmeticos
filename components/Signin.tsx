import { SignInButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import React from "react";

export const Signin = () => {
  return (
    <SignInButton mode="modal">
      <button
        className="flex items-center gap-1 font-bold border-1 rounded-3xl py-1 px-3 ps-2 border-blue-900 hover:text-blue-950 hover:border-blue-950 hover:font-bold mb-1 bg-none border-no ne cursor-pointer transition-all duration-300"
        title="Login"
        type="button"
      >
        <User size={24} />
        <span className="text-sm">Login</span>
      </button>
    </SignInButton>
  );
};
export default Signin;
