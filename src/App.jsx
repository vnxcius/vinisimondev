import './App.css';
import Cards from './components/cards/Cards';
import Footer from './components/Footer';
import InfoCard from './components/InfoCard';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';

function App() {
  return (
    <div>
      <section className="w-section flex mt-8 mx-auto max-2xl:w-11/12 max-sm:flex-col max-sm:mt-3">
        <InfoCard />
        <Cards />
      </section>

      <section className="w-section mt-8 mx-auto max-2xl:w-10/12">
        <Sobre />
      </section>

      <section className="w-section mt-8 mx-auto max-2xl:w-10/12">
        <Projetos />
      </section>

      <section className='pt-44'>
        <Footer />
      </section>

    </div>
  );
}

export default App;
