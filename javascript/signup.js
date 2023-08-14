const userdata = (e) => {
  e.preventDefault();
  let user = {
    name: document.getElementById("name").value,
    password: document.getElementById("password").value,
    email: document.getElementById("email").value,
  };
  console.log(user);
  var nameRegex = /^[a-zA-Z\-]+$/;
  var password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!nameRegex.test(user.name)) {
    document.getElementById("n_err").innerHTML = "not a valid name";
  }
  if (!(password.test(user.password))) {
    document.getElementById("p_err").innerHTML =
      "password is not a valid password";
  }


  if(!(email.test(user.email))) {
    document.getElementById("e_err").innerHTML = "not a valid email address";

  }
};

document.getElementById("userdata").addEventListener("submit", userdata);
