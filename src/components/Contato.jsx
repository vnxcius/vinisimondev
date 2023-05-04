export default function Contato() {

  return (
    <div id="contato">

      <div className="flex items-center">
        <p className="font-raleway font-semibold text-3xl">
          <strong className="text-primary">&#47;&#47; </strong>
          Contato
        </p>
      </div>

        <p className="font-sourcesanspro text-xl font-bold text-secondary">
          Não fique com vergonha, entre em contato!
        </p>


      <form action="https://formsubmit.co/2eedad7ce33b62d9817e39c65d1a6cd9" method="POST" className="w-full flex flex-col gap-1 py-10 font-sourcesanspro">


        <input type="hidden" name="_template" value="box" />

        <div className="flex gap-1">
          <div className="flex flex-col w-1/2">
            <label htmlFor="name" className="px-2">Nome</label>
            <input type="text" name="name" placeholder="John Doe"
              className="bg-neutral-800 py-1 px-3 text-lg placeholder:text-neutral-600 rounded rounded-ss-xl outline-none focus:border focus:border-neutral-600 " required />

          </div>

          <div className="flex flex-col w-1/2">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email@exemplo.com"
            className="bg-neutral-800 py-1 px-3 text-lg placeholder:text-neutral-600 rounded rounded-se-xl outline-none focus:border focus:border-neutral-600" required />
          </div>

        </div>
        <textarea name="message" cols="40" rows="10" placeholder="Sua mensagem"
          className="w-full bg-neutral-800 py-1 px-3 text-lg resize-none placeholder:text-neutral-600 rounded outline-none focus:border focus:border-neutral-600" required></textarea>
        <button type="submit" className="bg-primary text-neutral-800 w-full px-7 py-2 rounded rounded-es-xl rounded-ee-xl self-start font-semibold hover:bg-tertiary transition-all">Enviar Email</button>
      </form>
    </div>
  )
}