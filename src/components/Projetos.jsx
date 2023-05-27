export default function Projetos() {

  return (
    <div id="projetos">
      <div className="flex items-center">
        <p className="font-raleway font-semibold text-3xl">
          <strong className="text-primary">&#47;&#47; </strong>
          Meus Projetos
        </p>
      </div>

      <ul className="font-sourcesanspro pt-7 flex flex-wrap gap-10">

        <li className="w-96 bg-neutral-850 rounded shadow border border-neutral-800 hover:scale-105 transition-all max-2xl:w-80">
          <a href="https://vinisimon.dev/" target="_blank" rel="noreferrer">
            <div className="relative">
              <img src="./img/vinisimondev.png" alt="" className="object-cover h-52 rounded" />
            </div>

            <div className="flex flex-wrap justify-between py-6 px-4">
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold text-secondary">
                  Meu Portfólio
                </p>

                <p className=" text-cyan-400">
                  Finalizado
                </p>

              </div>

              <a href="#react" className="py-1 px-4 rounded bg-neutral-800 text-react font-semibold hover:bg-react hover:text-neutral-800">
                React
              </a>

            </div>

          </a>
        </li>

        <li className="w-96 bg-neutral-850 rounded shadow border border-neutral-800 hover:scale-105 transition-all max-2xl:w-80">
          <a href="https://olieart.com.br/" target="_blank" rel="noreferrer">
            <div className="relative">
              <img src="./img/olieart.png" alt="" className="object-cover h-52 rounded" />
            </div>

            <div className="flex flex-wrap justify-between py-6 px-4">
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold text-secondary">
                  Olie Deb Art
                </p>

                <p className=" text-cyan-400">
                  Finalizado
                </p>

              </div>



            </div>

          </a>
        </li>

        <li className="w-96 bg-neutral-850 rounded shadow border border-neutral-800 hover:scale-105 transition-all max-2xl:w-80">
          <a href="#" target="_blank" rel="noreferrer">
            <div className="relative">
              <img src="./img/triphorce.png" alt="" className="object-cover h-52 rounded" />
            </div>

            <div className="flex flex-wrap justify-between py-6 px-4">
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold text-secondary">
                  Triphorce
                </p>

                <p className=" text-cyan-400">
                  Em Andamento
                </p>

              </div>

              <a href="#react" className="py-1 px-4 rounded bg-neutral-800 text-laravel font-semibold hover:bg-laravel hover:text-neutral-800">
                Laravel
              </a>

            </div>

          </a>
        </li>

      </ul>
    </div>
  )
}