import { useEffect } from "react";

import { useAppDispatch } from "shared/lib/store";
import { setLogged, setToken } from "features/authForm/model/slice";
import { AppRouter } from "../routers";
import { Header } from "widgets/header";

export const Layout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      dispatch(setToken(storedToken));
      dispatch(setLogged(true));
    }
  }, []);

  return (
    <main style={{ height: "100%" }}>
      <Header />
      <AppRouter />
    </main>
  );
};
