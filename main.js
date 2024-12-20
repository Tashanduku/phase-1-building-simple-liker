// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Defining text characters for the empty and full hearts


// Find the heart element in the DOM
const heart = document.querySelector('.heart');

// Find the error modal in the DOM
const errorModal = document.querySelector('#modal');

// Add the .hidden class to hide the modal when the page first loads
errorModal.classList.add('hidden');

// Function that handles the heart click event
function handleHeartClick(event) {
  const heart = event.target;

  // Simulate server call when heart is clicked
  mimicServerCall()
    .then(() => {
      // On success, change the heart to full and add the red color
      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart');
      } else {
        // On second click, change it back to an empty heart
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    })
    .catch((errorMessage) => {
      // On failure, show the error modal with the message
      errorModal.classList.remove('hidden');
      errorModal.textContent = errorMessage;

      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// Add event listener to the heart for click events
heart.addEventListener('click', handleHeartClick);




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
