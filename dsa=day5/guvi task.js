// 1. Using for...in loop:

const jsonData = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["Reading", "Hiking", "Gaming"],
  }
  for (const key in jsonData) {
    console.log(key, jsonData[key]);
  }

  /*
  output
name John
age 30
city New York
hobbies [ 'Reading', 'Hiking', 'Gaming' ]
  */

//2. Using for...of loop
const jsonData = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["Reading", "Hiking", "Gaming"],
  }
  for (const hobby of jsonData.hobbies) {
    console.log(hobby);
  }
  /*
  output
Reading
Hiking
Gaming
  */

// 3.Using .forEach
const jsonData = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["Reading", "Hiking", "Gaming"],
  }
  jsonData.hobbies.forEach((hobby) => {
    console.log(hobby);
  });
  
  /*
output
  Reading
Hiking
Gaming
  */

resume in JSON format

{
    "name": "praveenkumar",
    "contact": {
      "email": "praveenmech483@email.com",
      "phone": "918012133432",
      "address": "maruti seva nager banaswadi main road north street banglore"
    },
    "summary": "Experienced software engineer with a passion for creating efficient and scalable web applications.",
    "education": [
      {
        "degree": "Bachelor of mrchanical engineering",
        "school": "Anna university",
        "graduation_year": "2021"
      }
    ],
    "experience": [
      {
        "title": "Senior Software Engineer",
        "company": "itc Solutions Inc.",
        "location": "banglore.",
        "start_date": "July 2022",
        "end_date": "Present",
        "responsibilities": [
          "Lead a team of developers in the design and implementation of a complex e-commerce platform.",
          "Optimized application performance, resulting in a 30% decrease in page load times.",
          "Collaborated with cross-functional teams to deliver high-quality software products on schedule."
        ]
      },
      
  
    ],
    "skills": [
      "JavaScript (ES6+)",
      "React.js",
      "Node.js",
      "RESTful APIs",
      "Git Version Control",
      "Agile/Scrum Methodologies",
      "Problem Solving",
      "Team Collaboration"
    ],
    "languages": [
      "English (Fluent)",
      "tamil (Intermediate)"
 ,
    "projects": [
      {
        "title": "mobile device management",
        "description": "anaslyse and implement with a user-friendly interface and secured the system datas.",
        "technologies_used": ["azure", "active directory"],
       
      }
    ]
    ]
  }
  