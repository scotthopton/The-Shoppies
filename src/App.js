import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Search from "./components/Search";
import MovieResults from "./components/MovieResults";
import Nomination from "./components/Nomination";
import Alerts from "./components/Alerts";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState(null);
  const [nominations, setNomination] = useState([]);
  const [title, setTitle] = useState(false);

  return (
    <Container style={{ marginTop: "80px" }}>
      <Row style={{ marginBottom: "15px" }}>
        <h1>The Shoppies</h1>
      </Row>
      <Row>
        <Col xs={12}>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setTitle={setTitle}
            setMovies={setMovies}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        {title && (
          <Col xs={6}>
            {
              <MovieResults
                title={title}
                movies={movies}
                nominations={nominations}
                setNomination={setNomination}
              />
            }
          </Col>
        )}
        {title && (
          <Col xs={6}>
            {
              <Nomination
                nominations={nominations}
                setNomination={setNomination}
              />
            }
            {nominations.length >= 5 && <Alerts />}
          </Col>
        )}
      </Row>
    </Container>
  );
}
