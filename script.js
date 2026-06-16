let selectedCourse = "";
let selectedTeacher = "";
// ===== SECTION ALMASHTIRISH =====
function goSection(id){

  closeModal();

  document.querySelectorAll("section").forEach(section=>{
    section.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");


  /* HERO boshqaruvi */
  const hero = document.querySelector(".hero");

  if(id === "home"){
    hero.style.display = "flex";
  }else{
    hero.style.display = "none";
  }


  document.querySelector("nav").classList.remove("show-menu");

  document.querySelectorAll("nav button").forEach(btn=>{
    btn.classList.remove("active-nav");
  });

  if(id === "home") document.querySelectorAll("nav button")[0].classList.add("active-nav");
  if(id === "courses") document.querySelectorAll("nav button")[1].classList.add("active-nav");
  if(id === "teachers") document.querySelectorAll("nav button")[2].classList.add("active-nav");
  if(id === "schedule") document.querySelectorAll("nav button")[3].classList.add("active-nav");
  if(id === "results") document.querySelectorAll("nav button")[4].classList.add("active-nav");
  if(id === "facts") document.querySelectorAll("nav button")[5].classList.add("active-nav");
  if(id === "quiz") document.querySelectorAll("nav button")[6].classList.add("active-nav");
  if(id === "certificate") document.querySelectorAll("nav button")[7].classList.add("active-nav");
  if(id === "games") document.querySelectorAll("nav button")[8].classList.add("active-nav");
  if(id === "videos") document.querySelectorAll("nav button")[9].classList.add("active-nav");
  if(id === "contact") document.querySelectorAll("nav button")[10].classList.add("active-nav");

}

// ===== MOBILE MENU =====
function toggleMenu(){
  document.querySelector("nav").classList.toggle("show-menu");
}

// ===== COURSE ICHKI OYNALARI =====
function showEnglish(){
  closeModal();
  document.getElementById("course-home").classList.add("hidden");
  document.getElementById("english").classList.remove("hidden");
  document.getElementById("it").classList.add("hidden");
}

function showIT(){
  closeModal();
  document.getElementById("course-home").classList.add("hidden");
  document.getElementById("it").classList.remove("hidden");
  document.getElementById("english").classList.add("hidden");
}

function backCourses(){
  closeModal();
  document.getElementById("course-home").classList.remove("hidden");
  document.getElementById("english").classList.add("hidden");
  document.getElementById("it").classList.add("hidden");
}

// ===== MODAL =====
function openModal(name, teacher, price){
  selectedCourse = name;
  selectedTeacher = teacher.replace(" tomonidan olib boriladi", "");

  document.getElementById("modal").style.display = "flex";

  document.getElementById("title").innerText =
    `${name}\nKurs narxi ${price}.`;

  let teacherSelect = document.getElementById("teacherSelect");
  teacherSelect.innerHTML = '<option value="">Ustoz tanlang</option>';

  if(name === "Beginner" || name === "Elementary"){
    teacherSelect.classList.remove("hidden");
    teacherSelect.innerHTML += '<option>Ardasher Azizmatov</option>';
    teacherSelect.innerHTML += '<option>Husanova Sevara</option>';
    teacherSelect.innerHTML += '<option>Nihola Mamayusupova</option>';
    teacherSelect.innerHTML += '<option>Shahriyor Ruzimatov</option>';
  }
  else if(name === "Pre-Intermediate"){
    teacherSelect.classList.remove("hidden");
    teacherSelect.innerHTML += '<option>Ardasher Azizmatov</option>';
    teacherSelect.innerHTML += '<option>Husanova Sevara</option>';
    teacherSelect.innerHTML += '<option>Nihola Mamayusupova</option>';
    teacherSelect.innerHTML += '<option>Shahriyor Ruzimatov</option>';
  }
  else{
    teacherSelect.classList.add("hidden");
  }
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

// ===== FORM YUBORISH =====
function send(){

  let ism = document.getElementById("ism").value;
  let fam = document.getElementById("fam").value;
  let tel = document.getElementById("tel").value;
  let day = document.getElementById("day").value;
  let time = document.getElementById("time").value;
  let ustoz = document.getElementById("teacherSelect").value;

  if(!ism || !fam || !tel || !day || !time){
    alert("Hammasini to'ldiring!");
    return;
  }

  // TELEGRAM USERNAME
  let username = "Shahriyor_teach";

  // XABAR
  let message =
`📚 Yangi kursga yozilish!

👤 Ism: ${ism}
👤 Familya: ${fam}
📞 Telefon: ${tel}

📘 Kurs: ${selectedCourse}
👨‍🏫 Ustoz: ${ustoz || selectedTeacher}

📅 Kun: ${day}
⏰ Vaqt: ${time}`;

  // TELEGRAM LINK
  let telegramUrl =
`https://t.me/${username}?text=${encodeURIComponent(message)}`;

  // TELEGRAMNI OCHISH
  window.open(telegramUrl, "_blank");

  // INPUTLARNI TOZALASH
  document.getElementById("ism").value = "";
  document.getElementById("fam").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("day").value = "";
  document.getElementById("time").value = "";
  document.getElementById("teacherSelect").value = "";

  closeModal();
}

// ===== LIGHTBOX GALLERY =====
let currentImages = [];
let currentIndex = 0;

function openImage(img){
  currentImages = Array.from(img.parentElement.querySelectorAll("img"));
  currentIndex = currentImages.indexOf(img);

  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeImage(){
  document.getElementById("lightbox").style.display = "none";
}

function nextImage(e){
  e.stopPropagation();
  currentIndex++;
  if(currentIndex >= currentImages.length){
    currentIndex = 0;
  }
  document.getElementById("lightbox-img").src = currentImages[currentIndex].src;
}

function prevImage(e){
  e.stopPropagation();
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = currentImages.length - 1;
  }
  document.getElementById("lightbox-img").src = currentImages[currentIndex].src;
}

function outsideClose(e){
  if(e.target.id === "lightbox"){
    closeImage();
  }
}

document.addEventListener("keydown", function(e){
  let box = document.getElementById("lightbox");

  if(box.style.display === "flex"){
    if(e.key === "ArrowRight"){
      nextImage(e);
    }
    else if(e.key === "ArrowLeft"){
      prevImage(e);
    }
    else if(e.key === "Escape"){
      closeImage();
    }
  }
});

// ===== TYPEWRITER =====
const text = "Kelajakni birga yaratamiz";
let i = 0;

function typeWriter(){
  if(i < text.length){
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

window.addEventListener("load", typeWriter);

// ===== SCROLL ANIMATION =====
function revealOnScroll(){
  let elements = document.querySelectorAll(".teacher-box, .card, .gallery img, .results-gallery img");

  elements.forEach(el => {
    let top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", () => {
  document.querySelectorAll("nav button")[0].classList.add("active-nav");
});

// DAILY TECH FACTS
const facts = [
  "JavaScript was created in only 10 days.",
  "The first computer bug was an actual insect.",
  "Python is named after Monty Python.",
  "HTML is not a programming language.",
  "The first website is still online today."
];

function newFact(){
  let random = Math.floor(Math.random() * facts.length);
  document.getElementById("factText").innerText = facts[random];
}

newFact();


// QUIZ
const quizData = [
  {
    question: "HTML nima?",
    answers: ["Programming language", "Markup language", "Database"],
    correct: "Markup language"
  },
  {
    question: "CSS nima uchun ishlatiladi?",
    answers: ["Design", "Backend", "Database"],
    correct: "Design"
  },
  {
    question: "JavaScript nima qiladi?",
    answers: ["Interactivity", "Cooking", "Photoshop"],
    correct: "Interactivity"
  }
];

function loadQuiz(){
  let q = quizData[Math.floor(Math.random() * quizData.length)];

  document.getElementById("question").innerText = q.question;

  document.getElementById("result").innerText = "";

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer=>{
    let btn = document.createElement("button");
    btn.innerText = answer;

  btn.onclick = function(){

  let result =
  document.getElementById("result");

  result.classList.remove("shake","pop");

  void result.offsetWidth;

  if(answer === q.correct){

    result.innerText =
    "✅ Correct!";

    result.classList.add("pop");

  }else{

    result.innerText =
    "❌ Wrong!";

    result.classList.add("shake");

  }

};

    answersDiv.appendChild(btn);
  });
}

loadQuiz();

function showGame(gameId){

document.getElementById(
"game-home"
).classList.add("hidden");

document.querySelectorAll(
"#games > div"
).forEach(div=>{

if(div.id!=="game-home"){
div.classList.add("hidden");
}

});

document.getElementById(gameId)
.classList.remove("hidden");

if(gameId==="wordgame"){
startWordGame();
}

if(gameId==="typing"){
startTypingGame();
}

if(gameId==="memory"){
startMemoryGame();
}

if(gameId==="battle"){
startBattleGame();
}

}

function backGames(){

document.getElementById(
"game-home"
).classList.remove("hidden");

document.querySelectorAll(
"#games > div"
).forEach(div=>{

if(div.id!=="game-home"){
div.classList.add("hidden");
}

});

}

// ===== WORD GUESS GAME =====

const gameWords = [
"apple",
"teacher",
"computer",
"school",
"javascript",
"student",
"internet",
"keyboard",
"english",
"python"
];

let currentWord = "";
let gameScore = 0;

function startWordGame(){

currentWord =
gameWords[
Math.floor(
Math.random()*gameWords.length
)
];

// SO'ZNI YASHIRISH

let hiddenWord = "";

for(let i=0; i<currentWord.length; i++){

if(
i===0 ||
i===2 ||
i===currentWord.length-1
){

hiddenWord +=
currentWord[i] + " ";

}else{

hiddenWord += "_ ";

}

}

document.getElementById(
"hiddenWord"
).innerText =
hiddenWord;

document.getElementById(
"answer"
).value="";

document.getElementById(
"resultWord"
).innerText="";

}

function checkWord(){

let answer =
document.getElementById(
"answer"
).value.toLowerCase();

let result =
document.getElementById(
"resultWord"
);

result.classList.remove(
"pop",
"shake"
);

// animatsiyani qayta ishga tushirish
void result.offsetWidth;

if(answer===currentWord){

gameScore++;

result.innerText =
"✅ To'g'ri topdingiz!";

result.classList.add("pop");

document.getElementById(
"score"
).innerText =
"Ball: "+gameScore;

setTimeout(
startWordGame,
1000
);

}else{

result.innerText =
"❌ Noto'g'ri, qayta urinib ko'ring!";

result.classList.add("shake");

}

}

// ===== TYPING SPEED GAME =====

const typingWords = [
"javascript",
"computer",
"internet",
"school",
"teacher",
"english",
"keyboard"
];

let currentTypingWord = "";

let typingTime = 10;
let typingInterval;

function startTypingGame(){

clearInterval(
typingInterval
);

typingTime = 10;

document.getElementById(
"typingTimer"
).innerText =
typingTime;

typingInterval =
setInterval(()=>{

typingTime--;

document.getElementById(
"typingTimer"
).innerText =
typingTime;

if(typingTime<=0){

clearInterval(
typingInterval
);

document.getElementById(
"typingResult"
).innerText =
"⏰ Vaqt tugadi!";

setTimeout(
startTypingGame,
1500
);

}

},1000);

currentTypingWord =
typingWords[
Math.floor(
Math.random()*typingWords.length
)
];

document.getElementById(
"typingWord"
).innerText =
currentTypingWord;

document.getElementById(
"typingInput"
).value = "";

document.getElementById(
"typingResult"
).innerText = "";

}

function checkTyping(){

let userText =
document.getElementById(
"typingInput"
).value.toLowerCase();

if(userText === currentTypingWord){

clearInterval(
typingInterval
);

if(typingTime >= 5){

document.getElementById(
"typingResult"
).innerText =
"🚀 Juda tez va to'g'ri yozdingiz!";

}
else if(typingTime >= 3){

document.getElementById(
"typingResult"
).innerText =
"⚡ Tez va to'g'ri yozdingiz!";

}
else{

document.getElementById(
"typingResult"
).innerText =
"🐢 Sekin yozdingiz, keyingisini urinib ko'ring!";

}

setTimeout(
startTypingGame,
1500
);

}else{

document.getElementById(
"typingResult"
).innerText =
"❌ Xato yozdingiz!";

}

}

// ===== MEMORY GAME =====

const memoryIcons = [
"🍎",
"🍎",

"💻",
"💻",

"📚",
"📚",

"🎮",
"🎮",

"🧠",
"🧠",

"⌨️",
"⌨️",

"🌎",
"🌎",

"🚀",
"🚀"
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function startMemoryGame(){

let board =
document.getElementById(
"memoryBoard"
);

board.innerHTML = "";

document.getElementById(
"memoryResult"
).innerText = "";

let shuffled =
memoryIcons.sort(
()=>Math.random()-0.5
);

shuffled.forEach(icon=>{

let card =
document.createElement("div");

card.classList.add(
"memory-card"
);

card.dataset.icon = icon;

card.innerText = icon;

card.onclick = function(){

flipCard(card);

};

board.appendChild(card);

});

}

function flipCard(card){

if(lockBoard) return;

if(card.classList.contains("open"))
return;

card.classList.add("open");

if(!firstCard){

firstCard = card;
return;

}

secondCard = card;

lockBoard = true;

if(
firstCard.dataset.icon ===
secondCard.dataset.icon
){

firstCard.classList.add("done");
secondCard.classList.add("done");

resetMemory();

checkMemoryWin();

}else{

setTimeout(()=>{

firstCard.classList.remove(
"open"
);

secondCard.classList.remove(
"open"
);

resetMemory();

},1000);

}

}

function resetMemory(){

firstCard = null;
secondCard = null;
lockBoard = false;

}

function checkMemoryWin(){

let doneCards =
document.querySelectorAll(
".memory-card.done"
);

if(doneCards.length === 16){

document.getElementById(
"memoryResult"
).innerText =
"🏆 Siz g'alaba qozondingiz!";

}

}

// ===== QUIZ BATTLE GAME =====

const battleQuestions = [

{
question:
"HTML nima?",

answers:[
"Programming language",
"Markup language",
"Database"
],

correct:
"Markup language"
},

{
question:
"CSS nima qiladi?",

answers:[
"Design",
"Cooking",
"Hacking"
],

correct:
"Design"
},

{
question:
"JavaScript nima uchun ishlatiladi?",

answers:[
"Interactivity",
"Photoshop",
"Gaming console"
],

correct:
"Interactivity"
},

{
question:
"Python qanday til?",

answers:[
"Programming language",
"Browser",
"Computer"
],

correct:
"Programming language"
}

];

let battleScore = 0;

function startBattleGame(){

loadBattleQuestion();

}

function loadBattleQuestion(){

let q =
battleQuestions[
Math.floor(
Math.random()*
battleQuestions.length
)
];

document.getElementById(
"battleQuestion"
).innerText =
q.question;

document.getElementById(
"battleResult"
).innerText = "";

let answersDiv =
document.getElementById(
"battleAnswers"
);

answersDiv.innerHTML = "";

q.answers.forEach(answer=>{

let btn =
document.createElement(
"button"
);

btn.innerText = answer;

btn.onclick = function(){

let result =
document.getElementById(
"battleResult"
);

result.classList.remove(
"shake",
"pop"
);

void result.offsetWidth;

if(answer === q.correct){

battleScore++;

result.innerText =
"✅ Correct!";

result.classList.add("pop");

}else{

result.innerText =
"❌ Wrong!";

result.classList.add("shake");

}  

document.getElementById(
"battleScore"
).innerText =
"Ball: " + battleScore;

setTimeout(
loadBattleQuestion,
1000
);

};

answersDiv.appendChild(btn);

});

}

// ===== CERTIFICATE QUESTION DATABASE =====

const readingQuestions = [

{
type:"multiple",
category:"reading",

passage:`
Hi! My name is Anna.
I am 25 years old and I live in London, UK.
I am a student at a university.
I study English every day.

I have a good friend named Carlos.
He is from Spain.
Carlos is 27 years old.
He is a teacher.

We like to drink coffee and talk in the afternoon.
`,

question:"How old is Anna?",

options:[
"20",
"25",
"27"
],

correct:"25"
},

{
type:"multiple",
category:"reading",

passage:`
Hi! My name is Anna.
I am 25 years old and I live in London, UK.
I am a student at a university.
I study English every day.

I have a good friend named Carlos.
He is from Spain.
Carlos is 27 years old.
He is a teacher.

We like to drink coffee and talk in the afternoon.
`,

question:"Where does Anna live?",

options:[
"Spain",
"USA",
"UK"
],

correct:"UK"
},

{
type:"multiple",
category:"reading",

passage:`
Hi! My name is Anna.
I am 25 years old and I live in London, UK.
I am a student at a university.
I study English every day.

I have a good friend named Carlos.
He is from Spain.
Carlos is 27 years old.
He is a teacher.

We like to drink coffee and talk in the afternoon.
`,

question:"What is Anna's job?",

options:[
"She is a teacher",
"She is a student",
"She is a doctor"
],

correct:"She is a student"
},

{type:"multiple",
category:"reading",

passage:`
Hi! My name is Anna.
I am 25 years old and I live in London, UK.
I am a student at a university.
I study English every day.

I have a good friend named Carlos.
He is from Spain.
Carlos is 27 years old.
He is a teacher.

We like to drink coffee and talk in the afternoon.
`,
question:"What language does Anna study?",

options:[
  "Spanish",
  "English",
  "French"
],

correct:"English"
},

{type:"multiple",
category:"reading",

passage:`
Hi! My name is Anna.
I am 25 years old and I live in London, UK.
I am a student at a university.
I study English every day.

I have a good friend named Carlos.
He is from Spain.
Carlos is 27 years old.
He is a teacher.

We like to drink coffee and talk in the afternoon.
`,

question:"Where is Carlos from?",

options:[
"London",
"Spain",
"England"
],

correct:"Spain"
},

{type:"multiple",
 category:"reading",

 passage:`
 Today is Saturday. It is a sunny day.
I wake up at 8 o'clock in the morning. 
I eat a big breakfast with eggs and bread. Then, 
I go to the park with my dog. My dog's name is Max. 
Max is brown and very happy. In the afternoon, I visit my grandmother. 
We eat lunch together.
`,

question:"What day is it today?",

options:[
"Friday",
"Saturday",
"Sunday",
],

correct:"Saturday"
},

{type:"multiple",
category:"reading",

 passage:`
 Today is Saturday. It is a sunny day.
I wake up at 8 o'clock in the morning. 
I eat a big breakfast with eggs and bread. Then, 
I go to the park with my dog. My dog's name is Max. 
Max is brown and very happy. In the afternoon, I visit my grandmother. 
We eat lunch together.
`,

question:"What the weather like?",

options:[
"Rainy",
"Sunny",
"Cold",  
],

correct:"Sunny"
},

{type:"multiple",
 category:"reading",
 
  passage:`
 Today is Saturday. It is a sunny day.
I wake up at 8 o'clock in the morning. 
I eat a big breakfast with eggs and bread. Then, 
I go to the park with my dog. My dog's name is Max. 
Max is brown and very happy. In the afternoon, I visit my grandmother. 
We eat lunch together.
`,

question:"What time does the person wake up?",

options:[
"7 o'clock",
"8 o'clock",
"9 o'clock",
],

correct:"8 o'clock"
},

{type:"multiple",
 category:"reading",
 
   passage:`
 Today is Saturday. It is a sunny day.
I wake up at 8 o'clock in the morning. 
I eat a big breakfast with eggs and bread. Then, 
I go to the park with my dog. My dog's name is Max. 
Max is brown and very happy. In the afternoon, I visit my grandmother. 
We eat lunch together.
`,

question:"What does the person eat for breakfast?",

options:[
"Eggs and bread",
"Apples and Milk",
"Pizza and Salad",  
],

correct:"Eggs and bread"
},

{type:"multiple",
 category:"reading",
 
    passage:`
 Today is Saturday. It is a sunny day.
I wake up at 8 o'clock in the morning. 
I eat a big breakfast with eggs and bread. Then, 
I go to the park with my dog. My dog's name is Max. 
Max is brown and very happy. In the afternoon, I visit my grandmother. 
We eat lunch together.
`,

question:"Who is Max?",

options:[
"A friend",
"A dog",
"A brother",
],

correct:"A dog"
},

{type:"multiple",
category:"reading",

passage:`
My favorite place to eat is "Bella Italia." 
It is a small Italian restaurant in the city center. 
The restaurant opens at 12 o'clock. Many people go there for lunch and dinner. 
They make very good pizza and pasta. 
The waiters are very friendly. I eat there every Friday with my family.
`,

question:"What is the name of the reastaurant?",

options:[
"Bella Italia",
"Little Italy",
"Italian Food",  
],

correct:"Bella Italia"
},

{type:"mu;tiple",
 category:"reading",
 
 passage:`
My favorite place to eat is "Bella Italia." 
It is a small Italian restaurant in the city center. 
The restaurant opens at 12 o'clock. Many people go there for lunch and dinner. 
They make very good pizza and pasta. 
The waiters are very friendly. I eat there every Friday with my family.
`,

question:"What kind of food do they serve?",

options:[
"Mexican Food",
"Italian Food",
"Chinese Food", 
],

correct:"Italian Food"
},

{type:"mu;tiple",
 category:"reading",
 
 passage:`
My favorite place to eat is "Bella Italia." 
It is a small Italian restaurant in the city center. 
The restaurant opens at 12 o'clock. Many people go there for lunch and dinner. 
They make very good pizza and pasta. 
The waiters are very friendly. I eat there every Friday with my family.
`,

question:"Where is the restaurant?",

opions:[
"By the beach",
"In the city center",
"At the airport",  
],

correct:"In the city center"
},

{type:"mu;tiple",
 category:"reading",
 
 passage:`
My favorite place to eat is "Bella Italia." 
It is a small Italian restaurant in the city center. 
The restaurant opens at 12 o'clock. Many people go there for lunch and dinner. 
They make very good pizza and pasta. 
The waiters are very friendly. I eat there every Friday with my family.
`,

question:"What time does the restaurent open?",

options:[
"10 o'clock",
"11 o'clock",
"12 o'clock",  
],

correct:"12 o'clock"
},

{type:"mu;tiple",
 category:"reading",
 
 passage:`
My favorite place to eat is "Bella Italia." 
It is a small Italian restaurant in the city center. 
The restaurant opens at 12 o'clock. Many people go there for lunch and dinner. 
They make very good pizza and pasta. 
The waiters are very friendly. I eat there every Friday with my family.
`,

question:"When does the person eat there?",

options:[
"Every Monday",
"Every Friday",
"Every Sunday",  
],

correct:"Every Friday"
},

{type:"multiple",
category:"reading",

passage:`
Today is Monday. I need to buy food for the week. 
I go to the big supermarket near my house. 
I have a list. 
I need to buy two red apples, one liter of milk, cheese, and a big box of cereal. 
The supermarket is very busy today. I pay with my credit card and walk home.
`,

question:"Where does the person go?",

options:[
"To the park",
"To the supermarket",
"To the school",  
],

correct:"To the supermarket"
},

{type:"multiple",
category:"reading",

passage:`
Today is Monday. I need to buy food for the week. 
I go to the big supermarket near my house. 
I have a list. 
I need to buy two red apples, one liter of milk, cheese, and a big box of cereal. 
The supermarket is very busy today. I pay with my credit card and walk home.
`,

question:"How many apples does the person need",

options:[
"One",
"Two",
"Three",  
],

correct:"Two"
},

{type:"multiple",
 category:"reading",
 
passage:`
Today is Monday. I need to buy food for the week. 
I go to the big supermarket near my house. 
I have a list. 
I need to buy two red apples, one liter of milk, cheese, and a big box of cereal. 
The supermarket is very busy today. I pay with my credit card and walk home.
`,

question:"What kind of milk does the person buy?",

options:[
"One liter",
"Two liters",
"Half a liter",
],

correct:"One liter"
},

{type:"multiple",
 category:"reading",
 
 passage:`
Today is Monday. I need to buy food for the week. 
I go to the big supermarket near my house. 
I have a list. 
I need to buy two red apples, one liter of milk, cheese, and a big box of cereal. 
The supermarket is very busy today. I pay with my credit card and walk home.
`,

question:"How does the person pay?",

options:[
"With cash",
"With a credit card",
"With a debit card",  
],

correct:"With a credit card"
},

{type:"multiple",
 category:"reading",
 
 passage:`
Today is Monday. I need to buy food for the week. 
I go to the big supermarket near my house. 
I have a list. 
I need to buy two red apples, one liter of milk, cheese, and a big box of cereal. 
The supermarket is very busy today. I pay with my credit card and walk home.
`,

question:"How is the supermarket today?",

options:[
"Empty",
"Busy",
"Quiet",
],

correct:"Busy"
},

{type:"multiple",
 category:"reading",
 
 passage:`
 Anna lives in a small village in France, 
 but last month she traveled to London for a week to visit her best friend, Sarah. 
 Anna took an early morning train from Paris, 
 which went under the ocean and arrived in London in just over two hours. 
 Sarah was waiting at the train station with a big smile and a hot cup of tea.

On Tuesday, the two friends went to the British Museum. 
Anna loves history, so she really enjoyed looking at the ancient objects and old coins. 
They spent almost four hours there before walking to a small Italian restaurant nearby for lunch. 
Anna ordered a large cheese pizza, and Sarah had a plate of spaghetti.

Wednesday was a completely different day because the weather was sunny and warm. 
Sarah and Anna decided to go to Hyde Park. 
They rented bicycles and rode around the park for two hours. 
Later, they sat on the green grass, read their books, and drank some cold lemonade. 
Anna thought it was the most relaxing part of the trip.

On Thursday and Friday, they stayed in the city center to do some shopping. 
London has many big department stores, 
and Anna wanted to buy souvenirs for her family back in France. 
She bought three colorful scarves, two books about British kings, 
and a lot of traditional English tea.

On Saturday morning, Anna packed her bags and took the train back to France. 
She was very tired, 
but she was also very happy because she had a wonderful time in her favorite European city.
`,

question:"Where does Anna live?",

options:[
"In London",
"In a small village in France",
"In Paris",
"In a small italian village",
],

correct:"In a small village in France"
},

{type:"multiple",
 category:"reading",
 
 passage:`
 Anna lives in a small village in France, 
 but last month she traveled to London for a week to visit her best friend, Sarah. 
 Anna took an early morning train from Paris, 
 which went under the ocean and arrived in London in just over two hours. 
 Sarah was waiting at the train station with a big smile and a hot cup of tea.

On Tuesday, the two friends went to the British Museum. 
Anna loves history, so she really enjoyed looking at the ancient objects and old coins. 
They spent almost four hours there before walking to a small Italian restaurant nearby for lunch. 
Anna ordered a large cheese pizza, and Sarah had a plate of spaghetti.

Wednesday was a completely different day because the weather was sunny and warm. 
Sarah and Anna decided to go to Hyde Park. 
They rented bicycles and rode around the park for two hours. 
Later, they sat on the green grass, read their books, and drank some cold lemonade. 
Anna thought it was the most relaxing part of the trip.

On Thursday and Friday, they stayed in the city center to do some shopping. 
London has many big department stores, 
and Anna wanted to buy souvenirs for her family back in France. 
She bought three colorful scarves, two books about British kings, 
and a lot of traditional English tea.

On Saturday morning, Anna packed her bags and took the train back to France. 
She was very tired, 
but she was also very happy because she had a wonderful time in her favorite European city.
`,

question:"How did Anna travel from France to London?",

options:[
"By airplanes",
"By train",
"By bus",
"By car",  
],

correct:"By train"
},

{type:"multiple",
 category:"reading",  

passage:`
 Anna lives in a small village in France, 
 but last month she traveled to London for a week to visit her best friend, Sarah. 
 Anna took an early morning train from Paris, 
 which went under the ocean and arrived in London in just over two hours. 
 Sarah was waiting at the train station with a big smile and a hot cup of tea.

On Tuesday, the two friends went to the British Museum. 
Anna loves history, so she really enjoyed looking at the ancient objects and old coins. 
They spent almost four hours there before walking to a small Italian restaurant nearby for lunch. 
Anna ordered a large cheese pizza, and Sarah had a plate of spaghetti.

Wednesday was a completely different day because the weather was sunny and warm. 
Sarah and Anna decided to go to Hyde Park. 
They rented bicycles and rode around the park for two hours. 
Later, they sat on the green grass, read their books, and drank some cold lemonade. 
Anna thought it was the most relaxing part of the trip.

On Thursday and Friday, they stayed in the city center to do some shopping. 
London has many big department stores, 
and Anna wanted to buy souvenirs for her family back in France. 
She bought three colorful scarves, two books about British kings, 
and a lot of traditional English tea.

On Saturday morning, Anna packed her bags and took the train back to France. 
She was very tired, 
but she was also very happy because she had a wonderful time in her favorite European city.
`,

question:"What did Sarah gve Anna when she arrived?",

options:[
"A hot cup of tea",
 "A cold lemonade",
 "A map of London",
 "A cheese Pizza"
],

correct:"A hot cup of tea"
},

{type:"multiple",
category:"reading",

  passage:`
 Anna lives in a small village in France, 
 but last month she traveled to London for a week to visit her best friend, Sarah. 
 Anna took an early morning train from Paris, 
 which went under the ocean and arrived in London in just over two hours. 
 Sarah was waiting at the train station with a big smile and a hot cup of tea.

On Tuesday, the two friends went to the British Museum. 
Anna loves history, so she really enjoyed looking at the ancient objects and old coins. 
They spent almost four hours there before walking to a small Italian restaurant nearby for lunch. 
Anna ordered a large cheese pizza, and Sarah had a plate of spaghetti.

Wednesday was a completely different day because the weather was sunny and warm. 
Sarah and Anna decided to go to Hyde Park. 
They rented bicycles and rode around the park for two hours. 
Later, they sat on the green grass, read their books, and drank some cold lemonade. 
Anna thought it was the most relaxing part of the trip.

On Thursday and Friday, they stayed in the city center to do some shopping. 
London has many big department stores, 
and Anna wanted to buy souvenirs for her family back in France. 
She bought three colorful scarves, two books about British kings, 
and a lot of traditional English tea.

On Saturday morning, Anna packed her bags and took the train back to France. 
She was very tired, 
but she was also very happy because she had a wonderful time in her favorite European city.
`,

question:"What did they do on Thuesday?",

options:[
"They went to a department store",
"They visited the British Museum",
"They rode bicycles in the park",
"They stayed at home and read books",
],

correct:"They visited the British Museum"
},

{type:"multiple",
 category:"reading",
 
 passage:`
 Anna lives in a small village in France, 
 but last month she traveled to London for a week to visit her best friend, Sarah. 
 Anna took an early morning train from Paris, 
 which went under the ocean and arrived in London in just over two hours. 
 Sarah was waiting at the train station with a big smile and a hot cup of tea.

On Tuesday, the two friends went to the British Museum. 
Anna loves history, so she really enjoyed looking at the ancient objects and old coins. 
They spent almost four hours there before walking to a small Italian restaurant nearby for lunch. 
Anna ordered a large cheese pizza, and Sarah had a plate of spaghetti.

Wednesday was a completely different day because the weather was sunny and warm. 
Sarah and Anna decided to go to Hyde Park. 
They rented bicycles and rode around the park for two hours. 
Later, they sat on the green grass, read their books, and drank some cold lemonade. 
Anna thought it was the most relaxing part of the trip.

On Thursday and Friday, they stayed in the city center to do some shopping. 
London has many big department stores, 
and Anna wanted to buy souvenirs for her family back in France. 
She bought three colorful scarves, two books about British kings, 
and a lot of traditional English tea.

On Saturday morning, Anna packed her bags and took the train back to France. 
She was very tired, 
but she was also very happy because she had a wonderful time in her favorite European city.
`,

question:"How long did they stay at the museum",

options:[
  "For two hours",
  "For three hours",
  "For almost four hours",
  "For the whole day",
],

correct:"For almost four hours"
},

{type:"multiple",
category:"reading",

passage:`
 Anna lives in a small village in France, 
 but last month she traveled to London for a week to visit her best friend, Sarah. 
 Anna took an early morning train from Paris, 
 which went under the ocean and arrived in London in just over two hours. 
 Sarah was waiting at the train station with a big smile and a hot cup of tea.

On Tuesday, the two friends went to the British Museum. 
Anna loves history, so she really enjoyed looking at the ancient objects and old coins. 
They spent almost four hours there before walking to a small Italian restaurant nearby for lunch. 
Anna ordered a large cheese pizza, and Sarah had a plate of spaghetti.

Wednesday was a completely different day because the weather was sunny and warm. 
Sarah and Anna decided to go to Hyde Park. 
They rented bicycles and rode around the park for two hours. 
Later, they sat on the green grass, read their books, and drank some cold lemonade. 
Anna thought it was the most relaxing part of the trip.

On Thursday and Friday, they stayed in the city center to do some shopping. 
London has many big department stores, 
and Anna wanted to buy souvenirs for her family back in France. 
She bought three colorful scarves, two books about British kings, 
and a lot of traditional English tea.

On Saturday morning, Anna packed her bags and took the train back to France. 
She was very tired, 
but she was also very happy because she had a wonderful time in her favorite European city.
`,

question:"What did Anna eat for lunch on Tuesday?",

options:[
"Spaghetii",
"A cheese pizza",
"A sandwich",
"Soup",  
],

correct:"A cheese pizza"
},

{type:"multilevel",
 category:"reading",
 
 passage:`
 Anna lives in a small village in France, 
 but last month she traveled to London for a week to visit her best friend, Sarah. 
 Anna took an early morning train from Paris, 
 which went under the ocean and arrived in London in just over two hours. 
 Sarah was waiting at the train station with a big smile and a hot cup of tea.

On Tuesday, the two friends went to the British Museum. 
Anna loves history, so she really enjoyed looking at the ancient objects and old coins. 
They spent almost four hours there before walking to a small Italian restaurant nearby for lunch. 
Anna ordered a large cheese pizza, and Sarah had a plate of spaghetti.

Wednesday was a completely different day because the weather was sunny and warm. 
Sarah and Anna decided to go to Hyde Park. 
They rented bicycles and rode around the park for two hours. 
Later, they sat on the green grass, read their books, and drank some cold lemonade. 
Anna thought it was the most relaxing part of the trip.

On Thursday and Friday, they stayed in the city center to do some shopping. 
London has many big department stores, 
and Anna wanted to buy souvenirs for her family back in France. 
She bought three colorful scarves, two books about British kings, 
and a lot of traditional English tea.

On Saturday morning, Anna packed her bags and took the train back to France. 
She was very tired, 
but she was also very happy because she had a wonderful time in her favorite European city.
`,

question:"What was the weather like on Wednesday?",

options:[
"Cold and rainy",
"Windy and snowy",
 "Sunny and warm",
 "Cloudy and foggy",
],

correct:"Sunny and warm"
},

{type:"multiple",
 category:"reading",
 
 passage:`
 Anna lives in a small village in France, 
 but last month she traveled to London for a week to visit her best friend, Sarah. 
 Anna took an early morning train from Paris, 
 which went under the ocean and arrived in London in just over two hours. 
 Sarah was waiting at the train station with a big smile and a hot cup of tea.

On Tuesday, the two friends went to the British Museum. 
Anna loves history, so she really enjoyed looking at the ancient objects and old coins. 
They spent almost four hours there before walking to a small Italian restaurant nearby for lunch. 
Anna ordered a large cheese pizza, and Sarah had a plate of spaghetti.

Wednesday was a completely different day because the weather was sunny and warm. 
Sarah and Anna decided to go to Hyde Park. 
They rented bicycles and rode around the park for two hours. 
Later, they sat on the green grass, read their books, and drank some cold lemonade. 
Anna thought it was the most relaxing part of the trip.

On Thursday and Friday, they stayed in the city center to do some shopping. 
London has many big department stores, 
and Anna wanted to buy souvenirs for her family back in France. 
She bought three colorful scarves, two books about British kings, 
and a lot of traditional English tea.

On Saturday morning, Anna packed her bags and took the train back to France. 
She was very tired, 
but she was also very happy because she had a wonderful time in her favorite European city.
`,

question:"Where did they ride they bike?",

options:[
"In the city center",
"In the village",
"In Hyde Park",
"Near the Italian restaurant",  
],

correct:"In Hyde Park"
},

{type:"multiple",
 category:"reading",
 
 passage:`
 Anna lives in a small village in France, 
 but last month she traveled to London for a week to visit her best friend, Sarah. 
 Anna took an early morning train from Paris, 
 which went under the ocean and arrived in London in just over two hours. 
 Sarah was waiting at the train station with a big smile and a hot cup of tea.

On Tuesday, the two friends went to the British Museum. 
Anna loves history, so she really enjoyed looking at the ancient objects and old coins. 
They spent almost four hours there before walking to a small Italian restaurant nearby for lunch. 
Anna ordered a large cheese pizza, and Sarah had a plate of spaghetti.

Wednesday was a completely different day because the weather was sunny and warm. 
Sarah and Anna decided to go to Hyde Park. 
They rented bicycles and rode around the park for two hours. 
Later, they sat on the green grass, read their books, and drank some cold lemonade. 
Anna thought it was the most relaxing part of the trip.

On Thursday and Friday, they stayed in the city center to do some shopping. 
London has many big department stores, 
and Anna wanted to buy souvenirs for her family back in France. 
She bought three colorful scarves, two books about British kings, 
and a lot of traditional English tea.

On Saturday morning, Anna packed her bags and took the train back to France. 
She was very tired, 
but she was also very happy because she had a wonderful time in her favorite European city.
`,

question:"What did Anna buy at the department stores?",

options:[
"Clothes and books",
"Bicycles and helemts",
"Food and drinks",
"Furniture and paintings",  
],

correct:"Clothes and books"
},

{type:"multiple",
 category:"reading",
 
 passage:`
 Anna lives in a small village in France, 
 but last month she traveled to London for a week to visit her best friend, Sarah. 
 Anna took an early morning train from Paris, 
 which went under the ocean and arrived in London in just over two hours. 
 Sarah was waiting at the train station with a big smile and a hot cup of tea.

On Tuesday, the two friends went to the British Museum. 
Anna loves history, so she really enjoyed looking at the ancient objects and old coins. 
They spent almost four hours there before walking to a small Italian restaurant nearby for lunch. 
Anna ordered a large cheese pizza, and Sarah had a plate of spaghetti.

Wednesday was a completely different day because the weather was sunny and warm. 
Sarah and Anna decided to go to Hyde Park. 
They rented bicycles and rode around the park for two hours. 
Later, they sat on the green grass, read their books, and drank some cold lemonade. 
Anna thought it was the most relaxing part of the trip.

On Thursday and Friday, they stayed in the city center to do some shopping. 
London has many big department stores, 
and Anna wanted to buy souvenirs for her family back in France. 
She bought three colorful scarves, two books about British kings, 
and a lot of traditional English tea.

On Saturday morning, Anna packed her bags and took the train back to France. 
She was very tired, 
but she was also very happy because she had a wonderful time in her favorite European city.
`,

question:"When did Anna go back to France?",

options:[
"On Friday afternoon",
"On Saturday morning",
"On Sunday evening",
"On Monday morning",  
],

correct:"On Saturday morning"
},

{type:"multiple",
 category:"reading",
 
  passage:`
 My name is David, and I am twenty-five years old. I work as an animal doctor,
  which is also called a veterinarian. 
  I live in a big city in Canada, but I work at a very large zoo outside the city. 
  Every morning, I wake up at half past six, eat a quick breakfast, 
  and drive my car to the zoo. It takes about forty minutes to get there.

My job is very interesting because every day is different. 
I take care of many different animals, such as lions, elephants, monkeys, and bears. 
In the morning, I usually walk around the zoo to check if all the animals are healthy. 
Sometimes, an animal eats something it shouldn't and gets a stomachache. 
When this happens, I give them medicine and make sure they rest.

One of my favorite parts of the day is feeding the baby animals. 
Last year, a baby monkey was born, and it was very sick. 
I had to give it milk with a bottle every three hours. 
Now, the monkey is very strong and happy. It always jumps up and down when it sees me.

Being a veterinarian can also be difficult and sometimes dangerous. 
Last month, a large lion had a bad tooth, and I had to fix it. 
I was a little scared, but I used special medicine to make the lion sleep so I could work safely.

I work from Monday to Friday, but I sometimes work on weekends if an animal is very sick. 
I love my job very much because I enjoy helping animals and learning about them every single day. 
I would never want to do anything else.
`,

question:"How old is David?",

options:[
"Twenty years old",
"Twenty-two years old",
"Twenty-five years old",
"Thirty years old",  
],

correct:"Twenty-five years old"
},

{type:"multiple",
 category:"reading",
 
  passage:`
 My name is David, and I am twenty-five years old. I work as an animal doctor,
  which is also called a veterinarian. 
  I live in a big city in Canada, but I work at a very large zoo outside the city. 
  Every morning, I wake up at half past six, eat a quick breakfast, 
  and drive my car to the zoo. It takes about forty minutes to get there.

My job is very interesting because every day is different. 
I take care of many different animals, such as lions, elephants, monkeys, and bears. 
In the morning, I usually walk around the zoo to check if all the animals are healthy. 
Sometimes, an animal eats something it shouldn't and gets a stomachache. 
When this happens, I give them medicine and make sure they rest.

One of my favorite parts of the day is feeding the baby animals. 
Last year, a baby monkey was born, and it was very sick. 
I had to give it milk with a bottle every three hours. 
Now, the monkey is very strong and happy. It always jumps up and down when it sees me.

Being a veterinarian can also be difficult and sometimes dangerous. 
Last month, a large lion had a bad tooth, and I had to fix it. 
I was a little scared, but I used special medicine to make the lion sleep so I could work safely.

I work from Monday to Friday, but I sometimes work on weekends if an animal is very sick. 
I love my job very much because I enjoy helping animals and learning about them every single day. 
I would never want to do anything else.
`,

question:"Where does David work?",

options:[
"In a small hospital",
"At a very large zoo",
"At school",
"On farm",   
],

correct:"At a very large zoo"
}, 

{type:"multiple",
 category:"reading",
 
 passage:`
 My name is David, and I am twenty-five years old. I work as an animal doctor,
  which is also called a veterinarian. 
  I live in a big city in Canada, but I work at a very large zoo outside the city. 
  Every morning, I wake up at half past six, eat a quick breakfast, 
  and drive my car to the zoo. It takes about forty minutes to get there.

My job is very interesting because every day is different. 
I take care of many different animals, such as lions, elephants, monkeys, and bears. 
In the morning, I usually walk around the zoo to check if all the animals are healthy. 
Sometimes, an animal eats something it shouldn't and gets a stomachache. 
When this happens, I give them medicine and make sure they rest.

One of my favorite parts of the day is feeding the baby animals. 
Last year, a baby monkey was born, and it was very sick. 
I had to give it milk with a bottle every three hours. 
Now, the monkey is very strong and happy. It always jumps up and down when it sees me.

Being a veterinarian can also be difficult and sometimes dangerous. 
Last month, a large lion had a bad tooth, and I had to fix it. 
I was a little scared, but I used special medicine to make the lion sleep so I could work safely.

I work from Monday to Friday, but I sometimes work on weekends if an animal is very sick. 
I love my job very much because I enjoy helping animals and learning about them every single day. 
I would never want to do anything else.
`,

question:"How does David travel to work?",

options:[
"By bus",
"By train",
"By bicycle",
"By car",
],

correct:"By car"
},

{type:"multiple",
 category:"reading",
 
 passage:`
 My name is David, and I am twenty-five years old. I work as an animal doctor,
  which is also called a veterinarian. 
  I live in a big city in Canada, but I work at a very large zoo outside the city. 
  Every morning, I wake up at half past six, eat a quick breakfast, 
  and drive my car to the zoo. It takes about forty minutes to get there.

My job is very interesting because every day is different. 
I take care of many different animals, such as lions, elephants, monkeys, and bears. 
In the morning, I usually walk around the zoo to check if all the animals are healthy. 
Sometimes, an animal eats something it shouldn't and gets a stomachache. 
When this happens, I give them medicine and make sure they rest.

One of my favorite parts of the day is feeding the baby animals. 
Last year, a baby monkey was born, and it was very sick. 
I had to give it milk with a bottle every three hours. 
Now, the monkey is very strong and happy. It always jumps up and down when it sees me.

Being a veterinarian can also be difficult and sometimes dangerous. 
Last month, a large lion had a bad tooth, and I had to fix it. 
I was a little scared, but I used special medicine to make the lion sleep so I could work safely.

I work from Monday to Friday, but I sometimes work on weekends if an animal is very sick. 
I love my job very much because I enjoy helping animals and learning about them every single day. 
I would never want to do anything else.
`,

question:"What does David do first in the morning?",

options:[
"He feeds baby monkeys",
"He checks if the animals are healthy",
"He gives medicine to the lions",
"He cleans the animals cage",  
],

correct:"He checks if the animals are healthy"
},

{type:"multiple",
 category:"readng",
 
 passage:`
 My name is David, and I am twenty-five years old. I work as an animal doctor,
  which is also called a veterinarian. 
  I live in a big city in Canada, but I work at a very large zoo outside the city. 
  Every morning, I wake up at half past six, eat a quick breakfast, 
  and drive my car to the zoo. It takes about forty minutes to get there.

My job is very interesting because every day is different. 
I take care of many different animals, such as lions, elephants, monkeys, and bears. 
In the morning, I usually walk around the zoo to check if all the animals are healthy. 
Sometimes, an animal eats something it shouldn't and gets a stomachache. 
When this happens, I give them medicine and make sure they rest.

One of my favorite parts of the day is feeding the baby animals. 
Last year, a baby monkey was born, and it was very sick. 
I had to give it milk with a bottle every three hours. 
Now, the monkey is very strong and happy. It always jumps up and down when it sees me.

Being a veterinarian can also be difficult and sometimes dangerous. 
Last month, a large lion had a bad tooth, and I had to fix it. 
I was a little scared, but I used special medicine to make the lion sleep so I could work safely.

I work from Monday to Friday, but I sometimes work on weekends if an animal is very sick. 
I love my job very much because I enjoy helping animals and learning about them every single day. 
I would never want to do anything else.
`,

questions:"What happens when an animal gets a stomachache?",

options:[
"David gives them medicine",
"David takes the to his house",
"David calls another doctor",
"David gives them more food",
],

correct:"David gives them medicine"
},

{type:"multiple",
 category:"reading",
 
 passage:`
 My name is David, and I am twenty-five years old. I work as an animal doctor,
  which is also called a veterinarian. 
  I live in a big city in Canada, but I work at a very large zoo outside the city. 
  Every morning, I wake up at half past six, eat a quick breakfast, 
  and drive my car to the zoo. It takes about forty minutes to get there.

My job is very interesting because every day is different. 
I take care of many different animals, such as lions, elephants, monkeys, and bears. 
In the morning, I usually walk around the zoo to check if all the animals are healthy. 
Sometimes, an animal eats something it shouldn't and gets a stomachache. 
When this happens, I give them medicine and make sure they rest.

One of my favorite parts of the day is feeding the baby animals. 
Last year, a baby monkey was born, and it was very sick. 
I had to give it milk with a bottle every three hours. 
Now, the monkey is very strong and happy. It always jumps up and down when it sees me.

Being a veterinarian can also be difficult and sometimes dangerous. 
Last month, a large lion had a bad tooth, and I had to fix it. 
I was a little scared, but I used special medicine to make the lion sleep so I could work safely.

I work from Monday to Friday, but I sometimes work on weekends if an animal is very sick. 
I love my job very much because I enjoy helping animals and learning about them every single day. 
I would never want to do anything else.
`,

question:"What did David do for the sick baby monkey last year?",

options:[
"He gave it milk with a bottle",
"He played with it all day",
"He gave it some fruit",
"He moved it to a different zoo",  
],

correct:"He gave it milk with a bottle"
},

{type:"multiple",
 category:"reading",
 
  passage:`
 My name is David, and I am twenty-five years old. I work as an animal doctor,
  which is also called a veterinarian. 
  I live in a big city in Canada, but I work at a very large zoo outside the city. 
  Every morning, I wake up at half past six, eat a quick breakfast, 
  and drive my car to the zoo. It takes about forty minutes to get there.

My job is very interesting because every day is different. 
I take care of many different animals, such as lions, elephants, monkeys, and bears. 
In the morning, I usually walk around the zoo to check if all the animals are healthy. 
Sometimes, an animal eats something it shouldn't and gets a stomachache. 
When this happens, I give them medicine and make sure they rest.

One of my favorite parts of the day is feeding the baby animals. 
Last year, a baby monkey was born, and it was very sick. 
I had to give it milk with a bottle every three hours. 
Now, the monkey is very strong and happy. It always jumps up and down when it sees me.

Being a veterinarian can also be difficult and sometimes dangerous. 
Last month, a large lion had a bad tooth, and I had to fix it. 
I was a little scared, but I used special medicine to make the lion sleep so I could work safely.

I work from Monday to Friday, but I sometimes work on weekends if an animal is very sick. 
I love my job very much because I enjoy helping animals and learning about them every single day. 
I would never want to do anything else.
`,

question:"How did David feel when he had fix the lion's tooth?",

options:[
"Very happy",
"A little scared",
"Very angry",
"Extremely bored",  
],

correct:"A little scared"
},

{type:"multiple",
 category:"reading",
 
  passage:`
 My name is David, and I am twenty-five years old. I work as an animal doctor,
  which is also called a veterinarian. 
  I live in a big city in Canada, but I work at a very large zoo outside the city. 
  Every morning, I wake up at half past six, eat a quick breakfast, 
  and drive my car to the zoo. It takes about forty minutes to get there.

My job is very interesting because every day is different. 
I take care of many different animals, such as lions, elephants, monkeys, and bears. 
In the morning, I usually walk around the zoo to check if all the animals are healthy. 
Sometimes, an animal eats something it shouldn't and gets a stomachache. 
When this happens, I give them medicine and make sure they rest.

One of my favorite parts of the day is feeding the baby animals. 
Last year, a baby monkey was born, and it was very sick. 
I had to give it milk with a bottle every three hours. 
Now, the monkey is very strong and happy. It always jumps up and down when it sees me.

Being a veterinarian can also be difficult and sometimes dangerous. 
Last month, a large lion had a bad tooth, and I had to fix it. 
I was a little scared, but I used special medicine to make the lion sleep so I could work safely.

I work from Monday to Friday, but I sometimes work on weekends if an animal is very sick. 
I love my job very much because I enjoy helping animals and learning about them every single day. 
I would never want to do anything else.
`,

question:"Why did David use special medicine on the lion?",

options:[
"To help the lion sleep safely",
"To make the lion eat its food",
"To stop the lion from running",
"To make the lion stronger",
],

correct:"To help the lion sleep safely",
},

{type:"multiple",
 category:"reading",
 
  passage:`
 My name is David, and I am twenty-five years old. I work as an animal doctor,
  which is also called a veterinarian. 
  I live in a big city in Canada, but I work at a very large zoo outside the city. 
  Every morning, I wake up at half past six, eat a quick breakfast, 
  and drive my car to the zoo. It takes about forty minutes to get there.

My job is very interesting because every day is different. 
I take care of many different animals, such as lions, elephants, monkeys, and bears. 
In the morning, I usually walk around the zoo to check if all the animals are healthy. 
Sometimes, an animal eats something it shouldn't and gets a stomachache. 
When this happens, I give them medicine and make sure they rest.

One of my favorite parts of the day is feeding the baby animals. 
Last year, a baby monkey was born, and it was very sick. 
I had to give it milk with a bottle every three hours. 
Now, the monkey is very strong and happy. It always jumps up and down when it sees me.

Being a veterinarian can also be difficult and sometimes dangerous. 
Last month, a large lion had a bad tooth, and I had to fix it. 
I was a little scared, but I used special medicine to make the lion sleep so I could work safely.

I work from Monday to Friday, but I sometimes work on weekends if an animal is very sick. 
I love my job very much because I enjoy helping animals and learning about them every single day. 
I would never want to do anything else.
`,

question:"On which days does David usually work?",

options:[
"From Monday to Sunday",
"Only on weekends",
"From Monday to Friday",
" From Tuesday to Saturday",  
],

correct:"From Monday to Friday"
},

{type:"multiple",
 category:"reading",
 
  passage:`
 My name is David, and I am twenty-five years old. I work as an animal doctor,
  which is also called a veterinarian. 
  I live in a big city in Canada, but I work at a very large zoo outside the city. 
  Every morning, I wake up at half past six, eat a quick breakfast, 
  and drive my car to the zoo. It takes about forty minutes to get there.

My job is very interesting because every day is different. 
I take care of many different animals, such as lions, elephants, monkeys, and bears. 
In the morning, I usually walk around the zoo to check if all the animals are healthy. 
Sometimes, an animal eats something it shouldn't and gets a stomachache. 
When this happens, I give them medicine and make sure they rest.

One of my favorite parts of the day is feeding the baby animals. 
Last year, a baby monkey was born, and it was very sick. 
I had to give it milk with a bottle every three hours. 
Now, the monkey is very strong and happy. It always jumps up and down when it sees me.

Being a veterinarian can also be difficult and sometimes dangerous. 
Last month, a large lion had a bad tooth, and I had to fix it. 
I was a little scared, but I used special medicine to make the lion sleep so I could work safely.

I work from Monday to Friday, but I sometimes work on weekends if an animal is very sick. 
I love my job very much because I enjoy helping animals and learning about them every single day. 
I would never want to do anything else.
`,

question:"Why does David love his job?",

options:[
"He makes a lot of money",
"He has a lot of free time",
"He enjoys helping animals",
"He lives near the zoo",  
],

correct:"He enjoys helping animals"
},

{type:"multiple",
 category:"reading",
 
 passage:`
 Last year, Sarah decided she needed a change from her busy office job.
  She wanted a hobby that would help her relax and spend more time outdoors. 
  After looking at a few options, she decided to try birdwatching. 
  At first, she thought it might be boring, but she quickly discovered how exciting it could be.
   She bought a pair of binoculars and a small guidebook.

Her favorite place to go is the local nature reserve, 
which is only a ten-minute drive from her house. 
She usually goes there on Saturday mornings when the park is quiet. 
So far, she has identified over thirty different types of birds. 
Her favorite is the kingfisher because of its beautiful blue and orange feathers.

Birdwatching has changed Sarah’s life in many positive ways. 
She feels much less stressed than she did a year ago, and she is getting a lot more exercise. 
She also loves taking photographs of the birds to share with her friends online. 
She encourages anyone who is looking for a new hobby to give it a try.
 `,

 question:"Why did Sarah decide to take up a new hobby?",

 options:[
 "She wanted to make new friends",
 "She wanted relax and spend more time outside",
 "She was tired of working at an office",
 "She needed to earn extra money",  
 ],

correct:"She wanted relax and spend more time outside"
},

{type:"multiple",
 category:"reading",
 
  passage:`
 Last year, Sarah decided she needed a change from her busy office job.
  She wanted a hobby that would help her relax and spend more time outdoors. 
  After looking at a few options, she decided to try birdwatching. 
  At first, she thought it might be boring, but she quickly discovered how exciting it could be.
   She bought a pair of binoculars and a small guidebook.

Her favorite place to go is the local nature reserve, 
which is only a ten-minute drive from her house. 
She usually goes there on Saturday mornings when the park is quiet. 
So far, she has identified over thirty different types of birds. 
Her favorite is the kingfisher because of its beautiful blue and orange feathers.

Birdwatching has changed Sarah’s life in many positive ways. 
She feels much less stressed than she did a year ago, and she is getting a lot more exercise. 
She also loves taking photographs of the birds to share with her friends online. 
She encourages anyone who is looking for a new hobby to give it a try.
 `,

 question:"What was Sarah's initial opinion about birdwatching?",

 options:[
 "She thought it would be boring",
 "She thought it would be difficult",
 "She thought it would be expensive",
 "She thought it would be easy", 
 ],

 correct:"She thought it would be boring"
},

{type:"multiple",
 category:"reading",
 
  passage:`
 Last year, Sarah decided she needed a change from her busy office job.
  She wanted a hobby that would help her relax and spend more time outdoors. 
  After looking at a few options, she decided to try birdwatching. 
  At first, she thought it might be boring, but she quickly discovered how exciting it could be.
   She bought a pair of binoculars and a small guidebook.

Her favorite place to go is the local nature reserve, 
which is only a ten-minute drive from her house. 
She usually goes there on Saturday mornings when the park is quiet. 
So far, she has identified over thirty different types of birds. 
Her favorite is the kingfisher because of its beautiful blue and orange feathers.

Birdwatching has changed Sarah’s life in many positive ways. 
She feels much less stressed than she did a year ago, and she is getting a lot more exercise. 
She also loves taking photographs of the birds to share with her friends online. 
She encourages anyone who is looking for a new hobby to give it a try.
 `,

 question:"Where does Sarah usually go to watch birds?",

 options:[
 "The local zoo",
 "Her own backyard",
 "The city park",
 "The local national reserve", 
 ],

 correct:"The local national reserve"
},

{type:"multiple",
 category:"reading",
 
  passage:`
 Last year, Sarah decided she needed a change from her busy office job.
  She wanted a hobby that would help her relax and spend more time outdoors. 
  After looking at a few options, she decided to try birdwatching. 
  At first, she thought it might be boring, but she quickly discovered how exciting it could be.
   She bought a pair of binoculars and a small guidebook.

Her favorite place to go is the local nature reserve, 
which is only a ten-minute drive from her house. 
She usually goes there on Saturday mornings when the park is quiet. 
So far, she has identified over thirty different types of birds. 
Her favorite is the kingfisher because of its beautiful blue and orange feathers.

Birdwatching has changed Sarah’s life in many positive ways. 
She feels much less stressed than she did a year ago, and she is getting a lot more exercise. 
She also loves taking photographs of the birds to share with her friends online. 
She encourages anyone who is looking for a new hobby to give it a try.
 `,

 question:"How many types of birdshas Sarah identified so far?",

 options:[
 "Exactly thirty",
 "Less than thirty",
 "More than thirty",
 "Exactly fifty", 
 ],

 correct:"More than thirty"
},

{type:"multiple",
 category:"reading",
 
  passage:`
 Last year, Sarah decided she needed a change from her busy office job.
  She wanted a hobby that would help her relax and spend more time outdoors. 
  After looking at a few options, she decided to try birdwatching. 
  At first, she thought it might be boring, but she quickly discovered how exciting it could be.
   She bought a pair of binoculars and a small guidebook.

Her favorite place to go is the local nature reserve, 
which is only a ten-minute drive from her house. 
She usually goes there on Saturday mornings when the park is quiet. 
So far, she has identified over thirty different types of birds. 
Her favorite is the kingfisher because of its beautiful blue and orange feathers.

Birdwatching has changed Sarah’s life in many positive ways. 
She feels much less stressed than she did a year ago, and she is getting a lot more exercise. 
She also loves taking photographs of the birds to share with her friends online. 
She encourages anyone who is looking for a new hobby to give it a try.
 `,

 question:"According to the text, what is one benefit Sarah experienced from Birdwatching?",

 options:[
 "She learnd how to paint",
 "She feels much less stressed",
 "She found a new job",
 "She bought a new camera", 
 ],

 correct:"She feels much less stressed"
},

{type:"multiple",
 category:"reading",

 passage:`Next month, Tom and his sister, Emma, 
 are finally going to fulfill their dream of visiting London. 
 They have been saving money for over two years to pay for this trip. 
 They booked a small hotel located in the center of the city, 
 which will make it easy to walk to many of the main tourist attractions.

Their flight arrives at Heathrow Airport on a Tuesday morning. After checking into the hotel,
 they plan to go straight to the British Museum because Emma loves history. 
 On Wednesday, they have tickets for a famous musical in the West End. 
 Tom is particularly excited about visiting the London Eye on Thursday, 
 as he wants to take panoramic photographs of the city from the top.

Of course, they also want to experience the local culture. 
They are planning to eat at traditional British pubs and try dishes like fish and chips. 
Since the weather in the UK can be unpredictable, 
they have both packed warm jackets and umbrellas. 
They are hoping for a few sunny days, but they are prepared for rain.
 `,

 question:"How long have Tom and Emma been saving for their trip?",

 options:[
 "One year",
 "Less than a year",
 "Two years",
 "Over trwo years", 
 ],

 correct:"Over two year"
},

{type:"multiple",
 category:'reading',
 
  passage:`Next month, Tom and his sister, Emma, 
 are finally going to fulfill their dream of visiting London. 
 They have been saving money for over two years to pay for this trip. 
 They booked a small hotel located in the center of the city, 
 which will make it easy to walk to many of the main tourist attractions.

Their flight arrives at Heathrow Airport on a Tuesday morning. After checking into the hotel,
 they plan to go straight to the British Museum because Emma loves history. 
 On Wednesday, they have tickets for a famous musical in the West End. 
 Tom is particularly excited about visiting the London Eye on Thursday, 
 as he wants to take panoramic photographs of the city from the top.

Of course, they also want to experience the local culture. 
They are planning to eat at traditional British pubs and try dishes like fish and chips. 
Since the weather in the UK can be unpredictable, 
they have both packed warm jackets and umbrellas. 
They are hoping for a few sunny days, but they are prepared for rain.
 `,

 question:"Where is their hotel located?",

 options:[
 "Near the airport",
 "In the center of the city",
 "In the countryside",
 "Next to the British Museum", 
 ],

 correct:"In the center of the city"
},

{type:"multiple",
 category:"reading",
 
 passage:`Next month, Tom and his sister, Emma, 
 are finally going to fulfill their dream of visiting London. 
 They have been saving money for over two years to pay for this trip. 
 They booked a small hotel located in the center of the city, 
 which will make it easy to walk to many of the main tourist attractions.

Their flight arrives at Heathrow Airport on a Tuesday morning. After checking into the hotel,
 they plan to go straight to the British Museum because Emma loves history. 
 On Wednesday, they have tickets for a famous musical in the West End. 
 Tom is particularly excited about visiting the London Eye on Thursday, 
 as he wants to take panoramic photographs of the city from the top.

Of course, they also want to experience the local culture. 
They are planning to eat at traditional British pubs and try dishes like fish and chips. 
Since the weather in the UK can be unpredictable, 
they have both packed warm jackets and umbrellas. 
They are hoping for a few sunny days, but they are prepared for rain.
 `,

 question:"What do they plan to do on Wednesday?",

 options:[
 "Visit the British Museum",
 "Go to the London Eye",
 "See a musical in the West End",
 "Go shopping for clothes", 
 ],

 correct:"See a musical in the West End"
},

{type:"multiple",
 category:"reading",
 
  passage:`Next month, Tom and his sister, Emma, 
 are finally going to fulfill their dream of visiting London. 
 They have been saving money for over two years to pay for this trip. 
 They booked a small hotel located in the center of the city, 
 which will make it easy to walk to many of the main tourist attractions.

Their flight arrives at Heathrow Airport on a Tuesday morning. After checking into the hotel,
 they plan to go straight to the British Museum because Emma loves history. 
 On Wednesday, they have tickets for a famous musical in the West End. 
 Tom is particularly excited about visiting the London Eye on Thursday, 
 as he wants to take panoramic photographs of the city from the top.

Of course, they also want to experience the local culture. 
They are planning to eat at traditional British pubs and try dishes like fish and chips. 
Since the weather in the UK can be unpredictable, 
they have both packed warm jackets and umbrellas. 
They are hoping for a few sunny days, but they are prepared for rain.
 `,

 question:"Why does Tom wants to go on the London Eye?",

 options:[
 "To learn about British History",
 "To take photographs of the city",
 "To meet local people",
 "To eat traditional food", 
 ],

 correct:"To take photographs of the city"
},

{type:"multiple",
 category:"reading",
 
  passage:`Next month, Tom and his sister, Emma, 
 are finally going to fulfill their dream of visiting London. 
 They have been saving money for over two years to pay for this trip. 
 They booked a small hotel located in the center of the city, 
 which will make it easy to walk to many of the main tourist attractions.

Their flight arrives at Heathrow Airport on a Tuesday morning. After checking into the hotel,
 they plan to go straight to the British Museum because Emma loves history. 
 On Wednesday, they have tickets for a famous musical in the West End. 
 Tom is particularly excited about visiting the London Eye on Thursday, 
 as he wants to take panoramic photographs of the city from the top.

Of course, they also want to experience the local culture. 
They are planning to eat at traditional British pubs and try dishes like fish and chips. 
Since the weather in the UK can be unpredictable, 
they have both packed warm jackets and umbrellas. 
They are hoping for a few sunny days, but they are prepared for rain.
 `,

 question:"What have Tom and Emma packed in the case the weather is bad?",

 options:[
  "Warm jaskets and umbrellas",
  "Sunscreen and hat",
  "Heavy winter boots",
  "Extra suitcases",
 ],

 correct:"Warm jaskets and umbrellas"
},

{type:"multiple",
 category:"reading",

 passage:`Blue jeans are one of the most popular and common pieces of clothing in the world today.
  However, many people do not know where they originally came from. 
  In the 1850s, during the California Gold Rush, 
  a man named Levi Strauss moved to San Francisco to sell supplies to miners. 
  The miners needed clothes that were very strong and would not tear easily while they were working.

  Levi realized he could help them by making trousers out of a very durable fabric called canvas. 
Later, he started using a blue cotton fabric instead. These trousers were comfortable but still very tough.
 Another man, Jacob Davis, 
 had the idea to put metal pieces on the corners of the pockets so they would not rip. 
 Levi and Jacob worked together and got a patent for this design in 1873.

 Originally, these trousers were worn mostly by farmers, cowboys, and miners. 
In the 1950s, teenagers started wearing them as a fashion statement after seeing them in popular movies. 
Today, jeans are worn by people of all ages and professions all over the globe.
 `,

 question:"Why did Levi Strauss move to San Fransisco in the 1850s?",

options:[
"To search for gold",
"To sell supplies to miners",
"To open a clothing factory",
"To become a cowboy",
],

correct:"To sell supplies to miners"
},

{type:"multiple",
 category:"reading",
 
 passage:`Blue jeans are one of the most popular and common pieces of clothing in the world today.
  However, many people do not know where they originally came from. 
  In the 1850s, during the California Gold Rush, 
  a man named Levi Strauss moved to San Francisco to sell supplies to miners. 
  The miners needed clothes that were very strong and would not tear easily while they were working.

  Levi realized he could help them by making trousers out of a very durable fabric called canvas. 
Later, he started using a blue cotton fabric instead. These trousers were comfortable but still very tough.
 Another man, Jacob Davis, 
 had the idea to put metal pieces on the corners of the pockets so they would not rip. 
 Levi and Jacob worked together and got a patent for this design in 1873.

 Originally, these trousers were worn mostly by farmers, cowboys, and miners. 
In the 1950s, teenagers started wearing them as a fashion statement after seeing them in popular movies. 
Today, jeans are worn by people of all ages and professions all over the globe.
 `,

 question:"What was the first material Levi used for his trousers?",

 options:[
 "Blue cotton",
 "Leather",
 "Canvas",
 "Whool", 
 ],

 correct:"Canvas"
},

{type:"multiple",
 category:"reading",
 
  passage:`Blue jeans are one of the most popular and common pieces of clothing in the world today.
  However, many people do not know where they originally came from. 
  In the 1850s, during the California Gold Rush, 
  a man named Levi Strauss moved to San Francisco to sell supplies to miners. 
  The miners needed clothes that were very strong and would not tear easily while they were working.

  Levi realized he could help them by making trousers out of a very durable fabric called canvas. 
Later, he started using a blue cotton fabric instead. These trousers were comfortable but still very tough.
 Another man, Jacob Davis, 
 had the idea to put metal pieces on the corners of the pockets so they would not rip. 
 Levi and Jacob worked together and got a patent for this design in 1873.

 Originally, these trousers were worn mostly by farmers, cowboys, and miners. 
In the 1950s, teenagers started wearing them as a fashion statement after seeing them in popular movies. 
Today, jeans are worn by people of all ages and professions all over the globe.
 `,

 questions:"Who had the idea to add metal pieces to the pockets?",

 options:[
 "Levi Strauss",
 "A local miner",
 "A Hollywood actor",
 "Jacob Davis", 
 ],

 correct:"Jacob Davis"
},

{type:"multiple",
 category:"reading",
 
  passage:`Blue jeans are one of the most popular and common pieces of clothing in the world today.
  However, many people do not know where they originally came from. 
  In the 1850s, during the California Gold Rush, 
  a man named Levi Strauss moved to San Francisco to sell supplies to miners. 
  The miners needed clothes that were very strong and would not tear easily while they were working.

  Levi realized he could help them by making trousers out of a very durable fabric called canvas. 
Later, he started using a blue cotton fabric instead. These trousers were comfortable but still very tough.
 Another man, Jacob Davis, 
 had the idea to put metal pieces on the corners of the pockets so they would not rip. 
 Levi and Jacob worked together and got a patent for this design in 1873.

 Originally, these trousers were worn mostly by farmers, cowboys, and miners. 
In the 1950s, teenagers started wearing them as a fashion statement after seeing them in popular movies. 
Today, jeans are worn by people of all ages and professions all over the globe.
 `,

 question:"What happened when Levi and Jacob worked together?",

 options:[
 "They opened a movie theatre",
 "They received a patent for their design in 1873",
 "They started makin shoes",
 "They become famous movie stars", 
 ],

 correct:"They received a patent for their design in 1873"
},

{type:"multiple",
 category:"reading",
 
  passage:`Blue jeans are one of the most popular and common pieces of clothing in the world today.
  However, many people do not know where they originally came from. 
  In the 1850s, during the California Gold Rush, 
  a man named Levi Strauss moved to San Francisco to sell supplies to miners. 
  The miners needed clothes that were very strong and would not tear easily while they were working.

  Levi realized he could help them by making trousers out of a very durable fabric called canvas. 
Later, he started using a blue cotton fabric instead. These trousers were comfortable but still very tough.
 Another man, Jacob Davis, 
 had the idea to put metal pieces on the corners of the pockets so they would not rip. 
 Levi and Jacob worked together and got a patent for this design in 1873.

 Originally, these trousers were worn mostly by farmers, cowboys, and miners. 
In the 1950s, teenagers started wearing them as a fashion statement after seeing them in popular movies. 
Today, jeans are worn by people of all ages and professions all over the globe.
 `,

 question:"Who made jeans popular as a fashion statement in the 1950s?",

 options:[
 "Farmers",
 "Cowboys",
 "Teenagers",
 "Miners", 
 ],

 correct:"Teenagers"
},

{type:"multiple",
 category:"reading",
 
  passage:`Last spring, the teachers and students at Oakwood Middle School started a very special project. 
  They decided to transform an empty, 
  grassy area behind the school building into a large vegetable garden. 
  The main goal of the project was to teach the students about healthy eating and the importance of protecting the environment.

At first, the students had to clear the ground of weeds and rocks. 
Then, they learned how to prepare the soil and plant various seeds. 
They planted tomatoes, carrots, lettuce, and potatoes. 
Throughout the spring and summer, the students took turns watering the plants and checking for pests. 
They did not use any chemical sprays, as they wanted the vegetables to be completely organic.

By the time autumn arrived, it was time to harvest the crops. 
The garden produced a large amount of fresh vegetables. 
The school cafeteria used these vegetables to make healthy salads and soups for the students' lunches. 
The project was such a success that the school plans to expand the garden next year and plant fruits like strawberries and apples.
 `,

 question:"What did the school do with the empty area behind the building?",

 options:[
 "They build a new playground",
 "They made a vegetable garden",
 "They planted colorful flowers",
 "They created a sports field", 
 ],

 correct:"They made a vegetable garden"
},

{type:"multiple",
 category:"reading",
 
 passage:`Last spring, the teachers and students at Oakwood Middle School started a very special project. 
  They decided to transform an empty, 
  grassy area behind the school building into a large vegetable garden. 
  The main goal of the project was to teach the students about healthy eating and the importance of protecting the environment.

At first, the students had to clear the ground of weeds and rocks. 
Then, they learned how to prepare the soil and plant various seeds. 
They planted tomatoes, carrots, lettuce, and potatoes. 
Throughout the spring and summer, the students took turns watering the plants and checking for pests. 
They did not use any chemical sprays, as they wanted the vegetables to be completely organic.

By the time autumn arrived, it was time to harvest the crops. 
The garden produced a large amount of fresh vegetables. 
The school cafeteria used these vegetables to make healthy salads and soups for the students' lunches. 
The project was such a success that the school plans to expand the garden next year and plant fruits like strawberries and apples.
 `,

 questions:"What was the main goal of the school garden project",

 options:[
 "To make money for the school",
 "To provide food for the local community",
 "To teach students about healthy eating and the environment",
 "To give students extra homework",
 ],

 correct:"To tech students about healthy eating and the environment"
},

{type:"multiple",
 category:"reading",
 
 passage:`Last spring, the teachers and students at Oakwood Middle School started a very special project. 
  They decided to transform an empty, 
  grassy area behind the school building into a large vegetable garden. 
  The main goal of the project was to teach the students about healthy eating and the importance of protecting the environment.

At first, the students had to clear the ground of weeds and rocks. 
Then, they learned how to prepare the soil and plant various seeds. 
They planted tomatoes, carrots, lettuce, and potatoes. 
Throughout the spring and summer, the students took turns watering the plants and checking for pests. 
They did not use any chemical sprays, as they wanted the vegetables to be completely organic.

By the time autumn arrived, it was time to harvest the crops. 
The garden produced a large amount of fresh vegetables. 
The school cafeteria used these vegetables to make healthy salads and soups for the students' lunches. 
The project was such a success that the school plans to expand the garden next year and plant fruits like strawberries and apples.
 `,

 question:"What did the students do first before planting seeds",

 options:[
 "They bought gardening tools",
 "They cleared the ground of weeds and rocks",
 "They read books about plants",
 "They asked their parents for help", 
 ],

 correct:"They cleared the ground of weeds and rocks"
},

{type:"multiple",
 category:"reading",
 
 passage:`Last spring, the teachers and students at Oakwood Middle School started a very special project. 
  They decided to transform an empty, 
  grassy area behind the school building into a large vegetable garden. 
  The main goal of the project was to teach the students about healthy eating and the importance of protecting the environment.

At first, the students had to clear the ground of weeds and rocks. 
Then, they learned how to prepare the soil and plant various seeds. 
They planted tomatoes, carrots, lettuce, and potatoes. 
Throughout the spring and summer, the students took turns watering the plants and checking for pests. 
They did not use any chemical sprays, as they wanted the vegetables to be completely organic.

By the time autumn arrived, it was time to harvest the crops. 
The garden produced a large amount of fresh vegetables. 
The school cafeteria used these vegetables to make healthy salads and soups for the students' lunches. 
The project was such a success that the school plans to expand the garden next year and plant fruits like strawberries and apples.
 `,

 question:"Why didn't the students use chemical sprays on their plants?",

 options:[
 "They were too expensive",
 "The teachers didn't allow them",
 "They wanted the vegetables to be organic",
 "The students didn't know how to use them ," 
 ],

 correct:"They wanted the vegetables to be organic"
},

{type:"multiple",
 category:"reading",
 
 passage:`Last spring, the teachers and students at Oakwood Middle School started a very special project. 
  They decided to transform an empty, 
  grassy area behind the school building into a large vegetable garden. 
  The main goal of the project was to teach the students about healthy eating and the importance of protecting the environment.

At first, the students had to clear the ground of weeds and rocks. 
Then, they learned how to prepare the soil and plant various seeds. 
They planted tomatoes, carrots, lettuce, and potatoes. 
Throughout the spring and summer, the students took turns watering the plants and checking for pests. 
They did not use any chemical sprays, as they wanted the vegetables to be completely organic.

By the time autumn arrived, it was time to harvest the crops. 
The garden produced a large amount of fresh vegetables. 
The school cafeteria used these vegetables to make healthy salads and soups for the students' lunches. 
The project was such a success that the school plans to expand the garden next year and plant fruits like strawberries and apples.
 `,

 question:"What wiil the school probably do next year?",

 options:[
 "Stop the gardening projects",
 "Sell the vegebtables to local supermarkets", 
"Expand the garden and plant fruits",
"Build a green house", 
],

correct:"Expand the garden and plant fruits"
},

{type:"multiple",
 category:"reading",
 
 passage:`In our modern, fast-paced society, 
 the concept of convenience has become one of the most highly prized commodities. 
 We are constantly seeking ways to save time and effort, 
 from instant coffee and pre-packaged meals to same-day online shopping deliveries. 
 However, this relentless pursuit of ease has created a complex web of environmental and social consequences that we are only just beginning to understand.

 Take, for example, the food industry. 
Pre-cut vegetables, frozen dinners, and single-serve snacks dominate supermarket shelves. 
While these items offer undeniable benefits to a busy worker or a tired parent, they also require significant amounts of plastic packaging. 
This packaging, designed to be used for only a few minutes before being discarded, ends up in landfills or polluting our oceans. 
The carbon footprint associated with manufacturing, transporting, and refrigerating these goods is staggeringly high compared to buying whole, local ingredients and preparing meals from scratch.

Furthermore, the rise of e-commerce has revolutionized how we consume goods. 
With just a few clicks, almost anything can be delivered directly to our doors within hours. 
Yet, the convenience of home delivery comes with a hidden environmental cost. 
The increase in delivery vehicles on our roads leads to higher traffic congestion and increased carbon dioxide emissions. 
Additionally, the cardboard boxes and bubble wrap used to protect items during transit contribute heavily to deforestation and waste.

Convenience also affects our personal skills and behaviors. 
When we rely on search engines to instantly provide facts, or navigation apps to get us from point A to point B, our ability to retain information and navigate our physical environment diminishes. 
We are outsourcing our cognitive labor to devices, making us less self-sufficient.

Ultimately, the convenience culture forces us to confront a difficult paradox. 
While technological advancements have undoubtedly improved our quality of life, making it easier and more efficient, they also encourage a throwaway mentality. 
To create a more sustainable future, we must strike a balance. This involves rethinking our daily habits and considering the long-term impacts of our choices, rather than prioritizing immediate, short-term ease.
 `,

 question:"According to the first paragraph, what is a prominent feature of modern society?",

 options:[
 "People have more time for leasure activities",
 "Convenience has become a highly valued goal",
 "Society is increasingly focused on environmental conservation",
 "Consumers prefer traditional methods of shopping", 
 ],

 correct:"Convenience has become a highly valued goal"
},

{type:"multiple",
 category:"reading",
 
passage:`In our modern, fast-paced society, 
 the concept of convenience has become one of the most highly prized commodities. 
 We are constantly seeking ways to save time and effort, 
 from instant coffee and pre-packaged meals to same-day online shopping deliveries. 
 However, this relentless pursuit of ease has created a complex web of environmental and social consequences that we are only just beginning to understand.

 Take, for example, the food industry. 
Pre-cut vegetables, frozen dinners, and single-serve snacks dominate supermarket shelves. 
While these items offer undeniable benefits to a busy worker or a tired parent, they also require significant amounts of plastic packaging. 
This packaging, designed to be used for only a few minutes before being discarded, ends up in landfills or polluting our oceans. 
The carbon footprint associated with manufacturing, transporting, and refrigerating these goods is staggeringly high compared to buying whole, local ingredients and preparing meals from scratch.

Furthermore, the rise of e-commerce has revolutionized how we consume goods. 
With just a few clicks, almost anything can be delivered directly to our doors within hours. 
Yet, the convenience of home delivery comes with a hidden environmental cost. 
The increase in delivery vehicles on our roads leads to higher traffic congestion and increased carbon dioxide emissions. 
Additionally, the cardboard boxes and bubble wrap used to protect items during transit contribute heavily to deforestation and waste.

Convenience also affects our personal skills and behaviors. 
When we rely on search engines to instantly provide facts, or navigation apps to get us from point A to point B, our ability to retain information and navigate our physical environment diminishes. 
We are outsourcing our cognitive labor to devices, making us less self-sufficient.

Ultimately, the convenience culture forces us to confront a difficult paradox. 
While technological advancements have undoubtedly improved our quality of life, making it easier and more efficient, they also encourage a throwaway mentality. 
To create a more sustainable future, we must strike a balance. This involves rethinking our daily habits and considering the long-term impacts of our choices, rather than prioritizing immediate, short-term ease.
 `,

 question:"In the second paragraph, what is the author's primary criticism of pre-packaged foods?",

 options:[
 "They lack essential nutritional value",
 "They are too expensive for the average consumer",
 "They require excessive plastic packaging that harms the environmen",
 "They take too much time to prepare", 
 ],

 correct:"They require excessive plastic packaging that harms the environment"
},

{type:"multiple",
 category:"reading",
 
 passage:`In our modern, fast-paced society, 
 the concept of convenience has become one of the most highly prized commodities. 
 We are constantly seeking ways to save time and effort, 
 from instant coffee and pre-packaged meals to same-day online shopping deliveries. 
 However, this relentless pursuit of ease has created a complex web of environmental and social consequences that we are only just beginning to understand.

 Take, for example, the food industry. 
Pre-cut vegetables, frozen dinners, and single-serve snacks dominate supermarket shelves. 
While these items offer undeniable benefits to a busy worker or a tired parent, they also require significant amounts of plastic packaging. 
This packaging, designed to be used for only a few minutes before being discarded, ends up in landfills or polluting our oceans. 
The carbon footprint associated with manufacturing, transporting, and refrigerating these goods is staggeringly high compared to buying whole, local ingredients and preparing meals from scratch.

Furthermore, the rise of e-commerce has revolutionized how we consume goods. 
With just a few clicks, almost anything can be delivered directly to our doors within hours. 
Yet, the convenience of home delivery comes with a hidden environmental cost. 
The increase in delivery vehicles on our roads leads to higher traffic congestion and increased carbon dioxide emissions. 
Additionally, the cardboard boxes and bubble wrap used to protect items during transit contribute heavily to deforestation and waste.

Convenience also affects our personal skills and behaviors. 
When we rely on search engines to instantly provide facts, or navigation apps to get us from point A to point B, our ability to retain information and navigate our physical environment diminishes. 
We are outsourcing our cognitive labor to devices, making us less self-sufficient.

Ultimately, the convenience culture forces us to confront a difficult paradox. 
While technological advancements have undoubtedly improved our quality of life, making it easier and more efficient, they also encourage a throwaway mentality. 
To create a more sustainable future, we must strike a balance. This involves rethinking our daily habits and considering the long-term impacts of our choices, rather than prioritizing immediate, short-term ease.
 `,

 question:"Compared to buying whole, local ingredients, how does the carbon footprint of pre-packaged meals generally compare?",

 options:[
 "It is much lower",
 "It is roughly the same",
 "It is significantly higher",
 "It cannot be measured accurately",
 ],

 correct:"It is significantly higher"
},

{type:"multiple",
 category:"reading",
 
 passage:`In our modern, fast-paced society, 
 the concept of convenience has become one of the most highly prized commodities. 
 We are constantly seeking ways to save time and effort, 
 from instant coffee and pre-packaged meals to same-day online shopping deliveries. 
 However, this relentless pursuit of ease has created a complex web of environmental and social consequences that we are only just beginning to understand.

 Take, for example, the food industry. 
Pre-cut vegetables, frozen dinners, and single-serve snacks dominate supermarket shelves. 
While these items offer undeniable benefits to a busy worker or a tired parent, they also require significant amounts of plastic packaging. 
This packaging, designed to be used for only a few minutes before being discarded, ends up in landfills or polluting our oceans. 
The carbon footprint associated with manufacturing, transporting, and refrigerating these goods is staggeringly high compared to buying whole, local ingredients and preparing meals from scratch.

Furthermore, the rise of e-commerce has revolutionized how we consume goods. 
With just a few clicks, almost anything can be delivered directly to our doors within hours. 
Yet, the convenience of home delivery comes with a hidden environmental cost. 
The increase in delivery vehicles on our roads leads to higher traffic congestion and increased carbon dioxide emissions. 
Additionally, the cardboard boxes and bubble wrap used to protect items during transit contribute heavily to deforestation and waste.

Convenience also affects our personal skills and behaviors. 
When we rely on search engines to instantly provide facts, or navigation apps to get us from point A to point B, our ability to retain information and navigate our physical environment diminishes. 
We are outsourcing our cognitive labor to devices, making us less self-sufficient.

Ultimately, the convenience culture forces us to confront a difficult paradox. 
While technological advancements have undoubtedly improved our quality of life, making it easier and more efficient, they also encourage a throwaway mentality. 
To create a more sustainable future, we must strike a balance. This involves rethinking our daily habits and considering the long-term impacts of our choices, rather than prioritizing immediate, short-term ease.
 `,

 question:"How has the e-commerce industry impacted the environment, according to the passage?",

 options:[
 "It has reduced the number of delivery vehicles on the road",
 "It has decreased the reliance on plastic pascaking",
 "It has caused an increase in carbon emissions due to more delivery vehicles",
 "It has positively contributed to reforestation efforts", 
 ],

 correct:"It has caused an increase in carbon emissions due to more delivery vehicles"
},

{type:"multiple",
 category:"reading",
 
 passage:`In our modern, fast-paced society, 
 the concept of convenience has become one of the most highly prized commodities. 
 We are constantly seeking ways to save time and effort, 
 from instant coffee and pre-packaged meals to same-day online shopping deliveries. 
 However, this relentless pursuit of ease has created a complex web of environmental and social consequences that we are only just beginning to understand.

 Take, for example, the food industry. 
Pre-cut vegetables, frozen dinners, and single-serve snacks dominate supermarket shelves. 
While these items offer undeniable benefits to a busy worker or a tired parent, they also require significant amounts of plastic packaging. 
This packaging, designed to be used for only a few minutes before being discarded, ends up in landfills or polluting our oceans. 
The carbon footprint associated with manufacturing, transporting, and refrigerating these goods is staggeringly high compared to buying whole, local ingredients and preparing meals from scratch.

Furthermore, the rise of e-commerce has revolutionized how we consume goods. 
With just a few clicks, almost anything can be delivered directly to our doors within hours. 
Yet, the convenience of home delivery comes with a hidden environmental cost. 
The increase in delivery vehicles on our roads leads to higher traffic congestion and increased carbon dioxide emissions. 
Additionally, the cardboard boxes and bubble wrap used to protect items during transit contribute heavily to deforestation and waste.

Convenience also affects our personal skills and behaviors. 
When we rely on search engines to instantly provide facts, or navigation apps to get us from point A to point B, our ability to retain information and navigate our physical environment diminishes. 
We are outsourcing our cognitive labor to devices, making us less self-sufficient.

Ultimately, the convenience culture forces us to confront a difficult paradox. 
While technological advancements have undoubtedly improved our quality of life, making it easier and more efficient, they also encourage a throwaway mentality. 
To create a more sustainable future, we must strike a balance. This involves rethinking our daily habits and considering the long-term impacts of our choices, rather than prioritizing immediate, short-term ease.
 `,

 question:"In the third paragraph, what is meant by 'transit'?",

 options:[
 "The process of moving goods or people from one place to another",
 "The communication between online retailers and consumers",
 "The manufacturing process of cardboard",
 "The sorting of waste materials for recycling",
 ],

 correct:"The process of moving goods or people from one place to another"
},

{type:"multiple",
 category:"reading",
 
 passage:`In our modern, fast-paced society, 
 the concept of convenience has become one of the most highly prized commodities. 
 We are constantly seeking ways to save time and effort, 
 from instant coffee and pre-packaged meals to same-day online shopping deliveries. 
 However, this relentless pursuit of ease has created a complex web of environmental and social consequences that we are only just beginning to understand.

 Take, for example, the food industry. 
Pre-cut vegetables, frozen dinners, and single-serve snacks dominate supermarket shelves. 
While these items offer undeniable benefits to a busy worker or a tired parent, they also require significant amounts of plastic packaging. 
This packaging, designed to be used for only a few minutes before being discarded, ends up in landfills or polluting our oceans. 
The carbon footprint associated with manufacturing, transporting, and refrigerating these goods is staggeringly high compared to buying whole, local ingredients and preparing meals from scratch.

Furthermore, the rise of e-commerce has revolutionized how we consume goods. 
With just a few clicks, almost anything can be delivered directly to our doors within hours. 
Yet, the convenience of home delivery comes with a hidden environmental cost. 
The increase in delivery vehicles on our roads leads to higher traffic congestion and increased carbon dioxide emissions. 
Additionally, the cardboard boxes and bubble wrap used to protect items during transit contribute heavily to deforestation and waste.

Convenience also affects our personal skills and behaviors. 
When we rely on search engines to instantly provide facts, or navigation apps to get us from point A to point B, our ability to retain information and navigate our physical environment diminishes. 
We are outsourcing our cognitive labor to devices, making us less self-sufficient.

Ultimately, the convenience culture forces us to confront a difficult paradox. 
While technological advancements have undoubtedly improved our quality of life, making it easier and more efficient, they also encourage a throwaway mentality. 
To create a more sustainable future, we must strike a balance. This involves rethinking our daily habits and considering the long-term impacts of our choices, rather than prioritizing immediate, short-term ease.
 `,

 question:"According to the fourth paragraph what is one negative effect of relying on navigationapps and search engines?",

 options:[
 "It causes an increase in daily stress",
 "It diminishes our ability to retain information and navigate physically",
 "It makes technology much more complicated to use",
 "It isolatespeople from their local communities",
 ],

 correct:"It diminishes our ability to retain information and navigate physically"
},

{type:"multiple",
 category:"reading",
 
 passage:`In our modern, fast-paced society, 
 the concept of convenience has become one of the most highly prized commodities. 
 We are constantly seeking ways to save time and effort, 
 from instant coffee and pre-packaged meals to same-day online shopping deliveries. 
 However, this relentless pursuit of ease has created a complex web of environmental and social consequences that we are only just beginning to understand.

 Take, for example, the food industry. 
Pre-cut vegetables, frozen dinners, and single-serve snacks dominate supermarket shelves. 
While these items offer undeniable benefits to a busy worker or a tired parent, they also require significant amounts of plastic packaging. 
This packaging, designed to be used for only a few minutes before being discarded, ends up in landfills or polluting our oceans. 
The carbon footprint associated with manufacturing, transporting, and refrigerating these goods is staggeringly high compared to buying whole, local ingredients and preparing meals from scratch.

Furthermore, the rise of e-commerce has revolutionized how we consume goods. 
With just a few clicks, almost anything can be delivered directly to our doors within hours. 
Yet, the convenience of home delivery comes with a hidden environmental cost. 
The increase in delivery vehicles on our roads leads to higher traffic congestion and increased carbon dioxide emissions. 
Additionally, the cardboard boxes and bubble wrap used to protect items during transit contribute heavily to deforestation and waste.

Convenience also affects our personal skills and behaviors. 
When we rely on search engines to instantly provide facts, or navigation apps to get us from point A to point B, our ability to retain information and navigate our physical environment diminishes. 
We are outsourcing our cognitive labor to devices, making us less self-sufficient.

Ultimately, the convenience culture forces us to confront a difficult paradox. 
While technological advancements have undoubtedly improved our quality of life, making it easier and more efficient, they also encourage a throwaway mentality. 
To create a more sustainable future, we must strike a balance. This involves rethinking our daily habits and considering the long-term impacts of our choices, rather than prioritizing immediate, short-term ease.
 `,

 question:"What does the author mean by'outsourcing our cognitive labors to devices?",

 options:[
 "We are forcing computers to do our physical work",
 "We are expecting devices to think and remember for us",
 "We are employing people to fix our broken devices",
 "We are spending too much money on new technologies", 
 ],

 correct:"We are expecting devices to think and remember for us"
},

{type:"multiple",
 category:"reading",
 
 passage:`In our modern, fast-paced society, 
 the concept of convenience has become one of the most highly prized commodities. 
 We are constantly seeking ways to save time and effort, 
 from instant coffee and pre-packaged meals to same-day online shopping deliveries. 
 However, this relentless pursuit of ease has created a complex web of environmental and social consequences that we are only just beginning to understand.

 Take, for example, the food industry. 
Pre-cut vegetables, frozen dinners, and single-serve snacks dominate supermarket shelves. 
While these items offer undeniable benefits to a busy worker or a tired parent, they also require significant amounts of plastic packaging. 
This packaging, designed to be used for only a few minutes before being discarded, ends up in landfills or polluting our oceans. 
The carbon footprint associated with manufacturing, transporting, and refrigerating these goods is staggeringly high compared to buying whole, local ingredients and preparing meals from scratch.

Furthermore, the rise of e-commerce has revolutionized how we consume goods. 
With just a few clicks, almost anything can be delivered directly to our doors within hours. 
Yet, the convenience of home delivery comes with a hidden environmental cost. 
The increase in delivery vehicles on our roads leads to higher traffic congestion and increased carbon dioxide emissions. 
Additionally, the cardboard boxes and bubble wrap used to protect items during transit contribute heavily to deforestation and waste.

Convenience also affects our personal skills and behaviors. 
When we rely on search engines to instantly provide facts, or navigation apps to get us from point A to point B, our ability to retain information and navigate our physical environment diminishes. 
We are outsourcing our cognitive labor to devices, making us less self-sufficient.

Ultimately, the convenience culture forces us to confront a difficult paradox. 
While technological advancements have undoubtedly improved our quality of life, making it easier and more efficient, they also encourage a throwaway mentality. 
To create a more sustainable future, we must strike a balance. This involves rethinking our daily habits and considering the long-term impacts of our choices, rather than prioritizing immediate, short-term ease.
 `,

 question:"In the fifth paragraph, what does the word 'paradox' suggest about the convinience culture?",

 options:[
 "It has brought about improvements but also encouraged negative, unsustainable habits",
 "It has completely failed to make our lives easier in any way",
 "It is a very simple issue with an easy solution",
 "It is an entirely new concept that history has never seen before", 
 ],

 correct:"It has brought about improvementsbut also encouraged negative, unsustainable habits"
},

{type:"multiple",
 category:"reading",
 
 passage:`In our modern, fast-paced society, 
 the concept of convenience has become one of the most highly prized commodities. 
 We are constantly seeking ways to save time and effort, 
 from instant coffee and pre-packaged meals to same-day online shopping deliveries. 
 However, this relentless pursuit of ease has created a complex web of environmental and social consequences that we are only just beginning to understand.

 Take, for example, the food industry. 
Pre-cut vegetables, frozen dinners, and single-serve snacks dominate supermarket shelves. 
While these items offer undeniable benefits to a busy worker or a tired parent, they also require significant amounts of plastic packaging. 
This packaging, designed to be used for only a few minutes before being discarded, ends up in landfills or polluting our oceans. 
The carbon footprint associated with manufacturing, transporting, and refrigerating these goods is staggeringly high compared to buying whole, local ingredients and preparing meals from scratch.

Furthermore, the rise of e-commerce has revolutionized how we consume goods. 
With just a few clicks, almost anything can be delivered directly to our doors within hours. 
Yet, the convenience of home delivery comes with a hidden environmental cost. 
The increase in delivery vehicles on our roads leads to higher traffic congestion and increased carbon dioxide emissions. 
Additionally, the cardboard boxes and bubble wrap used to protect items during transit contribute heavily to deforestation and waste.

Convenience also affects our personal skills and behaviors. 
When we rely on search engines to instantly provide facts, or navigation apps to get us from point A to point B, our ability to retain information and navigate our physical environment diminishes. 
We are outsourcing our cognitive labor to devices, making us less self-sufficient.

Ultimately, the convenience culture forces us to confront a difficult paradox. 
While technological advancements have undoubtedly improved our quality of life, making it easier and more efficient, they also encourage a throwaway mentality. 
To create a more sustainable future, we must strike a balance. This involves rethinking our daily habits and considering the long-term impacts of our choices, rather than prioritizing immediate, short-term ease.
 `,

 question:"What 'mentality' does convenience culture encourage?",

 options:[
 "A thrfty mentality",
 "A throwaway mentality",
 "A community-focused mentality",
 "A highly disciplined mentality",
 ],

 correct:"A throwaway mentality"
},

{type:"multiple",
 category:"reading",
 
 passage:`In our modern, fast-paced society, 
 the concept of convenience has become one of the most highly prized commodities. 
 We are constantly seeking ways to save time and effort, 
 from instant coffee and pre-packaged meals to same-day online shopping deliveries. 
 However, this relentless pursuit of ease has created a complex web of environmental and social consequences that we are only just beginning to understand.

 Take, for example, the food industry. 
Pre-cut vegetables, frozen dinners, and single-serve snacks dominate supermarket shelves. 
While these items offer undeniable benefits to a busy worker or a tired parent, they also require significant amounts of plastic packaging. 
This packaging, designed to be used for only a few minutes before being discarded, ends up in landfills or polluting our oceans. 
The carbon footprint associated with manufacturing, transporting, and refrigerating these goods is staggeringly high compared to buying whole, local ingredients and preparing meals from scratch.

Furthermore, the rise of e-commerce has revolutionized how we consume goods. 
With just a few clicks, almost anything can be delivered directly to our doors within hours. 
Yet, the convenience of home delivery comes with a hidden environmental cost. 
The increase in delivery vehicles on our roads leads to higher traffic congestion and increased carbon dioxide emissions. 
Additionally, the cardboard boxes and bubble wrap used to protect items during transit contribute heavily to deforestation and waste.

Convenience also affects our personal skills and behaviors. 
When we rely on search engines to instantly provide facts, or navigation apps to get us from point A to point B, our ability to retain information and navigate our physical environment diminishes. 
We are outsourcing our cognitive labor to devices, making us less self-sufficient.

Ultimately, the convenience culture forces us to confront a difficult paradox. 
While technological advancements have undoubtedly improved our quality of life, making it easier and more efficient, they also encourage a throwaway mentality. 
To create a more sustainable future, we must strike a balance. This involves rethinking our daily habits and considering the long-term impacts of our choices, rather than prioritizing immediate, short-term ease.
 `,

 question:"What is the main conclusion of the passage?",

 options:[
 "We should completaly stop using all forms of technology and convenience",
 "We must learn to balance convenience with sustainability by rethinking our daily habits",
 "Governments should ban online shopping entirely to save environment",
 "Pre-packaged meals are primary cause of global pollution", 
 ],

 correct:"We must learn to balance convenience with sustainability by rethinking our daily habits"
},

{type:"multiple",
 category:"reading",
 
 passage:`Every single day, we are faced with a multitude of choices. 
 From the mundane, such as what to wear or what to eat for breakfast, to the significant, 
 like accepting a new job or buying a house, our lives are shaped by the decisions we make. 
 Psychologists and neuroscientists have long studied the mechanisms behind how we make these choices, 
 revealing that human decision-making is far less rational than we might like to believe.

 Historically, classical economists assumed that humans were perfectly rational decision-makers. 
They believed that individuals carefully weigh the pros and cons of every option and select the one that maximizes their utility or benefit. 
However, modern behavioral economics and psychology have debunked this theory. 
Research shows that our brains rely heavily on mental shortcuts, known as heuristics, to process information quickly.
 While these shortcuts are useful for survival, allowing us to make split-second decisions when faced with danger, 
 they frequently lead to cognitive biases and flawed judgments in our complex, modern world.

 One of the most well-known cognitive biases is confirmation bias. 
This is the tendency to search for, interpret, 
and remember information in a way that aligns with our pre-existing beliefs. 
When we have a strong opinion about a certain topic, 
we unconsciously ignore evidence that contradicts us and eagerly accept facts that support our viewpoint. 
This bias creates echo chambers, particularly on social media, 
where people are only exposed to ideas they already agree with, thereby hindering critical thinking.

Another major factor that heavily influences our choices is emotion. 
Despite our best efforts to separate feelings from logic, 
emotions are deeply intertwined with the decision-making process. 
Neurological studies have shown that individuals with damage to the emotional centers of their brains actually struggle to make even the simplest of choices. 
Without emotional input—such as feeling good about a choice or having a negative gut feeling—we become paralyzed by the endless possibilities, 
unable to determine which option is truly best.

Finally, the sheer volume of choices we have today can actually impede our ability to make decisions. 
Known as the "paradox of choice," psychologists have found that having too many options often leads to decision fatigue, 
anxiety, and a phenomenon called buyer's remorse. 
When faced with dozens of varieties of a single product, consumers are more likely to feel overwhelmed and end up not making a purchase at all, or feeling unsatisfied with their final selection.

Ultimately, understanding the psychology behind our choices can empower us to make better decisions. 
By recognizing our reliance on mental shortcuts, the subtle influence of our emotions, and the dangers of decision overload, we can implement strategies to counteract these tendencies. 
Taking the time to evaluate diverse perspectives, limiting our options, and allowing ourselves time to process emotions can all lead to more logical and satisfying choices.
 `,

 question:"According to the first paragraph, what have scientists discovered about human decision-making?",

 options:[
 "It is based purely on logical calculations",
 "It is heavely influenced by classical economic theories",
 "It is less rational than people often think",
 "It is primarily based on what to wear and eat",
],

correct:"It is heavely influenced by classical economic theories"
},

{type:"multiple",
 category:"reading",
 
  passage:`Every single day, we are faced with a multitude of choices. 
 From the mundane, such as what to wear or what to eat for breakfast, to the significant, 
 like accepting a new job or buying a house, our lives are shaped by the decisions we make. 
 Psychologists and neuroscientists have long studied the mechanisms behind how we make these choices, 
 revealing that human decision-making is far less rational than we might like to believe.

 Historically, classical economists assumed that humans were perfectly rational decision-makers. 
They believed that individuals carefully weigh the pros and cons of every option and select the one that maximizes their utility or benefit. 
However, modern behavioral economics and psychology have debunked this theory. 
Research shows that our brains rely heavily on mental shortcuts, known as heuristics, to process information quickly.
 While these shortcuts are useful for survival, allowing us to make split-second decisions when faced with danger, 
 they frequently lead to cognitive biases and flawed judgments in our complex, modern world.

 One of the most well-known cognitive biases is confirmation bias. 
This is the tendency to search for, interpret, 
and remember information in a way that aligns with our pre-existing beliefs. 
When we have a strong opinion about a certain topic, 
we unconsciously ignore evidence that contradicts us and eagerly accept facts that support our viewpoint. 
This bias creates echo chambers, particularly on social media, 
where people are only exposed to ideas they already agree with, thereby hindering critical thinking.

Another major factor that heavily influences our choices is emotion. 
Despite our best efforts to separate feelings from logic, 
emotions are deeply intertwined with the decision-making process. 
Neurological studies have shown that individuals with damage to the emotional centers of their brains actually struggle to make even the simplest of choices. 
Without emotional input—such as feeling good about a choice or having a negative gut feeling—we become paralyzed by the endless possibilities, 
unable to determine which option is truly best.

Finally, the sheer volume of choices we have today can actually impede our ability to make decisions. 
Known as the "paradox of choice," psychologists have found that having too many options often leads to decision fatigue, 
anxiety, and a phenomenon called buyer's remorse. 
When faced with dozens of varieties of a single product, consumers are more likely to feel overwhelmed and end up not making a purchase at all, or feeling unsatisfied with their final selection.

Ultimately, understanding the psychology behind our choices can empower us to make better decisions. 
By recognizing our reliance on mental shortcuts, the subtle influence of our emotions, and the dangers of decision overload, we can implement strategies to counteract these tendencies. 
Taking the time to evaluate diverse perspectives, limiting our options, and allowing ourselves time to process emotions can all lead to more logical and satisfying choices.
 `,

 question:"What was the classical economists' belief regarding human decision-making?",
 
 options:[
 "A mental shortcut used to process information quickly",
 "A mathematical formula used to calculate risk",
 "A deep emotional feeling about a situation",
 "A method of ignoring contradictory evidence",
 ],

 correct:"A deep emotional feelings about a situation"
},

{type:"multiple",
 category:"reading",
 
  passage:`Every single day, we are faced with a multitude of choices. 
 From the mundane, such as what to wear or what to eat for breakfast, to the significant, 
 like accepting a new job or buying a house, our lives are shaped by the decisions we make. 
 Psychologists and neuroscientists have long studied the mechanisms behind how we make these choices, 
 revealing that human decision-making is far less rational than we might like to believe.

 Historically, classical economists assumed that humans were perfectly rational decision-makers. 
They believed that individuals carefully weigh the pros and cons of every option and select the one that maximizes their utility or benefit. 
However, modern behavioral economics and psychology have debunked this theory. 
Research shows that our brains rely heavily on mental shortcuts, known as heuristics, to process information quickly.
 While these shortcuts are useful for survival, allowing us to make split-second decisions when faced with danger, 
 they frequently lead to cognitive biases and flawed judgments in our complex, modern world.

 One of the most well-known cognitive biases is confirmation bias. 
This is the tendency to search for, interpret, 
and remember information in a way that aligns with our pre-existing beliefs. 
When we have a strong opinion about a certain topic, 
we unconsciously ignore evidence that contradicts us and eagerly accept facts that support our viewpoint. 
This bias creates echo chambers, particularly on social media, 
where people are only exposed to ideas they already agree with, thereby hindering critical thinking.

Another major factor that heavily influences our choices is emotion. 
Despite our best efforts to separate feelings from logic, 
emotions are deeply intertwined with the decision-making process. 
Neurological studies have shown that individuals with damage to the emotional centers of their brains actually struggle to make even the simplest of choices. 
Without emotional input—such as feeling good about a choice or having a negative gut feeling—we become paralyzed by the endless possibilities, 
unable to determine which option is truly best.

Finally, the sheer volume of choices we have today can actually impede our ability to make decisions. 
Known as the "paradox of choice," psychologists have found that having too many options often leads to decision fatigue, 
anxiety, and a phenomenon called buyer's remorse. 
When faced with dozens of varieties of a single product, consumers are more likely to feel overwhelmed and end up not making a purchase at all, or feeling unsatisfied with their final selection.

Ultimately, understanding the psychology behind our choices can empower us to make better decisions. 
By recognizing our reliance on mental shortcuts, the subtle influence of our emotions, and the dangers of decision overload, we can implement strategies to counteract these tendencies. 
Taking the time to evaluate diverse perspectives, limiting our options, and allowing ourselves time to process emotions can all lead to more logical and satisfying choices.
 `,

 question:"What is one main problem with using heuristic in the modern world?",

 options:[
 "They do not work quickly enough in emergencies",
 "They often lead to cognitive biasesand flawed judgements",
 "They require too much brain power to use effectivaly",
 "They make people completaly ignore their emotions", 
 ],

 correct:"They require too much brain power to use effectivaly"
},

{type:"multiple",
 category:"reading",
 
  passage:`Every single day, we are faced with a multitude of choices. 
 From the mundane, such as what to wear or what to eat for breakfast, to the significant, 
 like accepting a new job or buying a house, our lives are shaped by the decisions we make. 
 Psychologists and neuroscientists have long studied the mechanisms behind how we make these choices, 
 revealing that human decision-making is far less rational than we might like to believe.

 Historically, classical economists assumed that humans were perfectly rational decision-makers. 
They believed that individuals carefully weigh the pros and cons of every option and select the one that maximizes their utility or benefit. 
However, modern behavioral economics and psychology have debunked this theory. 
Research shows that our brains rely heavily on mental shortcuts, known as heuristics, to process information quickly.
 While these shortcuts are useful for survival, allowing us to make split-second decisions when faced with danger, 
 they frequently lead to cognitive biases and flawed judgments in our complex, modern world.

 One of the most well-known cognitive biases is confirmation bias. 
This is the tendency to search for, interpret, 
and remember information in a way that aligns with our pre-existing beliefs. 
When we have a strong opinion about a certain topic, 
we unconsciously ignore evidence that contradicts us and eagerly accept facts that support our viewpoint. 
This bias creates echo chambers, particularly on social media, 
where people are only exposed to ideas they already agree with, thereby hindering critical thinking.

Another major factor that heavily influences our choices is emotion. 
Despite our best efforts to separate feelings from logic, 
emotions are deeply intertwined with the decision-making process. 
Neurological studies have shown that individuals with damage to the emotional centers of their brains actually struggle to make even the simplest of choices. 
Without emotional input—such as feeling good about a choice or having a negative gut feeling—we become paralyzed by the endless possibilities, 
unable to determine which option is truly best.

Finally, the sheer volume of choices we have today can actually impede our ability to make decisions. 
Known as the "paradox of choice," psychologists have found that having too many options often leads to decision fatigue, 
anxiety, and a phenomenon called buyer's remorse. 
When faced with dozens of varieties of a single product, consumers are more likely to feel overwhelmed and end up not making a purchase at all, or feeling unsatisfied with their final selection.

Ultimately, understanding the psychology behind our choices can empower us to make better decisions. 
By recognizing our reliance on mental shortcuts, the subtle influence of our emotions, and the dangers of decision overload, we can implement strategies to counteract these tendencies. 
Taking the time to evaluate diverse perspectives, limiting our options, and allowing ourselves time to process emotions can all lead to more logical and satisfying choices.
 `,

 question:"What occurs during confirmation bias?",

 options:[
 "We actively search for evidence that proves our beliefs are wrong",
 "We change our opinions whenever new evidence is presented",
 "We favor information that support our existing beliefs and ignore contradictions",
 "We consult with experts before making any major life choices", 
 ],

 correct:"We actively search for evidence that proves our beliefs are wrong"
},

{type:"multiple",
 category:"reading",
 
  passage:`Every single day, we are faced with a multitude of choices. 
 From the mundane, such as what to wear or what to eat for breakfast, to the significant, 
 like accepting a new job or buying a house, our lives are shaped by the decisions we make. 
 Psychologists and neuroscientists have long studied the mechanisms behind how we make these choices, 
 revealing that human decision-making is far less rational than we might like to believe.

 Historically, classical economists assumed that humans were perfectly rational decision-makers. 
They believed that individuals carefully weigh the pros and cons of every option and select the one that maximizes their utility or benefit. 
However, modern behavioral economics and psychology have debunked this theory. 
Research shows that our brains rely heavily on mental shortcuts, known as heuristics, to process information quickly.
 While these shortcuts are useful for survival, allowing us to make split-second decisions when faced with danger, 
 they frequently lead to cognitive biases and flawed judgments in our complex, modern world.

 One of the most well-known cognitive biases is confirmation bias. 
This is the tendency to search for, interpret, 
and remember information in a way that aligns with our pre-existing beliefs. 
When we have a strong opinion about a certain topic, 
we unconsciously ignore evidence that contradicts us and eagerly accept facts that support our viewpoint. 
This bias creates echo chambers, particularly on social media, 
where people are only exposed to ideas they already agree with, thereby hindering critical thinking.

Another major factor that heavily influences our choices is emotion. 
Despite our best efforts to separate feelings from logic, 
emotions are deeply intertwined with the decision-making process. 
Neurological studies have shown that individuals with damage to the emotional centers of their brains actually struggle to make even the simplest of choices. 
Without emotional input—such as feeling good about a choice or having a negative gut feeling—we become paralyzed by the endless possibilities, 
unable to determine which option is truly best.

Finally, the sheer volume of choices we have today can actually impede our ability to make decisions. 
Known as the "paradox of choice," psychologists have found that having too many options often leads to decision fatigue, 
anxiety, and a phenomenon called buyer's remorse. 
When faced with dozens of varieties of a single product, consumers are more likely to feel overwhelmed and end up not making a purchase at all, or feeling unsatisfied with their final selection.

Ultimately, understanding the psychology behind our choices can empower us to make better decisions. 
By recognizing our reliance on mental shortcuts, the subtle influence of our emotions, and the dangers of decision overload, we can implement strategies to counteract these tendencies. 
Taking the time to evaluate diverse perspectives, limiting our options, and allowing ourselves time to process emotions can all lead to more logical and satisfying choices.
 `,

 question:"How does confirmation bias affect critical thinking?",

options:[
 "It improves  our critical thinking by forcing us to research both sides of an issue",
 "It hinders critical thinking by keeping us in echo chambers of similar ideas",
 "It has no effect on critical thi king at all",
 "It forces people to become more open-minded", 
],

correct:"It hinders critical thinking by keeping use in echo chambers of similar ideas"
},

{type:"multiple",
 category:"reading",
 
  passage:`Every single day, we are faced with a multitude of choices. 
 From the mundane, such as what to wear or what to eat for breakfast, to the significant, 
 like accepting a new job or buying a house, our lives are shaped by the decisions we make. 
 Psychologists and neuroscientists have long studied the mechanisms behind how we make these choices, 
 revealing that human decision-making is far less rational than we might like to believe.

 Historically, classical economists assumed that humans were perfectly rational decision-makers. 
They believed that individuals carefully weigh the pros and cons of every option and select the one that maximizes their utility or benefit. 
However, modern behavioral economics and psychology have debunked this theory. 
Research shows that our brains rely heavily on mental shortcuts, known as heuristics, to process information quickly.
 While these shortcuts are useful for survival, allowing us to make split-second decisions when faced with danger, 
 they frequently lead to cognitive biases and flawed judgments in our complex, modern world.

 One of the most well-known cognitive biases is confirmation bias. 
This is the tendency to search for, interpret, 
and remember information in a way that aligns with our pre-existing beliefs. 
When we have a strong opinion about a certain topic, 
we unconsciously ignore evidence that contradicts us and eagerly accept facts that support our viewpoint. 
This bias creates echo chambers, particularly on social media, 
where people are only exposed to ideas they already agree with, thereby hindering critical thinking.

Another major factor that heavily influences our choices is emotion. 
Despite our best efforts to separate feelings from logic, 
emotions are deeply intertwined with the decision-making process. 
Neurological studies have shown that individuals with damage to the emotional centers of their brains actually struggle to make even the simplest of choices. 
Without emotional input—such as feeling good about a choice or having a negative gut feeling—we become paralyzed by the endless possibilities, 
unable to determine which option is truly best.

Finally, the sheer volume of choices we have today can actually impede our ability to make decisions. 
Known as the "paradox of choice," psychologists have found that having too many options often leads to decision fatigue, 
anxiety, and a phenomenon called buyer's remorse. 
When faced with dozens of varieties of a single product, consumers are more likely to feel overwhelmed and end up not making a purchase at all, or feeling unsatisfied with their final selection.

Ultimately, understanding the psychology behind our choices can empower us to make better decisions. 
By recognizing our reliance on mental shortcuts, the subtle influence of our emotions, and the dangers of decision overload, we can implement strategies to counteract these tendencies. 
Taking the time to evaluate diverse perspectives, limiting our options, and allowing ourselves time to process emotions can all lead to more logical and satisfying choices.
 `,

 question:"What role do emotions play in decision-making, according to neurological studies?",

 options:[
 "They are a minor distraction that we should always ignore",
 "They paralyze our ability to think logically in every scenario",
 "They are essential; without them, even simple choices become nearly impossible",
 "They are the only factor that classical economists believe exists", 
 ],

 correct:"They paralyze our ability to think logically in every scenario"
},

{type:"multiple",
 category:"reading",
 
  passage:`Every single day, we are faced with a multitude of choices. 
 From the mundane, such as what to wear or what to eat for breakfast, to the significant, 
 like accepting a new job or buying a house, our lives are shaped by the decisions we make. 
 Psychologists and neuroscientists have long studied the mechanisms behind how we make these choices, 
 revealing that human decision-making is far less rational than we might like to believe.

 Historically, classical economists assumed that humans were perfectly rational decision-makers. 
They believed that individuals carefully weigh the pros and cons of every option and select the one that maximizes their utility or benefit. 
However, modern behavioral economics and psychology have debunked this theory. 
Research shows that our brains rely heavily on mental shortcuts, known as heuristics, to process information quickly.
 While these shortcuts are useful for survival, allowing us to make split-second decisions when faced with danger, 
 they frequently lead to cognitive biases and flawed judgments in our complex, modern world.

 One of the most well-known cognitive biases is confirmation bias. 
This is the tendency to search for, interpret, 
and remember information in a way that aligns with our pre-existing beliefs. 
When we have a strong opinion about a certain topic, 
we unconsciously ignore evidence that contradicts us and eagerly accept facts that support our viewpoint. 
This bias creates echo chambers, particularly on social media, 
where people are only exposed to ideas they already agree with, thereby hindering critical thinking.

Another major factor that heavily influences our choices is emotion. 
Despite our best efforts to separate feelings from logic, 
emotions are deeply intertwined with the decision-making process. 
Neurological studies have shown that individuals with damage to the emotional centers of their brains actually struggle to make even the simplest of choices. 
Without emotional input—such as feeling good about a choice or having a negative gut feeling—we become paralyzed by the endless possibilities, 
unable to determine which option is truly best.

Finally, the sheer volume of choices we have today can actually impede our ability to make decisions. 
Known as the "paradox of choice," psychologists have found that having too many options often leads to decision fatigue, 
anxiety, and a phenomenon called buyer's remorse. 
When faced with dozens of varieties of a single product, consumers are more likely to feel overwhelmed and end up not making a purchase at all, or feeling unsatisfied with their final selection.

Ultimately, understanding the psychology behind our choices can empower us to make better decisions. 
By recognizing our reliance on mental shortcuts, the subtle influence of our emotions, and the dangers of decision overload, we can implement strategies to counteract these tendencies. 
Taking the time to evaluate diverse perspectives, limiting our options, and allowing ourselves time to process emotions can all lead to more logical and satisfying choices.
 `,

 question:"What does 'decision fatigue' refer to in the passage?",

 options:[
 "The physical exhaustion that comes from walking while thinking",
 "The inability to fall asleep because you are worried about the future",
 "The tiredness and difficulty of making choices when facid with to many options",
 "The happines a person feels after completing a long shoppping trip", 
 ],

 correct:"The physical exhaustion that comes from walking while thinking"
},

{typr:"multiple",
 category:"reading",
 
  passage:`Every single day, we are faced with a multitude of choices. 
 From the mundane, such as what to wear or what to eat for breakfast, to the significant, 
 like accepting a new job or buying a house, our lives are shaped by the decisions we make. 
 Psychologists and neuroscientists have long studied the mechanisms behind how we make these choices, 
 revealing that human decision-making is far less rational than we might like to believe.

 Historically, classical economists assumed that humans were perfectly rational decision-makers. 
They believed that individuals carefully weigh the pros and cons of every option and select the one that maximizes their utility or benefit. 
However, modern behavioral economics and psychology have debunked this theory. 
Research shows that our brains rely heavily on mental shortcuts, known as heuristics, to process information quickly.
 While these shortcuts are useful for survival, allowing us to make split-second decisions when faced with danger, 
 they frequently lead to cognitive biases and flawed judgments in our complex, modern world.

 One of the most well-known cognitive biases is confirmation bias. 
This is the tendency to search for, interpret, 
and remember information in a way that aligns with our pre-existing beliefs. 
When we have a strong opinion about a certain topic, 
we unconsciously ignore evidence that contradicts us and eagerly accept facts that support our viewpoint. 
This bias creates echo chambers, particularly on social media, 
where people are only exposed to ideas they already agree with, thereby hindering critical thinking.

Another major factor that heavily influences our choices is emotion. 
Despite our best efforts to separate feelings from logic, 
emotions are deeply intertwined with the decision-making process. 
Neurological studies have shown that individuals with damage to the emotional centers of their brains actually struggle to make even the simplest of choices. 
Without emotional input—such as feeling good about a choice or having a negative gut feeling—we become paralyzed by the endless possibilities, 
unable to determine which option is truly best.

Finally, the sheer volume of choices we have today can actually impede our ability to make decisions. 
Known as the "paradox of choice," psychologists have found that having too many options often leads to decision fatigue, 
anxiety, and a phenomenon called buyer's remorse. 
When faced with dozens of varieties of a single product, consumers are more likely to feel overwhelmed and end up not making a purchase at all, or feeling unsatisfied with their final selection.

Ultimately, understanding the psychology behind our choices can empower us to make better decisions. 
By recognizing our reliance on mental shortcuts, the subtle influence of our emotions, and the dangers of decision overload, we can implement strategies to counteract these tendencies. 
Taking the time to evaluate diverse perspectives, limiting our options, and allowing ourselves time to process emotions can all lead to more logical and satisfying choices.
 `,

 question:"How do people often react when faced with too many options, according to the 'paradox of choice' ?",

 options:[
 "They easily find the best option and are very satisfied",
 "They feel overwhelmed and may avoid making a choice entirely",
 "They always ask friend or family member to make a choice for them",
 "They spend much less time to make a decision", 
 ],

 correct:"They feel overwhelmed and may avoid making a choice entirely"
},

{type:"multiple",
 category:"reading",
 
  passage:`Every single day, we are faced with a multitude of choices. 
 From the mundane, such as what to wear or what to eat for breakfast, to the significant, 
 like accepting a new job or buying a house, our lives are shaped by the decisions we make. 
 Psychologists and neuroscientists have long studied the mechanisms behind how we make these choices, 
 revealing that human decision-making is far less rational than we might like to believe.

 Historically, classical economists assumed that humans were perfectly rational decision-makers. 
They believed that individuals carefully weigh the pros and cons of every option and select the one that maximizes their utility or benefit. 
However, modern behavioral economics and psychology have debunked this theory. 
Research shows that our brains rely heavily on mental shortcuts, known as heuristics, to process information quickly.
 While these shortcuts are useful for survival, allowing us to make split-second decisions when faced with danger, 
 they frequently lead to cognitive biases and flawed judgments in our complex, modern world.

 One of the most well-known cognitive biases is confirmation bias. 
This is the tendency to search for, interpret, 
and remember information in a way that aligns with our pre-existing beliefs. 
When we have a strong opinion about a certain topic, 
we unconsciously ignore evidence that contradicts us and eagerly accept facts that support our viewpoint. 
This bias creates echo chambers, particularly on social media, 
where people are only exposed to ideas they already agree with, thereby hindering critical thinking.

Another major factor that heavily influences our choices is emotion. 
Despite our best efforts to separate feelings from logic, 
emotions are deeply intertwined with the decision-making process. 
Neurological studies have shown that individuals with damage to the emotional centers of their brains actually struggle to make even the simplest of choices. 
Without emotional input—such as feeling good about a choice or having a negative gut feeling—we become paralyzed by the endless possibilities, 
unable to determine which option is truly best.

Finally, the sheer volume of choices we have today can actually impede our ability to make decisions. 
Known as the "paradox of choice," psychologists have found that having too many options often leads to decision fatigue, 
anxiety, and a phenomenon called buyer's remorse. 
When faced with dozens of varieties of a single product, consumers are more likely to feel overwhelmed and end up not making a purchase at all, or feeling unsatisfied with their final selection.

Ultimately, understanding the psychology behind our choices can empower us to make better decisions. 
By recognizing our reliance on mental shortcuts, the subtle influence of our emotions, and the dangers of decision overload, we can implement strategies to counteract these tendencies. 
Taking the time to evaluate diverse perspectives, limiting our options, and allowing ourselves time to process emotions can all lead to more logical and satisfying choices.
 `,

 question:"What is the final advice given by the author for making better decisions?",

 options:[
 "Avoid making any major life decisions whenever possible",
 "Trust your first instinct without evaluating any other evidence",
 "Recognize your biases, limit your options and allow time to proccess feelings ",
 "Rely entirely on technology to make logical choices for you", 
 ],

 correct:"Trust your first instinct without evaluating any other evidence"
},

{type:"multiple",
 category:"reading",
 
 passage:`Cities have long been viewed as concrete landscapes, entirely dependent on rural areas for sustenance. 
However, the paradigm is shifting. 
Urban agriculture is no longer a fringe movement; it is becoming a cornerstone of sustainable city planning. 
By integrating vertical farming, rooftop greenhouses, and community gardens into the architectural fabric of metropolises, 
urban planners are effectively transforming grey spaces into green infrastructure. 
This transition offers profound ecological benefits, 
drastically reducing "food miles"—the distance food travels from farm to plate—thereby slashing greenhouse gas emissions associated with transportation.

Beyond environmental advantages, localized food production serves as a catalyst for community cohesion. 
Abandoned lots reclaimed as community gardens often act as social hubs, fostering a sense of shared responsibility and improving mental well-being among residents. 
Furthermore, proponents argue that these initiatives bolster food security in densely populated areas, 
shielding vulnerable populations from the volatility of global supply chains. Skeptics, 
however, are quick to point out the economic hurdles. 
The initial capital required to retrofit existing buildings for large-scale hydroponics is staggering, 
and the operational costs can easily outstrip the revenue generated from crop sales.

Despite these financial obstacles, technological advancements in automated climate control and LED lighting are continually driving down the overheads of urban farming. 
As innovations scale, the dream of a self-sufficient, ecologically balanced city edges closer to reality. 
Ultimately, while urban agriculture may not completely replace traditional rural farming, 
it represents a vital complementary strategy in the quest to feed a rapidly expanding global population.
`,

question:"What is the writer's main point about urban agriculture in the first paragraph?",

options:[
 "It has historically been the primary method of sustaining city populations",
 "It is increasingly becoming a fundamental",
 "It is primary driven by the need to create more rooftop green spaces",
 "It relies heavily on traditional rural farming techniques to survive",
],

correct:"It is increasingly becoming a fundamental"
},

{type:"multiple",
 category:"reading",
 
 passage:`Cities have long been viewed as concrete landscapes, entirely dependent on rural areas for sustenance. 
However, the paradigm is shifting. 
Urban agriculture is no longer a fringe movement; it is becoming a cornerstone of sustainable city planning. 
By integrating vertical farming, rooftop greenhouses, and community gardens into the architectural fabric of metropolises, 
urban planners are effectively transforming grey spaces into green infrastructure. 
This transition offers profound ecological benefits, 
drastically reducing "food miles"—the distance food travels from farm to plate—thereby slashing greenhouse gas emissions associated with transportation.

Beyond environmental advantages, localized food production serves as a catalyst for community cohesion. 
Abandoned lots reclaimed as community gardens often act as social hubs, fostering a sense of shared responsibility and improving mental well-being among residents. 
Furthermore, proponents argue that these initiatives bolster food security in densely populated areas, 
shielding vulnerable populations from the volatility of global supply chains. Skeptics, 
however, are quick to point out the economic hurdles. 
The initial capital required to retrofit existing buildings for large-scale hydroponics is staggering, 
and the operational costs can easily outstrip the revenue generated from crop sales.

Despite these financial obstacles, technological advancements in automated climate control and LED lighting are continually driving down the overheads of urban farming. 
As innovations scale, the dream of a self-sufficient, ecologically balanced city edges closer to reality. 
Ultimately, while urban agriculture may not completely replace traditional rural farming, 
it represents a vital complementary strategy in the quest to feed a rapidly expanding global population.
`,

question:"According to the text, what is one major environmental benefit of urban farming?",

options:[
 "It eliminatesthe need to rural agriculture completaly",
 "It reduces the amount of water required to grow crops",
 "It significantly cuts down the emissions linked to food transport", 
 "It completaly offsets the carbon footprint of urban feeling",
],

correct:"It significantly cuts down the emissions linked to food transport"
},

{type:"multilevel",
 category:"reading",
 
 passage:`Cities have long been viewed as concrete landscapes, entirely dependent on rural areas for sustenance. 
However, the paradigm is shifting. 
Urban agriculture is no longer a fringe movement; it is becoming a cornerstone of sustainable city planning. 
By integrating vertical farming, rooftop greenhouses, and community gardens into the architectural fabric of metropolises, 
urban planners are effectively transforming grey spaces into green infrastructure. 
This transition offers profound ecological benefits, 
drastically reducing "food miles"—the distance food travels from farm to plate—thereby slashing greenhouse gas emissions associated with transportation.

Beyond environmental advantages, localized food production serves as a catalyst for community cohesion. 
Abandoned lots reclaimed as community gardens often act as social hubs, fostering a sense of shared responsibility and improving mental well-being among residents. 
Furthermore, proponents argue that these initiatives bolster food security in densely populated areas, 
shielding vulnerable populations from the volatility of global supply chains. Skeptics, 
however, are quick to point out the economic hurdles. 
The initial capital required to retrofit existing buildings for large-scale hydroponics is staggering, 
and the operational costs can easily outstrip the revenue generated from crop sales.

Despite these financial obstacles, technological advancements in automated climate control and LED lighting are continually driving down the overheads of urban farming. 
As innovations scale, the dream of a self-sufficient, ecologically balanced city edges closer to reality. 
Ultimately, while urban agriculture may not completely replace traditional rural farming, 
it represents a vital complementary strategy in the quest to feed a rapidly expanding global population.
`,

question:"In the second paragraph, the writer suggests that community gardens?",

options:[
 "Tend to increase financial burden on city councils",
 "Primarily function as aesthetically pleasing locations",
 "Help improve the psychological health of local citizens",
 "Are difficult to maintain due to a lack of shared responsibility", 
],

correct:"Help improve the  psychological health pf logical citizens"
},

{type:"multiple",
 category:"reading",
 
 passage:`Cities have long been viewed as concrete landscapes, entirely dependent on rural areas for sustenance. 
However, the paradigm is shifting. 
Urban agriculture is no longer a fringe movement; it is becoming a cornerstone of sustainable city planning. 
By integrating vertical farming, rooftop greenhouses, and community gardens into the architectural fabric of metropolises, 
urban planners are effectively transforming grey spaces into green infrastructure. 
This transition offers profound ecological benefits, 
drastically reducing "food miles"—the distance food travels from farm to plate—thereby slashing greenhouse gas emissions associated with transportation.

Beyond environmental advantages, localized food production serves as a catalyst for community cohesion. 
Abandoned lots reclaimed as community gardens often act as social hubs, fostering a sense of shared responsibility and improving mental well-being among residents. 
Furthermore, proponents argue that these initiatives bolster food security in densely populated areas, 
shielding vulnerable populations from the volatility of global supply chains. Skeptics, 
however, are quick to point out the economic hurdles. 
The initial capital required to retrofit existing buildings for large-scale hydroponics is staggering, 
and the operational costs can easily outstrip the revenue generated from crop sales.

Despite these financial obstacles, technological advancements in automated climate control and LED lighting are continually driving down the overheads of urban farming. 
As innovations scale, the dream of a self-sufficient, ecologically balanced city edges closer to reality. 
Ultimately, while urban agriculture may not completely replace traditional rural farming, 
it represents a vital complementary strategy in the quest to feed a rapidly expanding global population.
`,

questions:"What do proponents of urban agriculture argue regarding food security?",

options:[
 "It protects cities from the instability of international supply chains",
 "It guarantees lower food prices for all urban residents",
 "It will entirely solve the issue of global starvation",
 "It makes rural farming methods obsolete", 
],

correct:"It protects cities from the instability of international supply chains"
},

{type:"multiple",
 category:"reading",
 
  passage:`Cities have long been viewed as concrete landscapes, entirely dependent on rural areas for sustenance. 
However, the paradigm is shifting. 
Urban agriculture is no longer a fringe movement; it is becoming a cornerstone of sustainable city planning. 
By integrating vertical farming, rooftop greenhouses, and community gardens into the architectural fabric of metropolises, 
urban planners are effectively transforming grey spaces into green infrastructure. 
This transition offers profound ecological benefits, 
drastically reducing "food miles"—the distance food travels from farm to plate—thereby slashing greenhouse gas emissions associated with transportation.

Beyond environmental advantages, localized food production serves as a catalyst for community cohesion. 
Abandoned lots reclaimed as community gardens often act as social hubs, fostering a sense of shared responsibility and improving mental well-being among residents. 
Furthermore, proponents argue that these initiatives bolster food security in densely populated areas, 
shielding vulnerable populations from the volatility of global supply chains. Skeptics, 
however, are quick to point out the economic hurdles. 
The initial capital required to retrofit existing buildings for large-scale hydroponics is staggering, 
and the operational costs can easily outstrip the revenue generated from crop sales.

Despite these financial obstacles, technological advancements in automated climate control and LED lighting are continually driving down the overheads of urban farming. 
As innovations scale, the dream of a self-sufficient, ecologically balanced city edges closer to reality. 
Ultimately, while urban agriculture may not completely replace traditional rural farming, 
it represents a vital complementary strategy in the quest to feed a rapidly expanding global population.
`,

question:"What is a major disadvantage of urban farming according to skeptics?",

options:[
 "The crops produced are generally of lower nutritional quality",
 "The high initial costs often exceed the money made from selling crops",
 "The technology required is currently unavailable in most countries",
 " It causes significant disruptions to existing architectural structures", 
],

correct:"The high initial costs often exceed the money made from selling crops"
},

{type:"multiple",
 category:"reading",
 
  passage:`Cities have long been viewed as concrete landscapes, entirely dependent on rural areas for sustenance. 
However, the paradigm is shifting. 
Urban agriculture is no longer a fringe movement; it is becoming a cornerstone of sustainable city planning. 
By integrating vertical farming, rooftop greenhouses, and community gardens into the architectural fabric of metropolises, 
urban planners are effectively transforming grey spaces into green infrastructure. 
This transition offers profound ecological benefits, 
drastically reducing "food miles"—the distance food travels from farm to plate—thereby slashing greenhouse gas emissions associated with transportation.

Beyond environmental advantages, localized food production serves as a catalyst for community cohesion. 
Abandoned lots reclaimed as community gardens often act as social hubs, fostering a sense of shared responsibility and improving mental well-being among residents. 
Furthermore, proponents argue that these initiatives bolster food security in densely populated areas, 
shielding vulnerable populations from the volatility of global supply chains. Skeptics, 
however, are quick to point out the economic hurdles. 
The initial capital required to retrofit existing buildings for large-scale hydroponics is staggering, 
and the operational costs can easily outstrip the revenue generated from crop sales.

Despite these financial obstacles, technological advancements in automated climate control and LED lighting are continually driving down the overheads of urban farming. 
As innovations scale, the dream of a self-sufficient, ecologically balanced city edges closer to reality. 
Ultimately, while urban agriculture may not completely replace traditional rural farming, 
it represents a vital complementary strategy in the quest to feed a rapidly expanding global population.
`,

question:"In the third paragraph, what factor is helping to reduce the expenses of urban farming?",

options:[
 "A decrease in the global demand for fresh produce",
 "Government subsidies for urban farmers",
 "Technological progress in LED lighting and climate control",
 "The utilization of cheaper labor in urban environments", 
],

correct:"Technological progress in LED lighting and climate control"
},

{type:"multiple",
 category:"reading",
 
  passage:`Cities have long been viewed as concrete landscapes, entirely dependent on rural areas for sustenance. 
However, the paradigm is shifting. 
Urban agriculture is no longer a fringe movement; it is becoming a cornerstone of sustainable city planning. 
By integrating vertical farming, rooftop greenhouses, and community gardens into the architectural fabric of metropolises, 
urban planners are effectively transforming grey spaces into green infrastructure. 
This transition offers profound ecological benefits, 
drastically reducing "food miles"—the distance food travels from farm to plate—thereby slashing greenhouse gas emissions associated with transportation.

Beyond environmental advantages, localized food production serves as a catalyst for community cohesion. 
Abandoned lots reclaimed as community gardens often act as social hubs, fostering a sense of shared responsibility and improving mental well-being among residents. 
Furthermore, proponents argue that these initiatives bolster food security in densely populated areas, 
shielding vulnerable populations from the volatility of global supply chains. Skeptics, 
however, are quick to point out the economic hurdles. 
The initial capital required to retrofit existing buildings for large-scale hydroponics is staggering, 
and the operational costs can easily outstrip the revenue generated from crop sales.

Despite these financial obstacles, technological advancements in automated climate control and LED lighting are continually driving down the overheads of urban farming. 
As innovations scale, the dream of a self-sufficient, ecologically balanced city edges closer to reality. 
Ultimately, while urban agriculture may not completely replace traditional rural farming, 
it represents a vital complementary strategy in the quest to feed a rapidly expanding global population.
`,

question:"The writer concludes that urban agriculture will likely...",

options:[
 "completely replace rural farming in the near future",
 "remain an unprofitable hobby for city dwellers",
 "become the only viable way to feed global populations",
 "act as an important supplement to traditional farming",
],

correct:"act as an important supplement to traditional farming"
},

{type:"multiple",
 category:"reading",
 
  passage:`Cities have long been viewed as concrete landscapes, entirely dependent on rural areas for sustenance. 
However, the paradigm is shifting. 
Urban agriculture is no longer a fringe movement; it is becoming a cornerstone of sustainable city planning. 
By integrating vertical farming, rooftop greenhouses, and community gardens into the architectural fabric of metropolises, 
urban planners are effectively transforming grey spaces into green infrastructure. 
This transition offers profound ecological benefits, 
drastically reducing "food miles"—the distance food travels from farm to plate—thereby slashing greenhouse gas emissions associated with transportation.

Beyond environmental advantages, localized food production serves as a catalyst for community cohesion. 
Abandoned lots reclaimed as community gardens often act as social hubs, fostering a sense of shared responsibility and improving mental well-being among residents. 
Furthermore, proponents argue that these initiatives bolster food security in densely populated areas, 
shielding vulnerable populations from the volatility of global supply chains. Skeptics, 
however, are quick to point out the economic hurdles. 
The initial capital required to retrofit existing buildings for large-scale hydroponics is staggering, 
and the operational costs can easily outstrip the revenue generated from crop sales.

Despite these financial obstacles, technological advancements in automated climate control and LED lighting are continually driving down the overheads of urban farming. 
As innovations scale, the dream of a self-sufficient, ecologically balanced city edges closer to reality. 
Ultimately, while urban agriculture may not completely replace traditional rural farming, 
it represents a vital complementary strategy in the quest to feed a rapidly expanding global population.
`,

question:"As used in the text, what does the phrase 'paradigm is shifting' mean?",

options:[
 "People are becoming confused about city planning",
"A fundamental change in approach or belief is occurring",
"The economy is collapsing",
"The physical geography of cities is changing overnight", 
],

correct:"A fundamental change in approach or belief is occurring"
},

{type:"multiple",
 category:"reading",
 
  passage:`Cities have long been viewed as concrete landscapes, entirely dependent on rural areas for sustenance. 
However, the paradigm is shifting. 
Urban agriculture is no longer a fringe movement; it is becoming a cornerstone of sustainable city planning. 
By integrating vertical farming, rooftop greenhouses, and community gardens into the architectural fabric of metropolises, 
urban planners are effectively transforming grey spaces into green infrastructure. 
This transition offers profound ecological benefits, 
drastically reducing "food miles"—the distance food travels from farm to plate—thereby slashing greenhouse gas emissions associated with transportation.

Beyond environmental advantages, localized food production serves as a catalyst for community cohesion. 
Abandoned lots reclaimed as community gardens often act as social hubs, fostering a sense of shared responsibility and improving mental well-being among residents. 
Furthermore, proponents argue that these initiatives bolster food security in densely populated areas, 
shielding vulnerable populations from the volatility of global supply chains. Skeptics, 
however, are quick to point out the economic hurdles. 
The initial capital required to retrofit existing buildings for large-scale hydroponics is staggering, 
and the operational costs can easily outstrip the revenue generated from crop sales.

Despite these financial obstacles, technological advancements in automated climate control and LED lighting are continually driving down the overheads of urban farming. 
As innovations scale, the dream of a self-sufficient, ecologically balanced city edges closer to reality. 
Ultimately, while urban agriculture may not completely replace traditional rural farming, 
it represents a vital complementary strategy in the quest to feed a rapidly expanding global population.
`,

question:"What does the word 'they' refer to in the phrase 'while proponents argue that these initiatives bolster food security'?",

options:[
 "Skeptics",
"Global supply chains",
"Proponents",
"Community gardens / Urban agriculture initiatives" 
],

correct:"Community gardens / Urban agriculture initiatives"
},

{type:"multiple",
 category:"reading",
 
  passage:`Cities have long been viewed as concrete landscapes, entirely dependent on rural areas for sustenance. 
However, the paradigm is shifting. 
Urban agriculture is no longer a fringe movement; it is becoming a cornerstone of sustainable city planning. 
By integrating vertical farming, rooftop greenhouses, and community gardens into the architectural fabric of metropolises, 
urban planners are effectively transforming grey spaces into green infrastructure. 
This transition offers profound ecological benefits, 
drastically reducing "food miles"—the distance food travels from farm to plate—thereby slashing greenhouse gas emissions associated with transportation.

Beyond environmental advantages, localized food production serves as a catalyst for community cohesion. 
Abandoned lots reclaimed as community gardens often act as social hubs, fostering a sense of shared responsibility and improving mental well-being among residents. 
Furthermore, proponents argue that these initiatives bolster food security in densely populated areas, 
shielding vulnerable populations from the volatility of global supply chains. Skeptics, 
however, are quick to point out the economic hurdles. 
The initial capital required to retrofit existing buildings for large-scale hydroponics is staggering, 
and the operational costs can easily outstrip the revenue generated from crop sales.

Despite these financial obstacles, technological advancements in automated climate control and LED lighting are continually driving down the overheads of urban farming. 
As innovations scale, the dream of a self-sufficient, ecologically balanced city edges closer to reality. 
Ultimately, while urban agriculture may not completely replace traditional rural farming, 
it represents a vital complementary strategy in the quest to feed a rapidly expanding global population.
`,

question:"What is the overall tone of the text regarding urban agriculture?",

options:[
 "Pessimistic and dismissive",
"Optimistic yet objective",
"Enthusiastic and biased",
"Cautious and alarming", 
],

correct:"Optimistic yet objective"
},

{type:"multiple",
 category:"reading",

 passage:`Laughter is a universal human phenomenon, a primal vocalization that predates the development of spoken language. 
 Yet, despite its ubiquity, the neurological and psychological underpinnings of why we laugh remain somewhat elusive. 
 Historically, researchers postulated that laughter was strictly an emotional response to humor, 
 a mechanism used to diffuse tension or express amusement.
However, contemporary neurobiology has revealed a much more complex picture, 
suggesting that laughter is fundamentally a social lubricant rather than purely a reaction to a joke.

Studies indicate that individuals are thirty times more likely to laugh when they are in the presence of others compared to when they are alone. 
This staggering statistic underscores the idea that laughter is a tool for communication and affiliation. 
When people laugh together, it signifies trust, empathy, and a shared perspective, effectively breaking down interpersonal barriers. 
It is a non-verbal cue that signals to others that one is safe, approachable, and part of the in-group. 
This evolutionary perspective posits that communal laughter played a vital role in early human history by cementing social bonds within hunter-gatherer tribes, thereby ensuring group survival.

Interestingly, the neurological pathways activated by laughter are incredibly intricate. 
The brain processes humorous stimuli through the prefrontal cortex—the region responsible for cognitive analysis—while the actual physical act of laughing triggers the release of endorphins. 
These neurochemicals promote a sense of well-being and pain relief. 
Consequently, the act of laughing not only fortifies our social connections but also yields profound physiological benefits. 
Ultimately, laughter is far more than a simple reflex to the absurd; it is a sophisticated biological and social mechanism that underpins human interaction
 `,

 question:"What was the historical belief regarding the primary function of laughter?",

 options:[
"It was used primarily to establish dominance in a group",
"It was an emotional reaction exclusively tied to humor",
"It was a language developed by early hunter-gatherers",
"It was a physical reflex triggered by a lack of oxygen",
 ],

 correct:" It was an emotional reaction exclusively tied to humor"
},

{type:"multiple",
 category:"reading",

 passage:`Laughter is a universal human phenomenon, a primal vocalization that predates the development of spoken language. 
 Yet, despite its ubiquity, the neurological and psychological underpinnings of why we laugh remain somewhat elusive. 
 Historically, researchers postulated that laughter was strictly an emotional response to humor, 
 a mechanism used to diffuse tension or express amusement.
However, contemporary neurobiology has revealed a much more complex picture, 
suggesting that laughter is fundamentally a social lubricant rather than purely a reaction to a joke.

Studies indicate that individuals are thirty times more likely to laugh when they are in the presence of others compared to when they are alone. 
This staggering statistic underscores the idea that laughter is a tool for communication and affiliation. 
When people laugh together, it signifies trust, empathy, and a shared perspective, effectively breaking down interpersonal barriers. 
It is a non-verbal cue that signals to others that one is safe, approachable, and part of the in-group. 
This evolutionary perspective posits that communal laughter played a vital role in early human history by cementing social bonds within hunter-gatherer tribes, thereby ensuring group survival.

Interestingly, the neurological pathways activated by laughter are incredibly intricate. 
The brain processes humorous stimuli through the prefrontal cortex—the region responsible for cognitive analysis—while the actual physical act of laughing triggers the release of endorphins. 
These neurochemicals promote a sense of well-being and pain relief. 
Consequently, the act of laughing not only fortifies our social connections but also yields profound physiological benefits. 
Ultimately, laughter is far more than a simple reflex to the absurd; it is a sophisticated biological and social mechanism that underpins human interaction
 `,

 question:"According to contemporary neurobiology, what is the main purpose of laughter?",

 options:[
 "To increase oxygen intake in the brain",
"To act as a social lubricant",
"To confuse potential predators",
"To enhance analytical thinking skills", 
 ],

 correct:"To act as a social lubricant"
},

{type:"multiple",
 category:"reading",

 passage:`Laughter is a universal human phenomenon, a primal vocalization that predates the development of spoken language. 
 Yet, despite its ubiquity, the neurological and psychological underpinnings of why we laugh remain somewhat elusive. 
 Historically, researchers postulated that laughter was strictly an emotional response to humor, 
 a mechanism used to diffuse tension or express amusement.
However, contemporary neurobiology has revealed a much more complex picture, 
suggesting that laughter is fundamentally a social lubricant rather than purely a reaction to a joke.

Studies indicate that individuals are thirty times more likely to laugh when they are in the presence of others compared to when they are alone. 
This staggering statistic underscores the idea that laughter is a tool for communication and affiliation. 
When people laugh together, it signifies trust, empathy, and a shared perspective, effectively breaking down interpersonal barriers. 
It is a non-verbal cue that signals to others that one is safe, approachable, and part of the in-group. 
This evolutionary perspective posits that communal laughter played a vital role in early human history by cementing social bonds within hunter-gatherer tribes, thereby ensuring group survival.

Interestingly, the neurological pathways activated by laughter are incredibly intricate. 
The brain processes humorous stimuli through the prefrontal cortex—the region responsible for cognitive analysis—while the actual physical act of laughing triggers the release of endorphins. 
These neurochemicals promote a sense of well-being and pain relief. 
Consequently, the act of laughing not only fortifies our social connections but also yields profound physiological benefits. 
Ultimately, laughter is far more than a simple reflex to the absurd; it is a sophisticated biological and social mechanism that underpins human interaction
 `,

 question:"What does the statistic mentioned in the second paragraph (thirty times more likely to laugh) emphasize?",

 options:[
 "Laughter is mostly a solitary, internal experience",
"People generally find life thirty times funnier today than in the past",
"Laughter is primarily a tool for communication and affiliatio",
"Individuals only laugh when they are told to do so by others", 
 ],

 correct:"Laughter is primarily a tool for communication and affiliatio"
},

{type:"multiple",
 category:"reading",

 passage:`Laughter is a universal human phenomenon, a primal vocalization that predates the development of spoken language. 
 Yet, despite its ubiquity, the neurological and psychological underpinnings of why we laugh remain somewhat elusive. 
 Historically, researchers postulated that laughter was strictly an emotional response to humor, 
 a mechanism used to diffuse tension or express amusement.
However, contemporary neurobiology has revealed a much more complex picture, 
suggesting that laughter is fundamentally a social lubricant rather than purely a reaction to a joke.

Studies indicate that individuals are thirty times more likely to laugh when they are in the presence of others compared to when they are alone. 
This staggering statistic underscores the idea that laughter is a tool for communication and affiliation. 
When people laugh together, it signifies trust, empathy, and a shared perspective, effectively breaking down interpersonal barriers. 
It is a non-verbal cue that signals to others that one is safe, approachable, and part of the in-group. 
This evolutionary perspective posits that communal laughter played a vital role in early human history by cementing social bonds within hunter-gatherer tribes, thereby ensuring group survival.

Interestingly, the neurological pathways activated by laughter are incredibly intricate. 
The brain processes humorous stimuli through the prefrontal cortex—the region responsible for cognitive analysis—while the actual physical act of laughing triggers the release of endorphins. 
These neurochemicals promote a sense of well-being and pain relief. 
Consequently, the act of laughing not only fortifies our social connections but also yields profound physiological benefits. 
Ultimately, laughter is far more than a simple reflex to the absurd; it is a sophisticated biological and social mechanism that underpins human interaction
 `,

 question:"When people laugh together, what does it signify about their relationship?",

 options:[
"They are likely to have a conflict in the future",
"They share similar cognitive abilities",
"They share empathy, trust, and a common perspective",
"They are part of an exclusive social club that excludes others",
 ],

 correct:"They share empathy, trust, and a common perspective"
},

{type:"multiple",
 category:"reading",

 passage:`Laughter is a universal human phenomenon, a primal vocalization that predates the development of spoken language. 
 Yet, despite its ubiquity, the neurological and psychological underpinnings of why we laugh remain somewhat elusive. 
 Historically, researchers postulated that laughter was strictly an emotional response to humor, 
 a mechanism used to diffuse tension or express amusement.
However, contemporary neurobiology has revealed a much more complex picture, 
suggesting that laughter is fundamentally a social lubricant rather than purely a reaction to a joke.

Studies indicate that individuals are thirty times more likely to laugh when they are in the presence of others compared to when they are alone. 
This staggering statistic underscores the idea that laughter is a tool for communication and affiliation. 
When people laugh together, it signifies trust, empathy, and a shared perspective, effectively breaking down interpersonal barriers. 
It is a non-verbal cue that signals to others that one is safe, approachable, and part of the in-group. 
This evolutionary perspective posits that communal laughter played a vital role in early human history by cementing social bonds within hunter-gatherer tribes, thereby ensuring group survival.

Interestingly, the neurological pathways activated by laughter are incredibly intricate. 
The brain processes humorous stimuli through the prefrontal cortex—the region responsible for cognitive analysis—while the actual physical act of laughing triggers the release of endorphins. 
These neurochemicals promote a sense of well-being and pain relief. 
Consequently, the act of laughing not only fortifies our social connections but also yields profound physiological benefits. 
Ultimately, laughter is far more than a simple reflex to the absurd; it is a sophisticated biological and social mechanism that underpins human interaction
 `,

 question:"What role did laughter play in early human history according to the evolutionary perspective?",

 options:[
 "It helped early humans communicate complex ideas about the weather",
"It cemented social bonds and ensured the survival of the group",
"It allowed early humans to hunt more effectively",
"It was used to scare away rival tribes", 
 ],

 correct:"It cemented social bonds and ensured the survival of the group"
},

{type:"multiple",
 category:"reading",

 passage:`Laughter is a universal human phenomenon, a primal vocalization that predates the development of spoken language. 
 Yet, despite its ubiquity, the neurological and psychological underpinnings of why we laugh remain somewhat elusive. 
 Historically, researchers postulated that laughter was strictly an emotional response to humor, 
 a mechanism used to diffuse tension or express amusement.
However, contemporary neurobiology has revealed a much more complex picture, 
suggesting that laughter is fundamentally a social lubricant rather than purely a reaction to a joke.

Studies indicate that individuals are thirty times more likely to laugh when they are in the presence of others compared to when they are alone. 
This staggering statistic underscores the idea that laughter is a tool for communication and affiliation. 
When people laugh together, it signifies trust, empathy, and a shared perspective, effectively breaking down interpersonal barriers. 
It is a non-verbal cue that signals to others that one is safe, approachable, and part of the in-group. 
This evolutionary perspective posits that communal laughter played a vital role in early human history by cementing social bonds within hunter-gatherer tribes, thereby ensuring group survival.

Interestingly, the neurological pathways activated by laughter are incredibly intricate. 
The brain processes humorous stimuli through the prefrontal cortex—the region responsible for cognitive analysis—while the actual physical act of laughing triggers the release of endorphins. 
These neurochemicals promote a sense of well-being and pain relief. 
Consequently, the act of laughing not only fortifies our social connections but also yields profound physiological benefits. 
Ultimately, laughter is far more than a simple reflex to the absurd; it is a sophisticated biological and social mechanism that underpins human interaction
 `,

 question:"Which part of the brain is responsible for analyzing humorous stimuli?",

 options:[
"The prefrontal cortex",
"The amygdala",
"The hippocampus",
"The cerebellum", 
 ],

 correct:"The prefrontal cortex"
},

{type:"multiple",
 category:"reading",

 passage:`Laughter is a universal human phenomenon, a primal vocalization that predates the development of spoken language. 
 Yet, despite its ubiquity, the neurological and psychological underpinnings of why we laugh remain somewhat elusive. 
 Historically, researchers postulated that laughter was strictly an emotional response to humor, 
 a mechanism used to diffuse tension or express amusement.
However, contemporary neurobiology has revealed a much more complex picture, 
suggesting that laughter is fundamentally a social lubricant rather than purely a reaction to a joke.

Studies indicate that individuals are thirty times more likely to laugh when they are in the presence of others compared to when they are alone. 
This staggering statistic underscores the idea that laughter is a tool for communication and affiliation. 
When people laugh together, it signifies trust, empathy, and a shared perspective, effectively breaking down interpersonal barriers. 
It is a non-verbal cue that signals to others that one is safe, approachable, and part of the in-group. 
This evolutionary perspective posits that communal laughter played a vital role in early human history by cementing social bonds within hunter-gatherer tribes, thereby ensuring group survival.

Interestingly, the neurological pathways activated by laughter are incredibly intricate. 
The brain processes humorous stimuli through the prefrontal cortex—the region responsible for cognitive analysis—while the actual physical act of laughing triggers the release of endorphins. 
These neurochemicals promote a sense of well-being and pain relief. 
Consequently, the act of laughing not only fortifies our social connections but also yields profound physiological benefits. 
Ultimately, laughter is far more than a simple reflex to the absurd; it is a sophisticated biological and social mechanism that underpins human interaction
 `,

 question:"What physiological benefit is mentioned as a result of the physical act of laughing?",

 options:[
 "The improvement of cardiovascular health",
"The reduction of the prefrontal cortex's workload",
"The release of endorphins, which provide pain relief",
"The rapid development of new neurological pathways", 
 ],

 correct:"The rapid development of new neurological pathways"
},

{type:"multiple",
 category:"reading",

 passage:`Laughter is a universal human phenomenon, a primal vocalization that predates the development of spoken language. 
 Yet, despite its ubiquity, the neurological and psychological underpinnings of why we laugh remain somewhat elusive. 
 Historically, researchers postulated that laughter was strictly an emotional response to humor, 
 a mechanism used to diffuse tension or express amusement.
However, contemporary neurobiology has revealed a much more complex picture, 
suggesting that laughter is fundamentally a social lubricant rather than purely a reaction to a joke.

Studies indicate that individuals are thirty times more likely to laugh when they are in the presence of others compared to when they are alone. 
This staggering statistic underscores the idea that laughter is a tool for communication and affiliation. 
When people laugh together, it signifies trust, empathy, and a shared perspective, effectively breaking down interpersonal barriers. 
It is a non-verbal cue that signals to others that one is safe, approachable, and part of the in-group. 
This evolutionary perspective posits that communal laughter played a vital role in early human history by cementing social bonds within hunter-gatherer tribes, thereby ensuring group survival.

Interestingly, the neurological pathways activated by laughter are incredibly intricate. 
The brain processes humorous stimuli through the prefrontal cortex—the region responsible for cognitive analysis—while the actual physical act of laughing triggers the release of endorphins. 
These neurochemicals promote a sense of well-being and pain relief. 
Consequently, the act of laughing not only fortifies our social connections but also yields profound physiological benefits. 
Ultimately, laughter is far more than a simple reflex to the absurd; it is a sophisticated biological and social mechanism that underpins human interaction
 `,

 question:"What does the author mean by the phrase 'in-group' in the second paragraph?",

 options:[
 "People who are related by blood",
"Individuals who possess high intelligence",
"A group of people who share mutual interests and trust",
"Strangers who do not know each other", 
 ],

 correct:"A group of people who share mutual interests and trust"
 },

 {type:"multiple",
 category:"reading",

 passage:`Laughter is a universal human phenomenon, a primal vocalization that predates the development of spoken language. 
 Yet, despite its ubiquity, the neurological and psychological underpinnings of why we laugh remain somewhat elusive. 
 Historically, researchers postulated that laughter was strictly an emotional response to humor, 
 a mechanism used to diffuse tension or express amusement.
However, contemporary neurobiology has revealed a much more complex picture, 
suggesting that laughter is fundamentally a social lubricant rather than purely a reaction to a joke.

Studies indicate that individuals are thirty times more likely to laugh when they are in the presence of others compared to when they are alone. 
This staggering statistic underscores the idea that laughter is a tool for communication and affiliation. 
When people laugh together, it signifies trust, empathy, and a shared perspective, effectively breaking down interpersonal barriers. 
It is a non-verbal cue that signals to others that one is safe, approachable, and part of the in-group. 
This evolutionary perspective posits that communal laughter played a vital role in early human history by cementing social bonds within hunter-gatherer tribes, thereby ensuring group survival.

Interestingly, the neurological pathways activated by laughter are incredibly intricate. 
The brain processes humorous stimuli through the prefrontal cortex—the region responsible for cognitive analysis—while the actual physical act of laughing triggers the release of endorphins. 
These neurochemicals promote a sense of well-being and pain relief. 
Consequently, the act of laughing not only fortifies our social connections but also yields profound physiological benefits. 
Ultimately, laughter is far more than a simple reflex to the absurd; it is a sophisticated biological and social mechanism that underpins human interaction
 `,

 
 question:"What does the word 'it' refer to in the phrase 'it is a non-verbal cue that signals to others...'?",

 options:[
 "Trust",
"Laughter",
"Empathy",
"A shared perspective", 
 ],

 correct:"Laughter"
},

{type:"multiple",
 category:"reading",

 passage:`Laughter is a universal human phenomenon, a primal vocalization that predates the development of spoken language. 
 Yet, despite its ubiquity, the neurological and psychological underpinnings of why we laugh remain somewhat elusive. 
 Historically, researchers postulated that laughter was strictly an emotional response to humor, 
 a mechanism used to diffuse tension or express amusement.
However, contemporary neurobiology has revealed a much more complex picture, 
suggesting that laughter is fundamentally a social lubricant rather than purely a reaction to a joke.

Studies indicate that individuals are thirty times more likely to laugh when they are in the presence of others compared to when they are alone. 
This staggering statistic underscores the idea that laughter is a tool for communication and affiliation. 
When people laugh together, it signifies trust, empathy, and a shared perspective, effectively breaking down interpersonal barriers. 
It is a non-verbal cue that signals to others that one is safe, approachable, and part of the in-group. 
This evolutionary perspective posits that communal laughter played a vital role in early human history by cementing social bonds within hunter-gatherer tribes, thereby ensuring group survival.

Interestingly, the neurological pathways activated by laughter are incredibly intricate. 
The brain processes humorous stimuli through the prefrontal cortex—the region responsible for cognitive analysis—while the actual physical act of laughing triggers the release of endorphins. 
These neurochemicals promote a sense of well-being and pain relief. 
Consequently, the act of laughing not only fortifies our social connections but also yields profound physiological benefits. 
Ultimately, laughter is far more than a simple reflex to the absurd; it is a sophisticated biological and social mechanism that underpins human interaction
 `,

 
 question:"What is the primary conclusion drawn by the author in the final paragraph?",

 options:[
 "Laughter is a complex biological and social mechanism",
"Laughter is less important than spoken language",
"The neurological pathways of laughter are still completely unknown",
"Humor is the only valid trigger for laughter", 
 ],

 correct:"Laughter is a complex biological and social mechanism"
},

{type:"multiple",
 category:"reading",

 passage:`The cognitive processes underlying aesthetic experiences have long fascinated both philosophers and neuroscientists. 
 Historically relegated to the domain of subjective philosophy, 
 the appreciation of art and beauty is now being actively unpacked through the lens of neurobiology. 
 Recent functional magnetic resonance imaging (fMRI) studies indicate that engaging with compelling art activates a widespread neural network, 
 encompassing not only sensory regions but also the brain’s reward circuitry and default mode network. 
 This intersection suggests that aesthetic appreciation is not a singular, isolated cognitive event, 
 but rather a complex orchestration of memory, emotion, and self-reflection.

 Furthermore, the concept of "neuroesthetics" posits that the human brain is predisposed to respond to certain structural regularities found in nature and art, 
such as fractal patterns and specific proportions. 
When an individual observes a visually striking piece, the brain undergoes a process of predictive coding. 
It attempts to anticipate the sensory input, and when the artwork presents a harmonious yet complex deviation from these predictions, 
it triggers a cascade of neurochemical reactions, resulting in the sensation of awe or beauty. 
This phenomenon may explain why certain artistic masterpieces possess universal, cross-cultural appeal.

However, cultural conditioning and personal experience undeniably modulate this biological foundation. 
While the neurological architecture for processing beauty is ubiquitous, an individual’s interpretation and emotional resonance with a specific piece of art are heavily contingent upon their prior knowledge and cultural background. 
Consequently, aesthetic perception can be understood as a dynamic interplay between universal biological predispositions and highly individualized cognitive frameworks
 `,

 question:"According to the passage, how has the study of aesthetic appreciation changed over time?",

 options:[
 "It has shifted from being purely subjective to being investigated through biological and neurological frameworks",
"It has become increasingly focused on the philosophical definitions of beauty",
"It has been largely dismissed by modern scientists as an overly subjective phenomenon",
"It is now viewed as a solitary cognitive event rather than a complex one", 
 ],

 correct:"It has shifted from being purely subjective to being investigated through biological and neurological frameworks"
},

{type:"multiple",
 category:"reading",

 passage:`The cognitive processes underlying aesthetic experiences have long fascinated both philosophers and neuroscientists. 
 Historically relegated to the domain of subjective philosophy, 
 the appreciation of art and beauty is now being actively unpacked through the lens of neurobiology. 
 Recent functional magnetic resonance imaging (fMRI) studies indicate that engaging with compelling art activates a widespread neural network, 
 encompassing not only sensory regions but also the brain’s reward circuitry and default mode network. 
 This intersection suggests that aesthetic appreciation is not a singular, isolated cognitive event, 
 but rather a complex orchestration of memory, emotion, and self-reflection.

 Furthermore, the concept of "neuroesthetics" posits that the human brain is predisposed to respond to certain structural regularities found in nature and art, 
such as fractal patterns and specific proportions. 
When an individual observes a visually striking piece, the brain undergoes a process of predictive coding. 
It attempts to anticipate the sensory input, and when the artwork presents a harmonious yet complex deviation from these predictions, 
it triggers a cascade of neurochemical reactions, resulting in the sensation of awe or beauty. 
This phenomenon may explain why certain artistic masterpieces possess universal, cross-cultural appeal.

However, cultural conditioning and personal experience undeniably modulate this biological foundation. 
While the neurological architecture for processing beauty is ubiquitous, an individual’s interpretation and emotional resonance with a specific piece of art are heavily contingent upon their prior knowledge and cultural background. 
Consequently, aesthetic perception can be understood as a dynamic interplay between universal biological predispositions and highly individualized cognitive frameworks
 `,

 question:"What brain regions are activated when an individual engages with compelling art, according to fMRI studies?",

options:[
 "Only the sensory and motor cortices",
"The sensory regions, the reward circuitry, and the default mode network",
"The frontal lobe and the amygdala exclusively",
"The brainstem and the cerebellum", 
],

correct:"The sensory regions, the reward circuitry, and the default mode network"
},

{type:"multiple",
 category:"reading",

 passage:`The cognitive processes underlying aesthetic experiences have long fascinated both philosophers and neuroscientists. 
 Historically relegated to the domain of subjective philosophy, 
 the appreciation of art and beauty is now being actively unpacked through the lens of neurobiology. 
 Recent functional magnetic resonance imaging (fMRI) studies indicate that engaging with compelling art activates a widespread neural network, 
 encompassing not only sensory regions but also the brain’s reward circuitry and default mode network. 
 This intersection suggests that aesthetic appreciation is not a singular, isolated cognitive event, 
 but rather a complex orchestration of memory, emotion, and self-reflection.

 Furthermore, the concept of "neuroesthetics" posits that the human brain is predisposed to respond to certain structural regularities found in nature and art, 
such as fractal patterns and specific proportions. 
When an individual observes a visually striking piece, the brain undergoes a process of predictive coding. 
It attempts to anticipate the sensory input, and when the artwork presents a harmonious yet complex deviation from these predictions, 
it triggers a cascade of neurochemical reactions, resulting in the sensation of awe or beauty. 
This phenomenon may explain why certain artistic masterpieces possess universal, cross-cultural appeal.

However, cultural conditioning and personal experience undeniably modulate this biological foundation. 
While the neurological architecture for processing beauty is ubiquitous, an individual’s interpretation and emotional resonance with a specific piece of art are heavily contingent upon their prior knowledge and cultural background. 
Consequently, aesthetic perception can be understood as a dynamic interplay between universal biological predispositions and highly individualized cognitive frameworks
 `,

 question:"In the context of the passage, what does the term 'neuroesthetics' suggest?",

 options:[
 "Art therapy is an effective treatment for neurological disorders",
"The human brain is naturally wired to respond to particular structural regularities in art and nature",
"The perception of beauty is entirely learned through societal exposure",
"Neuroscientists can accurately predict which art an individual will dislike", 
 ],

 correct:"The human brain is naturally wired to respond to particular structural regularities in art and nature"
},

{type:"multiple",
 category:"reading",

 passage:`The cognitive processes underlying aesthetic experiences have long fascinated both philosophers and neuroscientists. 
 Historically relegated to the domain of subjective philosophy, 
 the appreciation of art and beauty is now being actively unpacked through the lens of neurobiology. 
 Recent functional magnetic resonance imaging (fMRI) studies indicate that engaging with compelling art activates a widespread neural network, 
 encompassing not only sensory regions but also the brain’s reward circuitry and default mode network. 
 This intersection suggests that aesthetic appreciation is not a singular, isolated cognitive event, 
 but rather a complex orchestration of memory, emotion, and self-reflection.

 Furthermore, the concept of "neuroesthetics" posits that the human brain is predisposed to respond to certain structural regularities found in nature and art, 
such as fractal patterns and specific proportions. 
When an individual observes a visually striking piece, the brain undergoes a process of predictive coding. 
It attempts to anticipate the sensory input, and when the artwork presents a harmonious yet complex deviation from these predictions, 
it triggers a cascade of neurochemical reactions, resulting in the sensation of awe or beauty. 
This phenomenon may explain why certain artistic masterpieces possess universal, cross-cultural appeal.

However, cultural conditioning and personal experience undeniably modulate this biological foundation. 
While the neurological architecture for processing beauty is ubiquitous, an individual’s interpretation and emotional resonance with a specific piece of art are heavily contingent upon their prior knowledge and cultural background. 
Consequently, aesthetic perception can be understood as a dynamic interplay between universal biological predispositions and highly individualized cognitive frameworks
 `,

 question:"How does the process of 'predictive coding' explain the sensation of beauty?",

 options:[
 "The brain memorizes the artwork perfectly upon first glance",
"The brain accurately guesses the exact image it will see next, causing boredom",
"The brain anticipates sensory input, and harmonious yet complex deviations from these predictions trigger awe",
"The brain shuts down sensory processing to focus purely on emotional memory", 
 ],

 correct:"The brain anticipates sensory input, and harmonious yet complex deviations from these predictions trigger awe"
},

{type:"multiple",
 category:"reading",

 passage:`The cognitive processes underlying aesthetic experiences have long fascinated both philosophers and neuroscientists. 
 Historically relegated to the domain of subjective philosophy, 
 the appreciation of art and beauty is now being actively unpacked through the lens of neurobiology. 
 Recent functional magnetic resonance imaging (fMRI) studies indicate that engaging with compelling art activates a widespread neural network, 
 encompassing not only sensory regions but also the brain’s reward circuitry and default mode network. 
 This intersection suggests that aesthetic appreciation is not a singular, isolated cognitive event, 
 but rather a complex orchestration of memory, emotion, and self-reflection.

 Furthermore, the concept of "neuroesthetics" posits that the human brain is predisposed to respond to certain structural regularities found in nature and art, 
such as fractal patterns and specific proportions. 
When an individual observes a visually striking piece, the brain undergoes a process of predictive coding. 
It attempts to anticipate the sensory input, and when the artwork presents a harmonious yet complex deviation from these predictions, 
it triggers a cascade of neurochemical reactions, resulting in the sensation of awe or beauty. 
This phenomenon may explain why certain artistic masterpieces possess universal, cross-cultural appeal.

However, cultural conditioning and personal experience undeniably modulate this biological foundation. 
While the neurological architecture for processing beauty is ubiquitous, an individual’s interpretation and emotional resonance with a specific piece of art are heavily contingent upon their prior knowledge and cultural background. 
Consequently, aesthetic perception can be understood as a dynamic interplay between universal biological predispositions and highly individualized cognitive frameworks
 `,

 question:"According to the text, why might some artistic masterpieces have a universal appeal?",

 options:[
 "Because they are heavily promoted by global cultural institutions",
"Because they bypass the brain's cognitive processing entirely",
"Because they align with the brain's predisposition to respond to structural regularities like fractal patterns",
"Because they require no prior knowledge to be understood", 
 ],

 correct:"Because they align with the brain's predisposition to respond to structural regularities like fractal patterns"
},

{type:"multiple",
 category:"reading",

 passage:`The cognitive processes underlying aesthetic experiences have long fascinated both philosophers and neuroscientists. 
 Historically relegated to the domain of subjective philosophy, 
 the appreciation of art and beauty is now being actively unpacked through the lens of neurobiology. 
 Recent functional magnetic resonance imaging (fMRI) studies indicate that engaging with compelling art activates a widespread neural network, 
 encompassing not only sensory regions but also the brain’s reward circuitry and default mode network. 
 This intersection suggests that aesthetic appreciation is not a singular, isolated cognitive event, 
 but rather a complex orchestration of memory, emotion, and self-reflection.

 Furthermore, the concept of "neuroesthetics" posits that the human brain is predisposed to respond to certain structural regularities found in nature and art, 
such as fractal patterns and specific proportions. 
When an individual observes a visually striking piece, the brain undergoes a process of predictive coding. 
It attempts to anticipate the sensory input, and when the artwork presents a harmonious yet complex deviation from these predictions, 
it triggers a cascade of neurochemical reactions, resulting in the sensation of awe or beauty. 
This phenomenon may explain why certain artistic masterpieces possess universal, cross-cultural appeal.

However, cultural conditioning and personal experience undeniably modulate this biological foundation. 
While the neurological architecture for processing beauty is ubiquitous, an individual’s interpretation and emotional resonance with a specific piece of art are heavily contingent upon their prior knowledge and cultural background. 
Consequently, aesthetic perception can be understood as a dynamic interplay between universal biological predispositions and highly individualized cognitive frameworks
 `,

 question:"What role do cultural conditioning and personal experience play in aesthetic perception?",

 options:[
 "They completely override the biological foundations of brain activity",
 "They are irrelevant to how an individual perceives are",
  "They modulate the biological foundation, heavily influencing an individual's interpretation and emotional resonance",
"They cause biological responses to art to become less intense over time", 
 ],

 correct:"They modulate the biological foundation, heavily influencing an individual's interpretation and emotional resonance"
},

{type:"multiple",
 category:"reading",

 passage:`The cognitive processes underlying aesthetic experiences have long fascinated both philosophers and neuroscientists. 
 Historically relegated to the domain of subjective philosophy, 
 the appreciation of art and beauty is now being actively unpacked through the lens of neurobiology. 
 Recent functional magnetic resonance imaging (fMRI) studies indicate that engaging with compelling art activates a widespread neural network, 
 encompassing not only sensory regions but also the brain’s reward circuitry and default mode network. 
 This intersection suggests that aesthetic appreciation is not a singular, isolated cognitive event, 
 but rather a complex orchestration of memory, emotion, and self-reflection.

 Furthermore, the concept of "neuroesthetics" posits that the human brain is predisposed to respond to certain structural regularities found in nature and art, 
such as fractal patterns and specific proportions. 
When an individual observes a visually striking piece, the brain undergoes a process of predictive coding. 
It attempts to anticipate the sensory input, and when the artwork presents a harmonious yet complex deviation from these predictions, 
it triggers a cascade of neurochemical reactions, resulting in the sensation of awe or beauty. 
This phenomenon may explain why certain artistic masterpieces possess universal, cross-cultural appeal.

However, cultural conditioning and personal experience undeniably modulate this biological foundation. 
While the neurological architecture for processing beauty is ubiquitous, an individual’s interpretation and emotional resonance with a specific piece of art are heavily contingent upon their prior knowledge and cultural background. 
Consequently, aesthetic perception can be understood as a dynamic interplay between universal biological predispositions and highly individualized cognitive frameworks
 `,

 question:"Which of the following best summarizes the main idea of the passage?",

 options:[
 "Aesthetic appreciation is purely a result of cultural conditioning",
"The experience of beauty is a complex interplay between universal biological predispositions and individualized cognitive frameworks",
"Neurobiology has proven that art has no objective value",
"The human brain is incapable of predicting artistic patterns", 
 ],

 correct:"The experience of beauty is a complex interplay between universal biological predispositions and individualized cognitive frameworks"
},

{type:"multiple",
 category:"reading",

 passage:`The Anthropocene, an unofficial epoch denoting the period during which human activity has been the dominant influence on climate and the environment, 
 presents humanity with a profound existential paradox. 
 On one hand, the trajectory of human progress—characterized by rapid industrialization, 
 technological innovation, and unprecedented global connectivity—has undeniably elevated living standards, 
 eradicated numerous diseases, and democratized access to information. 
 Conversely, this very same progress has precipitated ecological degradation on a planetary scale. 
 The relentless pursuit of economic growth has disrupted Earth's delicate biogeochemical cycles, 
 leading to accelerated biodiversity loss, ubiquitous pollution, 
 and an increasingly volatile climate system.

 This paradox is rooted in the inherent misalignment between short-term human incentives and long-term ecological sustainability. 
Economic models have historically externalized environmental costs, treating natural resources as infinite commodities rather than finite systems. 
Consequently, the true cost of industrial advancement has been absorbed by the biosphere, 
manifesting in phenomena such as ocean acidification and deforestation. 
Addressing this requires a fundamental paradigm shift in how progress is measured. 
Traditional metrics, such as Gross Domestic Product (GDP), fail to account for the depletion of natural capital or the societal costs of environmental degradation. 
Alternative indices, such as the Genuine Progress Indicator (GPI), attempt to rectify this by integrating economic welfare with environmental and social factors, yet they have yet to be widely adopted by global policymakers.

Ultimately, navigating the challenges of the Anthropocene necessitates decoupling economic growth from resource consumption. 
This transition demands not only technological innovation but also a profound philosophical reorientation. 
Humanity must move away from an anthropocentric worldview—which views nature merely as a resource to be exploited—toward a more ecocentric perspective. 
In this view, human societies are recognized as interdependent components of the broader Earth system. 
Whether humanity can achieve this systemic transformation before the planetary boundaries are irrevocably breached remains the defining question of the twenty-first century
 `,

question:"What is described as the 'existential paradox' of the Anthropocene?",

options:[
 "Humanity's knowledge of the planet is increasing while our technology becomes obsolete",
"Human progress has drastically improved living standards but simultaneously caused planetary-scale ecological degradation",
"The Earth's climate is stabilizing while human economies are collapsing",
"Rapid industrialization has led to a decrease in global connectivity", 
],

correct:"Human progress has drastically improved living standards but simultaneously caused planetary-scale ecological degradation"
},

{type:"multiple",
 category:"reading",

 passage:`The Anthropocene, an unofficial epoch denoting the period during which human activity has been the dominant influence on climate and the environment, 
 presents humanity with a profound existential paradox. 
 On one hand, the trajectory of human progress—characterized by rapid industrialization, 
 technological innovation, and unprecedented global connectivity—has undeniably elevated living standards, 
 eradicated numerous diseases, and democratized access to information. 
 Conversely, this very same progress has precipitated ecological degradation on a planetary scale. 
 The relentless pursuit of economic growth has disrupted Earth's delicate biogeochemical cycles, 
 leading to accelerated biodiversity loss, ubiquitous pollution, 
 and an increasingly volatile climate system.

 This paradox is rooted in the inherent misalignment between short-term human incentives and long-term ecological sustainability. 
Economic models have historically externalized environmental costs, treating natural resources as infinite commodities rather than finite systems. 
Consequently, the true cost of industrial advancement has been absorbed by the biosphere, 
manifesting in phenomena such as ocean acidification and deforestation. 
Addressing this requires a fundamental paradigm shift in how progress is measured. 
Traditional metrics, such as Gross Domestic Product (GDP), fail to account for the depletion of natural capital or the societal costs of environmental degradation. 
Alternative indices, such as the Genuine Progress Indicator (GPI), attempt to rectify this by integrating economic welfare with environmental and social factors, yet they have yet to be widely adopted by global policymakers.

Ultimately, navigating the challenges of the Anthropocene necessitates decoupling economic growth from resource consumption. 
This transition demands not only technological innovation but also a profound philosophical reorientation. 
Humanity must move away from an anthropocentric worldview—which views nature merely as a resource to be exploited—toward a more ecocentric perspective. 
In this view, human societies are recognized as interdependent components of the broader Earth system. 
Whether humanity can achieve this systemic transformation before the planetary boundaries are irrevocably breached remains the defining question of the twenty-first century
 `,

question:"According to the text, why have short-term human incentives historically been misaligned with long-term sustainability?",

options:[
 "Because human beings are inherently selfish by nature",
"Because economic models have treated natural resources as finite systems",
"Because economic models have treated natural resources as infinite and externalized environmental costs",
"Because technology has not advanced quickly enough to solve ecological problems", 
],

correct:"Because economic models have treated natural resources as infinite and externalized environmental costs"
},

{type:"multiple",
 category:"reading",

 passage:`The Anthropocene, an unofficial epoch denoting the period during which human activity has been the dominant influence on climate and the environment, 
 presents humanity with a profound existential paradox. 
 On one hand, the trajectory of human progress—characterized by rapid industrialization, 
 technological innovation, and unprecedented global connectivity—has undeniably elevated living standards, 
 eradicated numerous diseases, and democratized access to information. 
 Conversely, this very same progress has precipitated ecological degradation on a planetary scale. 
 The relentless pursuit of economic growth has disrupted Earth's delicate biogeochemical cycles, 
 leading to accelerated biodiversity loss, ubiquitous pollution, 
 and an increasingly volatile climate system.

 This paradox is rooted in the inherent misalignment between short-term human incentives and long-term ecological sustainability. 
Economic models have historically externalized environmental costs, treating natural resources as infinite commodities rather than finite systems. 
Consequently, the true cost of industrial advancement has been absorbed by the biosphere, 
manifesting in phenomena such as ocean acidification and deforestation. 
Addressing this requires a fundamental paradigm shift in how progress is measured. 
Traditional metrics, such as Gross Domestic Product (GDP), fail to account for the depletion of natural capital or the societal costs of environmental degradation. 
Alternative indices, such as the Genuine Progress Indicator (GPI), attempt to rectify this by integrating economic welfare with environmental and social factors, yet they have yet to be widely adopted by global policymakers.

Ultimately, navigating the challenges of the Anthropocene necessitates decoupling economic growth from resource consumption. 
This transition demands not only technological innovation but also a profound philosophical reorientation. 
Humanity must move away from an anthropocentric worldview—which views nature merely as a resource to be exploited—toward a more ecocentric perspective. 
In this view, human societies are recognized as interdependent components of the broader Earth system. 
Whether humanity can achieve this systemic transformation before the planetary boundaries are irrevocably breached remains the defining question of the twenty-first century
 `,

question:"What is a major flaw of traditional economic metrics like Gross Domestic Product (GDP) according to the passage?",

options:[
 "They are too difficult to calculate for developing nations",
"They focus too heavily on environmental protection and ignore economic welfare",
"They fail to account for the depletion of natural capital and societal costs of environmental damage",
"They only measure technological innovation", 
],

correct:"They fail to account for the depletion of natural capital and societal costs of environmental damage"
},

{type:"multiple",
 category:"reading",

 passage:`The Anthropocene, an unofficial epoch denoting the period during which human activity has been the dominant influence on climate and the environment, 
 presents humanity with a profound existential paradox. 
 On one hand, the trajectory of human progress—characterized by rapid industrialization, 
 technological innovation, and unprecedented global connectivity—has undeniably elevated living standards, 
 eradicated numerous diseases, and democratized access to information. 
 Conversely, this very same progress has precipitated ecological degradation on a planetary scale. 
 The relentless pursuit of economic growth has disrupted Earth's delicate biogeochemical cycles, 
 leading to accelerated biodiversity loss, ubiquitous pollution, 
 and an increasingly volatile climate system.

 This paradox is rooted in the inherent misalignment between short-term human incentives and long-term ecological sustainability. 
Economic models have historically externalized environmental costs, treating natural resources as infinite commodities rather than finite systems. 
Consequently, the true cost of industrial advancement has been absorbed by the biosphere, 
manifesting in phenomena such as ocean acidification and deforestation. 
Addressing this requires a fundamental paradigm shift in how progress is measured. 
Traditional metrics, such as Gross Domestic Product (GDP), fail to account for the depletion of natural capital or the societal costs of environmental degradation. 
Alternative indices, such as the Genuine Progress Indicator (GPI), attempt to rectify this by integrating economic welfare with environmental and social factors, yet they have yet to be widely adopted by global policymakers.

Ultimately, navigating the challenges of the Anthropocene necessitates decoupling economic growth from resource consumption. 
This transition demands not only technological innovation but also a profound philosophical reorientation. 
Humanity must move away from an anthropocentric worldview—which views nature merely as a resource to be exploited—toward a more ecocentric perspective. 
In this view, human societies are recognized as interdependent components of the broader Earth system. 
Whether humanity can achieve this systemic transformation before the planetary boundaries are irrevocably breached remains the defining question of the twenty-first century
 `,

question:"What is the primary function of alternative indices like the Genuine Progress Indicator (GPI)?",

options:[
 "To maximize resource consumption for rapid industrial growth",
"To integrate economic welfare with environmental and social factors",
"To replace the need for technological innovation entirely",
"To measure the exact number of species lost in a given decade", 
],

correct:"To integrate economic welfare with environmental and social factors"
},

{type:"multiple",
 category:"reading",

 passage:`The Anthropocene, an unofficial epoch denoting the period during which human activity has been the dominant influence on climate and the environment, 
 presents humanity with a profound existential paradox. 
 On one hand, the trajectory of human progress—characterized by rapid industrialization, 
 technological innovation, and unprecedented global connectivity—has undeniably elevated living standards, 
 eradicated numerous diseases, and democratized access to information. 
 Conversely, this very same progress has precipitated ecological degradation on a planetary scale. 
 The relentless pursuit of economic growth has disrupted Earth's delicate biogeochemical cycles, 
 leading to accelerated biodiversity loss, ubiquitous pollution, 
 and an increasingly volatile climate system.

 This paradox is rooted in the inherent misalignment between short-term human incentives and long-term ecological sustainability. 
Economic models have historically externalized environmental costs, treating natural resources as infinite commodities rather than finite systems. 
Consequently, the true cost of industrial advancement has been absorbed by the biosphere, 
manifesting in phenomena such as ocean acidification and deforestation. 
Addressing this requires a fundamental paradigm shift in how progress is measured. 
Traditional metrics, such as Gross Domestic Product (GDP), fail to account for the depletion of natural capital or the societal costs of environmental degradation. 
Alternative indices, such as the Genuine Progress Indicator (GPI), attempt to rectify this by integrating economic welfare with environmental and social factors, yet they have yet to be widely adopted by global policymakers.

Ultimately, navigating the challenges of the Anthropocene necessitates decoupling economic growth from resource consumption. 
This transition demands not only technological innovation but also a profound philosophical reorientation. 
Humanity must move away from an anthropocentric worldview—which views nature merely as a resource to be exploited—toward a more ecocentric perspective. 
In this view, human societies are recognized as interdependent components of the broader Earth system. 
Whether humanity can achieve this systemic transformation before the planetary boundaries are irrevocably breached remains the defining question of the twenty-first century
 `,

question:"The author suggests that navigating the challenges of the Anthropocene requires",

options:[
 "Decoupling economic growth from resource consumption",
"Completely halting all industrial activity and returning to agrarian societies",
"Accelerating resource consumption to fund environmental research",
"Prioritizing anthropocentric worldviews over ecocentric ones", 
],

correct:"Decoupling economic growth from resource consumption"
},

{type:"multiple",
 category:"reading",

 passage:`The Anthropocene, an unofficial epoch denoting the period during which human activity has been the dominant influence on climate and the environment, 
 presents humanity with a profound existential paradox. 
 On one hand, the trajectory of human progress—characterized by rapid industrialization, 
 technological innovation, and unprecedented global connectivity—has undeniably elevated living standards, 
 eradicated numerous diseases, and democratized access to information. 
 Conversely, this very same progress has precipitated ecological degradation on a planetary scale. 
 The relentless pursuit of economic growth has disrupted Earth's delicate biogeochemical cycles, 
 leading to accelerated biodiversity loss, ubiquitous pollution, 
 and an increasingly volatile climate system.

 This paradox is rooted in the inherent misalignment between short-term human incentives and long-term ecological sustainability. 
Economic models have historically externalized environmental costs, treating natural resources as infinite commodities rather than finite systems. 
Consequently, the true cost of industrial advancement has been absorbed by the biosphere, 
manifesting in phenomena such as ocean acidification and deforestation. 
Addressing this requires a fundamental paradigm shift in how progress is measured. 
Traditional metrics, such as Gross Domestic Product (GDP), fail to account for the depletion of natural capital or the societal costs of environmental degradation. 
Alternative indices, such as the Genuine Progress Indicator (GPI), attempt to rectify this by integrating economic welfare with environmental and social factors, yet they have yet to be widely adopted by global policymakers.

Ultimately, navigating the challenges of the Anthropocene necessitates decoupling economic growth from resource consumption. 
This transition demands not only technological innovation but also a profound philosophical reorientation. 
Humanity must move away from an anthropocentric worldview—which views nature merely as a resource to be exploited—toward a more ecocentric perspective. 
In this view, human societies are recognized as interdependent components of the broader Earth system. 
Whether humanity can achieve this systemic transformation before the planetary boundaries are irrevocably breached remains the defining question of the twenty-first century
 `,

question:"How does an 'anthropocentric worldview' differ from an 'ecocentric worldview'?",

options:[
 "An anthropocentric view recognizes humans as part of the Earth system, whereas an ecocentric view views humans as separate",
"An anthropocentric view sees nature as a resource to be exploited, whereas an ecocentric view recognizes humans as interdependent components of the Earth system",
"An anthropocentric view relies on technology, whereas an ecocentric view relies on philosophy",
"There is no discernible difference between the two terms", 
],

correct:"An anthropocentric view sees nature as a resource to be exploited, whereas an ecocentric view recognizes humans as interdependent components of the Earth system"
},

{type:"multiple",
 category:"reading",

 passage:`The Linguistic Relativity Hypothesis, frequently associated with Edward Sapir and Benjamin Lee Whorf, posits that the language an individual speaks profoundly influences their perception and conceptualization of the world. 
 Initially met with considerable skepticism and often misinterpreted as linguistic determinism—the controversial claim that language entirely dictates thought—the hypothesis has experienced a renaissance in contemporary cognitive science. 
 Rather than asserting that language imposes rigid constraints on cognition, modern interpretations suggest that language acts as a cognitive "toolkit," guiding attention, memory, and categorization in subtle yet significant ways.

 Empirical evidence supporting this refined version of linguistic relativity comes from cross-linguistic studies on spatial orientation, color perception, and temporal processing. For instance, researchers have demonstrated that speakers of languages that utilize absolute directional terms (e.g., North, South, East, West) rather than relative terms (e.g., left, right) exhibit extraordinary navigational abilities, effortlessly maintaining spatial orientation even in unfamiliar environments. Similarly, studies on color categorization reveal that speakers of languages that possess distinct terms for different shades of a color can discriminate between those hues more rapidly than speakers whose language groups them together under a single term.

 Such findings indicate that linguistic structures are not merely arbitrary vehicles for communication, but active shapers of cognitive experience. 
While the foundational architecture of human cognition is universal, the specific pathways we utilize to navigate and interpret the world are sculpted, at least in part, by our native tongue. 
Consequently, the diversity of human languages is not simply a matter of varying vocabularies and grammars, but a reflection of diverse cognitive realities
 `,

 question:"What does the Linguistic Relativity Hypothesis, as posited by Sapir and Whorf, primarily claim?",

 options:[
 "All human beings think in the exact same way regardless of their language",
"The language an individual speaks profoundly influences their perception and conceptualization of the world",
"Language has absolutely no impact on human cognition or memory",
"The structure of a language dictates the genetic intelligence of its speakers", 
 ],

 correct:" The language an individual speaks profoundly influences their perception and conceptualization of the world"
},

{type:"multiple",
 category:"reading",

 passage:`The Linguistic Relativity Hypothesis, frequently associated with Edward Sapir and Benjamin Lee Whorf, posits that the language an individual speaks profoundly influences their perception and conceptualization of the world. 
 Initially met with considerable skepticism and often misinterpreted as linguistic determinism—the controversial claim that language entirely dictates thought—the hypothesis has experienced a renaissance in contemporary cognitive science. 
 Rather than asserting that language imposes rigid constraints on cognition, modern interpretations suggest that language acts as a cognitive "toolkit," guiding attention, memory, and categorization in subtle yet significant ways.

 Empirical evidence supporting this refined version of linguistic relativity comes from cross-linguistic studies on spatial orientation, color perception, and temporal processing. For instance, researchers have demonstrated that speakers of languages that utilize absolute directional terms (e.g., North, South, East, West) rather than relative terms (e.g., left, right) exhibit extraordinary navigational abilities, effortlessly maintaining spatial orientation even in unfamiliar environments. Similarly, studies on color categorization reveal that speakers of languages that possess distinct terms for different shades of a color can discriminate between those hues more rapidly than speakers whose language groups them together under a single term.

 Such findings indicate that linguistic structures are not merely arbitrary vehicles for communication, but active shapers of cognitive experience. 
While the foundational architecture of human cognition is universal, the specific pathways we utilize to navigate and interpret the world are sculpted, at least in part, by our native tongue. 
Consequently, the diversity of human languages is not simply a matter of varying vocabularies and grammars, but a reflection of diverse cognitive realities
 `,

 question:"How does 'linguistic determinism' differ from 'linguistic relativity'?",

 options:[
 "Linguistic determinism claims language entirely dictates thought, whereas linguistic relativity suggests it merely influences or guides it",
"Linguistic determinism focuses on spatial orientation, whereas linguistic relativity focuses on color perception",
"Linguistic determinism is a modern theory, whereas linguistic relativity is an outdated one",
"There is no difference; the terms are synonymous", 
 ],

correct:"Linguistic determinism claims language entirely dictates thought, whereas linguistic relativity suggests it merely influences or guides it"
},

{type:"multiple",
 category:"reading",

 passage:`The Linguistic Relativity Hypothesis, frequently associated with Edward Sapir and Benjamin Lee Whorf, posits that the language an individual speaks profoundly influences their perception and conceptualization of the world. 
 Initially met with considerable skepticism and often misinterpreted as linguistic determinism—the controversial claim that language entirely dictates thought—the hypothesis has experienced a renaissance in contemporary cognitive science. 
 Rather than asserting that language imposes rigid constraints on cognition, modern interpretations suggest that language acts as a cognitive "toolkit," guiding attention, memory, and categorization in subtle yet significant ways.

 Empirical evidence supporting this refined version of linguistic relativity comes from cross-linguistic studies on spatial orientation, color perception, and temporal processing. For instance, researchers have demonstrated that speakers of languages that utilize absolute directional terms (e.g., North, South, East, West) rather than relative terms (e.g., left, right) exhibit extraordinary navigational abilities, effortlessly maintaining spatial orientation even in unfamiliar environments. Similarly, studies on color categorization reveal that speakers of languages that possess distinct terms for different shades of a color can discriminate between those hues more rapidly than speakers whose language groups them together under a single term.

 Such findings indicate that linguistic structures are not merely arbitrary vehicles for communication, but active shapers of cognitive experience. 
While the foundational architecture of human cognition is universal, the specific pathways we utilize to navigate and interpret the world are sculpted, at least in part, by our native tongue. 
Consequently, the diversity of human languages is not simply a matter of varying vocabularies and grammars, but a reflection of diverse cognitive realities
 `,

 question:"How do modern cognitive scientists view the Linguistic Relativity Hypothesis?",

 options:[
 "They reject it entirely as a pseudo-scientific concept",
"They embrace it as a rigid set of rules that governs all human thought",
"They recognize it as a valid concept, interpreting language as a cognitive 'toolkit' that subtly guides thought",
"They believe it only applies to ancient languages, not modern ones", 
 ],

 correct:"They recognize it as a valid concept, interpreting language as a cognitive 'toolkit' that subtly guides thought"
},

{type:"multiple",
 category:"reading",

 passage:`The Linguistic Relativity Hypothesis, frequently associated with Edward Sapir and Benjamin Lee Whorf, posits that the language an individual speaks profoundly influences their perception and conceptualization of the world. 
 Initially met with considerable skepticism and often misinterpreted as linguistic determinism—the controversial claim that language entirely dictates thought—the hypothesis has experienced a renaissance in contemporary cognitive science. 
 Rather than asserting that language imposes rigid constraints on cognition, modern interpretations suggest that language acts as a cognitive "toolkit," guiding attention, memory, and categorization in subtle yet significant ways.

 Empirical evidence supporting this refined version of linguistic relativity comes from cross-linguistic studies on spatial orientation, color perception, and temporal processing. For instance, researchers have demonstrated that speakers of languages that utilize absolute directional terms (e.g., North, South, East, West) rather than relative terms (e.g., left, right) exhibit extraordinary navigational abilities, effortlessly maintaining spatial orientation even in unfamiliar environments. Similarly, studies on color categorization reveal that speakers of languages that possess distinct terms for different shades of a color can discriminate between those hues more rapidly than speakers whose language groups them together under a single term.

 Such findings indicate that linguistic structures are not merely arbitrary vehicles for communication, but active shapers of cognitive experience. 
While the foundational architecture of human cognition is universal, the specific pathways we utilize to navigate and interpret the world are sculpted, at least in part, by our native tongue. 
Consequently, the diversity of human languages is not simply a matter of varying vocabularies and grammars, but a reflection of diverse cognitive realities
 `,

 question:"According to cross-linguistic studies, what is the cognitive trait of speakers of languages that use absolute directional terms (North, South, East, West)?",

 options:[
 "They are generally better at mathematics than those who use relative terms",
"They exhibit extraordinary navigational abilities and maintain spatial orientation easily",
"They struggle to understand abstract philosophical concepts",
"They rely heavily on visual aids to communicate", 
 ],

 correct:"They exhibit extraordinary navigational abilities and maintain spatial orientation easily"
},

{type:"multiple",
 category:"reading",

 passage:`The Linguistic Relativity Hypothesis, frequently associated with Edward Sapir and Benjamin Lee Whorf, posits that the language an individual speaks profoundly influences their perception and conceptualization of the world. 
 Initially met with considerable skepticism and often misinterpreted as linguistic determinism—the controversial claim that language entirely dictates thought—the hypothesis has experienced a renaissance in contemporary cognitive science. 
 Rather than asserting that language imposes rigid constraints on cognition, modern interpretations suggest that language acts as a cognitive "toolkit," guiding attention, memory, and categorization in subtle yet significant ways.

 Empirical evidence supporting this refined version of linguistic relativity comes from cross-linguistic studies on spatial orientation, color perception, and temporal processing. For instance, researchers have demonstrated that speakers of languages that utilize absolute directional terms (e.g., North, South, East, West) rather than relative terms (e.g., left, right) exhibit extraordinary navigational abilities, effortlessly maintaining spatial orientation even in unfamiliar environments. Similarly, studies on color categorization reveal that speakers of languages that possess distinct terms for different shades of a color can discriminate between those hues more rapidly than speakers whose language groups them together under a single term.

 Such findings indicate that linguistic structures are not merely arbitrary vehicles for communication, but active shapers of cognitive experience. 
While the foundational architecture of human cognition is universal, the specific pathways we utilize to navigate and interpret the world are sculpted, at least in part, by our native tongue. 
Consequently, the diversity of human languages is not simply a matter of varying vocabularies and grammars, but a reflection of diverse cognitive realities
 `,

 question:"What do studies on color categorization demonstrate about speakers whose languages have distinct terms for different shades?",

 options:[
 "They are less likely to appreciate visual art",
"They have genetically superior eyesight",
"They can discriminate between those hues more rapidly than speakers who group them under one term",
"They are confused by ambiguous color palettes", 
 ],

 correct:"They can discriminate between those hues more rapidly than speakers who group them under one term"
},

{type:"multiple",
 category:"reading",

 passage:`The Linguistic Relativity Hypothesis, frequently associated with Edward Sapir and Benjamin Lee Whorf, posits that the language an individual speaks profoundly influences their perception and conceptualization of the world. 
 Initially met with considerable skepticism and often misinterpreted as linguistic determinism—the controversial claim that language entirely dictates thought—the hypothesis has experienced a renaissance in contemporary cognitive science. 
 Rather than asserting that language imposes rigid constraints on cognition, modern interpretations suggest that language acts as a cognitive "toolkit," guiding attention, memory, and categorization in subtle yet significant ways.

 Empirical evidence supporting this refined version of linguistic relativity comes from cross-linguistic studies on spatial orientation, color perception, and temporal processing. For instance, researchers have demonstrated that speakers of languages that utilize absolute directional terms (e.g., North, South, East, West) rather than relative terms (e.g., left, right) exhibit extraordinary navigational abilities, effortlessly maintaining spatial orientation even in unfamiliar environments. Similarly, studies on color categorization reveal that speakers of languages that possess distinct terms for different shades of a color can discriminate between those hues more rapidly than speakers whose language groups them together under a single term.

 Such findings indicate that linguistic structures are not merely arbitrary vehicles for communication, but active shapers of cognitive experience. 
While the foundational architecture of human cognition is universal, the specific pathways we utilize to navigate and interpret the world are sculpted, at least in part, by our native tongue. 
Consequently, the diversity of human languages is not simply a matter of varying vocabularies and grammars, but a reflection of diverse cognitive realities
 `,

 question:"According to the passage, how should linguistic structures be classified?",

 options:[
 "As arbitrary vehicles for communication only",
"As active shapers of cognitive experience and sculptors of cognitive pathways",
"As biological barriers that prevent cross-cultural understanding",
"As evolutionary artifacts that are slowly disappearing", 
 ],

 correct:"As active shapers of cognitive experience and sculptors of cognitive pathways"
},

{type:"multiple",
 category:"reading",

 passage:`The Linguistic Relativity Hypothesis, frequently associated with Edward Sapir and Benjamin Lee Whorf, posits that the language an individual speaks profoundly influences their perception and conceptualization of the world. 
 Initially met with considerable skepticism and often misinterpreted as linguistic determinism—the controversial claim that language entirely dictates thought—the hypothesis has experienced a renaissance in contemporary cognitive science. 
 Rather than asserting that language imposes rigid constraints on cognition, modern interpretations suggest that language acts as a cognitive "toolkit," guiding attention, memory, and categorization in subtle yet significant ways.

 Empirical evidence supporting this refined version of linguistic relativity comes from cross-linguistic studies on spatial orientation, color perception, and temporal processing. For instance, researchers have demonstrated that speakers of languages that utilize absolute directional terms (e.g., North, South, East, West) rather than relative terms (e.g., left, right) exhibit extraordinary navigational abilities, effortlessly maintaining spatial orientation even in unfamiliar environments. Similarly, studies on color categorization reveal that speakers of languages that possess distinct terms for different shades of a color can discriminate between those hues more rapidly than speakers whose language groups them together under a single term.

 Such findings indicate that linguistic structures are not merely arbitrary vehicles for communication, but active shapers of cognitive experience. 
While the foundational architecture of human cognition is universal, the specific pathways we utilize to navigate and interpret the world are sculpted, at least in part, by our native tongue. 
Consequently, the diversity of human languages is not simply a matter of varying vocabularies and grammars, but a reflection of diverse cognitive realities
 `,

question:"Which of the following is a key conclusion drawn in the final paragraph?",

options:[
 "Human languages are becoming more uniform over time",
"The diversity of human languages reflects diverse cognitive realities, rather than just different vocabularies",
"Universal cognitive architecture makes language diversity completely insignificant",
"Language prevents human beings from ever truly understanding one another", 
],

correct:"The diversity of human languages reflects diverse cognitive realities, rather than just different vocabularies"
},
];

const grammarQuestions = [{
type:"typing",
category:"grammar",
question:"Maria ___ from Spain. (is / am / are)",
correct:["is"]
},

{
type:"typing",
category:"grammar",
question:"Where ___ you from? (is / am / are)",
correct:["are"]
},

{
type:"typing",
category:"grammar",
question:"My friends and I ___ students. (is / am / are)",
correct:["are"]
},

{
type:"typing",
category:"grammar",
question:"I ___ hungry. Let's eat! (is / am / are)",
correct:["am"]
},

{
type:"typing",
category:"grammar",
question:"He ___ tennis every weekend. (play / plays / playing)",
correct:["plays"]
},

{
type:"typing",
category:"grammar",
question:"___ she like coffee? (Do / Does / Is)",
correct:["Does"]
},

{
type:"typing",
category:"grammar",
question:"We ___ in a big house. (lives / live / living)",
correct:["live"]
},

{
type:"typing",
category:"grammar",
question:"They ___ TV in the evening (watchs / watch / watching)",
correct:["watch"]
},

{
type:"typing",
category:"grammar",
question:"Where ___ you work? (do / does / are).",
correct:["do"]
},

{
type:"typing",
category:"grammar",
question:"This is my brother ___ name is John. (His / Her / He)",
correct:["his"]
},

{
type:"typing",
category:"grammar",
question:"___ am a teacher. (Me / I / My)",
correct:["i"]
},

{
type:"typing",
category:"grammar",
question:"Give the pencil to ___. (he / him / his)",
correct:["him"]
},

{
type:"typing",
category:"grammar",
question:"___ this your book? (Is / Are / Do)",
correct:["is"]
},

{
type:"typing",
category:"grammar",
question:"These are ___ shoes. (they / them / their)",
correct:["their"]
},

{
type:"typing",
category:"grammar",
question:"___ are my best friends. (She / They / It)",
correct:["they"]
},

{
type:"typing",
category:"grammar",
question:"___ is your birthday? (What / When / Where)",
correct:["when"]
},

{
type:"typing",
category:"grammar",
question:"___ is that man? (Who / What / Where)",
correct:["who"]
},

{
type:"typing",
category:"grammar",
question:"___ old are you? (How / What / Who)",
correct:["how"]
},

{
type:"typing",
category:"grammar",
question:"___ is my bag? (Where / Who / When)",
correct:["where"]
},

{
type:"typing",
category:"grammar",
question:"___ is your favorite color? (What / When / Why)",
correct:["what"]
},

{
type:"typing",
category:"grammar",
question:"Look! It ___ right now. (rain / is raining / rains)",
correct:["is raining"]
},

{
type:"typing",
category:"grammar",
question:"She ________ to the gym every Saturday. (go / goes / is going)",
correct:["goes"]
},

{
type:"typing",
category:"grammar",
question:"What time ________ you usually wake up? (do / does / are)",
correct:["do"]
},

{
type:"typing",
category:"grammar",
question:"We ________ a great movie last night. (see / saw / seen)",
correct:["saw"]
},

{
type:"typing",
category:"grammar",
question:"___ she go to the party yesterday? (Did / Do / Was)",
correct:["did"]
},

{
type:"typing",
category:"grammar",
question:"They ___ at home; they were at the park. (weren't / didn't / wasn't)",
correct:["were not",
  "weren't",
]
},

{
type:"typing",
category:"grammar",
question:"I ___ never eaten sushi. (have / has / did)",
correct:["have"]
},

{
type:"typing",
category:"grammar",
question:"Have you ___ been to London? (ever / never / just)",
correct:["ever"]
},

{
type:"typing",
category:"grammar",
question:"She ___ just finished her lunch. (have / has / is)",
correct:["has"]
},

{
type:"typing",
category:"grammar",
question:"I think it ___ snow tomorrow. (will / going to / shall)",
correct:["will"]
},

{
type:"typing",
category:"grammar",
question:" We ___ to visit our grandparents this weekend. (are going / go / will go)",
correct:["are going"]
},

{
type:"typing",
category:"grammar",
question:"This book is ___ than that one. (interesting / more interesting / most interesting)",
correct:["more interesting"]
},

{
type:"typing",
category:"grammar",
question:"He is the ___ student in the class. (tall )/ taller / tallest)",
correct:["tallest"]
},

{
type:"typing",
category:"grammar",
question:"You ___ drive too fast in the city. (must / mustn't / don't have to)",
correct:["must not",
  "mustn't",
]
},

{
type:"typing",
category:"grammar",
question:"___ I help you with your bags? (Can / Do / Are)",
correct:["can"]
},

{
type:"typing",
category:"grammar",
question:" This jacket is ___. It belongs to me. (my / mine / me",
correct:["mine"]
},

{
type:"typing",
category:"grammar",
question:"I gave ___ the book yesterday. (he / him / his)",
correct:["him"]
},

{
type:"typing",
category:"grammar",
question:"There are ___ apples in the basket. (some / any / a)",
correct:["some"]
},

{
type:"typing",
category:"grammar",
question:"We don't have ___ milk left. (some / any / a)",
correct:["any"]
},

{
type:"typing",
category:"grammar",
question:"The meeting is ___ Monday morning. (in / on / at)",
correct:["on"]
},

{
type:"typing",
category:"grammar",
question:"I __________ (not finish) my project yet.",
correct:["haven't finished",
  "have not finished",
]
},

{
type:"typing",
category:"grammar",
question:"If the weather is nice tomorrow, we __________ (go) to the park.",
correct:["will go"]
},

{
type:"typing",
category:"grammar",
question:"She is the woman __________ dog won the competition",
correct:["whose"]
},

{
type:"typing",
category:"grammar",
question:"Have you __________ been to Japan?",
correct:["ever"]
},

{
type:"typing",
category:"grammar",
question:"You __________ (not have to) wear a uniform to work at this company. It's casual",
correct:["don't have to",
  "do not have to",
]
},

{
type:"typing",
category:"grammar",
question:"This book was written __________ a famous author.",
correct:["by"]
},

{
type:"typing",
category:"grammar",
question:"I used __________ (live) in London when I was younger",
correct:["to live"]
},

{
type:"typing",
category:"grammar",
question:"If I were you, I __________ (buy) that car.",
correct:["would buy"]
},

{
type:"typing",
category:"grammar",
question:"This time tomorrow, we __________ (relax) on the beach",
correct:["will be relaxing"]
},

{
type:"typing",
category:"grammar",
question:"She is the girl __________ helped me with my luggage.",
correct:["who",
  "that",
]
},

{
type:"typing",
category:"grammar",
question:"He was very tired, __________ he went to bed early.",
correct:["so"]
},

{
type:"typing",
category:"grammar",
question:"I live ___ Tashkent.",
correct:["in"]
},

{
type:"typing",
category:"grammar",
question:"They __________ (live) in this house for ten years",
correct:["have lived"]
},

{
type:"typing",
category:"grammar",
question:"She speaks English __________ (fluent)",
correct:["fluently"]
},

{
type:"typing",
category:"grammar",
question:"You __________ (should) eat more vegetables if you want to be healthy.",
correct:["should"]
},

{
type:"typing",
category:"grammar",
question:"The movie was boring, so we __________ (bore).",
correct:["were bored"]
},

{
type:"typing",
category:"grammar",
question:"She __________ (not see) him since last year.",
correct:["hasn't seen",
  "has not seen",
]
},

{
type:"typing",
category:"grammar",
question:"He is __________ (tall) person in his family.",
correct:["the tallest"]
},

{
type:"typing",
category:"grammar",
question:"If I __________ (know) his number, I would call him.",
correct:["knew"]
},

{
type:"typing",
category:"grammar",
question:"The car __________ (wash) yesterday.",
correct:["was washed"]
},

{
type:"multiple",
category:"grammar",
question:"By the time we reach the cinema, the film ________",

options:[
"will start",
"will have started",
"starts",
"started",
],

correct:["will have started"]
},

{
type:"multiple",
category:"grammar",
question:"I wish I ________ to the beach with you yesterday, but I had to work",

options:[
" went",
"have gone",
"had gone",
"would go",
],

correct:["had gone"]
},

{
type:"multiple",
category:"grammar",
question:"_______ heavy rain, the match was cancelled",

options:[
"Because",
"Due to",
"Although",
"In spite of", 
],

correct:["Due to"]
},

{
type:"multiple",
category:"grammar",
question:"She is the woman ________ car was stolen last week",

options:[
"who",
"which",
"whose",
"that", 
],

correct:["whose"]
},

{
type:"multiple",
category:"grammar",
question:"You ________ have seen John yesterday; he was out of the country",

options:[
"must",
"can't",
"shouldn't",
"needn't", 
],

correct:["can't"]
},

{
type:"multiple",
category:"grammar",
question:"Hardly ________ arrived at the station when the train pulled in",

options:[
"we had",
"had we",
"did we",
"we have",  
],
correct:["had we"]
},

{
type:"multiple",
category:"grammar",
question:"This time tomorrow, we ________ on a beach in Spain",

options:[
"will lie",
"will be lying",
"will have lied",
"lie",  
],

correct:["will be lying"]
},

{
type:"multiple",
category:"grammar",
question:"I am used ________ up early in the morning for my new job",

options:[
"to wake",
"wake",
"to waking",
"woke",  
],

correct:["to waking"]
},

{
type:"multiple",
category:"grammar",
question:"The new policy ________ by the board of directors next Monday",

options:[
"will approve",
"will be approved",
"will approved",
"is approving",  
],

correct:["will be approved"]
},

{
type:"multiple",
category:"grammar",
question:"If I ________ you, I would apologize for the misunderstanding",

options:[
"am",
"was",
"were",
"would be",  
],

correct:["were"]
},

{
type:"multiple",
category:"grammar",
question:"She had her house ________ last week after the storm.",

options:[
"to paint",
"painted",
"painting",
"paint",  
],

correct:["painted"]
},

{
type:"multiple",
category:"grammar",
question:"_____ she was very tired, she finished all her homework",

options:[
"Even though",
"Despite",
"In spite of",
"However",  
],

correct:["Even though"]
},

{
type:"multiple",
category:"grammar",
question:"He admitted ________ the window with his football",

options:[
"to break",
"break",
"breaking",
"broke",  
],

correct:["breaking"]
},

{
type:"multiple",
category:"grammar",
question:"The food was ________ delicious that we ate every single bite.",

options:[
"very",
"too",
"such",
"so",  
],

correct:["so"]
},

{
type:"multiple",
category:"grammar",
question:"I regret ________ you that your application has been unsuccessful",

options:[
"to inform",
"informing",
"informed",
"inform",  
],

correct:["to inform"]
},

{
type:"multiple",
category:"grammar",
question:"The project, ________ was finished on time, was a huge success.",

options:[
"that",
"which",
"what",
"who",  
],

correct:["which"]
},

{
type:"multiple",
category:"grammar",
question:"He would rather ________ a coffee than a tea.",

options:[
"to have",
"having",
"have",
"had",  
],

correct:["have"]
},

{
type:"multiple",
category:"grammar",
question:"Neither the manager nor the employees ________ aware of the problem.",

options:[
"is",
"was",
"are",
"has",  
],

correct:["are"]
},

{
type:"multiple",
category:"grammar",
question:"You ________ worry about the presentation; I have everything under control.",

options:[
"don't have to",
"mustn't",
"shouldn't",
"can't",  
],

correct:["don't have to"]
},

{
type:"multiple",
category:"grammar",
question:"______ the terrible weather, we had a wonderful holiday",

options:[
"Although",
"Despite",
"Even though",
"Because",  
],

correct:["Despite"]
},

{
type:"multiple",
category:"grammar",
questions:"Seldom _____ such a breathtaking performance by such a young artist",

options:[
"have I seen",
"I have seen",
"did I saw",
"I saw",  
],

correct:["have I seen"]
},

{
type:"multiple",
category:"grammar",
question:"_____ all the necessary preparations, she finally felt ready for the interview.",

options:[
"Having been made",
"Having made",
"To make",
"Make",  
],

correct:"having made"
},

{
typing:"multiple",
category:"grammar",
question:"If I _____ so much coffee yesterday, I _____ able to sleep last night",

options:[
"didn't drink / would be",
"hadn't drunk / would have been",
"hadn't drunk / would be",
"wouldn't drink / was",  
],

correct:["hadn't drunk / would be"]
},

{
type:"multiple",
category:"grammar",
question:"What _____ do is to write a formal letter of apology to the manager",

options:[
"we must",
"must we",
"we have to",
"did we",  
],

correct:["we must"]
},

{
type:"multiple",
category:"grammar",
question:"The new CEO is believed _____ the company's financial strategy entirely",

options:[
"to be changed",
"to have changed",
"having changed'",
"that he changes",  
],

correct:["to have changed"]
},

{
type:"multiple",
category:"grammar",
question:"I’d rather you _____ me about the changes in the schedule yesterday",

options:[
"tell",
"have told",
"had told",
"would tell",  
],

correct:["had told"]
},

{
type:"multiple",
category:"grammar",
question:"It is imperative that everyone _____ the safety regulations strictly",

options:[
"follows",
"to follow",
"follow",
"followed",  
],

correct:["follow"]
},

{
type:"multiple",
category:"grammar",
question:"_____ tired he felt, he continued working on the project until midnight",

options:[
"Despite",
"Although",
"Even",
"However",  
],

correct:["however"]
},

{
type:"multiple",
category:"grammar",
question:"It is _____ who always organize the annual charity event",

options:[
"we",
"us",
"ourselves",
"our",  
],

correct:["us"]
},

{
type:"multiple",
category:"grammar",
question:"You _____ me about the meeting being canceled; I wasted two hours commuting!",

options:[
"should tell",
"must have told",
"needn't have told",
"ought to have told",  
],

correct:["ought to have told"]
},

{
type:"multiple",
category:"grammar",
question:"The more time we spend on the research, _____ the final results will be",

options:[
"better",
"the better",
"the best",
"best",  
],

correct:["the better"]
},

{
type:"multiple",
category:"grammar",
question:"The company, _____ CEO resigned yesterday, is currently undergoing a massive restructuring",

options:[
"that",
"whose",
"which",
"who",  
],

correct:["whose"]
},

{
type:"multiple",
category:"grammar",
question:"They _____ to launch the product in May, but the plans were delayed",

options:[
"were",
"were due",
"are",
"have been",  
],

correct:["were due"]
},

{
type:"multiple",
category:"grammar",
question:"Instead _____ for the train, let's take a taxi",

options:[
"to wait",
"of waiting",
"waiting",
"to waiting",  
],

correct:["of waiting"]
},

{
type:"multiple",
category:"grammar",
question:"It's high time the government _____ more funds into public education",

options:[
"to invest",
"invested",
"invests",
"investing",  
],

correct:["invested"]
},

{
type:"multiple",
category:"grammar",
question:"_____ the applicants had the necessary qualifications for the position",

options:[
"Few of",
"None",
"Neither",
"Little of",
],

correct:["few of"]
},

{
type:"multiple",
category:"grammar",
question:"The hotel room was spacious and clean; _____ , it was in a terrible location",

options:[
"therefore",
"furthermore",
"nevertheless",
"besides",  
],

correct:["nevertheless"]
},

{
type:"multiple",
category:"grammar",
question:"I distinctly remember _____ the door before leaving the house",

options:[
"locking",
"to lock",
"having locked",
"locked",  
],

correct:["locking"]
},

{
type:"multiple",
category:"grammar",
question:"Suppose _____ the lottery, what would you have done?",

options:[
"you would win",
"you win",
"you had won",
"do you win",  
],

correct:["you had won"]
},

{
type:"multiple",
category:"grammar",
question:"The package, _____ yesterday, should arrive by Friday",

options:[
"having sent",
"sent",
"sending",
"was sent",  
],

correct:["sent"]
},

{
type:"multiple",
category:"grammar",
question:"Seldom _______ such a breathtaking display of northern lights",

options:[
"have I witnessed",
"I have witnessed",
"did I witnessed",
"I witnessed",  
],

correct:["have I witnessed"]
},

{
type:"multiple",
category:"grammar",
question:"Not until the manager _______ the contract _______ we proceed with the project",

options:[
"had signed / would",
"signs / will",
"has signed / can",
"had signed / did",
],

correct:["has signed / can"]
},

{
type:"multiple",
category:"grammar",
question:"_______ had we arrived at the beach than it started to pour with rain",

options:[
"Hardly",
"No sooner",
"Scarcely",
"As soon as",  
],

correct:["No sooner"]
},

{
type:"multiple",
category:"grammar",
question:"It is imperative that every candidate _______ their application submitted by Friday",

options:[
"has",
"had",
"have",
"having",  
],

correct:["have"]
},

{
type:"multiple",
category:"grammar",
question:"Supposing you _______ the lottery, what _______ with the money?",

options:[
"win / will you do",
"won / would you do",
"had won / would you have done",
"win / would you do",  
],

correct:"won / would you do",
},

{
type:"multiple",
category:"grammar",
question:"_______ for your timely intervention, the company would have gone bankrupt",

options:[
"Had it not been",
"Was it not",
"Were it not",
"If it wasn't",  
],

correct:["Had it not been"]
},

{
type:"multiple",
category:"grammar",
question:"You _______ me that the meeting was canceled; I wasted two hours driving here",

options:[
"should have told",
"must have told",
"could tell",
"need to have told",  
],

correct:["should have told"]
},

{
type:"multiple",
category:"grammar",
question:"She _______ her assignments on time, but she was incredibly lazy this semester",

options:[
"could submit",
"was able to submit",
"could have submitted",
"can submit",  
],

correct:["could have submitted"]
},

{
type:"multiple",
category:"grammar",
question:"It's high time you _______ taking your responsibilities seriously",

options:[
"start",
"started",
"will start",
"have started", 
],

correct:["started"]
},

{
type:"multiple",
category:"grammar",
question:" _______ I really admire is her dedication to her students",

options:[
"That",
"Which",
"What",
"Who",  
],

correct:["What"]
},

{
type:"multiple",
category:"grammar",
question:"All _______ is a little peace and quiet to finish this novel.",

options:[
"I need",
"I need do",
"do I need",
"I need that",  
],

correct:["I need"]
},

{
type:"multiple",
category:"grammar",
question:"It was in Paris _______ she finally met the love of her life",

options:[
"where",
"that",
"which",
"in which",  
],

correct:["that"]
},

{
type:"multiple",
category:"grammar",
question:"The building, _______ of reinforced concrete, withstood the earthquake perfectly",

options:[
"which constructed",
"constructed",
"constructing",
"was constructed",  
],

correct:["constructed"]
},

{
type:"multiple",
category:"grammar",
question:"_______ the heavy traffic, we arrived exactly on time",

options:[
"Despite of",
"In spite of",
"Although",
"Even though",  
],

correct:["In spite of"]
},

{
type:"multiple",
category:"grammar",
question:"Many a time _______ pondered the meaning of existence",

options:[
"have I",
"I have",
"has I",
"I had",  
],

correct:["have I"]
},

{
type:"multiple",
category:"grammar",
question:"Little _______ that their entire plan was about to be exposed",

options:[
"did they know",
"they knew",
"do they know",
"they had known",  
],

correct:["did they know"]
},

{
type:"multiple",
category:"grammar",
question:"Try _______ might, he could not open the stubborn jar",

options:[
"as he",
"although he",
"however he",
"that he",  
],

correct:["as he"]
},

{
type:"multiple",
category:"grammar",
question:"Should you _______ any assistance, do not hesitate to contact our help desk",

options:[
"require",
"required",
"requiring",
"requires",  
],

correct:["require"]
},

{
type:"multiple",
category:"grammar",
question:"I regret _______ you that your application has been unsuccessful",

options:[
"inform",
"to inform",
"informing",
"informed",  
],

correct:["to inform"]
},

{
type:"multiple",
category:"grammar",
question:"He is believed _______ the country under a false alias",

options:[
"to have fled",
"to flee",
"fleeing",
"fled",  
],

correct:["to have fled"]
},
];

const vocabularyQuestions = [

{
type:"typing",
category:"vocabulary",
question:"I drink a glass of orange _________ every morning",
correct:["juice"]
},

{
type:"typing",
category:"vocabulary",
question:"My mother's brother is my _________",
correct:["uncle"]
},

{
type:"typing",
category:"vocabulary",
question:"The day after Monday is _________",
correct:["tuesday"]
},

{
type:"typing",
category:"vocabulary",
question:"We need to buy some food. Let's go to the _________.",
correct:["supermarket"]
},

{
type:"typing",
category:"vocabulary",
question:"I have a pen and a notebook in my school _________.",
correct:["bag"]
},

{
type:"typing",
category:"vocabulary",
question:"My sister is very young. She is only two years _________.",
correct:["old"]
},

{
type:"typing",
category:"vocabulary",
question:"It is very hot outside. I want to wear a T-shirt and _________.",
correct:["shorts"]
},

{
type:"typing",
category:"vocabulary",
question:"Can I have a _________ of water, please?",
correct:["glass"]
},

{
type:"typing",
category:"vocabulary",
question:"My father drives a red _________.",
correct:["car"]
},

{
type:"typing",
category:"vocabulary",
question:"I use a _________ to eat my soup.",
correct:["spoon"]
},

{
type:"typing",
category:"vocabulary",
question:"He likes to _________ books in the evening.",
correct:["read"]
},

{
type:"typing",
category:"vocabulary",
question:"There are seven days in a _________.",
correct:["week"]
},

{
type:"typing",
category:"vocabulary",
question:"I wash my hands with soap and _________.",
correct:["water"]
},

{
type:"typing",
category:"vocabulary",
question:"It is cold. Put on your _________.",
correct:["coat"]
},

{
type:"typing",
category:"vocabulary",
question:"My birthday is in the _________ month of the year, December",
correct:["last"]
},

{
type:"typing",
category:"vocabulary",
question:"The opposite of 'big' is _________.",
correct:["small"]
},

{
type:"typing",
category:"vocabulary",
question:"I sleep in my _________ at night",
correct:["bed"]
},

{
type:"typing",
category:"vocabulary",
question:"Can you _________ the door, please? It is very loud.",
correct:["close"]
},

{
type:"typing",
category:"vocabulary",
question:"We eat our lunch in the _________.",
correct:["afternoon"]
},

{
type:"typing",
category:"vocabulary",
question:"An apple is a _________.",
correct:["fruit"]
},

{
type:"multiple",
category:"vocabulary",
question:"You can buy fresh bread and cakes at the __________.",

options:[
"butcher",
"baker",
"chemist",  
],

correct:["baker"]
},

{
type:"multiple",
category:"vocabulary",
question:"I was very __________ when I heard I had passed the exam!",

options:[
"bored",
"tired",
"excited",  
],

correct:["excited"]
},

{
type:"multiple",
category:"vocabulary",
question:"We need to __________ the train at the next station.",

options:[
"get off",
"get up",
"get on",  
],

correct:["get off"]
},

{
type:"multiple",
category:"vocabulary",
question:"Can you __________ me a favor and help me with these bags?",

options:[
"do",
"make",
"give",  
],

correct:["do"]
},

{
type:"multiple",
category:"vocabulary",
question:"My sister works in a hospital. She is a __________.",

options:[
"dentist",
"nurse",
"waiter",  
],

correct:["nurse"]
},

{
type:"multiple",
category:"vocabulary",
question:"In the summer, the weather is usually hot and __________.",

options:[
"6.cloudy",
"snowy",
"sunny",  
],

correct:["sunny"]
},

{
type:"multiple",
category:"vocabulary",
question:"I usually __________ up at 7:00 AM every morning.",

options:[
"go",
"wake",
"do",  
],

correct:["wake"]
},

{
type:"multiple",
category:"vocabulary",
question:"Put your __________ on your bed when you go to sleep",

options:[
"pillow",
"sofa",
"fridge",  
],

correct:["pillow"]
},

{
type:"multiple",
category:"vocabulary",
question:"I don't have any money in my __________.",

options:[
"wallet",
"passport",
"ticket",  
],

correct:["wallet"]
},

{
type:"multiple",
category:"vocabulary",
question:"Can you __________ the door? It’s very cold in here.",

options:[
"open",
"close",
"look",  
],

correct:["close"]
},

{
type:"typing",
category:"vocabulary",
question:"I don't eat __________; I am a vegetarian.",
correct:["meat"]
},

{
type:"typing",
category:"vocabulary",
question:"It is raining outside, so don't forget to wear your __________.",
correct:["coat"]
},

{
type:"typing",
category:"vocabulary",
question:"I can't read the board because I forgot my __________.",
correct:["glasses"]
},

{
type:"typing",
category:"vocabulary",
question:"An __________ is a red or green fruit.",
correct:["apple"]
},

{
type:"typing",
category:"vocabulary",
question:"My father drives a very fast __________.",
correct:["car"]
},

{
type:"typing",
category:"vocabulary",
question:"The month after December.",
correct:["january"]
},

{
type:"typing",
category:"vocabulary",
question:"This season is very hot.",
correct:["summer"]
},

{
type:"typing",
category:"vocabulary",
question:"Leaves fall from trees in this season.",
correct:["autumn","fall"]
},

{
type:"typing",
category:"vocabulary",
question:"The time of day when you eat breakfast.",
correct:["morning"]
},

{
type:"typing",
category:"vocabulary",
question:"Another word for 60 minutes.",
correct:["hour"]
},

{
type:"multiple",
category:"vocabulary",
question:"The movie was so ________ that I fell asleep in the middle of it.",

options:[
"exciting",
"boring'",
"funny",  
],

correct:["boring"]
},

{
type:"multiple",
category:"vocabulary",
question:"We need to ________ the meeting until next Tuesday because the manager is sick.",

options:[
"put off",
"put on",
"put up",  
],

correct:["put off"]
},

{
type:"multiple",
category:"vocabulary",
question:"If you want to get fit, you should ________ a new sport like swimming or tennis.",

options:[
"take care of",
"take up",
"take off",  
],

correct:["take up"]
},

{
type:"multiple",
category:"vocabulary",
question:"Sarah was very ________ when she passed her driving test on the first try.",

options:[
"disappointed",
"nervous",
"delighted",  
],

correct:["delighted"]
},

{
type:"multiple",
category:"vocabulary",
question:"Be careful not to ________ the bus; it leaves exactly at 8:00 AM.",

options:[
"lose",
"miss",
"catch",  
],

correct:["miss"]
},

{
type:"multiple",
category:"vocabulary",
question:"The weather was terrible, so we decided to ________ at home and watch a movie.",

options:[
"stay",
"spend",
"leave",  
],

correct:["stay"]
},

{
type:"multiple",
category:"vocabulary",
question:"My brother is completely ________ on playing video games all weekend.",

options:[
"7.interested",
"keen",
"addicted",  
],

correct:["addicted"]
},

{
type:"multiple",
category:"vocabulary",
question:"Could you please ________ the volume on the TV? It’s too loud.",

options:[
"turn down",
"turn up",
"turn off", 
],

correct:["turn down"]
},

{
type:"multiple",
category:"vocabulary",
question:"The teacher asked us to ________ a short story about our last holiday.",

options:[
"write down",
"make up",
"bring up",  
],

correct:["make up"]
},

{
type:"multiple",
category:"vocabulary",
question:"I am really ________ to seeing my old friends at the reunion this summer.",

options:[
"looking forward",
"looking after",
"looking for",  
],

correct:["looking forward"]
},

{
type:"multiple",
category:"vocabulary",
question:"She is an ________ person who loves meeting new people and going to parties.",

options:[
"shy",
"outgoing",
"quiet",  
],

correct:["outgoing"]
},

{
type:"multiple",
category:"vocabulary",
question:"You don’t need to pay for this map; it is ________ of charge.",

options:[
"free",
"cheap",
"clear", 
],

correct:["free"]
},

{
type:"multiple",
category:"vocabulary",
question:"The company decided to ________ a new product to help people sleep better.",

options:[
"invent",
"discover",
"introduce",  
],

correct:["introduce"]
},

{
type:"multiple",
category:"vocabulary",
question:"I always try to ________ money every month so I can go on vacation.",

options:[
"save",
"spend",
"borrow",  
],

correct:["save"]
},

{
type:"multiple",
category:"vocabulary",
question:"Learning to play the guitar requires a lot of ________ and practice.",

options:[
"time",
"patience",
"interest",  
],

correct:["patience"]
},

{
type:"multiple",
category:"vocabulary",
question:"Can you ________ me ($20) until Friday? I forgot my wallet at home.",

options:[
"borrow",
"lend",
"give",  
],

correct:["lend"]
},

{
type:"multiple",
category:"vocabulary",
question:"It was ________ to see a rainbow right after the heavy rain stopped.",

options:[
"amazing",
"angry",
"bored",  
],

correct:["amazing"]
},

{
type:"multiple",
category:"vocabulary",
question:"He had to ________ his coat because the room was very hot.",

options:[
"put on",
"take off",
"try on",  
],

correct:["take off"]
},

{
type:"multiple",
category:"vocabulary",
question:"The two brothers look exactly ________ each other. People always confuse them!",

options:[
"alike",
"like",
"as",  
],

correct:["alike"]
},

{
type:"multiple",
category:"vocabulary",
question:"Don't forget to ________ the lights when you leave the office.",

options:[
"turn off",
"turn over",
"turn into",  
],

correct:["turn off"]
},

{
type:"multiple",
category:"vocabulary",
question:"The new policy _________ a lot of criticism from the public.",

options:[
"brought about",
"provoked",
"carried out",
"contributed",  
],

correct:["provoked"]
},

{
type:"multiple",
category:"vocabulary",
question:"I didn't mean to _________ your feelings, but I thought you needed to hear the truth.",

options:[
"damage",
"injure",
"hurt",
"spoil",  
],

correct:["hurt"]
},

{
type:"multiple",
category:"vocabulary",
question:"She has a very _________ schedule this week, with meetings from 9 AM to 6 PM every day.",

options:[
"heavy",
"hard",
"strong",
"dense",  
],

correct:["heavy"]
},

{
type:"multiple",
category:"vocabulary",
question:"We need to _________ the problem before it gets completely out of hand.",

options:[
"look into",
"tackle",
"put up with",
"come across",  
],

correct:["tackle"]
},

{
type:"multiple",
category:"vocabulary",
question:"Learning to play an instrument requires a lot of _________ and patience.",

options:[
"dedication",
"ambition",
"obsession",
"enthusiasm",  
],

correct:["dedication"]
},

{
type:"multiple",
category:"vocabulary",
question:"The weather _________ for tomorrow indicates heavy rain and strong winds.",

options:[
"forecast",
"prediction",
"outlook",
"vision",  
],

correct:["forecast"]
},

{
type:"multiple",
category:"vocabulary",
question:"Could you please _________ me on the latest developments in the project?",

options:[
"update",
"inform",
"notify",
"explain",  
],

correct:["update"]
},

{
type:"multiple",
category:"vocabulary",
question:"His sudden resignation _________ everyone in the office by surprise.",

options:[
"took",
"made",
"brought",
"caught",  
],

correct:["caught"]
},

{
type:"multiple",
category:"vocabulary",
question:"The company decided to _________ their old logo with a more modern design",

options:[
"replace",
"swap",
"exchange",
"substitute",  
],

correct:["replace"]
},

{
type:"multiple",
category:"vocabulary",
question:"Despite the heavy snow, they managed to _________ the top of the mountain.",

options:[
"arrive",
"reach",
"achieve",
"accomplish",  
],

correct:["reach"]
},

{
type:"multiple",
category:"vocabulary",
question:"The teacher asked the students to _________ a solution to the environmental issue.",

options:[
"come up with",
"put up with",
"catch up with",
"get away with",  
],

correct:["come up with me"]
},

{
type:"multiple",
category:"vocabulary",
question:"The heavy rain caused a _________ delay in all morning flights.",

options:[
"significant",
"heavy",
"huge",
"wide",  
],

correct:["significant"]
},

{
type:"multiple",
category:"vocabulary",
question:"I find it difficult to _________ the noise when I am trying to study.",

options:[
"resist",
"tolerate",
"maintain",
"undergo",  
],

correct:["tolerate"]
},

{
type:"multiple",
category:"vocabulary",
question:"The CEO decided to _________ down and let a younger executive take over.",

options:[
"step",
"fall",
"go",
"pass",  
],

correct:["step"]
},

{
type:"multiple",
category:"vocabulary",
question:"She is fluent in three languages, which gives her a great _________ in the job market.",

options:[
"advantage",
"benefit",
"profit",
"victory",  
],

correct:["advantage"]
},

{
type:"multiple",
category:"vocabulary",
question:"The detective examined the clues carefully to _________ who committed the crime.",

options:[
"figure out",
"turn out",
"carry out",
"point out",  
],

correct:["figure out"]
},

{
type:"multiple",
category:"vocabulary",
question:"We were all _________ by the beautiful scenery at the top of the cliff.",

options:[
"overwhelmed",
"exhausted",
"stressed",
"ignored",  
],

correct:["overwhelmed"]
},

{
type:"multiple",
category:"vocabulary",
question:"He has a very _________ personality and easily makes new friends.",

options:[
"outgoing",
"outcoming",
"outspoken",
"outcome",  
],

correct:["outgoing"]
},

{
type:"multiple",
category:"vocabulary",
question:"You should _________ the opportunity to study abroad if it arises.",

options:[
"seize",
"catch",
"hold",
"grab",  
],

correct:["seize"]
},

{
type:"multiple",
category:"vocabulary",
question:"The charity aims to _________ awareness about the importance of recycling.",

options:[
"raise",
"rise",
"lift",
"grow",  
],

correct:["raise"]
},

{
type:"multiple",
category:"vocabulary",
question:"Fill in the blank: Despite his lack of formal experience, he managed to secure the job due to his __________ knowledge of the industry.",

options:[
"superficial",
"encyclopedic",
"negligible",
"rudimentary",  
],

correct:["encyclopedic"]
},

{
type:"multiple",
category:"vocabulary",
question:"Fill in the blank: The company decided to __________ the old policy and introduce a much more flexible system.",

options:[
"endorse",
"uphold",
"abolish",
"foster",  
],

correct:["abolish"]
},

{
type:"multiple",
category:"vocabulary",
question:"Which word is a synonym for 'to reduce or lessen the severity of'?",

options:[
"aggravate",
"mitigate",
"instigate",
"precipitate",  
],

correct:["mtigate"]
},

{
type:"multiple",
category:"vocabulary",
question:" Fill in the blank: Her __________ display of emotion at the funeral surprised everyone who knew her as a stoic person.",

options:[
"uncharacteristic",
"customary",
"habitual",
"predictable",  
],

correct:["uncharacterisitic"]
},

{
type:"multiple",
category:"vocabulary",
question:"Which of the following words means 'impossible to understand'?",

options:[
"lucid",
"transparent",
"incoherent",
"intelligible",  
],

correct:["incoherent"]
},

{
type:"multiple",
category:"vocabulary",
question:"Fill in the blank: The new regulations __________ that all employees must complete safety training before operating the machinery.",

options:[
"entail",
"stipulate",
"imply",
"assume",  
],

correct:["stipulate"]
},

{
type:"multiple",
category:"vocabulary",
question:"Which word best completes this sentence? The politician's __________ speech was filled with empty promises and aimed to manipulate the crowd.",

options:[
"eloquent",
"demagogic",
"candid",
"objective",  
],

correct:["demagogic"]
},

{
type:"multiple",
category:"vocabulary",
question:"Fill in the blank: The economic downturn __________ a sharp decline in consumer spending.",

options:[
"resulted",
"provoked",
"culminated",
"stemmed",  
],

correct:["provoked"]
},

{
type:"multiple",
category:"vocabulary",
question:"What does the idiom 'to bite the bullet' mean?",

options:[
"To eat something unpleasant",
"To face a difficult situation with courage and patience",
"To suddenly become angry",
"To surrender to the enemy",  
],

correct:["To face a difficult situation with courage and patience"]
},

{
type:"multiple",
category:"vocabulary",
question:"Fill in the blank: The architect’s design was heavily criticized for being __________ and impractical for everyday use.",

options:[
"pragmatic",
"utilitarian",
"grandiose",
"functional",  
],

correct:["grandiose"]
},

{
type:"multiple",
category:"vocabulary",
question:"Which word means 'showing a lack of respect for things that are generally taken seriously'?",

options:[
"reverent",
"solemn",
"flippant",
"earnest",  
],

correct:["flippant"]
},

{
type:"multiple",
category:"vocabulary",
question:"Fill in the blank: The detective's __________ questioning eventually led to the suspect confessing to the crime.",

options:[
"lenient",
"relentless",
"sluggish",
"merciful",  
],

correct:["relentless"]
},

{
type:"multiple",
category:"vocabulary",
question:" Which word means 'to express strong disapproval of?",

options:[
"condemn",
"endorse",
"advocate",
"sanction",  
],

correct:["condemn"]
},

{
type:"multiple",
category:"vocabulary",
question:"Fill in the blank: The ancient artifact was __________ to the museum by an anonymous collector.",

options:[
"squandered",
"bequeathed",
"confiscated",
"appropriated",  
],

correct:["bequeathed"]
},

{
type:"multiple",
category:"vocabulary",
question:" What does the word 'ubiquitous' mean?",

options:[
"Found everywhere",
"Extremely rare",
"Mysterious and hidden",
"Very dangerous",  
],

correct:["Found everywhere"]
},

{
type:"multiple",
category:"vocabulary",
question:"Fill in the blank: The CEO is known for her __________ approach to business, never letting personal feelings interfere with her decisions.",

options:[
"passionate",
"detached",
"zealous",
"emotional",  
],

correct:["detached"]
},

{
type:"multiple",
category:"vocabulary",
question:"Which word is an antonym for 'ephemeral'?",

options:[
"transient",
"momentary",
"everlasting",
"fleeting",  
],

correct:["everlasting"]
},

{
type:"multiple",
category:"vocabulary",
question:"Fill in the blank: After the scandal, the mayor tried to __________ his reputation by launching a new charity initiative.",

options:[
"tarnish",
"redeem",
"undermine",
"jeopardize",  
],

correct:["redeem"]
},

{
type:"multiple",
category:"vocabulary",
question:"Which phrase means 'to delay taking action until a later time'?",

options:[
"To call it a day",
"To burn the midnight oil",
"To put something on the back burner",
"To hit the nail on the head",  
],

correct:["To put something on the back burner"]
},

{
type:"multiple",
category:"vocabulary",
question:" Fill in the blank: The professor's __________ argument completely dismantled my theory",

options:[
"cogent",
"feeble",
"flawed",
"specious",  
],

correct:["cogent"]
},

{
type:"multiple",
category:"vocabulary",
question:"His relentless ambition ________ him to the top of the corporate ladder, despite the fierce competition.",

options:[
"propelled",
"eluded",
"subdued",
"curtailed",  
],

correct:["propelled"]
},

{
type:"multiple",
category:"vocabulary",
question:"The politician's carefully crafted speech was designed to ________ the public's growing concern without offering any real solutions.",

options:[
"exacerbate",
"placate",
"instigate",
"refute",  
],

correct:["placate"]
},

{
type:"multiple",
category:"vocabulary",
question:"Despite the overwhelming evidence against him, the defendant maintained an air of ________ innocence throughout the trial.",

options:[
"ostensible",
"palpable",
"feigned",
"erratic",  
],

correct:["feigned"]
},

{
type:"multiple",
category:"vocabulary",
question:"The new CEO decided to ________ the outdated company policies and implement a more modern, flexible framework.",

options:[
"rescind",
"endorse",
"adhere",
"augment",  
],

correct:["rescind"]
},

{
type:"multiple",
category:"vocabulary",
question:"She is an ________ reader of historical fiction, often finishing three or four novels a week.",

options:[
"avid",
"amateur",
"apathetic",
"ambiguous",  
],

correct:["avid"]
},

{
type:"multiple",
category:"vocabulary",
question:"The ancient ruins were ________ with moss, making them look even more mysterious and enchanting.",

options:[
"devoid",
"interspersed",
"overgrown",
"destitute",  
],

correct:["overgrown"]
},

{
type:"multiple",
category:"vocabulary",
question:"Winning the championship was a ________ moment for the team after years of rigorous training and setbacks.",

options:[
"fleeting",
"momentous",
"tedious",
"mundane",  
],

correct:["momentous"]
},

{
type:"multiple",
category:"vocabulary",
question:"The professor's lectures were so ________ that many students struggled to grasp the core concepts.",

options:[
"lucid",
"coherent",
"obscure",
"concise",  
],

correct:["obscure"]
},

{
type:"multiple",
category:"vocabulary",
question:"In the face of such adversity, it is crucial to ________ your inner strength and keep pushing forward.",

options:[
"muster",
"squander",
"diminish",
"deter",  
],

correct:["muster"]
},

{
type:"multiple",
category:"vocabulary",
question:"The artist's latest sculpture is a ________ of metal, glass, and discarded electronics.",

options:[
"panorama",
"synthesis",
"mosaic",
"collage",  
],

correct:["synthesis"]
},

{
type:"multiple",
category:"vocabulary",
question:"The heavy rain ________ the soil, making it impossible to plant the crops.",

options:[
"desiccated",
"saturated",
"parched",
"cultivated",  
],

correct:["saturated"]
},

{
type:"multiple",
category:"vocabulary",
question:"The detective had a ________ feeling that the suspect was lying about his whereabouts.",

options:[
"tangible",
"luminescent",
"nagging",
"dormant",  
],

correct:["nagging"]
},

{
type:"multiple",
category:"vocabulary",
question:"After the scandal, the mayor tried to ________ his reputation by donating to local charities.",

options:[
"tarnish",
"vindicate",
"embellish",
"refurbish",  
],

correct:["vindicate"]
},

{
type:"multiple",
category:"vocabulary",
question:"The treaty was signed to ________ the long-standing hostilities between the two neighboring countries.",

options:[
"aggravate",
"terminate",
"provoke",
"entangle",  
],

correct:["terminate"]
},

{
type:"multiple",
category:"vocabulary",
question:"The author's writing style is ________, characterized by overly long and complicated sentences.",

options:[
"succinct",
"eloquent",
"convoluted",
"pragmatic",  
],

correct:["convoluted"]
},

{
type:"multiple",
category:"vocabulary",
question:"The sudden drop in temperature ________ the onset of a harsh and unforgiving winter.",

options:[
"heralded",
"concealed",
"impeded",
"hindered",  
],

correct:["heralded"]
},

{
type:"multiple",
category:"vocabulary",
question:"She has a ________ for languages, picking up new vocabulary and grammar rules with incredible ease.",

options:[
"penchant",
"propensity",
"predilection",
"knack",  
],

correct:["knack"]
},

{
type:"multiple",
category:"vocabulary",
question:"The company's sudden success was ________ to a brilliant marketing campaign and a highly innovative product.",

options:[
"attributed",
"subjected",
"subjected",
"subjected",  
],

correct:["attributed"]
},

{
type:"multiple",
category:"vocabulary",
question:"The negotiations reached an ________ when neither side was willing to compromise on their core demands.",

options:[
"impasse",
"outbreak",
"influx",
"uproar",  
],

correct:["impasse"]
},

{
type:"multiple",
category:"vocabulary",
question:"The CEO's ________ remarks during the meeting offended several senior members of the board.",

options:[
"tactful",
"discreet",
"injudicious",
"diplomatic",  
],

correct:["injudicious"]
},


];

// RANDOM TANLASH

function shuffleArray(array){

    const arr = [...array];

    for(let i = arr.length - 1; i > 0; i--){

        const j =
        Math.floor(
            Math.random() * (i + 1)
        );

        [arr[i], arr[j]] =
        [arr[j], arr[i]];
    }

    return arr;
}

function generateExamQuestions() {

    const readingPart =
    shuffleArray(readingQuestions)
    .slice(0,30);

    const grammarPart =
    shuffleArray(grammarQuestions)
    .slice(0,30);

    const vocabularyPart =
    shuffleArray(vocabularyQuestions)
    .slice(0,30);

  return shuffleArray([
    ...readingPart,
    ...grammarPart,
    ...vocabularyPart
]);
}

// TEST MA'LUMOTLARI
let beginnerQuestions = [];
let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let certificateLevel = "";
let certificateScore = 0;
// ===== CERTIFICATE CENTER =====

function startPlacementTest(){

beginnerQuestions =
generateExamQuestions();

currentQuestion = 0;

correctAnswers = 0;

wrongAnswers = 0;

document
.getElementById("test-area")
.classList.remove("hidden");

showQuestion();

}

function showQuestion(){

const q =
beginnerQuestions[currentQuestion];

document
.getElementById("test-result")
.innerHTML = "";

const passageBox =
document.getElementById(
"reading-passage"
);

if(q.passage){

passageBox.innerHTML = q.passage;

passageBox.classList.remove(
"hidden"
);

}else{

passageBox.innerHTML = "";

passageBox.classList.add(
"hidden"
);

}

document
.getElementById("test-question")
.innerHTML =
`${currentQuestion+1}. ${q.question}`;

const optionsDiv =
document.getElementById(
"test-options"
);

const input =
document.getElementById(
"typing-answer"
);

const submitBtn =
document.getElementById(
"submit-answer"
);

optionsDiv.innerHTML = "";

if(
q.type === "multiple" ||
q.type === "truefalse"
){

input.classList.add(
"hidden"
);

submitBtn.classList.add(
"hidden"
);

q.options.forEach(option=>{

const btn =
document.createElement(
"button"
);

btn.innerText =
option;

btn.className =
"yellow";

btn.onclick = ()=>{

checkAnswer(option);

};

optionsDiv.appendChild(
btn
);

});

}else{

input.classList.remove(
"hidden"
);

submitBtn.classList.remove(
"hidden"
);

input.value = "";

submitBtn.onclick =
checkTypingAnswer;

input.onkeydown = function(e){

if(e.key === "Enter"){

checkTypingAnswer();

}

};

}

}

function checkAnswer(answer){

const q =
beginnerQuestions[currentQuestion];

if(answer === q.correct){

document
.getElementById(
"test-result"
).innerHTML =
"<span style='color:green'>Correct</span>";

correctAnswers++;

}else{

document
.getElementById(
"test-result"
).innerHTML =
`
<span style='color:red'>
Wrong
</span>
<br>
The correct answer was:
<b>${q.correct}</b>
`;

wrongAnswers++;

}

setTimeout(()=>{

currentQuestion++;

if(
currentQuestion <
beginnerQuestions.length
){

showQuestion();

}else{

finishTest();

}

},1500);

}

function checkTypingAnswer(){

const q =
beginnerQuestions[currentQuestion];

const userAnswer =
document
.getElementById("typing-answer")
.value
.trim()
.toLowerCase();

let correct = false;

if(Array.isArray(q.correct)){

correct =
q.correct.some(
a => a.toLowerCase() === userAnswer
);

}else{

correct =
q.correct.toLowerCase() === userAnswer;

}

const result =
document.getElementById(
"test-result"
);

if(correct){

correctAnswers++;

result.innerHTML =
"✅ Correct";

}else{

wrongAnswers++;

result.innerHTML =
`
❌ Wrong

<br><br>

The correct answer was:

<b>${
Array.isArray(q.correct)
? q.correct[0]
: q.correct
}</b>
`;

}

setTimeout(()=>{

currentQuestion++;

if(
currentQuestion <
beginnerQuestions.length
){

showQuestion();

}else{

finishTest();

}

},1500);

}

function finishTest(){

document
.getElementById("test-area")
.classList.add("hidden");

const totalQuestions =
correctAnswers + wrongAnswers;

const percentage =
Math.round(
(correctAnswers / totalQuestions) * 100
);

let level = "";

if(percentage < 40){

level = "A1";

}
else if(percentage < 55){

level = "A2";

}
else if(percentage < 70){

level = "B1";

}
else if(percentage < 85){

level = "B2";

}
else if(percentage < 95){

level = "C1";

}
else{

level = "C2";

}

certificateLevel = level;
certificateScore = percentage;

document
.getElementById(
"certificate-section"
)
.classList.remove(
"hidden"
);

localStorage.setItem(
"certificateLevel",
level
);

localStorage.setItem(
"certificateScore",
percentage
);

localStorage.setItem(
"certificateCorrect",
correctAnswers
);

localStorage.setItem(
"certificateWrong",
wrongAnswers
);

localStorage.setItem(
"certificateTotal",
totalQuestions
);

alert(

"🎓 Test Finished!\n\n" +

"Correct: " + correctAnswers +

"\nWrong: " + wrongAnswers +

"\n\nScore: " + percentage + "%" +

"\n\nLevel: " + level

);''

}

function generateCertificate(){

window.location.href =
"certificate.html";

}

window.onload = function(){
  goSection("home");
};