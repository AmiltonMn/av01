import { ROUTES } from "@/constants/route";
import Link from "next/link";

export const Menu = ({op1, op2, op3} : {
    op1: string;
    op2: string;
    op3: string;
}) => {

    const style = 
    {
        bttn:"px-2 py-1 min-w-3.5 text-branco cursor-pointer",
        nav: "bg-black gap-3 text-medium flex flex-row justify-around align-center p-3 text-white font-bold text-2xl"
    }

    return (
    <nav className={style.nav}>
        <Link href={ROUTES.home} className={style.bttn}>{op1}</Link>
        <Link href={ROUTES.imc} className={style.bttn}>{op2}</Link>
        <Link href={ROUTES.media} className={style.bttn}>{op3}</Link>
    </nav>
    )
}