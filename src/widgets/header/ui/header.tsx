import { useState } from "react";

import { useAppSelector, useAppDispatch } from "shared/lib/store";
import { setLogged } from "features/authForm/model/slice";
import { AuthForm } from "features/authForm";
import { Button } from "shared/ui/button";
import { UserIcon } from "shared/assets/icons/userIcon";

import styles from "./header.module.css";

export const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setLogged(false));
    localStorage.removeItem("token");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Фильмопоиск</h1>
      {isLogged ? (
        <div className={styles.header_login_container}>
          <UserIcon />
          <Button variant="secondary" onClick={handleLogout}>
            Выйти
          </Button>
        </div>
      ) : (
        <Button variant="primary" onClick={() => setModalVisible(true)}>
          Войти
        </Button>
      )}
      {isModalVisible && <AuthForm onClose={() => setModalVisible(false)} />}
    </header>
  );
};
