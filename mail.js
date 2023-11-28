const firebaseConfig = {
    apiKey: "AIzaSyBs1cwjVMfqoBi2wS7B_wRe8kg44qlEyWw",
    authDomain: "contactform-9949e.firebaseapp.com",
    databaseURL: "https://contactform-9949e-default-rtdb.firebaseio.com",
    projectId: "contactform-9949e",
    storageBucket: "contactform-9949e.appspot.com",
    messagingSenderId: "68209893463",
    appId: "1:68209893463:web:693290046b1e83fd2a4312"
  };

  firebase.initializeApp(firebaseConfig);

 var contactFormDB = firebase.database().ref("contactForm");

 document.getElementById("contactForm").addEventListener("submit", submitForm);

 function submitForm(e) {
    e.preventDefault();
    
    var name = getElementVal("name");
    var emailid = getElementVal ("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
    }, 3000);
    
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};


 const getElementVal = (id) => {
    return document.getElementById(id).value;
 };