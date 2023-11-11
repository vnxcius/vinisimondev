
import redirecticon from '/icons/arrow-right-1.svg';

type Props = {
  text: string,
  date?: string,
  func?: () => void,
}

const HomeGridButton = (props: Props) => {
  return (
    <div className='flex justify-between w-52'>
      <button onClick={props.func}
        className='text-neutral-500 flex justify-between items-center gap-1 w-36 -mx-3 px-3 rounded group hover:bg-neutral-800 focus:outline-none focus:bg-neutral-800'>
        <span>{props.text}</span>
        <img src={redirecticon} alt="Redirect icon" className='w-4 group-hover:translate-x-1 duration-300' />
      </button>
      <span className='text-neutral-500 text-end font-medium'>
        {props.date}
      </span>
    </div>

  )
}

export default HomeGridButton