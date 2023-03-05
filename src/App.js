// import React, { useState } from 'react';
// import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar';
import CalendarPlanner from './components/Calender';

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";


const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});




function App() {

  const events = [
    {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2023, 3, 4),
      end: new Date(2023, 3, 4),
    },
    {
      title: "Vacation",
      start: new Date(2023, 3, 4),
      end: new Date(2023, 3, 6),
    },
    {
      title: "Conference",
      start: new Date(2021, 6, 20),
      end: new Date(2021, 6, 23),
    },
  ];

  const [allEvents, setAllEvents] = useState(events)
  console.log(events);
  console.log(allEvents);
  return (
    <div className="App ">

      <NavBar />

      <CalendarPlanner></CalendarPlanner>


    </div>
  );
}

export default App;
