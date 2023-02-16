// form blur event listeners
document.querySelector('.username').addEventListener('blur', validateUsername);

document.querySelector('.zipcode').addEventListener('blur', validateZipcode);

document.querySelector('.email').addEventListener('blur', validateEmail);

document.querySelector('.phonenumber').addEventListener('blur', validatePhone);

// run the validation functions
function validateUsername(){
  const username = document.querySelector('.username');

  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(username.value)){
    username.style.border = '1px solid rgb(245, 84, 84)';

    document.querySelector('.invalid-name').style.display = 'block';
  } else{
    username.style.border = '1px solid grey';

    document.querySelector('.invalid-name').style.display = 'none';
  }
}

function validateZipcode(){
  const zipcode = document.querySelector('.zipcode');

  const re = /^[0-9]{5}$/;

  if(!re.test(zipcode.value)){
    zipcode.style.border = '1px solid rgb(245, 84, 84)';

    document.querySelector('.invalid-zip').style.display = 'block';
  } else{
    zipcode.style.border = '1px solid grey';

    document.querySelector('.invalid-zip').style.display = 'none';
  }
}

function validateEmail(){
  const email = document.querySelector('.email');

  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.style.border = '1px solid rgb(245, 84, 84)';

    document.querySelector('.invalid-email').style.display = 'block';
  } else{
    email.style.border = '1px solid grey';

    document.querySelector('.invalid-email').style.display = 'none';
  }
}

function validatePhone(){
  const phone = document.querySelector('.phonenumber');

  const re = /^[0-9]{10}$/;

  if(!re.test(phone.value)){
    phone.style.border = '1px solid rgb(245, 84, 84)';

    document.querySelector('.invalid-phone').style.display = 'block';
  } else{
    phone.style.border = '1px solid grey';

    document.querySelector('.invalid-phone').style.display = 'none';
  }

}

