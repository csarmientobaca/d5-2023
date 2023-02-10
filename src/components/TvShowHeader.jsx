import { Container } from 'react-bootstrap';
import Carousel from "./Carousel";



function TVShowsHeader() {


    return (
        <Container className="px-4">

            <h4>Trending Now</h4>
            <Carousel />
            <h4>Watch it Again</h4>
            <Carousel />

            <h4>New Releases</h4>
            <Carousel />



        </Container>
    );
}

export default TVShowsHeader;