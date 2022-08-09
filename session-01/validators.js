/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  let onlyLetters = /^[a-zA-Z]+$/;
  let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (username >= 3 || username === 10 || username[0] === onlyLetters || username != specialChars ){
    return true;
  }
  
  if(username < 3 || username > 10 || username[0] != onlyLetters || username == specialChars ){
    return false;
  } 
}
/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  if(password < 10 || password > 64){
    return false;
  }
  else{
    return true;
  }
}

module.exports = { validUsername, validPassword };
