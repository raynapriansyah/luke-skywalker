"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoTriangleDown } from "react-icons/go";
import { SessionHamburger } from "~/components/session-hamburger";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export default function Hamburger() {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side={side} className="bg-[#041836]">
            <SheetHeader className="text-[#FFB400] gap-4">
              <SheetTitle></SheetTitle>
              <Link
                href="#"
                className="md:hidden *:md:inline-flex items-center gap-1"
              >
                Home
              </Link>

              <>
                <Link
                  href="#"
                  className="md:hidden *:md:inline-flex items-center gap-1"
                >
                  Browse
                </Link>
                <Link
                  href="#"
                  className="md:hidden *:md:inline-flex items-center gap-1"
                >
                  My Library
                </Link>
              </>
              <SessionHamburger />
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
