import React, { useMemo, useState } from "react";

function ExampleComponent({ data }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Filtriranje podataka
  const filteredData = useMemo(() => {
    if (!data || !Array.isArray(data)) return []; // Provjeravamo da li je data definisan i da li je niz
    // Filter data based on search term
    return data.filter((item) => item.name.includes(search));
  }, [data, search]);

  // Paginacija
  const paginatedData = useMemo(() => {
    const firstIndex = (page - 1) * 10;
    const secondIndex = page * 10;
    return filteredData.slice(firstIndex, secondIndex);
  }, [filteredData, page]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {paginatedData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={paginatedData.length < 10}
      >
        Next
      </button>
    </div>
  );
}

export default ExampleComponent;
