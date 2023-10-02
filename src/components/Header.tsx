import { Link, NavLink } from 'react-router-dom'
import homeicon from '/icons/home-1.svg'
import homeicon2 from '/icons/home.svg'
import projectsicon from '/icons/layer.svg'

const Header = () => {
  return (

    <aside className="flex flex-col items-center w-64 h-screen bg-neutral-900">
      <div className='py-12'>
        <Link to='/' className="text-secondary text-2xl uppercase font-archivoblack">
          vini<span className="text-accent text-4xl font-sourcesans font-extrabold">.</span>
        </Link>
      </div>

      <ul className='text-secondary space-y-4 font-sourcesans'>
        <li className=''>
          <NavLink to='/' className={({ isActive }) =>
            'flex items-center gap-2 rounded-lg py-3 px-12 text-lg ' + (isActive ? 'bg-accent text-primary font-bold' : '')
          }>
            {({ isActive }) => (
              <>
                <img src={isActive ? homeicon2 : homeicon} className={'-translate-y-0.5 ' + (isActive ? '' : 'brightness-[6]')} />
                <p>
                  Sobre
                </p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to='/projetos' className={({ isActive }) =>
            'flex items-center gap-2 rounded-lg py-3 px-12 text-lg ' + (isActive ? ' bg-accent text-primary font-bold' : 'hover:bg-accent')
          }>
            {({ isActive }) => (
              <>
                <img src={isActive ? projectsicon : homeicon} className={'-translate-y-0.5 ' + (isActive ? '' : 'brightness-[6]')} />
                <p>
                  Projetos
                </p>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Header