export default function Sobre() {
  return (
    <div id="sobre" className="py-20">
      <div className="flex items-center">
        <p className="font-raleway font-semibold text-3xl">
          <strong className="text-primary">&#47;&#47; </strong>
          Sobre
        </p>
      </div>

      <div className="flex pt-7 divide-neutral-800 max-sm:flex-col lg:divide-x max-sm:divide-y max-sm:gap-5">

        <div className="flex flex-col pr-9 gap-2 w-1/2 max-sm:w-full">
          <p className="font-soucesanspro text-3xl font-bold text-secondary">
            Quem sou?
          </p>

          <p>
            Um jovem de 20 anos que sempre foi apaixonado por tecnologia e suas possibilidades, desde meus 8 anos
            tenho interesse genuíno a área tecnológica e me encontrei na programação em desenvolvimento web.
          </p>

          <p>
            Desde então, aos meus 19 anos, decidi encarar de vez os desafios que é ser um Developer.
          </p>

        </div>

        <div className="flex flex-col gap-2 w-1/2 lg:pl-9 max-sm:w-full max-sm:pt-3">
          <p className="font-soucesanspro text-3xl font-bold text-secondary">
            Buscando evolução
          </p>

          <p>
            Amante de um design minimalista e clean, procuro sempre evoluir meus trabalhos e permanecer em
            constante aprendizado desde a parte do design e interação do usuário com o website ao funcionamento
            interno e suas funcionalidades.
          </p>

        </div>
      </div>
    </div>
  )
}