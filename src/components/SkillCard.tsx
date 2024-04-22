type Props = {
  icon: string,
  name: string
}

const SkillCard = (props: Props) => {
  return (
    <div
      className="flex items-center gap-3 min-w-44 w-44 bg-neutral-800 border border-neutral-700 shadow p-3 pl-5 px-10 rounded transition-all duration-100 group hover:bg-accent">
      <img src={props.icon} alt={props.name} className="w-6 h-6 object-contain group-hover:grayscale group-hover:brightness-0"/>
      <p className="text-neutral-300 text-lg group-hover:text-neutral-900">{props.name}</p>
    </div>
  )
}

export default SkillCard