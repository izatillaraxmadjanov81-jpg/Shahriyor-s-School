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