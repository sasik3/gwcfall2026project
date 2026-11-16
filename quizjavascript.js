   var i = 0;
   var j = 0;
   var message = "wanna write?"; 
   var speed = 100;
   function type() {
    if(i < message.length) {
        document.getElementById("type").innerHTML += message.charAt(i);
        i++;
        setTimeout(type, speed);
    }
   }
    type();
var staffApplicationScore =0;
var blogSubmissionScore=0;
var writingCompetitionScore =0;
var question =0;

var results = document.getElementById("result");
var q11 = document.getElementById("q1a1");
var q12= document.getElementById("q1a2");
var q13= document.getElementById("q1a3");
var q21= document.getElementById("q2a1");
var q22= document.getElementById("q2a2");
var q23= document.getElementById("q2a3");
var q31= document.getElementById("q3a1");
var q32= document.getElementById("q3a2");
var q33= document.getElementById("q3a3");
var restart= document.getElementById("restart");

q11.addEventListener("click", blog);
q12.addEventListener("click", comp);
q13.addEventListener("click", staff);
q21.addEventListener("click", blog);
q22.addEventListener("click", comp);
q23.addEventListener("click", staff);
q31.addEventListener("click", blog);
q32.addEventListener("click", comp);
q33.addEventListener("click", staff);
results.addEventListener("click", updateResult);
restart.addEventListener("click", restarts);


function staff(){
  staffApplicationScore +=1;
  question+=1;
  if(question>=3)
  {
    updateResult();
    
  }
}
function blog(){
  blogSubmissionScore +=1;
  question+=1;
    if(question>=3)
    {
      updateResult();
     
    }
}
function comp(){
  writingCompetitionScore +=1;
  question+=1;
    if(question>=3)
    {
      updateResult();
     
    }
}
function updateResult()
  {
    if(writingCompetitionScore >=2)
    {
      results.innerHTML="Recommended Opportunity: Do a writing competition!";
    }
    else if(blogSubmissionScore >=2)
    {
        results.innerHTML = "Recommended Opportunity: Submit to a blog";
    }
    else if(staffApplicationScore >=2 )
      {
        results.innerHTML = "Recommended Opportunity: Join the staff of a magazine!";
    }
    else {
      results.innerHTML = "Recommended Opportunity: Submit to a blog";
    }
  }
function restarts()
{
   blogSubmissionScore=0;
   staffApplicationScore=0;
   writingCompetitionScore = 0;
   question = 0;
  results.innerHTML="Your result is...";
}
 