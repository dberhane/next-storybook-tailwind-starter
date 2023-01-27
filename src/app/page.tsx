import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-5">
      <h2 className="text-2xl text-gray-600 font-bold">Next.js 13</h2>
    </div>
  );
}
