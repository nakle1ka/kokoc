import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import styles from "./profileNav.module.scss";

const navItems = [
  { path: "/profile/user", label: "Профиль" },
  { path: "/profile/user/purchase_history", label: "История транзакций" },
  { path: "/profile/user/matches_history", label: "История матчей" },
  { path: "/profile/user/subscriptions", label: "Мои подписки" },
];

const ProfileNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className={styles.desktopNav}>
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            className={`${styles.link} ${
              pathname === path ? styles.active : ""
            }`}
            href={path}
          >
            {label}
          </Link>
        ))}
      </nav>
      <nav className={`${styles.mobileNav} w-full`}>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Меню" />
          </SelectTrigger>
          <SelectContent>
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
    </div>
  );
};

export default ProfileNav;
