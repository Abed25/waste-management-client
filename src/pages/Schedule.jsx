import React, { useEffect, useState } from "react";
import axios from "axios";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/schedule`)
      .then((response) => {
        setSchedule(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the schedule!", error);
      });
  }, []);

  return (
    <div>
      <h2>Waste Collection Schedule</h2>
      <ul>
        {schedule.map((item) => (
          <li key={item.id}>
            {item.location} - {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
