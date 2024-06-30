import { FC, useState } from "react";

import { DropdownOpenIcon } from "shared/assets/icons/dropdownOpenIcon";
import { DropdownCloseIcon } from "shared/assets/icons/dropdownCloseIcon";

import styles from "./styles.module.css";

interface IDropdown {
  readonly content: Record<string, string>;
  readonly label: string;
  readonly option: string;
  readonly onClick: (id: string) => void;
  readonly onPick: (query: string, value: string, key: string) => void;
  readonly activeDropdown: string | null;
  readonly query: string;
}

export const Dropdown: FC<IDropdown> = ({
  content,
  label,
  option,
  onClick,
  onPick,
  query,
  activeDropdown,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const isActive = activeDropdown === label;

  const handlePick = (query: string, value: string, key: string) => {
    setSelectedOption(value);
    onPick(query, value, key);
  };

  return (
    <div className={styles.dropdown}>
      <label>{label}</label>
      <button onClick={() => onClick(label)} className={styles.dropdown_select}>
        <span style={{ color: selectedOption ? "#1b1f23" : "#ababab" }}>
          {selectedOption || option}
        </span>
        {isActive ? <DropdownCloseIcon /> : <DropdownOpenIcon />}
      </button>
      <div className={styles.dropdown_options_wrapper}>
        {isActive && (
          <ul className={styles.dropdown_options}>
            {Object.entries(content).map(([key, value]) => (
              <li
                key={key}
                value={key}
                className={styles.dropdown_option}
                onClick={() => handlePick(query, value, key)}
              >
                {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
