import './FullCalender.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const Calendar = ({children, isOpen}) => {

    const handleClose = () => {
      console.log('closed');
      isOpen(false);
    };

    const calendarOptions = {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      height: '135%',
      events: [
        { title: 'Event 1', date: '2023-10-10' },
        { title: 'Event 2', date: '2023-10-15' },
      ],
      headerToolbar: {
          left: 'today',
          center: 'prev,title,next',
          right: 'customButton',
        },
      buttonText: {
          today: 'Today',
        },
      customButtons: {
        customButton: {
          click: handleClose
        },
      },
    };

    const completion = 30;
    return (
      <div className="popup">
          <div className="modal-content2">
            <div className="fullcalendar-container">
              <FullCalendar
                {...calendarOptions}
              />
            </div>
          </div>
      </div>
    );
};


function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

export default Calendar;