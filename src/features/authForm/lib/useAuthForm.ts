import { useState } from "react";

import { useAppDispatch } from "shared/lib/store";
import { useLazyLoginQuery } from "shared/api/apiSlice";
import { setLogged } from "../model/slice";

export const useAuthForm = () => {
  const [login] = useLazyLoginQuery();
  const appDispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(true);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    state: any
  ) => {
    event.preventDefault();
    try {
      const response = await login({
        username: state.username,
        password: state.password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        appDispatch(setLogged(true));
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  };
  return { handleSubmit, error };
};
