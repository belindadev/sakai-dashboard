
function Profile() {
  return (
    <div className="profile">
      <h1>My Profile</h1>
      <p>Manage your student information.</p>

      <div className="announcement profile-card">
        <div className="avatar">S</div>
        <h2>Student Information</h2>

        <div className="profile-details">
          <p><strong>Name:</strong> Student Name</p>
          <p><strong>Programme:</strong> Computer Science</p>
          <p><strong>Level:</strong> 200</p>
          <p><strong>Institution:</strong> University of Ghana</p>
          <p><strong>Status:</strong> Active Student</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
