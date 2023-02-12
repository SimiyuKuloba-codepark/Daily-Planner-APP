// init github
const github = new gitHub;

// init UI
const ui = new UI;

// search input event listener
document.getElementById('searchUser').addEventListener('keyup', searchUser);

function searchUser(e){

  const userText = e.target.value;
  
  if(userText !== ''){
    // make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // show alert
          ui.showAlert('User not found', 'alert danger')

        } else {
          // show profile
          ui.showProfile(data.profile)
        }
      })
    
  } else {
    // clear profile
    ui.clearProfile();
  }
};