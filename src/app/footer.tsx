import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Footer() {
  const [channelName, setChannelName] = useState("ChannelName");

  useEffect(() => {
    const fetchChannelName = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        const data = await response.json();
        setChannelName(data.name);
      } catch (error) {}
    };

    fetchChannelName();
  }, []);

  return (
    <div className="">
      <div className="md:hidden bg-[#FFB400] rounded-t-xl p-10">
        <h1 className="flex justify-center font-bold text-2xl">
          {channelName}
        </h1>
        <div className="py-5">
          <h1 className="font-bold">Follow Us</h1>
          <div className="flex flex-row items-center gap-6 p-5">
            <Link href="#">
              <FaFacebook size={35} color="#BB6002" />
            </Link>
            <Link href="#">
              <FaInstagram size={35} color="#BB6002" />
            </Link>
            <Link href="#">
              <FaTiktok size={35} color="#BB6002" />
            </Link>
            <Link href="#">
              {" "}
              <FaTwitter size={35} color="#BB6002" />
            </Link>
            <Link href="#">
              <FaYoutube size={35} color="#BB6002" />
            </Link>
          </div>
        </div>
        <div className="py-5">
          <h1 className="font-bold">Contact us</h1>
          <div className="flex flex-col p-5 gap-2">
            <p className="flex items-center gap-2">
              <IoIosMail size={25} color="white" />{" "}
              <span className="text-[#BB6002]">Email to user@mail.com </span>
            </p>
            <p
              className="flex items-center gap-2
            "
            >
              <IoIosMail size={25} color="white" />{" "}
              <span className="text-[#BB6002]">Call 012345678</span>
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold">Address</h1>
          <div className="flex flex-col p-5">
            <p className="flex items-center gap-2">
              <FaLocationDot size={20} color="white" />
              <span className="text-[#BB6002]">Address</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#041836] md:px-10">
        <div className="bg-[#0249A6] text-white flex justify-center items-center p-5">
          <h1 className="hidden md:block">Copyright @DesktopIP</h1>
          <h1 className="md:hidden">Powered by Mocaas.tv</h1>
        </div>
      </div>
    </div>
  );
}
