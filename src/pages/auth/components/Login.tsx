import { FormEvent, useState } from "react";
import FormInput from "../../../general/components/FormInput";
import SubmitBtn from "../../../general/components/SubmitBtn";
import { IAuthPage } from "../../../types/types";
import { authentication } from "../../../functions/authentication";
import { useNavigate } from "@tanstack/react-router";

const Login = ({ toast, setAuthType }: IAuthPage) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get("email");
    const password = data.get("password");
    const authData = {
      email: String(email),
      password: String(password),
    };

    if (email === "" || password === "") {
      toast.warning("Iltimos formani to'liq to'ldiring!");
    } else if ((password + "").length < 8) {
      toast.warning("Parolning uzunligi kamida 8 teng bo'lishi kerak!");
    } else {
      authentication({
        data: authData,
        navigate,
        setLoading,
        toast,
        type: "login",
      });
    }
    setLoading(false);
  };
  return (
    <form
      className="flex flex-col gap-3 max-w-[300px] w-full"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <article className="grid grid-cols-[1fr_auto] gap-2 items-center">
        <FormInput
          name="email"
          place="Pochtangiz..."
          type="email"
          className=" bg-white"
        />
        <img
          src="/at.svg"
          alt="at"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
      </article>

      <article className="grid grid-cols-[1fr_20px] gap-2 items-center">
        <FormInput
          name="password"
          place="********"
          type={!show ? "password" : "text"}
        />
        <img
          src="/show.svg"
          alt="show"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
      </article>

      <SubmitBtn loading={loading} />
      <article>
        <span>Sizning hisobingiz yo'qmi?</span>
        <span
          onClick={() => setAuthType("register")}
          className="underline ml-2"
        >
          Register
        </span>
      </article>
    </form>
  );
};

export default Login;
