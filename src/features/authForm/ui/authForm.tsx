import { FC, useReducer, useEffect } from "react";
import { createPortal } from "react-dom";

import { initialState, authReducer } from "../model";
import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";
import { CloseIcon } from "shared/assets/icons/closeIcon";

import styles from "./styles.module.css";

import { useAuthForm } from "../lib/useAuthForm";

interface IAuthForm {
  onClose: () => void;
}

export const AuthForm: FC<IAuthForm> = ({ onClose }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { handleSubmit, error } = useAuthForm();

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    await handleSubmit(event, state);
  };

  useEffect(() => {
    if (!error) {
      onClose();
    }
  }, [error]);

  const rootElement = document.getElementById("root");
  const portalContainer = rootElement || document.body;

  return createPortal(
    <div className={styles.form_background}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.form_title}>
          <h1>Авторизация</h1>
          <Button variant="close" onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
        <div className={styles.form_input_group}>
          <Input
            label="Логин"
            placeholder="Введите логин"
            value={state.username}
            onChange={(e) =>
              dispatch({ type: "setUsername", payload: e.target.value })
            }
            name="username"
            required
          />
          <Input
            label="Пароль"
            placeholder="Введите пароль"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "setPassword", payload: e.target.value })
            }
            name="password"
            required
          />
        </div>
        <div className={styles.form_button_group}>
          <Button variant="primary" type="submit">
            Войти
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Отменить
          </Button>
        </div>
      </form>
    </div>,
    portalContainer
  );
};
