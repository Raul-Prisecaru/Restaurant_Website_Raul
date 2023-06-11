/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  } 


  function myFunction() {
    document.getElementById("myTextarea").value = "Fifth Avenue, New York City";
  }

 const form = document.querySelector('form');
  const thankYouMessage = document.querySelector('#thank-you-message');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    thankYouMessage.classList.add('show');
    setTimeout(() => form.submit(), 2000);
  });