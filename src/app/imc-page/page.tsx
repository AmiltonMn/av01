"use client"

import { Menu } from "@/components/menu";
import { useState } from "react";
import Image from "next/image";
import homemCorrendo from "@/assets/runningMan.png"

const Imc: React.FC = () => {

    interface IIMC {
        altura: string,
        peso: string
    }

    const [altura, setAltura] = useState<string>("")
    const [peso, setPeso] = useState<string>("")
    const [respIMC, setIMC] = useState<number | undefined>()

    const erro = "Valor inserido inválido!"

    const imcCalc = ({a, b} : {a: string, b: string}) => {
        const altura = parseFloat(a) / 100
        const peso = parseFloat(b)

        if (!isNaN(altura) && !isNaN(peso)) {
            setIMC(peso / (altura * altura))
        } else {
            setIMC(undefined)
        }
    }

    const style = {
        input: "rounded-lg w-[250px] placeholder:p-3 focus:outline-darkSand"
    }

    return (
        <>
            <Menu op1="Home" op2="IMC" op3="Media"/>

            <div className="flex flex-col justify-center items-center mt-[60px]">

            <div className="flex flex-col justify-center items-center mt-[60px] bg-lightSand rounded-lg p-10 border border-black w-[310px] md:w-[480px] lg:w-[520px] transition-all">
                    <Image className="mb-[40px]" src={homemCorrendo} alt="ReactCode" width={150} height={150}></Image>

                    <div className="flex justify-center items-center mt-[10px] flex-col">
                        <div className="mb-6 flex flex-row">
                            <input className={style.input} type="text" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Digite sua altura" />
                            <p className="ml-1">cm</p>
                        </div>

                        <div className="mb-6 flex flex-row">
                            <input className={style.input} type="text" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="Digite seu peso" name="" id="" />
                            <p className="ml-1">Kg</p>
                        </div>
                        <button className="mb-6 bg-sand w-[200px] rounded-lg border border-black hover:bg-darkSand " onClick={() => imcCalc({a: altura, b: peso})}>Clica</button>
                        <p className="flex bg-sand w-[180px] justify-center items-center rounded-2xl border border-darkSand">Resultado: {!isNaN(respIMC ?? NaN) ? respIMC?.toFixed(2) : erro}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Imc;