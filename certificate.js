function createCertificate() {

    const name = document
        .getElementById("studentName")
        .value
        .trim();

    if (name === "") {
        alert("Please enter your full name");
        return;
    }

    const level =
        localStorage.getItem("certificateLevel") || "A1";

    const score =
        localStorage.getItem("certificateScore") || "0";

    const correct =
        localStorage.getItem("certificateCorrect") || "0";

    const wrong =
        localStorage.getItem("certificateWrong") || "0";

    const total =
        localStorage.getItem("certificateTotal") || "90";

        let recommendedCourse = "";
let coursePrice = "";

switch(level){

case "A1":
recommendedCourse = "Beginner";
coursePrice = "300 ming som";
break;

case "A2":
recommendedCourse = "Elementary";
coursePrice = "300 ming som";
break;

case "B1":
recommendedCourse = "Pre-Intermediate";
coursePrice = "350 ming som";
break;

case "B2":
recommendedCourse = "Intermediate";
coursePrice = "350 ming som";
break;

case "C1":
recommendedCourse = "Upper-Intermediate";
coursePrice = "350 ming som";
break;

case "C2":
recommendedCourse = "IELTS";
coursePrice = "500 ming som";
break;

default:
recommendedCourse = "Beginner";
coursePrice = "300 ming som";

}

    const certificateArea =
        document.getElementById("certificateArea");

    certificateArea.classList.remove("hidden");

    certificateArea.innerHTML = `

<div id="certificate" class="certificate">

<h1>CERTIFICATE</h1>

<h3 class="school-name">
Shahriyor's School Assessment
</h3>

<h2 class="congrats">
Congratulations!
</h2>

<p>This Certificate is proudly presented to</p>

<h2 class="student-name">
${name.toUpperCase()}
</h2>

<p class="main-text">
for achieving <strong>${level}</strong> Level Proficiency in English and successfully passing the Shahriyor's School English Language Assessment.
</p>

<p class="main-text">
This achievement reflects remarkable dedication, perseverance, and commitment to learning the English language. Your hard work and determination have enabled you to reach an important milestone in your educational journey.
</p>

<p class="main-text">
We proudly recognize your accomplishment and encourage you to continue striving for excellence, embracing new opportunities, and pursuing even greater success in the future.
</p>

<p class="main-text">
<strong>
Test Result: ${score}% (${correct} Correct / ${wrong} Incorrect)
</strong>
</p>

<h3 class="honor">
With Honor and Recognition
</h3>

<div class="footer-cert">

<div>
<b>Awarded by:</b><br>
Shahriyor's School
</div>

<div>
<b>Date:</b><br>
${new Date().toLocaleDateString()}
</div>

<div>
<b>Authorized Signature:</b><br>
____________
</div>

</div>

</div>

<button
class="download-btn"
onclick="downloadCertificate()">
Download Certificate
</button>

<div class="course-recommendation">

<h2>
🎯 Recommended Course
</h2>

<p>
According to your test result,
we recommend our

<b>${recommendedCourse}</b>

course.
</p>

<button
class="enroll-btn"
onclick="enrollCourse(
'${recommendedCourse}',
'${coursePrice}'
)">
Enroll in ${recommendedCourse}
</button>

</div>

`;

}

function downloadCertificate() {

    const certificate =
        document.getElementById("certificate");

    html2canvas(certificate).then(canvas => {

        const link =
            document.createElement("a");

        link.download =
            "certificate.png";

        link.href =
            canvas.toDataURL("image/png");

        link.click();

    });

}

function enrollCourse(course, price){

localStorage.setItem(
"autoCourse",
course
);

localStorage.setItem(
"autoPrice",
price
);

window.location.href =
"index.html";

}

window.addEventListener("load", ()=>{

const course =
localStorage.getItem("autoCourse");

const price =
localStorage.getItem("autoPrice");

if(!course) return;

goSection("courses");

showEnglish();

setTimeout(()=>{

openModal(
course,
"Shahriyor Ruzimatov tomonidan olib boriladi",
price
);

localStorage.removeItem("autoCourse");
localStorage.removeItem("autoPrice");

},500);

});