import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import styles from "./mobileProfileNav.module.scss";

interface NavItem {
  path: string;
  label: string;
}

interface Props {
  navItems: NavItem[];
  pathname: string;
}

const MobileProfileNav: React.FC<Props> = ({ navItems, pathname }) => {
  return (
    <nav className={"w-full"}>
      <Select>
        <SelectTrigger className={styles.mobileNav}>
          <SelectValue
            className={styles.selectValue}
            placeholder={
              navItems.find(({ path }) => pathname === path)?.label || "Меню"
            }
          />
        </SelectTrigger>
        <SelectContent className={styles.menu}>
          {navItems.map(({ path, label }) => (
            <SelectItem
              key={path}
              value={label}
              className={`${styles.mobileLink} ${
                pathname === path ? styles.active : ""
              }`}
              onClick={() => (window.location.href = path)}
            >
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </nav>
  );
};

export default MobileProfileNav;
