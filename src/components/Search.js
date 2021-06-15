import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

export default function Search({
  setTitle,
  setMovies,
  setSearchTerm,
  searchTerm,
}) {
  async function getMovies(event) {
    event.preventDefault();
    setTitle(searchTerm);
    try {
      const response = await axios.get(
        "https://www.omdbapi.com?s=" + searchTerm + "&apikey=6dc30ba4"
      );
      console.log(response.data.Search);
      setMovies(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={(event) => getMovies(event)} style={{ width: "100%" }}>
      <Form.Control
        className="shadow-sm bg-white rounded"
        size="lg"
        type="text"
        placeholder="Search for a Movie..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        value={searchTerm}
      />
    </form>
  );
}
