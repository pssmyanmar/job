// script.js
document.getElementById("invoiceForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values from the form fields
  const date = document.getElementById("date").value;
  const username = document.getElementById("username").value;
  const usermail = document.getElementById("usermail").value;
  const endDate = document.getElementById("endDate").value;
  const invoiceId = document.getElementById("invoiceId").value;
  const paymentMethod = document.getElementById("paymentMethod").value;
  const paidAmount = document.getElementById("paidAmount").value;
  const issuer = document.getElementById("issuer").value;
  const note = document.getElementById("note").value;

  // Fill the template with user input
  const invoiceTemplate = `
    <div class="invoice">
      <h1>PSS</h1>
      <p>https://t.me/pssmyanmar</p>
      <div class="details">
        <p>Date: ${date}</p>
        <p>Username: ${username}</p>
        <p>Usermail: ${usermail}</p>
        <p>End Date: ${endDate}</p>
        <p>Invoice ID: ${invoiceId}</p>
        <p>Payment Method: ${paymentMethod}</p>
        <p>Paid Amount: ${paidAmount} MMK</p>
        <p>Issuer: ${issuer}</p>
        <p>Note: ${note}</p>
      </div>
    </div>
  `;

  document.getElementById("output").innerHTML = invoiceTemplate;

  // Use html2canvas to capture the output as a downloadable JPG
  html2canvas(document.querySelector("#output")).then(canvas => {
    const link = document.createElement("a");
    link.download = "invoice.jpg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
  });
});
