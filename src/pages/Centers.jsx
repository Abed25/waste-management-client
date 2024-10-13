import React, { useEffect, useState } from "react";
import axios from "axios";

const Centers = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/centers`)
      .then((response) => {
        setCenters(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the recycling centers!",
          error
        );
      });
  }, []);

  return (
    <div>
      <h2>Recycling Centers</h2>
      <ul>
        {centers.map((center) => (
          <li key={center.id}>
            {center.name} - {center.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Centers;
