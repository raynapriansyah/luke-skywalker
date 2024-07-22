import { AuthProtect } from "~/components/auth-protect";
import { getChannelName } from "../queries";
import { Header } from "../header";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const channelName = await getChannelName();

  return (
    <AuthProtect>
      <div className="bg-[url('/images/background.jpg')] h-screen absolute w-full bg-cover">
        <div className="container">
          <Header />
          <main className="mt-8">{children}</main>
        </div>
      </div>
    </AuthProtect>
  );
}
