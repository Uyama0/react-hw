import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { useAppDispatch } from "shared/lib/store";
import { setQuerySearchParams } from "shared/lib/store/searchParamsSlice";

export const usePagination = (total_pages: number = 1) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPage = Number(searchParams.get("page"));
    if (!currentPage) {
      setPage(1);
    }
  }, [total_pages]);

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", newPage.toString());

    setSearchParams(newParams);
    navigate({ pathname: location.pathname, search: newParams.toString() });
    setPage(newPage);
    dispatch(setQuerySearchParams(decodeURIComponent(newParams.toString())));
  };

  const nextPage = () => {
    handlePageChange(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  return {
    page,
    setPage: handlePageChange,
    nextPage,
    prevPage,
  };
};
