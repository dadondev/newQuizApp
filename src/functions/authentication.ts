import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../general/utils/firebase";

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
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((e) => {
        if (admin.includes(data.email))
          localStorage.setItem("testAdmin", "true");
        if (e.user.email)
          navigate({
            to: "/",
          });
      })
      .catch((e) => {
        toast.error(e);
      });
  }
  if (type === "register") {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((e) => {
        if (e.user.email) {
          if (admin.includes(data.email))
            localStorage.setItem("testAdmin", "true");
          navigate({
            to: "/",
          });
        }
      })
      .catch((e) => {
        toast.error(e);
      });
  }
  setLoading(false);
}

export { authentication };
