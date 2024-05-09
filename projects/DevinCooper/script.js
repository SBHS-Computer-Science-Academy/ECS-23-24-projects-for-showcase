let responses = 0;
let Bmx = false;
let Gravel=false;
let Mountain=false;
let Beginner=false;
let Intermediate=false;
let Pro=false;
let Yes=false;
let No=false;
let continueResponding = false;

function respond()
{
  responses = responses + 1;
  
  let inputBox = document.getElementById('userInput');//inputBox is a variable that represents the box the user typed in
  let originalResp = inputBox.value;//get the text from the inputBox and store it in a variable called originalResp
  inputBox.value = "";//clear the text from the inputBox
  
  let botResponse = "I don't know how to respond to " + originalResp + ". ";
if(responses==1)
{
  botResponse = "Are You a Beginner, Intermediate, or Pro?";
  if(originalResp =="BMX")
  {
    Bmx=true;
  } else if(originalResp=="Gravel Bike")
  {
    Gravel=true;
  }else if(originalResp=="Mountain Bike")
  {
    Mountain=true;
  }else{
    botResponse="Youre at the wrong place"
  }
}

  if(responses==2)
  {
    botResponse="Do you want some electric power with that, Yes or No?";
  
    if(originalResp=="Beginner")
    {
      Beginner=true;
    } else if(originalResp=="Intermediate")
    {
      Intermediate=true;
    }else if(originalResp=="Pro")
    {
      Pro=true;
    }else{
     botResponse="Youre at the wrong place"
   }
  }
      
  if(responses==3)
  { if(continueResponding==true)
    
    if(originalResp=="Yes")
    {
    
      if(originalResp=="No")
      No=true;
    
    } 
  }


  if(originalResp=="No" && Bmx==true && Beginner==true)
  {botResponse="Slammer Kachinsky Gt"}

  if(originalResp=="No" && Bmx==true && Intermediate==true)
  {botResponse="Performer 21 Conway Gt"}

  if(originalResp=="No" && Bmx==true && Pro==true)
  {botResponse="Team Mercado Gt"}

  if(originalResp=="Yes" && Bmx==true && Beginner==true)
  {botResponse="SWFT Bmx Bike"}

  if(originalResp=="Yes" && Bmx==true && Intermediate==true)
  {botResponse="SWFT Bmx Bike"}

  if(originalResp=="Yes" && Bmx==true && Pro==true)
  {botResponse="SWFT Bmx Bike"}

  if(originalResp=="No" && Gravel==true && Beginner==true)
  {botResponse="Haanjo 3"}

  if(originalResp=="No" && Gravel==true && Intermediate==true)
  {botResponse="Haanjo 5"}

  if(originalResp=="No" && Gravel==true && Pro==true)
  {botResponse="Canyon Grizl CF SL 8 1by"}

  if(originalResp=="Yes" && Gravel==true && Beginner==true)
  {botResponse="Cairn BRAVe 1.0"}

  if(originalResp=="Yes" && Gravel==true && Intermediate==true)
  {botResponse="GT Grade Amp"}

  if(originalResp=="Yes" && Gravel==true && Pro==true)
  {botResponse="3T Exploro RaceMax Boost"}

 if(originalResp=="No" && Mountain==true && Beginner==true)
  {botResponse="Hatch 3"}

  if(originalResp=="No" && Mountain==true && Intermediate==true)
  {botResponse="Release 29 2"}

  if(originalResp=="No" && Mountain==true && Pro==true)
  {botResponse="Yowie 5"}

if(originalResp=="Yes" && Mountain==true && Beginner==true)
  {botResponse="Turbo Tero X Specialized"}

  if(originalResp=="Yes" && Mountain==true && Intermediate==true)
  {botResponse="Turbo Kenevo SL Specialized "}

  if(originalResp=="Yes" && Mountain==true && Pro==true)
  {botResponse="Turbo Levo SL"}

  
{  //display the user's response followed by the bot's response
  let convoDiv = document.getElementById("convoDiv");//convoDiv is a variable that represents the divider (div) element that has the id "convoDiv"
  let userP = document.createElement("p"); //make a new HTML paragraph (p) element
  userP.innerText = originalResp;//set the text of the new paragraph element to what the user typed in
  userP.classList.add("user"); //add a class attribute to the new paragraph so it will be styled according to the CSS for the user class
  convoDiv.appendChild(userP); //add the new paragraph to the divider
  let botP = document.createElement("p"); //make a new HTML paragraph (p) element
  botP.innerHTML = botResponse; //set the text of the new paragraph element to the bot's response
  botP.classList.add("bot"); //add a class attribute to the new paragraph so it will be styled according to the CSS for the bot class
  convoDiv.appendChild(botP); //add the new paragraph to the divider
}    
}