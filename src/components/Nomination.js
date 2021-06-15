import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Nomination({ nominations, setNomination }) {
  return (
    <Card style={{ padding: "20px" }}>
      <Card.Title>Nominations</Card.Title>
      <ul>
        {nominations &&
          nominations.map((nomination) => {
            return (
              <li key={nomination} style={{ padding: "12px" }}>
                {nomination}{" "}
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() =>
                    setNomination(
                      nominations.filter((title) => title !== nomination)
                    )
                  }
                >
                  Remove
                </Button>
              </li>
            );
          })}
      </ul>
    </Card>
  );
}
