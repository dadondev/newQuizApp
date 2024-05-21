import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, baseUrl } from "../general/utils/firebase";

const admin = [
  "dadondev@gmail.com",
  "dadondev03@gmail.com",
  "hello@gmail.com",
  "dad@k.com",
];

async function authentication({
  data,
  setLoading,
  type,
  navigate,
  toast,
}: {
  data: {
    email: string;
    password: string;
  };
  setLoading: (a: boolean) => void;
  type: "login" | "register";
  navigate: any;
  toast: any;
}) {
  setLoading(false);
  if (type === "login") {
    loginUserMailAndPassword({
      email: data.email,
      password: data.password,
    }).then((e) => {
      if (admin.includes(e.data.email)) {
        localStorage.setItem("testAdmin", "true");
      }
      localStorage.setItem("userToken", e.token);
      toast.success("Kirish muvaffaqiyatli!");
      navigate({
        to: "/",
      });
    });
  }
  if (type === "register") {
    createUserMailAndPassword({
      email: data.email,
      password: data.password,
      fullname: data.email.slice(0, data.email.indexOf("@")),
    }).then((e) => {
      localStorage.setItem("userToken", e.token);
      if (admin.includes(e.data.email)) {
        localStorage.setItem("testAdmin", "true");
      }
      toast.success("Ro'yhatdan o'tish muvaffaqiyatli!");
      navigate({
        to: "/",
      });
    });
  }
  setLoading(false);
}

const createUserMailAndPassword = async (data: object) => {
  const res = await fetch(baseUrl + "register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await res.json();
  return resData;
};
const loginUserMailAndPassword = async (data: object) => {
  const resp = await fetch(baseUrl + "auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await resp.json();
  return resData;
};
export { authentication };
