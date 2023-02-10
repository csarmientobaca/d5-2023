import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from "./Carousel";



class Home extends Component {
    state = {
        films: []
    }

    componentDidMount = async () => {
        try {
            let response = await fetch(`http://www.omdbapi.com/?apikey=f6045731&s=${this.props.title}`)

            if (response.ok) {
                let data = await response.json()
                console.log("this films data")
                console.log(data)

                console.log(data.Search)

                this.setState({ films: data.Search }, () => { console.log(this.state) })
                console.log(this.state.films[0] + "hi2")

            }
            else {
                console.log("error")
            }

        } catch (error) {
            console.log(error)
        }

    }



    render() {

        return (
            < Container className="px-4" >

                <h4>Trending Now</h4>
                <Carousel />
                <h4>Watch it Again</h4>
                <Carousel />

                <h4>New Releases</h4>
                <Carousel />



            </Container >
        );
    }
}

export default Home;