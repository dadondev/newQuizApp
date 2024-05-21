import { Toaster, toast } from "sonner";
import { Link, useNavigate } from "@tanstack/react-router";
import Login from "./components/Login";
import { useState } from "react";
import Register from "./components/Register";

const Auth = () => {
  const [authType, setAuthType] = useState<"login" | "register">("login");
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
