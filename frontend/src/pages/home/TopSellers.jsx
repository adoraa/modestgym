import React, { useEffect, useState } from "react";

export const TopSellers = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then(res => res.json())
      .then((data) => setBooks(data))
  } , [])

  return <div className="py-10">
    <h2 className="text-3xl font-semibold mb-6">
      Top Sellers
    </h2>
    {/* category filtering */}
  </div>;
};
