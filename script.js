let selectedCourse = "";
let selectedTeacher = "";
// ===== SECTION ALMASHTIRISH =====
function goSection(id){
  closeModal();

  document.querySelectorAll("section").forEach(section=>{
    section.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

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
    document.getElementById(id).scrollIntoView({
      behavior:"smooth"
    });
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

// ===== BEGINNER QUESTION DATABASE =====

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

correct:"He checks if the animals are3 healthy"
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
"He gave it milk with bottle",
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
];
const grammarQuestions = [{
type:"typing",
category:"grammar",
question:"I ___ a student.",
correct:["am"]
},

{
type:"typing",
category:"grammar",
question:"She ___ my best friend.",
correct:["is"]
},

{
type:"typing",
category:"grammar",
question:"We ___ from Spain.",
correct:["are"]
},

{
type:"typing",
category:"grammar",
question:"___ you ready?",
correct:["are"]
},

{
type:"typing",
category:"grammar",
question:"It ___ a beautiful day.",
correct:["is"]
},

{
type:"typing",
category:"grammar",
question:"They ___ not at home.",
correct:["are"]
},

{
type:"typing",
category:"grammar",
question:"He ___ a doctor.",
correct:["is"]
},

{
type:"typing",
category:"grammar",
question:"___ she your sister?",
correct:["is"]
},

{
type:"typing",
category:"grammar",
question:"You ___ very tall.",
correct:["are"]
},

{
type:"typing",
category:"grammar",
question:"I ___ hungry.",
correct:["am"]
},

{
type:"typing",
category:"grammar",
question:"___ am reading a book.",
correct:["i"]
},

{
type:"typing",
category:"grammar",
question:"This is ___ car.",
correct:["his"]
},

{
type:"typing",
category:"grammar",
question:"___ are playing football.",
correct:["they"]
},

{
type:"typing",
category:"grammar",
question:"Is this ___ dog?",
correct:["your"]
},

{
type:"typing",
category:"grammar",
question:"___ name is Maria.",
correct:["her"]
},

{
type:"typing",
category:"grammar",
question:"We love ___ new house.",
correct:["our"]
},

{
type:"typing",
category:"grammar",
question:"___ is a teacher.",
correct:["he"]
},

{
type:"typing",
category:"grammar",
question:"Look at ___!",
correct:["them"]
},

{
type:"typing",
category:"grammar",
question:"___ keys are on the table.",
correct:["my"]
},

{
type:"typing",
category:"grammar",
question:"Do ___ like coffee?",
correct:["you"]
},

{
type:"typing",
category:"grammar",
question:"I ___ pizza.",
correct:["like"]
},

{
type:"typing",
category:"grammar",
question:"She ___ in a bank.",
correct:["works"]
},

{
type:"typing",
category:"grammar",
question:"They ___ in London.",
correct:[
"do not live",
"don't live"
]
},

{
type:"typing",
category:"grammar",
question:"___ you speak English?",
correct:["do"]
},

{
type:"typing",
category:"grammar",
question:"He ___ a big dog.",
correct:["has"]
},

{
type:"typing",
category:"grammar",
question:"We ___ to school every day.",
correct:["go"]
},

{
type:"typing",
category:"grammar",
question:"___ she like ice cream?",
correct:["does"]
},

{
type:"typing",
category:"grammar",
question:"The sun ___ in the east.",
correct:["rises"]
},

{
type:"typing",
category:"grammar",
question:"I ___ getting up early.",
correct:[
"do not like",
"don't like"
]
},

{
type:"typing",
category:"grammar",
question:"___ they play tennis on Sundays?",
correct:["do"]
},

{
type:"typing",
category:"grammar",
question:"I want ___ apple.",
correct:["an"]
},

{
type:"typing",
category:"grammar",
question:"She has ___ dog and ___ cat.",
correct:["a a"]
},

{
type:"typing",
category:"grammar",
question:"___ book on the table is mine.",
correct:["the"]
},

{
type:"typing",
category:"grammar",
question:"He is ___ English teacher.",
correct:["an"]
},

{
type:"typing",
category:"grammar",
question:"We live in ___ small apartment.",
correct:["a"]
},

{
type:"typing",
category:"grammar",
question:"I saw ___ amazing movie last night.",
correct:["an"]
},

{
type:"typing",
category:"grammar",
question:"___ sky is blue.",
correct:["the"]
},

{
type:"typing",
category:"grammar",
question:"Do you have ___ pen?",
correct:["a"]
},

{
type:"typing",
category:"grammar",
question:"This is ___ best restaurant in town.",
correct:["the"]
},

{
type:"typing",
category:"grammar",
question:"I want to buy ___ car.",
correct:["a"]
},

{
type:"typing",
category:"grammar",
question:"I have two ___.",
correct:["cats"]
},

{
type:"typing",
category:"grammar",
question:"She bought three ___.",
correct:["apples"]
},

{
type:"typing",
category:"grammar",
question:"There are many ___ in the street.",
correct:["people"]
},

{
type:"typing",
category:"grammar",
question:"Look at those ___.",
correct:["children"]
},

{
type:"typing",
category:"grammar",
question:"I need some ___.",
correct:["water"]
},

{
type:"typing",
category:"grammar",
question:"Put the ___ on the table.",
correct:["glasses"]
},

{
type:"typing",
category:"grammar",
question:"Those ___ are very big.",
correct:["boxes"]
},

{
type:"typing",
category:"grammar",
question:"I have two ___.",
correct:["brothers"]
},

{
type:"typing",
category:"grammar",
question:"The ___ are running.",
correct:["dogs"]
},

{
type:"typing",
category:"grammar",
question:"He broke his ___.",
correct:["teeth"]
},

{
type:"typing",
category:"grammar",
question:"The keys are ___ the table.",
correct:["on"]
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
question:"She is ___ home.",
correct:["at"]
},

{
type:"typing",
category:"grammar",
question:"The cat is ___ the box.",
correct:["in"]
},

{
type:"typing",
category:"grammar",
question:"The picture is ___ the wall.",
correct:["on"]
},

{
type:"typing",
category:"grammar",
question:"We meet ___ the cinema.",
correct:["at"]
},

{
type:"typing",
category:"grammar",
question:"The dog is sleeping ___ the bed.",
correct:["under"]
},

{
type:"typing",
category:"grammar",
question:"There is a park ___ our house.",
correct:["near"]
},

{
type:"typing",
category:"grammar",
question:"He works ___ a hospital.",
correct:["in","at"]
},

{
type:"typing",
category:"grammar",
question:"The store is ___ the school and the bank.",
correct:["between"]
},

{
type:"typing",
category:"grammar",
question:"___ is your name?",
correct:["what"]
},

{
type:"typing",
category:"grammar",
question:"___ are you from?",
correct:["where"]
},

{
type:"typing",
category:"grammar",
question:"___ is that man?",
correct:["who"]
},

{
type:"typing",
category:"grammar",
question:"___ is your birthday?",
correct:["when"]
},

{
type:"typing",
category:"grammar",
question:"___ do you study English?",
correct:["why"]
},

{
type:"typing",
category:"grammar",
question:"___ old are you?",
correct:["how"]
},

{
type:"typing",
category:"grammar",
question:"___ do you go to work?",
correct:["how"]
},

{
type:"typing",
category:"grammar",
question:"___ is my jacket?",
correct:["where"]
},

{
type:"typing",
category:"grammar",
question:"___ is your favorite color?",
correct:["what"]
},

{
type:"typing",
category:"grammar",
question:"___ did you call last night?",
correct:["who"]
},

{
type:"typing",
category:"grammar",
question:"___ is my book here.",
correct:["this"]
},

{
type:"typing",
category:"grammar",
question:"___ are your shoes over there.",
correct:["those"]
},

{
type:"typing",
category:"grammar",
question:"Do you like ___ flower?",
correct:["this"]
},

{
type:"typing",
category:"grammar",
question:"___ apples on the tree are delicious.",
correct:["those"]
},

{
type:"typing",
category:"grammar",
question:"Who is ___ guy over there?",
correct:["that"]
},

{
type:"typing",
category:"grammar",
question:"___ are my keys in my hand.",
correct:["these"]
},

{
type:"typing",
category:"grammar",
question:"Is ___ your car?",
correct:["this"]
},

{
type:"typing",
category:"grammar",
question:"___ books here belong to me.",
correct:["these"]
},

{
type:"typing",
category:"grammar",
question:"Look at ___ birds in the sky.",
correct:["those"]
},

{
type:"typing",
category:"grammar",
question:"___ is a great idea!",
correct:["this"]
}
];

const vocabularyQuestions = [

{
type:"typing",
category:"vocabulary",
question:"Where do you sleep?",
correct:["bedroom"]
},

{
type:"typing",
category:"vocabulary",
question:"Where do you cook?",
correct:["kitchen"]
},

{
type:"typing",
category:"vocabulary",
question:"What do you sit on in the living room?",
correct:["sofa","couch"]
},

{
type:"typing",
category:"vocabulary",
question:"You wash your hands in the...",
correct:["bathroom"]
},

{
type:"typing",
category:"vocabulary",
question:"Use this to open a locked door.",
correct:["key"]
},

{
type:"typing",
category:"vocabulary",
question:"You turn this on to see in a dark room.",
correct:["light"]
},

{
type:"typing",
category:"vocabulary",
question:"A place where you can park your car.",
correct:["garage"]
},

{
type:"typing",
category:"vocabulary",
question:"We eat our dinner in the...",
correct:["dining room"]
},

{
type:"typing",
category:"vocabulary",
question:"Use this to climb to the second floor.",
correct:["stairs"]
},

{
type:"typing",
category:"vocabulary",
question:"A soft thing you put your head on in bed.",
correct:["pillow"]
},

{
type:"typing",
category:"vocabulary",
question:"A yellow fruit that monkeys love.",
correct:["banana"]
},

{
type:"typing",
category:"vocabulary",
question:"A red or green fruit used to make juice.",
correct:["apple"]
},

{
type:"typing",
category:"vocabulary",
question:"You drink this hot, black or brown liquid in the morning.",
correct:["coffee"]
},

{
type:"typing",
category:"vocabulary",
question:"A cold, white drink that comes from cows.",
correct:["milk"]
},

{
type:"typing",
category:"vocabulary",
question:"A sweet food eaten on birthdays.",
correct:["cake"]
},

{
type:"typing",
category:"vocabulary",
question:"A long, yellow fruit that grows in bunches.",
correct:["banana"]
},

{
type:"typing",
category:"vocabulary",
question:"A round Italian food with cheese and tomato.",
correct:["pizza"]
},

{
type:"typing",
category:"vocabulary",
question:"You use a knife and... to eat.",
correct:["fork"]
},

{
type:"typing",
category:"vocabulary",
question:"A round orange fruit.",
correct:["orange"]
},

{
type:"typing",
category:"vocabulary",
question:"Water frozen into ice.",
correct:["ice"]
},

{
type:"typing",
category:"vocabulary",
question:"You wear these on your feet inside your shoes.",
correct:["socks"]
},

{
type:"typing",
category:"vocabulary",
question:"You wear this around your waist to hold up your pants.",
correct:["belt"]
},

{
type:"typing",
category:"vocabulary",
question:"An upper-body garment with buttons and a collar.",
correct:["shirt"]
},

{
type:"typing",
category:"vocabulary",
question:"A one-piece garment worn by women or girls.",
correct:["dress"]
},

{
type:"typing",
category:"vocabulary",
question:"Footwear that covers your feet.",
correct:["shoes"]
},

{
type:"typing",
category:"vocabulary",
question:"You wear this warm garment when it is cold outside.",
correct:["coat"]
},

{
type:"typing",
category:"vocabulary",
question:"A piece of clothing worn on your legs (not shorts).",
correct:["pants","trousers"]
},

{
type:"typing",
category:"vocabulary",
question:"You wear this on your head to block the sun.",
correct:["hat"]
},

{
type:"typing",
category:"vocabulary",
question:"A piece of clothing worn over a shirt for formal events.",
correct:["jacket"]
},

{
type:"typing",
category:"vocabulary",
question:"You wear this when swimming.",
correct:["swimsuit"]
},

{
type:"typing",
category:"vocabulary",
question:"The first day of the weekend.",
correct:["saturday"]
},

{
type:"typing",
category:"vocabulary",
question:"The day after Monday.",
correct:["tuesday"]
},

{
type:"typing",
category:"vocabulary",
question:"How many days are in a week?",
correct:["7","seven"]
},

{
type:"typing",
category:"vocabulary",
question:"The fifth month of the year.",
correct:["may"]
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
question:"The time of day when you go to sleep.",
correct:["night"]
},

{
type:"typing",
category:"vocabulary",
question:"Another word for 60 minutes.",
correct:["hour"]
}

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

);

}

function generateCertificate(){

window.location.href =
"certificate.html";

}