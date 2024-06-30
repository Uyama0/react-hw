import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { useAppDispatch } from "shared/lib/store";
import { Dropdown } from "shared/ui/dropdown";
import { GENRES_MAP } from "shared/consts";
import { YEARS } from "shared/consts";
import { setQuerySearchParams } from "shared/lib/store/searchParamsSlice";

import styles from "./styles.module.css";

export const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDropdownClick = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const handleDropdownPick = (query: string, value: string, key: string) => {
    setActiveDropdown(null);

    const newParams = new URLSearchParams(searchParams.toString());

    if (value && key !== "0") {
      newParams.set(query, key);
      newParams.delete("page");
    } else {
      newParams.delete(query);
    }

    setSearchParams(newParams);
    navigate({ pathname: location.pathname, search: newParams.toString() });
    dispatch(setQuerySearchParams(decodeURIComponent(newParams.toString())));
  };

  return (
    <section>
      <div className={styles.sidebar_container}>
        <h1>Фильтр</h1>
        <div className={styles.sidebar_filters}>
          <Dropdown
            content={GENRES_MAP}
            label="Жанр"
            query="genre"
            option="Выберите жанр"
            onClick={handleDropdownClick}
            onPick={handleDropdownPick}
            activeDropdown={activeDropdown}
          />
          <Dropdown
            content={YEARS}
            label="Год выпуска"
            query="release_year"
            option="Выберите год"
            onClick={handleDropdownClick}
            onPick={handleDropdownPick}
            activeDropdown={activeDropdown}
          />
        </div>
      </div>
    </section>
  );
};
