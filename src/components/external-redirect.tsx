
type Props = {
  link: string
}

const ExternalRedirect = (props: Props) => {
  setTimeout(() => {
    window.location.href = props.link;
  }, 1000);

  return (
    <p className='text-neutral-50'>Redirecting to {props.link}...</p>
  )
};

export default ExternalRedirect;
