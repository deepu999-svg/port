function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
  
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function set(){
  let now = new Date();
            let currentDate = now.toLocaleDateString();
            let currentTime = now.toLocaleTimeString();
  document.getElementById('date').innerText = ` ${currentDate} ${currentTime}`;
  }
  setInterval(set, 1000);
  set();

  