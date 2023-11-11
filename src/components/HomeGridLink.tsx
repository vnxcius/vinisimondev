import { Link } from 'react-router-dom'

import redirecticon from '/icons/arrow-right-1.svg';

type Props = {
  link: string,
  text: string,
  date?: string,
  redirect?: boolean,
}

const HomeGridLink = (props: Props) => {
  return (
    <div className='flex justify-between w-52'>
      <Link to={props.link} target={props.redirect ? '_blank' : undefined}
        className='text-neutral-500 flex justify-between items-start gap-1 w-36 -mx-3 px-3 rounded hover:bg-neutral-800 focus:outline-none focus:bg-neutral-800'>
        <span>{props.text}</span>
        {props.redirect && (
          <img src={redirecticon} alt="Redirect icon" className='w-4 translate-y-[5px] -rotate-45' />
        )}
      </Link>
      <span className='text-neutral-500 text-end font-medium'>
        {props.date}
      </span>
    </div>

  )
}

export default HomeGridLink