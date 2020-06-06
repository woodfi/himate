
const pick =  new Array();

pick[1] = " We might have come from differnt places,  but we all have the same hear that keeps us together - MLK"
pick[2] =  " Love the world and the world will love you back"
pick[3] = "Be yourself; everyone else is already taken."
pick[4] = "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
pick[5] = " SHIP THAT SHIT - Sergio Mattei, Founder of Makerlog"
pick[6] = "You only live once, but if you do it right, once is enough"
pick[7] = " Haters are gonna hate, people say haters gonna hate, makers gonna make. I say Let them Hate, Absorb the ate and use it to build or start your day - Arav Narula"
pick[8] = " You can do this, You have the power. By the power vested in me by the state of the world, you can do it"
pick[9] = "“The purpose of our lives is to be happy.” "
pick[10] = " Wake up, Drink Coffee, then have heck of a good day, repat - Arav Narula"
pick[11] = " Self Plug - If you enjoy today's content, then Consider buying me a coffee at buymeacoff.ee/arav"
pick[12] = " Covid-19 can't stop us, we can stop covid - Arav Narula"
pick[13] = "  Make it, Build it, but have fun or you're getting bored - Arav Narula"
pick[14] = " The world might criztize you, but every words helps you - Arav Narula"
pick[15] = " Somebody once told me, that 2020 is the year you do something good - Arav Narula"
pick[16]  =" It's a plane, Its A Bird, Wait No It's Superman, Oh Wait it's You :)"
const choose = Math.floor((Math.random() * 16))
const show = pick[choose] 

console.log(pick[choose])
document.getElementById('filter').innerHTML=show;


/// Time and Date 
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("fill").innerHTML=time;
 

    