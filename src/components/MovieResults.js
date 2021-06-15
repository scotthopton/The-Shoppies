import React from "react";
import { Card, Button } from "react-bootstrap";

export default function MovieResults({
  title,
  movies,
  nominations,
  setNomination,
}) {
  return (
    <Card style={{ padding: "20px" }}>
      <Card.Title>Movie Results for {title}</Card.Title>
      <ul>
        {movies &&
          movies.map((result) => {
            const movie = result.Title + ", " + result.Year + " ";
            return (
              <li key={result.imdbID} style={{ padding: "12px" }}>
                {movie}
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() =>
                    setNomination((nominations) => [...nominations, movie])
                  }
                  disabled={
                    !nominations.includes(movie) && nominations.length < 5
                      ? false
                      : true
                  }
                >
                  Nominate
                </Button>
              </li>
            );
          })}
      </ul>
    </Card>
  );
}
