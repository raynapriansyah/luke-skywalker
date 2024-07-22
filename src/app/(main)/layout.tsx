import { Header } from "../header";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
    </div>
  );
}
