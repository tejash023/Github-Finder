//Init Github
const github = new Github;

//Init UI
const ui = new UI;

//search input
const searchUser = document.querySelector('#searchUser');

//search input event 
searchUser.addEventListener('keyup', (e) =>{

  //get input text
  const userText = e.target.value;

  if(userText !== ''){
    
    //Make HTTPS Call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          //Show Alert
          ui.showAlert('User not found', 'alert alert-danger');
        }else{
          //Show profile
          ui.showProfile(data.profile)
          //show repos
          ui.showRepos(data.repos);
        }
      })

  }else{
    //clear profile
    ui.clearProfile();
  }
});