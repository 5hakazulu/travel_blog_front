import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";




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

const events = [];

function CalendarPlanner() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", });
    const [allEvents, setAllEvents] = useState(events);

    // const dispatch = useDispatch();

    function handleAddEvent() {

        for (let i = 0; i < allEvents.length; i++) {

            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
            /*
                console.log(d1 <= d2);
                console.log(d2 <= d3);
                console.log(d1 <= d4);
                console.log(d4 <= d3);
                  */

            if (
                ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
                    (d4 <= d3))
            ) {
                alert("CLASH");
                break;
            }

        }


        setAllEvents([...allEvents, newEvent]);

    }

    return (
        <div className="App">
            <Container>
                <Row className='mt-5 pt-5'>
                    <Col lg={4} className=" border border-2 border-secondary rounded m-1 align-items-center">
                        <h1 className="mb-3 py-3 border-bottom bg-secondary border-secondary border-3">Add New Event</h1>
                        <form>

                            <input className='mt-3 mb-2  mx-auto ' type="text" placeholder="Add Title" style={{ width: "80%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                            {/* <input className='my-2  mx-auto ' type="text" placeholder="Add location" style={{ width: "80%", marginRight: "10px" }} value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} /> */}
                            <DatePicker className='my-2 d-inline-block' placeholderText="Start Date" style={{ width: "30%" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                            <DatePicker className='my-2 ' placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                            <button className='my-2 mx-auto' stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                                Add Event
                            </button>
                        </form>




                    </Col>
                    <Col className='border border-secondary border-2 rounded  m-1'>
                        <Row>
                            <h1 className='mb-3 py-3 border-bottom border-3 border-secondary bg-secondary'>Calendar</h1>
                        </Row>

                        <Calendar className="mx-auto" localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
                    </Col>
                </Row>
            </Container>


        </div>
    );
}

export default CalendarPlanner;