export default function CardBackend() {
  return (
    <div className="flex pt-6 gap-10 animate-showCard max-sm:flex-col">

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-xl">
          <ion-icon name="logo-laravel" class="text-laravel"></ion-icon>
          <p className="font-poppins">
            Laravel 10
          </p>
        </div>

        <div className="bg-neutral-700 w-[90px] h-1 m-1 rounded-full">
          <div className="bg-laravel animate-reactBar h-1 rounded-full"></div>
        </div>

      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-xl">
          <ion-icon src="./img/logo-php.svg" class="text-2xl"></ion-icon>
          <p className="font-poppins">
            PHP
          </p>

        </div>
        <div className="bg-neutral-700 w-[90px] h-1 m-1 rounded-full">
          <div className="bg-php animate-jsBar h-1 rounded-full"></div>
        </div>

      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-xl">
          <ion-icon src="./img/logo-mysql.svg"></ion-icon>
          <p className="font-poppins">
            MySQL
          </p>
        </div>

        <div className="bg-neutral-700 w-[90px] h-1 m-1 rounded-full">
          <div className="bg-[#FFA230] animate-tailwindBar h-1 rounded-full"></div>
        </div>

      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-xl">
          <ion-icon src="./img/logo-go.svg"></ion-icon>
          <p className="font-poppins">
            Go
          </p>
        </div>

        <div className="bg-neutral-700 w-[90px] h-1 m-1 rounded-full">
          <div className="bg-go animate-goBar h-1 rounded-full"></div>
        </div>

      </div>

    </div>
  )
}