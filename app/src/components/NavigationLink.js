import Link from "next/link";

export default function NavigationLink({ label, href, isActive }) {
  return (
    <Link href={href} className={isActive ? "active nav-link" : "nav-link"}>
        {label}
    </Link>
  );
}
