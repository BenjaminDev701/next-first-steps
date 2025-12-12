"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

//*Definimos la forma en que vamos a recibir los datos : props
interface Props {
  path: string;
  text: string;
}

export default function ActiveLink({ path, text }: Props) {
  //*pathname es la variable especial que me dice la ruta actual en la que me encunetro usando el hook usePathname()
  const pathName = usePathname();
  console.log(pathName);
  //* link: toma los estilos de el link y revisa que el pathname sea el mismo que el path y aplica el estilo de link-active
  return (
    <Link
      className={`${style.link} ${pathName === path && style["link-active"]}`}
      href={path}
    >
      {text}
    </Link>
  );
}
