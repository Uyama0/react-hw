import { FC } from "react";

import { ISearchFilms } from "shared/types";
import { ArrowIcon } from "shared/assets/icons/ArrowIcon";
import { Button } from "shared/ui/button";
import { usePagination } from "../lib/usePagination";

import styles from "./styles.module.css";

export const Pagination: FC<{ data: ISearchFilms }> = ({ data }) => {
  const { total_pages } = data;

  const { page, nextPage, prevPage } = usePagination(total_pages);

  return (
    <div className={styles.pagination}>
      {total_pages > 1 && (
        <>
          <Button onClick={prevPage} disabled={total_pages === 1}>
            <ArrowIcon rotated={true} darkened={1 === page} />
          </Button>
          <span>{page}</span>
          <Button onClick={nextPage} disabled={total_pages === page}>
            <ArrowIcon darkened={total_pages === page} />
          </Button>
        </>
      )}
    </div>
  );
};
