import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-head">
        {/* <div className="profile-img">
          <span></span>
        </div> */}
        <div className="profile-name">
          <h1>Name</h1>
        </div>
      </div>
      <div className="profile-body">
        <button type="submit" class="btn">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
