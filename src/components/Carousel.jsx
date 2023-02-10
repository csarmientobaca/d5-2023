import { Row, Col } from "react-bootstrap"
import a from "../assets/a.png"
import b from "../assets/b.png"
import c from "../assets/c.png"
import d from "../assets/d.png"
import e from "../assets/e.png"
import f from "../assets/f.png"



const Carousel = (props) => {


    return (

        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
            <Col className="mb-2 px-1">
                {/* <img className="img-fluid" src={props.poster} alt="movie picture" /> */}
                <p>{props.poster}</p>
            </Col>
            <Col className="mb-2 px-1">
                <img className="img-fluid" src={b} alt="movie picture" />
            </Col>
            <Col className="mb-2 px-1">
                <img className="img-fluid" src={c} alt="movie picture" />
            </Col>
            <Col className="mb-2 px-1">
                <img className="img-fluid" src={d} alt="movie picture" />
            </Col>
            <Col className="mb-2 px-1">
                <img className="img-fluid" src={e} alt="movie picture" />
            </Col>
            <Col className="mb-2 px-1">
                <img className="img-fluid" src={f} alt="movie picture" />
            </Col>
        </Row>
    )


}
export default Carousel