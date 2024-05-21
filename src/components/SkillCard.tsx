type Props = {
  icon: string,
  name: string
}

const SkillCard = (props: Props) => {
  return (
    <div
      className="flex items-center gap-3 w-40 bg-neutral-800 border border-neutral-700 shadow py-2 px-5 rounded transition-all group hover:bg-accent hover:scale-105 duration-300">
      <img src={props.icon} alt={props.name} width={20} height={20} className="object-contain max-h-5 max-w-5 group-hover:grayscale group-hover:brightness-0"/>
      <p className="text-neutral-300 group-hover:text-neutral-900">{props.name}</p>
    </div>
  )
}

export default SkillCard