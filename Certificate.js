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

    <p>
        This Certificate is proudly presented to
    </p>

    <div class="student-name">
        ${name.toUpperCase()}
    </div>

    <p class="description">

        for achieving
        <strong>${level} Level Proficiency in English</strong>
        and successfully passing the
        <strong>
        Shahriyor's School English Language Assessment
        </strong>.

        <br><br>

        This achievement reflects remarkable dedication,
        perseverance, and commitment to learning the
        English language. Your hard work and determination
        have enabled you to reach an important milestone
        in your educational journey.

        <br><br>

        We proudly recognize your accomplishment and
        encourage you to continue striving for excellence,
        embracing new opportunities, and pursuing even
        greater success in the future.

        <br><br>

        <strong>
        Test Score: ${score}%
        </strong>

    </p>

    <h3>
        With Honor and Recognition
    </h3>

    <br>

    <div class="bottom">

        <div>
            <strong>Awarded by:</strong>
            <br>
            Shahriyor's School
        </div>

        <div>
            <strong>Date:</strong>
            <br>
            ${new Date().toLocaleDateString()}
        </div>

        <div>
            <strong>Authorized Signature:</strong>
            <br>
            ___________________
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