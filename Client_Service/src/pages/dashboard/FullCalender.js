import './FullCalender.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'



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
        right: '',
      },
    buttonText: {
        today: 'Today', // Change the "today" button text to "Today"
      },
  };


const Calendar = ({children, isOpen}) => {

    const handleClose = () => {
      isOpen(false);
    };
    const completion = 30;
    return (
    <div className="modal">
        <div className="popup">
            <div className="modalContent">
            <div onClick={handleClose} className='right1'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            <div>
                <div className="fullcalendar-container">
      <FullCalendar
        {...calendarOptions}
      />
    </div>

            </div>
            
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