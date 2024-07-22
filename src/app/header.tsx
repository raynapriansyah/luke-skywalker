import { SessionButton } from "~/components/session-button";
import { Nav } from "./nav";
import { getChannelName } from "./queries";
import { Menu } from "lucide-react";

export async function Header() {
  const channelName = await getChannelName();

  return (
    <div className="fixed top-0 left-0 w-full z-50 md:px-10">
      <header className="flex rounded-xl px-8 py-4 mt-8 justify-between text-[#FFB400] bg-[#041836]">
        <span className="md:hidden flex items-center">
          <Menu />
        </span>
        <div className="flex gap-x-6 items-center">
          <h1>{channelName}</h1>
          <Nav />
        </div>
        <div>
          <button className="md:hidden bg-[#FFB400] text-black text-sm p-2 rounded-2xl font-bold">
            Subscribe
          </button>
          <SessionButton />
        </div>
      </header>
    </div>
  );
}
