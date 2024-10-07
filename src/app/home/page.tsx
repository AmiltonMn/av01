import { Metadata } from "next";
import Image from "next/image";

import React from "@/assets/React.png"
import Tailwind from "@/assets/tailwind.png"
import NextImage from "@/assets/Next.png"
import JqueryImage from "@/assets/Jquery.svg"
import { Menu } from "@/components/menu";


export const metadata: Metadata = {
    title: "Av 01",
    description: "Av PA",
  };

export default function Home() {

    const style = {

        card: "flex justify-center items-center mb-10 mt-[230px]",
        cardBody: "flex justify-around flex-col items-center text-center border",
        desc: "w-[280px] p-4",
        readMore: "flex justify-center items-center mt-10 w-[200px] h-[40px] bg-gradient-to-r from-pink-500 via-rose-500 to-orange-600 text-white mb-4",
        contentInfo: "flex justify-center items-center flex-col mb-10 md:flex-row",
        titulo: "flex justify-center items-center h-[150px] w-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-600 mb-10 text-white text-2xl font-bold"
    }

    return (
        <>
            <Menu op1="Home" op2="IMC" op3="Media"/>
            <div className="flex justify-center flex-wrap gap-24 mb-96">
                <div className={style.card}>
                    <div className={style.cardBody}>
                        <div className={style.titulo}>
                            <h1>React</h1>
                        </div>
                        <h2 className={style.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ratione quod quasi maiores dolor veritatis repellendus autem obcaecati beatae nemo quia, architecto quam nihil non corporis adipisci, rem est nam?</h2>
                        <a href="#React" className={style.readMore}>Read More</a>
                    </div>
                </div>

                <div className={style.card} >
                    <div className={style.cardBody}>
                        <div className={style.titulo}>
                            <h1>Tailwind</h1>
                        </div>
                        <h2 className={style.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ratione quod quasi maiores dolor veritatis repellendus autem obcaecati beatae nemo quia, architecto quam nihil non corporis adipisci, rem est nam?</h2>
                        <a href="#Tailwind" className={style.readMore}>Read More</a>
                    </div>
                </div>

                <div className={style.card} >
                    <div className={style.cardBody}>
                        <div className={style.titulo}>
                            <h1>Next</h1>
                        </div>
                        <h2 className={style.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ratione quod quasi maiores dolor veritatis repellendus autem obcaecati beatae nemo quia, architecto quam nihil non corporis adipisci, rem est nam?</h2>
                        <a href="#NextImage" className={style.readMore}>Read More</a>
                    </div>
                </div>

                <div className={style.card} >
                    <div className={style.cardBody}>
                        <div className={style.titulo}>
                            <h1>JQuery</h1>
                        </div>
                        <h2 className={style.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ratione quod quasi maiores dolor veritatis repellendus autem obcaecati beatae nemo quia, architecto quam nihil non corporis adipisci, rem est nam?</h2>
                        <a href="#JQuery" className={style.readMore}>Read More</a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center flex-col gap-24">

                <div className={style.contentInfo} id="React">
                    <Image src={React} alt="ReactCode" width={290} height={300}></Image>
                    <div>
                        <p className="p-5 text-2xl font-bold">React</p>
                        <p className="w-[290px] md:w-[900px] mt-4 p-5">O React é uma poderosa biblioteca para construção de interfaces visuais em JavaScript. Ou seja, é uma ferramenta ideal para o desenvolvimento front-end. No React, você pode adotar estruturas do HTML e do JavaScript em um só código, a fim de manipular os aspectos da apresentação de um site.</p>
                    </div>
                </div>

                <div className={style.contentInfo} id="Tailwind">
                    <Image src={Tailwind} alt="ReactCode" width={250} height={250}></Image>
                    <div>
                        <p className="p-5 text-2xl font-bold">Tailwind</p>
                        <p className="w-[290px] md:w-[900px] mt-4 p-5">Assim como o Boostrap, Tailwind é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta. Isso permite que você otimize o tempo de criação de uma UI sem precisar fazer tudo manualmente</p>
                    </div>
                </div>

                <div className={style.contentInfo} id="NextImage">
                    <Image src={NextImage} alt="ReactCode" width={250} height={250}></Image>
                    <div>
                        <p className="p-5 text-2xl font-bold">Next</p>
                        <p className="w-[290px] md:w-[900px] mt-4 p-5">O Next. js por sua vez, busca reunir diversas funcionalidades a fim de manter o foco total em sua produtividade e eficiência. Totalmente pré-configurado, fornece toda estrutura para a criação de projetos com maior facilidade, trazendo para o desenvolvedor maior agilidade na criação de suas aplicações.</p>
                    </div>
                </div>

                <div className={style.contentInfo} id="JQuery">
                    <Image src={JqueryImage} alt="ReactCode" width={250} height={250}></Image>
                    <div>
                        <p className="p-5 text-2xl font-bold">JQuery</p>
                        <p className="w-[290px] md:w-[900px] mt-4 p-5">jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário (client-side)..</p>
                    </div>
                </div>

            </div>
        </>
    )
}
