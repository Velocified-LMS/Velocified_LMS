import React, {useState} from "react";
import './calendar.css'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'];

const DynamicCalendar = () => {
  const [currentDay] = useState(new Date());

  return (
    <div className="calendar">
        <div className="calendar-view">
            <h1>
                {months[currentDay.getMonth()]} {currentDay.getFullYear()}
            </h1>
        </div>
        <div className="weekdays">
            {weekdays.map((weekday) => (
            <div className="weekday" key={weekday}>
                <p>
                    {weekday}
                </p>
            </div>
          ))}
        </div>
        <div className="table">
        </div>
    </div>
  );
};

export default DynamicCalendar;