var countryCode;
var phoneNumber;
var fullNumber;
var userName;
var day;
var month;
var year;
var birthday;
var email;
var emailCheckbox;

function validatePhoneNumber() {
  var countryCode = document.getElementById("country-code").value;
  var phoneNumber = document.getElementById("phone-number").value;
  fullNumber = countryCode + phoneNumber;

  if (/^\+60173527250$/.test(fullNumber)) {
    // If the phone number matches, redirect to page 2
    localStorage.setItem("phone", fullNumber);
    window.location.href = "./p2.html";
  } else {
    alert("Only +60173527250 is allowed to check loyalty points.");
    return false;
  }
}

function readp1data() {
  var phone = localStorage.getItem("phone");
}

function validateForm() {
  userName = document.getElementById("name").value;
  day = document.getElementById("day").value;
  month = document.getElementById("month").value;
  year = document.getElementById("year").value;
  email = document.getElementById("email").value;
  emailCheckbox = document.getElementById("no-email").checked;

  var errorMessages = [];

  // Simple validation checks
  if (!userName) {
    errorMessages.push("Please insert a name.");
  }
  if (!day || !month || !year) {
    errorMessages.push("Please insert your birthday.");
  }
  if (!email && !emailCheckbox) {
    errorMessages.push(
      "Please insert a valid email address or check the no email checkbox."
    );
  }

  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
    return false;
  }

  // Continue with form submission or page navigation
  birthday = day + month + year;
  localStorage.setItem("useName", userName);
  localStorage.setItem("email", email);
  localStorage.setItem("birthday", birthday);
  window.location.href = "./p3.html";
  return false;
}

function display() {
  document.getElementById("ph").textContent = localStorage.getItem("phone");
  document.getElementById("un").textContent = localStorage.getItem("useName");
  document.getElementById("em").textContent = localStorage.getItem("email");
  document.getElementById("bd").textContent = localStorage.getItem("birthday");
}
