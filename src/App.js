import './App.css';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import NavTop from './components/Nav';
import TVShowsHeader from './components/TvShowHeader';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <NavTop />
      <Container className="px-4">

        <DropDown />
        <TVShowsHeader />


      </Container>
      <Footer />
    </>

  );
}

export default App
