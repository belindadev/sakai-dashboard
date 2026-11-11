function Courses() {
  return (
    <div>
      <h1>My Courses</h1>
      <p>Welcome to your course management page.</p>

      <div className="cards">
        <div className="card">
          <h3>Computer Science</h3>
          <p>View your computer science courses.</p>
        </div>

        <div className="card">
          <h3>Course Materials</h3>
          <p>Access your learning materials.</p>
        </div>

        <div className="card">
          <h3>Assignments</h3>
          <p>Keep track of your assignments.</p>
        </div>
      </div>
    </div>
  );
}

export default Courses;