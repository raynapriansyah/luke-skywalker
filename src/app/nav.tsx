"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoTriangleDown } from "react-icons/go";
import { useSession } from "~/hooks/use-session";

export function Nav() {
  const pathname = usePathname();
  const { session } = useSession();

  return (
    <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center items-center">
      <Link href="#" className="hidden md:inline-flex items-center gap-1">
        Home
      </Link>
      {pathname !== "/" && (
        <>
          <Link href="#" className="hidden md:inline-flex items-center gap-1">
            Browse
            <span className="inline-flex items-center">
              <GoTriangleDown />
            </span>
          </Link>
          <Link href="#" className="hidden md:inline-flex items-center gap-1">
            My Library
            <span className="inline-flex items-center">
              <GoTriangleDown />
            </span>
          </Link>
        </>
      )}
    </nav>
  );
}
