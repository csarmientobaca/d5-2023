import React, { useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton, Form, FormControl } from 'react-bootstrap';
import { FaThLarge, FaTh } from 'react-icons/fa';
import a from "../assets/a.png"
import b from "../assets/b.png"
import c from "../assets/c.png"
import d from "../assets/d.png"
import e from "../assets/e.png"
import f from "../assets/f.png"




function TVShowsHeader() {
    const [selectedGenre, setSelectedGenre] = useState("Genres");

    const handleSelect = (eventKey) => {
        setSelectedGenre(eventKey);
    };

    return (
        <Container className="px-4">
            <Row className="d-flex justify-content-between">
                <div className="d-flex">
                    <h2 className="mb-4">TV Shows</h2>
                    <DropdownButton
                        id="dropdown-item-button"
                        title={selectedGenre}
                        variant="secondary"
                        size="sm"
                        className="ml-4 mt-1 rounded-0"
                        style={{ backgroundColor: "#221f1f" }}
                    >
                        <Dropdown.Item eventKey="Comedy" onSelect={handleSelect}>
                            Comedy
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Drama" onSelect={handleSelect}>
                            Drama
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Thriller" onSelect={handleSelect}>
                            Thriller
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
                <div>
                    <FaThLarge className="icons" />
                    <FaTh className="icons" />
                </div>
            </Row>
            <h4>Trending Now</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={a} alt="movie picture" />
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
            <h4>Watch it Again</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={b} alt="movie picture" />
                </Col>
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={a} alt="movie picture" />
                </Col>
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={e} alt="movie picture" />
                </Col>
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={c} alt="movie picture" />
                </Col>
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={f} alt="movie picture" />
                </Col>
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={d} alt="movie picture" />
                </Col>
            </Row>
            <h4>New Releases</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={f} alt="movie picture" />
                </Col>
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={e} alt="movie picture" />
                </Col>
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={d} alt="movie picture" />
                </Col>
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={a} alt="movie picture" />
                </Col>
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={b} alt="movie picture" />
                </Col>
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={c} alt="movie picture" />
                </Col>
            </Row>


        </Container>
    );
}

export default TVShowsHeader;