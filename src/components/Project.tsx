import { motion } from 'framer-motion';

import closeicon from '/icons/arrow-left.svg';

type Props = {
  title: string,
  func: () => void,
}

const Project = (props: Props) => {
  return (
    <motion.div className='w-56'
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8, type: 'spring', bounce: 0.4 }}>
      <button onClick={props.func} className='w-full flex items-center justify-between -ml-3 px-3 rounded group hover:bg-neutral-800'>
        <h4 className='text-neutral-500 font-medium'>
          {props.title}
        </h4>
        <img src={closeicon} alt="Close icon" className='w-4 group-hover:-translate-x-2 duration-300' />
      </button>
    </motion.div>
  )
}

export default Project