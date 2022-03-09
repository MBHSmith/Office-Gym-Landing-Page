const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

function toggleSidebar(){
    document.getElementById('sidebar').classList.toggle('active');
  }

  document.getElementById('toggler').addEventListener('click', toggleSidebar);

  function modalShow() {
    document.getElementById('modal').style.display="block";
    document.getElementById('overlay').style.display="block";
    document.getElementById('toggler').style.display="none";
  }

  function modalClose() {
    document.getElementById('modal').style.display="none";
    document.getElementById('overlay').style.display="none";
    document.getElementById('toggler').style.display="flex";
  }

  document.getElementById('trigger').addEventListener('click', modalShow);

  document.getElementById('close-modal').addEventListener('click', modalClose);

  document.getElementById('sign-up').addEventListener('click', () => {
    document.getElementById('message').innerHTML="Thank you! A representative will contact you shortly."
  });

const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item')
container.onclick = e => {
    const elClass = e.target.classList;
    if(!elClass.contains('active')) {
        items.forEach(item => item.classList.remove('active'));
        console.log(e.target.getAttribute("data-rate"));
        elClass.add('active');
    }
};