(function(){
  emailjs.init("OdD2WTTPE6uU3FdqV"); // Replace 'YOUR_USER_ID' with your EmailJS user ID
})();

const generateBtn = document.getElementById('share');
const nameField = document.getElementById("name");
const numberField = document.getElementById("PhoneNum");
const birthDateField = document.getElementById("dob");



generateBtn.addEventListener("click", () => {
let name = nameField.value;
let number = numberField.value;
let birthDate = birthDateField.value;

// Create the message to be sent
let message = `Name is: ${name}, phone number is: ${number}, and date of birth is: ${birthDate}`;

// Send the email
emailjs.send("service_imyv7zq", "template_rv4cjnz", {
    message: message  // The variable name should match the one in your EmailJS template
}).then((response) => {
    console.log("SUCCESS!", response.status, response.text);
}, (error) => {
    console.log("FAILED...", error);
});
});
