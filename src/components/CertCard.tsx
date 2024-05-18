type Props = {
  link: string,
  img: string,
  name: string
}
const CertCard = (props: Props) => {
  return (
    <a href={props.link} target="_blank">
      <p className="text-neutral-300 my-2 italic">{props.name}</p>
      <img src={props.img} alt={props.name} className="min-w-72 w-72 min-h-72 h-72 object-contain" loading="lazy"/>
    </a>
  )
}

export default CertCard