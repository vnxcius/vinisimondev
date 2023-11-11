
import { Link } from 'react-router-dom';
import handsome from '/img/handsome.jpg';
import logo from '/img/logo-white.png';
import redirecticon from '/icons/arrow-right-1.svg';
import HomeGridLink from '../components/HomeGridLink';
import HomeGridItem from '../components/HomeGridItem';

const Home = () => {
  const github = 'https://github.com/vnxcius';
  const linkedin = 'https://www.linkedin.com/in/vinicius-simon-gouveia-hilton/';
  const instagram = 'https://www.instagram.com/vini_html/';

  return (
    <div className='flex w-full h-screen font-sourcesans text-gray-200 bg-dark'>
      <aside className="h-full min-w-fit px-10 py-5 relative">
        <div className='absolute top-10 right-10 px-5 z-50'>
          <Link to={'/'} className='hover:bg-neutral-800'>
            <img src={logo} alt="Logo" className='w-7' />
          </Link>
        </div>
        <img src={handsome} alt="handsome" className='h-full w-full object-cover rounded brightness-75' />
        <div className='absolute bottom-5 w-[85.9%] rounded-b mx-auto px-10 pt-16 h-1/5 bg-gradient-to-t from-black/80 to-transparent'>
          <p className='text-gray-300 text-lg font-medium'>
            Olá, me chamo Vinícius Simon.
          </p>
          <p className='text-neutral-500 text-lg'>
            Construo e desenvolvo soluções para a web. <br />
            <span>Dev fullstack Jr.</span>
          </p>
        </div>
      </aside>

      <div className='py-10 w-full'>
        <div className='grid grid-cols-4 place-items-start'>
          <h4>
            Ficou interessado? <br />
            <Link to={'/contato'} className='text-neutral-500 hover:text-neutral-400'>
              Entre em contato
            </Link>
          </h4>
          <h4>
            Quem sou eu? <br />
            <Link to={'/sobre'} className='text-neutral-500 hover:text-neutral-400'>
              Sobre mim
            </Link>
          </h4>
          <h4>
            Repositório Git <br />
            <a href={github} target='_blank' className='flex items-start gap-1 text-neutral-500 hover:text-neutral-400'>
              <span>github.com/vnxcius</span>
              <img src={redirecticon} alt="Redirect icon" className='w-4 translate-y-[5px] -rotate-45 group-hover:brightness-150' />
            </a>
          </h4>
        </div>

        <div className='grid grid-cols-4 place-items-start mt-72'>
          <div className='space-y-1'>
            <h4>
              <span>Projetos</span> <br />
            </h4>
            <HomeGridLink link={github + '/vinisimondev'} text={'Este portfólio'} date='11/2023' redirect />
            <HomeGridLink link={github + '/rest-api-gin'} text={'REST API Gin'} date='07/2023' redirect />
            <HomeGridLink link={'/projetos/medellin'} text={'Medellin'} />
            <HomeGridLink link={'/projetos/triph'} text={'triph.'} />
          </div>
          <div className='space-y-1'>
            <h4>
              Stack
            </h4>
            <HomeGridItem text={'JavaScript'} type='Front-end'/>
            <HomeGridItem text={'Golang'} type='Back-end'/>
            <HomeGridItem text={'PHP'} type='Back-end'/>
            <HomeGridItem text={'TailwindCSS'} type='Framework'/>
            <HomeGridItem text={'ReactJS/TS'} type='Framework'/>
            <HomeGridItem text={'Laravel'} type='Framework'/>
            <HomeGridItem text={'Gin'} type='Framework'/>
            <HomeGridItem text={'Git'} type='Ferramentas'/>
            <HomeGridItem text={'Docker'} type='Ferramentas'/>
            <HomeGridItem text={'PostgreSQL'} type='SGBD'/>
            <HomeGridItem text={'MySQL'} type='SGBD'/>
            <HomeGridItem text={'Figma'} type='Design'/>
            <HomeGridItem text={'Adobe Photoshop 2023'} type='Design'/>
          </div>
          <div className='space-y-1'>
            <h4>
              Sociais
            </h4>
            <HomeGridLink link={linkedin} text={'LinkedIn'} redirect />
            <HomeGridLink link={instagram} text={'Instagram'} redirect />
          </div>

          <div className="space-y-1">
            <h4>
              Certificados
            </h4>
            <HomeGridLink link={'/certificados/udemy'} text={'Alura'} />
            <HomeGridLink link={'/certificados/alura'} text={'SCRUM'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home