import { ReactNode, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { auth } from "../../general/utils/firebase";

const Protect = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userToken")) navigate({ to: "/auth" });
    setLoading(false);
  }, []);
  if (loading)
    return (
      <main className="h-full flex justify-center flex-col items-center">
        <span>Please wait for</span>
        <img src="/loading.svg" alt="loading" className="h-10 w-10" />
      </main>
    );
  if (!loading) return <>{children}</>;
};

export default Protect;
