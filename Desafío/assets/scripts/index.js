const myPhoto = document.getElementById("myPhoto");
let borderVisible = false;

myPhoto.addEventListener("click", () => {
  if (!borderVisible) {
    myPhoto.style.border = "2px solid red";
    borderVisible = true;
  } else {
    myPhoto.style.border = "none";
    borderVisible = false;
  }
});
