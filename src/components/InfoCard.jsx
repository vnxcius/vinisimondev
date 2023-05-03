export default function InfoCard() {
  return (
    <div className="flex flex-col gap-4 w-5/12 border border-neutral-800 rounded-xl p-7 max-sm:w-full max-sm:p-4 max-sm:gap-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">

          <p className="font-sourcesanspro font-bold text-3xl">
            Vinícius Simon
          </p>
          <p className="font-sourcesanspro font-thin italic text-xl">
            Fullstack Developer Jr.
          </p>

        </div>

        <img src="./img/logo.png" alt="Logo" className="w-[30px]" />
      </div>

      <img src="./img/handsome.jpg" alt="Vinicius Simon" className="w-[378px] h-[290px] rounded-xl object-cover" />

      <hr className="h-[1px] bg-neutral-800 border-none" />

      <p className="font-sourcesanspro text-center">
        Olá, me chamo Vinícius Simon, apaixonado criar soluções inovadoras e funcionais.
        Estou constantemente aprendendo e aprimorando minhas habilidades para oferecer o
        melhor resultado aos meus clientes.
      </p>

      <a href="mailto:vinisghilton@gmail.com" className="w-10/12 mx-auto flex gap-2 justify-center items-center bg-secondary rounded-full font-oswald font-semibold text-neutral-800 uppercase p-2 hover:bg-tertiary max-sm:">
        <ion-icon name="mail-outline" class="text-2xl"></ion-icon>
        <p>Entre em Contato</p>
      </a>

      <hr className="w-9/12 mx-auto h-[1px] bg-neutral-800 border-none" />

      <div className="flex items-center justify-center gap-5">
        <a href="https://www.instagram.com/vini_html" className="text-3xl hover:text-primary transition-colors duration-150 ease-in-out" target="_blank" rel="noreferrer">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/vinicius-simon-gouveia-hilton/" className="text-3xl hover:text-primary transition-colors duration-150 ease-in-out" target="_blank" rel="noreferrer">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://www.github.com/vnxcius" className="text-3xl hover:text-primary transition-colors duration-150 ease-in-out" target="_blank" rel="noreferrer">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </div>
  )
}