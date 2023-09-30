import React from 'react';

function Days(props) {
  const { day, changepresent } = props;
  const tmp = new Date(day.getFullYear(), day.getMonth(), 1);
  const week = tmp.getDay();
  const curr = [];

  for (let i = 0; i < 35; i++) {
    const present = new Date(tmp);

    if (i === 0 && week === 0) {
      present.setDate(present.getDate() - 7);
    } else if (i === 0) {
      present.setDate(present.getDate() + (i - week));
    } else {
      present.setDate(present.getDate() + 1);
    }

    const Day = {
      currMonth: present.getMonth() === day.getMonth(),
      date: present,
      month: present.getMonth(),
    };

    curr.push(Day);
  }

  return (
    <div className="table">
      {curr.map((day) => (
        <div
          key={day.date.toISOString()}
          className={}
          onClick={() => changepresent(day)}
        >
          <p>{day.number}</p>
        </div>
      ))}
    </div>
  );
}

export default Days;
