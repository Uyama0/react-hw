import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

import { setQuerySearchParams } from "shared/lib/store/searchParamsSlice";
import { useAppDispatch } from "shared/lib/store";
import { SearchIcon } from "shared/assets/icons/searchIcon";
import { CloserIcon } from "shared/assets/icons/closerIcon";
import { Input } from "shared/ui/input";
import { useDebounce } from "shared/lib/debounce";

import styles from "./styles.module.css";

export const Search = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const { debouncedFunction } = useDebounce((value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (!!value.length) {
      newParams.set("title", value);
      newParams.delete("page");
    } else {
      newParams.delete("title");
    }

    setSearchParams(newParams);
    navigate({ pathname: location.pathname, search: newParams.toString() });
    dispatch(setQuerySearchParams(decodeURIComponent(newParams.toString())));
  }, 500);

  const handleChange = (value: string) => {
    debouncedFunction(value);
  };

  return (
    <Input
      className={styles.input}
      placeholder="Название фильма"
      onChange={(e) => handleChange(e.target.value)}
      leftIcon={<SearchIcon />}
      rightIcon={<CloserIcon />}
    />
  );
};
