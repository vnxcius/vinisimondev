type Props = {
  name: string,
  description: string,
  img: string,
  link: string,
  stack: string[],
}

const ProjectCard = (props: Props) => {
  return (
    <div className={`group border relative border-neutral-800 shadow py-3 px-10 h-64 rounded-lg bg-no-repeat bg-cover bg-top bg-[url('/img/olieart.png')] bg-[url('${props.img}')] transition-all duration-700`}>
      <div className="absolute left-0 bottom-0 pb-5 pt-10 px-5 md:px-10 w-full bg-gradient-to-b from-transparent via-black/50 to-black/80 rounded-b-md">
        <a href={props.link} target="_blank" className="flex items-center gap-2 text-neutral-50 text-lg md:text-xl font-extrabold hover:underline">
          {props.name}
          <img src="/icons/export-3.svg" alt="" className="invert size-4 invisible md:visible" />
        </a>
        <p className="text-neutral-100 text-sm">{props.description}</p>
        <div className="flex flex-wrap gap-3 mt-3">
          {props.stack.map((item) => (
            <img key={item} src={`/icons/${item}.svg`} alt={item} title={item} className="text-neutral-400 size-5 object-contain" draggable="false"/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard