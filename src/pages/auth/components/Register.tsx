import { FormEvent, useState } from "react";
import FormCol from "./FormCol";
import SubmitBtn from "../../../general/components/SubmitBtn";
import { IAuthPage } from "../../../types/types";
import { authentication } from "../../../functions/authentication";
import { useNavigate } from "@tanstack/react-router";

const Register = ({ toast, setAuthType }: IAuthPage) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const password = String(data.get("password"));
    const confirmPassword = String(data.get("confirmPassword"));
    const email = String(data.get("email"));
    const identical = password !== confirmPassword;
    const need = password === "" || confirmPassword === "" || email === "";
    const length = password.length >= 8 || confirmPassword.length >= 8;

    const registerData = {
      email: String(email),
      password: String(password),
    };

    if (need) toast.warning("Iltimos formani to'liq to'ldiring!");
    if (identical)
      toast.warning(
        "Iltimos birinchi parolingiz ikkichi parol bilan bir xil bo'lishi kerak!"
      );
    if (!need && !identical && !length)
      toast.warning("Parolning uzunligi kamida 8 bo'lishi kerak!");
    if (!(need && identical)) {
      toast.success("Iltimos kutib turing");
      setLoading(true);
      authentication({
        data: registerData,
        navigate,
        setLoading,
        toast,
        type: "register",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="grid gap-3 max-w-[300px] w-full">
      <FormCol name="email" type="email" url="at.svg" place="Pochtangiz..." />
      <FormCol
        name="password"
        type="password"
        url="show.svg"
        place="****"
        show={type}
        img={{
          onClick: () => setType(!type),
        }}
        typeIf="text"
      />
      <FormCol
        name="confirmPassword"
        type="password"
        url="show.svg"
        place="****"
        img={{
          onClick: () => setType(!type),
        }}
        show={type}
        typeIf="text"
      />
      <SubmitBtn loading={loading} text="Register" />
      <article>
        <span>Sizning hisobingiz bormi?</span>
        <span onClick={() => setAuthType("login")} className="underline ml-2">
          Register
        </span>
      </article>
    </form>
  );
};

export default Register;
