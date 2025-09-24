function isTouchOrMobile() {
  // Touch detection
  const hasTouch = ('ontouchstart' in window) || 
                   (navigator.maxTouchPoints > 0) || 
                   (navigator.msMaxTouchPoints > 0);

  // Screen width detection
  const isSmallScreen = window.innerWidth <= 768;

  return hasTouch || isSmallScreen;
}

if (isTouchOrMobile()) {
  // Create the new div
  const newDiv = document.createElement('div');
  newDiv.className = 'SimpleButtonHolder'; // Add your desired class

  // Create button/link 1
  const button1 = document.createElement('a');
  button1.href = 'https://www.spleis.no/project/419718?subproject=23420';
  button1.textContent = 'Doner!';
  button1.className = 'SimpleButton'; // Style in CSS to look like a button

  // Create button/link 2
  const button2 = document.createElement('a');
  button2.href = 'https://www.spleis.no/project/419718?subproject=21492';
  button2.textContent = 'Doner!';
  button2.className = 'SimpleButton'; // Style in CSS to look like a button

  // Append buttons to the div
  newDiv.appendChild(button1);
  newDiv.appendChild(button2);

  // Find the container and the target element
  const content = document.getElementById('firstContent');
  const dualContainers = document.getElementById('donationpageContainer1');

  if (content && dualContainers) {
    // Insert the new div right after the mainTitle
    dualContainers.insertAdjacentElement('afterend', newDiv);
  }
}