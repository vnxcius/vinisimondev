import React, { useEffect, useState } from "react"


export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`z-40 w-full ${isScrolled ? 'sticky top-0 active bg-neutral-800 shadow-md' : ''} transition-all duration-300 ease-in-out  max-sm:hidden`}>
      <div className="max-w-5xl mx-auto">
        <nav className="flex justify-between items-center p-3">
          <a href="#index">
            <img src={` ${isScrolled ? './img/logo.png' : './img/logo.png'} `} alt="Logo Header"
              className={` ${isScrolled ? 'p-2 w-[30px]' : 'p-2 w-[30px]'} `} />
          </a>

          <ul className="flex gap-10 font-oswald font-bold uppercase text-lg text-white">
            <li>
              <a href="#sobre" className="hover:text-primary transition-colors duration-150 ease-in-out">Sobre</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-primary transition-colors duration-150 ease-in-out">Skills</a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-primary transition-colors duration-150 ease-in-out">Portfólio</a>
            </li>
            <li>
              <a href="#contato" className="hover:text-primary transition-colors duration-150 ease-in-out">Contato</a>
            </li>
          </ul>
        </nav>

      </div>

      <hr className="w-8/12 mx-auto h-[1px] bg-neutral-800 border-none max-2xl:w-10/12" />

    </div>


  )
}

