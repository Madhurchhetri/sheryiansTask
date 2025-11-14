let iplTeams = [
     {
        team : "MI",
        primary:"#2d6ab1",
        secondry: "#133166",
        fullname :"Mumbai Indians",
        trophies:`2013,2015,2017,2019,2020`,
        captain:"Rohit Sharma"
    },
    {
        team : "Rcb",
        primary:"#c7ab5e",
        secondry: "#461a1e",
        fullname :"Royal Challenger Banglore",
        trophies:`2025`,
        captain:"Virat kohli"
    },
    {
        team : "PK",
        primary:"#d71920",
        secondry: "#283666",
        fullname :"Punjab King",
        trophies:`Not Yet`,
        captain:"KL Rahul"
    },
    {
        team : "CSK",
        primary:"#ffcb05",
        secondry: "#141b2e",
        fullname :"Chennai Super King",
        trophies:`2010,2011,2018,2021,2023`,
        captain:"MS Dhoni"
    },
    {
        team : "DC",
        primary:"#b9251c",
        secondry: "#011946", 
        fullname :"Delhi Capital",
        trophies:`Not Yet`,
        captain:"Rishabh Pant"
    },
    {
        team : "GT",
        primary:"#77c7f2",
        secondry: "#0d1a31",
        fullname :"Gujrat Titans",
        trophies:`2022`,
        captain:"Hardik Pandya"
    },
    {
        team : "KKR",
        primary:"#ecc542",
        secondry: "#281f4a",
        fullname : "Kolkata Knight Riders ",
        trophies:`2012,2014,2024`,
        captain:"Gautam Gambhir"
    },
    
    {
        team : "LSG",
        primary:"#ffffff",
        secondry: "#0248bc",  
        fullname : "Lucknow Super Giants ",
        trophies:`not yet`,
        captain:"Subhman Gill"
    },
    {
        team : "SRH",
        primary:"#f26522",
        secondry: "#712325",  
        fullname : "Sunrisers Heydrabad ",
        trophies:`2016`,
        captain:"Shikhar Dhawan"
    },
     {
        team : "RR",
        primary:"#eb83b5",
        secondry: "#042856",  
        fullname : "Rajasthan Royals ",
        trophies:`2008`,
        captain:"develiers"
    }
]

let btn = document.querySelector('button');
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2')
let titleName = document.querySelector('h2');
let main = document.querySelector("main");

btn.addEventListener("click",()=>{
    // console.log('checked');
    let num = iplTeams[Math.floor(Math.random()*iplTeams.length)]
    // console.log(num);
    titleName.innerHTML = num.team
    box2.innerHTML = `${num.fullname} <br /> ${num.captain} <br /> ${num.trophies}`;
    box2.style.color = num.primary;
    box2.style.webkitTextStroke = "0.2px #000";
    box2.style.fontSize = " 1.8rem"
    box2.style.display = "flex";
    box2.style.justifyContent = "center";
    box2.style.alignItems = "center";
    box2.style.backgroundColor = num.secondry;
    box1.style.backgroundColor = num.primary;
    
    
    
    
})