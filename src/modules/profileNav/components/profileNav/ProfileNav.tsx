import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileProfileNav from "../profileMobileNav/MobileProfileNav";

import styles from "./profileNav.module.scss";

export const metadata = {
  title: "Транзакции, Матчи, Подписки, Коко групп",
  description: "Навигация для профиля пользователя.",
};

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
      <MobileProfileNav navItems={navItems} pathname={pathname} />
    </div>
  );
};

export default ProfileNav;
