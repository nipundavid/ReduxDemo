import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const listItems = items.map(({ id, email, name }) => (id, email, name));

  const fetchItems = async () => {
    const resData = await fetch("https://reqres.in/api/users?page=2");

    let it = await resData.json();
    setItems(it.data);
    console.log(it.data);
  };

  return (
    <div>
      <h1>
        {items.map(({ id, first_name }) => (
          <h2 key={id}>
            <Link to={"/shop/" + id}>{first_name}</Link>
          </h2>
        ))}
      </h1>
    </div>
  );
}

export default Shop;
