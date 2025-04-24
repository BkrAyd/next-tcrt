import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="hidden lg:block lg:w-2/5 h-screen">
        <Image className="w-full h-screen object-cover brightness-50" alt="logo" src={`/login.jpg`} width={1080} height={1920}/>
        <div className="w-3/5 bg-[var(--color-300)]">
            {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
