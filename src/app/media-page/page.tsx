"use client"

import { Menu } from "@/components/menu";
import { useState } from "react";
import Image from "next/image";
import livroIco from "@/assets/Livro.png"

const Imc: React.FC = () => {

    interface IMedia {
        n1: string,
        n2: string,
        n3: string,
        n4: string,
        n5: string,
    }

    const [n1, setN1] = useState<string>("")
    const [n2, setN2] = useState<string>("")
    const [n3, setN3] = useState<string>("")
    const [n4, setN4] = useState<string>("")
    const [n5, setN5] = useState<string>("")
    const [media, setMedia] = useState<number>()
    const [aprovado, setAprovado] = useState<string>("")

    const erro = "Valor inserido inválido!"

    const imcCalc = ({a, b, c, d, e} : {a: string, b: string, c: string, d: string, e: string}) => {
        const n1 = parseFloat(a)
        const n2 = parseFloat(b)
        const n3 = parseFloat(c)
        const n4 = parseFloat(d)
        const n5 = parseFloat(e)

        setMedia((n1 + n2 + n3 + n4 +n5) / 5)

        if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4) && !isNaN(n5)) {
            setMedia((n1 + n2 + n3 + n4 +n5) / 5)
        } else {
            setMedia(undefined)
        }

        if (((n1 + n2 + n3 + n4 + n5) / 5) >= 70) {
            setAprovado("Aprovado 👍")
        } else {
            setAprovado("Reprovado 👎")
        }
    }

    const style = {
        input: "rounded-lg w-[250px] placeholder:p-3 focus:outline-darkCyan"
    }

    return (
        <>
            <Menu op1="Home" op2="IMC" op3="Media"/>

            <div className="flex flex-col justify-center items-center mt-[60px]">

                <div className="flex flex-col justify-center items-center mt-[60px] bg-lightCyan rounded-lg p-10 border border-black w-[310px] md:w-[480px] lg:w-[520px] transition-all">
                    <Image className="mb-[40px]" src={livroIco} alt="ReactCode" width={150} height={150}></Image>

                    <div className="flex justify-center items-center mt-[10px] flex-col">
                        <div className="mb-6 flex flex-row">
                            <input className={style.input} type="text" value={n1} onChange={(e) => setN1(e.target.value)} placeholder="Digite o primeiro número" />
                        </div>

                        <div className="mb-6 flex flex-row">
                            <input className={style.input} type="text" value={n2} onChange={(e) => setN2(e.target.value)} placeholder="Digite o segundo número" name="" id="" />
                        </div>

                        <div className="mb-6 flex flex-row">
                            <input className={style.input} type="text" value={n3} onChange={(e) => setN3(e.target.value)} placeholder="Digite o terceiro número" name="" id="" />
                        </div>

                        <div className="mb-6 flex flex-row">
                            <input className={style.input} type="text" value={n4} onChange={(e) => setN4(e.target.value)} placeholder="Digite o quarto número" name="" id="" />
                        </div>

                        <div className="mb-6 flex flex-row">
                            <input className={style.input} type="text" value={n5} onChange={(e) => setN5(e.target.value)} placeholder="Digite o quinto número" name="" id="" />
                        </div>

                        <button className="mb-6 bg-lightCyan w-[200px] rounded-lg border border-black hover:bg-cyan sm:shrink-0" onClick={() => imcCalc({a: n1, b: n2, c: n3, d: n4, e: n5})}>Calcular Média</button>
                        <p className="flex bg-cyan w-[190px] justify-center items-center rounded-lg sm:shrink-0 mb-3">Resultado: {!isNaN(media ?? NaN) ? media?.toFixed(2) : erro}</p>
                        <p className="flex bg-cyan w-[190px] justify-center items-center rounded-lg sm:shrink-0">{aprovado}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Imc;