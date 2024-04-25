import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`fixed w-full h-full bg-black inset-0 ${inter.className}`}>
      hello
    </main>
  );
}
