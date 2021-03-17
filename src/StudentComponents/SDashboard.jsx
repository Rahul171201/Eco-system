import React from 'react'
import sDashboard from './SDashboardComponents/SDashboard.module.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import carimage1 from '../images/clg1.jpg'
import carimage2 from '../images/clg2.jpg'
import carimage3 from '../images/clg4.jpg'
import carimage4 from '../images/clg5.jpg'

function SDashboard() {
    // function createEventId() {
    //     return String(eventGuid++)
    // }
    // let eventGuid = 0
    // let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

    // const INITIAL_EVENTS = [
    // {
    //     id: createEventId(),
    //     title: 'All-day event',
    //     start: todayStr
    // },
    // {
    //     id: createEventId(),
    //     title: 'Timed event',
    //     start: todayStr + 'T12:00:00'
    // }
    // ]
    return (
        <div className={sDashboard.sDashboard}>
            <div className={sDashboard.carouselDiv}>
                <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
                    <div>
                        <img src={carimage1} />
                    </div>
                    <div>
                        <img src={carimage2} />
                    </div>
                    <div>
                        <img src={carimage3} />
                    </div>
                    <div>
                        <img src={carimage4} />
                    </div>
                </Carousel>
            </div>
            <div className={sDashboard.calendarDiv}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                  }}
                events={[
                    { title: 'event 1', start: '2021-03-17' ,end: '2021-03-19' , display: 'background'},
                    { title: 'event 2', date: '2021-03-12' , display: 'background'}
                  ]}
                height={400}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                dateClick={(info)=>{
                    console.log(info);
                }}
                // weekends={this.state.weekendsVisible}
                // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                // select={this.handleDateSelect}
                // eventContent={renderEventContent} // custom render function
                // eventClick={this.handleEventClick}
                // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
            />
            </div>
        </div>
    )
}

export default SDashboard
