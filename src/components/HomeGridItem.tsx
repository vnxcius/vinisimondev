
type Props = {
  text: string,
  type: string,
}

const HomeGridItem = (props: Props) => {
  return (
    <div className='flex justify-between w-60'>
      <h4 className='text-neutral-500'>
        <span>{props.text}</span>
      </h4>
      <span className='text-neutral-500 text-end font-medium'>
        {props.type}
      </span>
    </div>

  )
}

export default HomeGridItem