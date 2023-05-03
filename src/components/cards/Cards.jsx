import { useState } from "react"
import CardFrontend from "./CardFrontend";
import CardBackend from "./CardBackend";
import CardDesign from "./CardDesign";

export default function Cards() {

  const [cardStates, setCardStates] = useState([false, false, false]);

  function handleClick(index) {
    setCardStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }


  return (
    <div id="skills" className="pl-10 w-full flex flex-col gap-5 max-sm:pl-1">
      <div className="flex justify-between py-4 items-center">
        <div className="flex flex-col gap-2">
          <p className="font-sourcesanspro font-bold text-4xl">
            Stack
          </p>
          <a href="#projetos" className="bg-neutral-800 text-primary px-4 py-2 rounded-md font-sourcesanspro uppercase hover:bg-tertiary hover:text-white transition-colors duration-150 ease-in-out">
            Ver Projetos
          </a>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 justify-end">
            <ion-icon src="./img/logo-vscode.svg" class="text-xl"></ion-icon>
            <p className="font-sourcesanspro text-neutral-700">
              Visual Studio Code
            </p>
          </div>
          <p className="font-sourcesanspro text-neutral-700">
            Todos meus projetos são desenvolvidos no VS Code
          </p>
        </div>

      </div>

      <div className="bg-neutral-850 p-9 rounded-xl hover:cursor-pointer transition-all duration-500 ease-in-out max-sm:p-6" onClick={() => handleClick(0)}> {/* Primeiro Card */}
        <div className="flex items-center justify-between">

          <div>
            <p className="font-poppins font-bold text-primary text-3xl">
              Front-End
            </p>
            <p className="font-sourcesanspro">
              Criando interfaces clean e user friendly. Conheça as ferramentas que utilizo.
            </p>
          </div>

          <div className={`text-2xl`}>
            <ion-icon name="chevron-down" class={cardStates[0] ? 'md hydrated active' : 'md hydrated'}></ion-icon>

          </div>

        </div>

        {/*Renderiza ou não a lista de linguagens */}
        {cardStates[0] && <CardFrontend />}

      </div>

      <div className="bg-neutral-850 p-9 rounded-xl hover:cursor-pointer transition-all duration-500 ease-in-out max-sm:p-6" onClick={() => handleClick(1)}> {/* Segundo Card */}
        <div className="flex items-center justify-between">

          <div>
            <p className="font-poppins font-bold text-primary text-3xl">
              Back-End
            </p>
            <p className="font-sourcesanspro">
              Desenvolvendo códigos com eficiência. Conheça as ferramentas que utilizo para o backend dos meus projetos.
            </p>
          </div>

          <div className={`text-2xl`}>
            <ion-icon name="chevron-down" class={cardStates[1] ? 'md hydrated active' : 'md hydrated'}></ion-icon>

          </div>

        </div>

        {/*Renderiza ou não a lista de linguagens */}
        {cardStates[1] && <CardBackend />}

      </div>

      <div className="bg-neutral-850 p-9 rounded-xl hover:cursor-pointer transition-all duration-500 ease-in-out max-sm:p-6" onClick={() => handleClick(2)}> {/* Terceiro Card */}
        <div className="flex items-center justify-between">

          <div>
            <p className="font-poppins font-bold text-primary text-3xl">
              Design
            </p>
            <p className="font-sourcesanspro">
              Criando designs agradáveis e usuais. Conheça as ferramentas onde faço meus designs.
            </p>
          </div>

          <div className={`text-2xl`}>
            <ion-icon name="chevron-down" class={cardStates[2] ? 'md hydrated active' : 'md hydrated'}></ion-icon>

          </div>

        </div>

        {/*Renderiza ou não a lista de linguagens */}
        {cardStates[2] && <CardDesign />}

      </div>

    </div>

  )

}