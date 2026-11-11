function Schedule() {
  return (
    <div>
      <h1>My Schedule</h1>
      <p>Keep track of your academic activities.</p>

      <div className="announcement">
        <h2>Weekly Timetable</h2>

        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Activity</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Monday</td>
              <td>Programming</td>
              <td>8:00 AM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Mathematics</td>
              <td>10:00 AM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Database Systems</td>
              <td>9:00 AM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Web Development</td>
              <td>12:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schedule;