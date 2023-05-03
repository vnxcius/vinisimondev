export default function CardDesign() {
  return (
    <div className="flex pt-6 gap-10 animate-showCard max-sm:flex-col">

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-xl">
          <ion-icon name="logo-figma" class="text-[#FF7262]"></ion-icon>
          <p className="font-poppins">
            Figma
          </p>
        </div>

        <div className="bg-neutral-700 w-[90px] h-1 m-1 rounded-full">
          <div className="bg-[#FF7262] animate-tailwindBar h-1 rounded-full"></div>
        </div>

      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-lg">
          <ion-icon src="./img/logo-photoshop.svg" class="text-[#F7DF1E] text-2xl"></ion-icon>
          <p className="font-poppins">
            Adobe Photoshop 2022
          </p>

        </div>
        <div className="bg-neutral-700 w-[90px] h-1 m-1 rounded-full">
          <div className="bg-[#31A8FF] animate-cssBar h-1 rounded-full"></div>
        </div>

      </div>

    </div>
  )
}