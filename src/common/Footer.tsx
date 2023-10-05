import Image from "next/image";
import Link from "next/link";
import QRCode from "../../public/Misc/QR Code.png";
import KPay from "../../public/Misc/KPay.png";
import WavePay from "../../public/Misc/WavePay.png";
import AYAPay from "../../public/Misc/AYAPay.png";
import FbIcon from "../../public/Misc/Social Media Icons/fbicon.webp";
import InstagIcon from "../../public/Misc/Social Media Icons/InstagramIcon.png";
import VibIcon from "../../public/Misc/Social Media Icons/vibericon.png";
import TelegramIcon from "../../public/Misc/Social Media Icons/telegramIcon.png";
import XIcon from "../../public/Misc/Social Media Icons/XIcon.webp";
import { BsFillShieldLockFill } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { CiPhone } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="footer grid-rows-3 px-20 py-10 ml-0 xl:ml-32">
      <div className="grid-cols-2 grid-rows-2 md:grid-cols-4 gap-8">
        <nav className="flex flex-col">
          <header className="text-xl font-bold text-black mb-3">
            Customer Service
          </header>
          <Link
            className="flex align-text items-center mb-2 text-lg"
            href={"/"}
          >
            <span className="mr-1">
              <BsFillShieldLockFill size="1.5rem" />
            </span>
            Terms & Privacy Policy
          </Link>
          <Link
            className="flex align-middle items-center mb-2 text-lg"
            href={"/"}
          >
            <span className="mr-1">
              <BsArrowCounterclockwise size="1.5rem" />
            </span>
            Return Policy
          </Link>
        </nav>
        <nav>
          <header className="text-xl font-bold text-black mb-3">
            Languages
          </header>
          <div className="mb-2">
            <input type="radio" name="lang" id="mm-uni" value="mm-unicode" />
            <label htmlFor="mm-uni" className="text-lg ml-1">
              Myanmar {"(Unicode)"}
            </label>
          </div>
          <div className="mb-2">
            <input type="radio" name="lang" id="mm-zw" value="mm-zawgyi" />
            <label htmlFor="mm-zw" className="text-lg ml-1">
              Myanmar {"(Zawgyi)"}
            </label>
          </div>
          <div className="mb-2">
            <input type="radio" name="lang" id="en" value="english" checked />
            <label htmlFor="en" className="text-lg ml-1">
              English
            </label>
          </div>
        </nav>
        <nav className="flex flex-col">
          <header className="text-xl font-bold text-black mb-3">
            Contact Us
          </header>
          <Link
            className="flex align-text items-center mb-2 mr-1 text-lg"
            href={"/"}
          >
            <span className="mr-1">
              <FiMapPin size="1.5rem" />
            </span>
            Lay Daunt Kan Main Road, Cashmere Shop, Near Zawana, Thingangyun
            Tsp, Yangon
          </Link>
          <Link
            className="flex align-text items-center mb-2  text-lg"
            href={"/"}
          >
            <span className="mr-1">
              <CiPhone size="1.5rem" />
            </span>
            09458489458
          </Link>
        </nav>
        <nav>
          <header className="text-xl font-bold text-black mb-3">
            Download Our App
          </header>
          <Image
            className="w-[10rem] h-[10rem]"
            src={QRCode}
            alt="QR Code for the website's app"
          />
        </nav>
      </div>
      <div className="grid-cols-2 gap-[10rem]">
        <nav>
          <header className="text-xl font-bold text-black mb-3">Payment</header>
          <div className="flex flex-col md:flex-row">
            <Image
              className="w-[3rem] h-[3rem] rounded-sm m-1"
              src={KPay}
              alt="KPay Logo"
            />
            <Image
              className="w-[3rem] h-[3rem] rounded-sm m-1"
              src={WavePay}
              alt="WavePay Logo"
            />
            <Image
              className="w-[3rem] h-[3rem] rounded-sm m-1"
              src={AYAPay}
              alt="AYAPay Logo"
            />
          </div>
        </nav>
        <nav>
          <header className="text-xl font-bold text-black mb-3">
            Follow Us On
          </header>
          <div className="flex flex-col md:flex-row">
            <Image
              className="w-[3rem] h-[3rem] rounded-[50%] m-1"
              src={FbIcon}
              alt="Facebook Icon"
            />
            <Image
              className="w-[3rem] h-[3rem] rounded-[50%] m-1"
              src={InstagIcon}
              alt="Instagram Icon"
            />
            <Image
              className="w-[3rem] h-[3rem]  rounded-[50%] m-1"
              src={VibIcon}
              alt="Viber Icon"
            />
            <Image
              className="w-[3rem] h-[3rem] rounded-[50%] m-1"
              src={TelegramIcon}
              alt="Telegram Icon"
            />
            <Image
              className="w-[3rem] h-[3rem]  rounded-[50%] m-1"
              src={XIcon}
              alt="X / Twitter Icon"
            />
          </div>
        </nav>
      </div>
      <aside className="flex flex-cols justify-center items-center w-full">
        <p>© Copyright C By D Co., Ltd 2023 - All right reserved.</p>
      </aside>
    </footer>
  );
}
