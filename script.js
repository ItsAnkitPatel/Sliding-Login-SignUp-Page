document.querySelectorAll("input").forEach((item) => {
  item.addEventListener("focus", function () {
    item.previousElementSibling.className = "label-selected";
  });
  item.addEventListener("blur", function () {
    if (item.value == "") {
      item.previousElementSibling.className = "";
    }
  });
});

document.querySelectorAll('input[type="password"]').forEach((passwordInput) => {
  const parentContainer = passwordInput.parentElement;
  const togglePasswordIcon = document.createElement("i");
  togglePasswordIcon.className = "fa-solid fa-eye";
  togglePasswordIcon.id = "togglePassword";
  parentContainer.appendChild(togglePasswordIcon);

  passwordInput.addEventListener("focus", function () {
    togglePasswordIcon.style.display = "block";
  });

  document.addEventListener("mousedown", function (event) {
    const isToggleIconClicked = event.target === togglePasswordIcon;
    if (isToggleIconClicked) {
      const type =
        passwordInput.getAttribute("type") === "password"
          ? "text"
          : "password";
      passwordInput.setAttribute("type", type);
      event.preventDefault()
    }else{
      togglePasswordIcon.style.display ='none'
    }
  });
});

document.getElementById("registerLink").addEventListener('click',function(){
  if(window.innerWidth<600){
    document.getElementById("signUp").style.display="block"
    document.getElementById("login").style.display="none"
  }else{
    document.getElementById("overlay").style.transform = 'translate(550px,-25px)'
  }
})
document.getElementById("loginLink").addEventListener('click',function(){
  if(window.innerWidth<600){
    document.getElementById("login").style.display="block"
    document.getElementById("signUp").style.display="none"
  }else{
    document.getElementById("overlay").style.transform = 'translate(0px,-25px)'
  }
})