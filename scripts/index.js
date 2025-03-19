// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "rafif" && password === "200302") {
    Swal.fire({
      icon: "success",
      title: "Login Success!",
      text: "",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login Failed!",
      text: "Coba cek lagi username sama passwordnya ya:)",
      confirmButtonText: "kecil semua, pass : ddmmyy",
      confirmButtonColor: "#ff7675",
    });
  }
}