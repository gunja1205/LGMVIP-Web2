import React from "react";

const User = ({ user }) => {
  const { avatar, first_name, last_name, email, id } = user;
  return (
    <div className="container">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={avatar} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-5">
            <div class="card-body">
              <h5 class="card-title">{first_name} {last_name}</h5>
              <p class="card-text">
               {email}
              </p>
              <p class="card-text">
                <small class="text-muted">User ID: {id}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
