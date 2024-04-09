let alldata = [];


let myObj = {
  id: Date.now(),
  personal: {},
  education: [],
  Experience: [],
  Technical: [],
};
const multiple = document.querySelector('#addingmultiple');
const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");
const form4 = document.querySelector("#form4");
// console.log(form1);
//first form data
form1.addEventListener("submit", function (e) {

  e.preventDefault();
  const form1data = new FormData(form1);
  const personal = {};
  form1data.forEach((value, key) => {
    personal[key] = value;
  });
  myObj.personal = personal;
  // console.log(myObj)

  form1.reset();
});

//second form data

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("hello");
  const form2data = new FormData(form2);
  const edu = {};
  form2data.forEach((value,key) =>{
    edu[key] = value;
  });
  myObj.education.push(edu);
  console.log(myObj.education)
  form2.reset();
});


//third form data
form3.addEventListener("submit", function (e) {
  e.preventDefault();
  const form3data = new FormData(form3);
  const Experi = {};
  form3data.forEach((value, key) => {
    Experi[key] = value;
  });
  myObj.Experience.push(Experi);
  // console.log(myObj)
  form3.reset();
});

//fourth form data
form4.addEventListener("submit", function (e) {
  e.preventDefault();
  const form4data = new FormData(form4);
  const Tech = {};
  form4data.forEach((value, key) => {
    Tech[key] = value;
  });
  myObj.Technical.push(Tech);
  // console.log(myObj)
  form4.reset();
});


function submitalldata() {
  // console.log("hello");
  let data = JSON.parse(localStorage.getItem("alldata")) || [];
  alldata = data;

  data.push(myObj);
  localStorage.setItem("alldata", JSON.stringify(data));
}

//for editing the button form2
function addmoredata(){

const form = document.createElement('form');
const labe1  = document.createElement('label');
const label2 = document.createElement('label');
const label3 = document.createElement('label');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const  btn1  = document.createElement('button');



labe1.textContent = "university";
btn1.type = "submit";


labe1.htmlFor = "input1";
label2.textContent="Degree";
label3.textContent="Gradutaion";
btn1.textContent = "Add";
label3.htmlFor = "input3";
labe1.style.display = 'block';
input1.style.display = 'block';
label3.style.display ='block';
label2.htmlFor = "input2";
input2.style.display = 'block';
input3.style.display = 'block';

input1.id  ="input1";
input2.id  = "input2";
input3.id  = "input3";
input1.type = 'text';
input2.type = 'text';
input3.type = 'text';

form.appendChild(labe1);
form.appendChild(input1);
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(label3);
form.appendChild(input3);
form.appendChild(btn1);

multiple.appendChild(form)

form.addEventListener('submit',function(){
  e.preventDefault();
  

});


}

function generateResume() {
  

    
    // console.log(myObj);
  
    // Retrieve the personal information
    const name = myObj.personal.username || "";
    const address = myObj.personal.address || "";
    const phone = myObj.personal.phone || "";
    const email = myObj.personal.email || "";
  
    // Retrieve the educational background
    const education = myObj.education || {};
    let educationList = "";
    for(let i of education){
       educationList += `
      <li>University: ${i.university || ''} - Degree: ${i.degree || ''} - Graduation: ${i.graduation || ''}</li>
    `;

    }

    console.log(educationList);
  
    // Retrieve the work experience
    const experience = myObj.Experience || {};
    let experienceList = "";
    for(let i of experience){
      experienceList += `
      <li>Company: ${i.cname || ''} - Position: ${i.pname || ''} - Duration: ${i.duration || ''}</li>
    `;
    }
  
    // Retrieve technical skills
    const technical = myObj.Technical || {};
    let skillsList = "";
    for(let i of technical)
    {
       skillsList += `
      <li>Language: ${i.planguage || ''}, Tools: ${i.tools || ''}</li>
    `; 
    }
  
    // Create the resume content
    const resumeContent = `
      <h1>${name}</h1>
      <p><h3>Address: ${address} | Phone: ${phone} | Email: ${email}</h3></p>
  
      <h2>Educational Background</h2>
      <ul>${educationList}</ul>
  
      <h2>Work Experience</h2>
      <ul>${experienceList}</ul>
  
      <h2>Technical Skills</h2>
      <ul>${skillsList}</ul>
    `;

    // console.log(resumeContent);
  
    // Set the resume content in the 'resume' element
    document.getElementById("resume").innerHTML = resumeContent;
  }

  

  
    // const a = document.querySelectorAll('form');
    // const arr = Array.from(a);
    // arr.forEach(function(form){
    //   form.addEventListener('mouseover',function(){
    //     form.style.display = "None";

    //   })
    // })



