// Birthday page scripts

window.addEventListener("load", () => {
  Swal.fire({
    title: "Do you want to play music in the background?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
    }
    animationTimeline();
  });
});

const animationTimeline = () => {
  const lines = document.querySelectorAll(".hbd-line");
  let baseDelay = 500; // initial delay between lines
  let incrementalDelay = 50; // additional delay per line index (to create longer spacing)

  lines.forEach((line, index) => {
    const totalDelay = baseDelay * index + incrementalDelay * index * index;
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, totalDelay);
  });
};