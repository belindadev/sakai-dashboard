
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="welcome">
        <h1>Welcome to Sakai Dashboard</h1>
        <p>Manage your academic activities in one place.</p>
      </div>

      <div className="cards">
        <div className="card">
          <h3>My Courses</h3>
          <p>View and manage your registered courses.</p>
        </div>

        <div className="card">
          <h3>My Schedule</h3>
          <p>Keep track of your classes and activities.</p>
        </div>

        <div className="card">
          <h3>My Profile</h3>
          <p>View your personal information.</p>
        </div>
      </div>

      <div className="announcement">
        <h2>Announcements</h2>
        <p>Welcome! Check here for important academic updates.</p>
      </div>
    </div>
  );
}

export default Dashboard;
