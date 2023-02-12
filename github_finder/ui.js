class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  // show-profile
  showProfile(user){
    this.profile.innerHTML = `
      <div class="profile-container">
        <div class="left">
          <img src="${user.avatar_url}" alt="profile_photo">
          <a class="btn" href="${user.html_url}">View Profile</a>
        </div>

        <div class="right">
          <div class="links">
            <p class="lin blue-link">Public Repos: ${user.public_repos}</p>
            <p class="lin grey-link">Public Gists: ${user.public_gists}</p>
            <p class="lin green-link">Followers: ${user.followers}</p>
            <p class="lin navy-link">Following ${user.following}</p>
          </div>
          <div class="profile-details">
            <ul>
              <li>Company: ${user.company}</li>
              <li>Website/Blog: ${user.blog}</li>
              <li>Location: ${user.location}</li>
              <li>Bio: ${user.bio}</li>
              <li>Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
    
    `;
  }

  // show-alert
  showAlert(msg, className){
    // clear any remaining alerts
    this.clearAlert();

    // create-div
    const div  = document.createElement('div');

    // add className
    div.className = className;

    // add-text
    div.appendChild(document.createTextNode(msg));

    // get-parent
    const container = document.querySelector('.search-box-container');

    const child = document.querySelector('.above');

    // insert-alert
    container.insertBefore(div, child);

    // timeout-after-3-seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);

  }

  // clear-alert-message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  // clear-profile
  clearProfile(){
    this.profile.innerHTML = '';
  }

}