import React, { useState } from 'react';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import ReactDatePicker from 'react-datepicker';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CalendarPlanner() {

    const locales = {
        "en-US": require("date-fns/locale/en-US")
    }
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    })

    const events = [
        {
            title: "Visit the Lovre",
            allDay: true,
            start: new Date(2023, 6, 0),
            end: new Date(2023, 6, 0),
        },
        {
            title: "Climb the Eiffle Tower",
            start: new Date(2023, 6, 0),
            end: new Date(2023, 6, 0),
        },
        {
            title: "Get Lunch",
            start: new Date(2023, 6, 0),
            end: new Date(2023, 6, 0),
        },
    ]

    return (
        <Calendar id="calender" localizer={localizer} events={events}
            startAccessor="start" endAccessor="end"
            style={{ height: 500, margin: "50px", }} />
    )

}

export default CalendarPlanner;