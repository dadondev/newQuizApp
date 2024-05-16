import { Toaster, toast } from "sonner";
import { Link, useNavigate } from "@tanstack/react-router";
import Login from "./components/Login";
import { useState } from "react";
import Register from "./components/Register";
import { signInWithPopup } from "firebase/auth";
import { GoogleProvider, auth } from "../../general/utils/firebase";

const Auth = () => {
  const navigate = useNavigate();
  const [authType, setAuthType] = useState<"login" | "register">("login");
  const handleClick = () => {
    signInWithPopup(auth, GoogleProvider).then((e) => {
      if (e.user.email)
        toast.success("Siz google provider hisobingizga kirdingiz!");
      if (e.user.email)
        navigate({
          to: "/",
        });
    });
  };
  return (
    <>
      <Toaster position="top-right" richColors />
      <main className="h-full bg-white/30 flex flex-col gap-3 justify-center items-center relative">
        <h1 className="text-4xl font-bold">
          {authType === "login" ? "Kirish" : "Ro'yhatdan o'tish"}
        </h1>
        {authType === "login" ? (
          <Login setAuthType={setAuthType} toast={toast} />
        ) : (
          <Register toast={toast} setAuthType={setAuthType} />
        )}
        <span>yoki</span>
        <button
          onClick={handleClick}
          className="max-w-[170px] w-full py-2 bg-text rounded-lg text-white flex items-center gap-3 justify-center lg:hover:opacity-85"
        >
          Google bilan
          <img src="/google.svg" alt="google-icon" width={20} height={20} />
        </button>
        <article className="absolute bottom-2 text-center">
          <Link to="/" className="underline underline-offset-1">
            Qo'llanma📄
          </Link>
          <span className="text-sm text-slate-800 block">
            v{import.meta.env.VITE_version}
          </span>
        </article>
      </main>
    </>
  );
};

export default Auth;
