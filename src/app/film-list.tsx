"use client";

import { useEffect, useState } from "react";

export function FilmList() {
  const [films, setFilms] = useState([]);

  async function getFilms() {
    const response = await fetch("http://localhost:3000/films");
    const data = await response.json();
    setFilms(data.results);
  }
  useEffect(() => {
    getFilms();
  }, []);
}
