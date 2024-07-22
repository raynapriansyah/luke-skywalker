import type { Metadata } from "next";
import { Gabarito } from "next/font/google";

import "./globals.css";
import { AuthProtect } from "~/components/auth-protect";

const gabarito = Gabarito({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luke Skywalker",
  description: "Front-End Developer Technical Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gabarito.className}>{children}</body>
    </html>
  );
}
