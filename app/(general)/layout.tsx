import { Nabvar } from "@/Components/navbar/navbar";
import { ReactNode } from "react";

export default function GeneralLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nabvar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">hola Mundo</span>
        {children}
      </main>
    </>
  );
}
