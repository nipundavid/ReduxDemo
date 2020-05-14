import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemTDetails({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      "https://reqres.in/api/users/" + match.params.id
    );
    const item = await fetchItem.json();
    console.log(item.data);
    setItem(item.data);
  };
  return (
    <div>
      <h1>{item.email}</h1>
      <img src={item.avatar}></img>
    </div>
  );
}

export default ItemTDetails;
