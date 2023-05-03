export default function CardFrontend() {
  return (
    <div className="flex pt-6 gap-10 animate-showCard max-sm:flex-col">

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-xl">
          <ion-icon name="logo-react" class="text-[#61DBFB]"></ion-icon>
          <p className="font-poppins">
            React JS
          </p>
        </div>

        <div className="bg-neutral-700 w-[90px] h-1 m-1 rounded-full">
          <div className="bg-[#61DBFB] animate-reactBar h-1 rounded-full"></div>
        </div>

      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-xl">
          <ion-icon name="logo-javascript" class="text-[#F7DF1E]"></ion-icon>
          <p className="font-poppins">
            JavaScript
          </p>

        </div>
        <div className="bg-neutral-700 w-[90px] h-1 m-1 rounded-full">
          <div className="bg-[#F7DF1E] animate-jsBar h-1 rounded-full"></div>
        </div>

      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-xl">
          <ion-icon src="./img/logo-tailwind.svg"></ion-icon>
          <p className="font-poppins">
            Tailwind CSS
          </p>
        </div>

        <div className="bg-neutral-700 w-[90px] h-1 m-1 rounded-full">
          <div className="bg-[#07B6D5] animate-tailwindBar h-1 rounded-full"></div>
        </div>

      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-xl">
          <ion-icon name="logo-css3" class="text-[#2465F1]"></ion-icon>
          <p className="font-poppins">
            CSS
          </p>
        </div>

        <div className="bg-neutral-700 w-[90px] h-1 m-1 rounded-full">
          <div className="bg-[#2465F1] animate-cssBar h-1 rounded-full"></div>
        </div>

      </div>

    </div>
  )
}