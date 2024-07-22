"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSession } from "~/hooks/use-session";

export function SessionButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { session, signOut } = useSession();

  function handleClick() {
    if (session && pathname === "/") {
      signOut();
      router.refresh();
    } else if (!session && pathname === "/") {
      router.push("/signin");
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-[#FFB400] text-black text-sm p-2 rounded-lg font-bold hidden md:block"
    >
      {session ? "Sign Out" : "Sign In"}
    </button>
  );
}
