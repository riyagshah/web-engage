const data = JSON.parse(localStorage.getItem("details"));
document.getElementById("email").innerText = data.email;
document.getElementById("number").innerText = `${data.code} ${data.number}`;
