"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "~/hooks/use-session";

export function AuthProtect({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [router, session]);

  return children;
}
