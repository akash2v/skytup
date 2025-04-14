// script to check connectivity and display status
//create a div element for the notification
const offlineDiv = document.createElement('div');
offlineDiv.style.position = 'fixed';
offlineDiv.style.bottom = '20px';
offlineDiv.style.left = '20px';
offlineDiv.style.padding = '20px';
offlineDiv.style.background = 'rgba(255, 69, 0, 0.8)';
offlineDiv.style.color = '#fff';
offlineDiv.style.borderRadius = '5px';
offlineDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
offlineDiv.style.display = 'none';
offlineDiv.style.zIndex = '1000000';
offlineDiv.innerHTML = '<strong>Oops!</strong> You are offline.';

//append the notification div to the body
document.body.appendChild(offlineDiv);

//function to show the offline notification with animation
function showOfflineNotification() {
  offlineDiv.style.display = 'block';
  offlineDiv.style.animation = 'slide-in-bottom 0.5s forwards';
}

//function to hide the offline notification with animation
function hideOfflineNotification() {
  offlineDiv.style.animation = 'slide-out-bottom 0.5s forwards';
  setTimeout(() => {
    offlineDiv.style.display = 'none';
  }, 500);
}

//check the network status on page load
if (!navigator.onLine) {
  showOfflineNotification();
}

//check the network status on network change
window.addEventListener('offline', showOfflineNotification);
window.addEventListener('online', hideOfflineNotification);

//add styles for the slide-in-bottom animation
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
  @keyframes slide-in-bottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes slide-out-bottom {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;
document.head.appendChild(styleSheet);

function _get(url) {
  if (!url) {
    url = window.location.href;
  }
  const anchor = document.createElement('a');
  anchor.href = url;
  const queryString = anchor.search.substring(1);
  const paramsArray = queryString.split('&').map(param => {
    const [key, value] = param.split('=');
    return { key: decodeURIComponent(key), value: decodeURIComponent(value) };
  });
  return paramsArray;
}
function disableDeveloper() {
  // Disable developer tools
  document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.shiftKey && event.key === 'C') || (event.ctrlKey && event.shiftKey && event.key === 'J') || (event.ctrlKey && event.key === 'U')) {
      event.preventDefault();
    }
  });
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });
}

// Script for listeners
class SwipeListener {
  constructor(element) {
    this.element = element;
    this.startX = 0;
    this.startY = 0;
    this.threshold = 50; // set the minimum distance to swipe in pixels
    this.element.addEventListener('touchstart', this.handleTouchStart.bind(this));
    this.element.addEventListener('touchmove', this.handleTouchMove.bind(this));
  }

  handleTouchStart(event) {
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  }

  handleTouchMove(event) {
    if (event.touches.length > 1) return;
    event.preventDefault();
    let distX = event.touches[0].clientX - this.startX;
    let distY = event.touches[0].clientY - this.startY;
    if (Math.abs(distX) > this.threshold && Math.abs(distY) <= this.threshold) {
      if (distX > 0) {
        this.swipeRight();
      } else {
        this.swipeLeft();
      }
    } else if (Math.abs(distY) > this.threshold && Math.abs(distX) <= this.threshold) {
      if (distY > 0) {
        this.swipeDown();
      } else {
        this.swipeUp();
      }
    }
  }

  swipeLeft() {
    // code to handle left swipe goes here
    console.log('Swiped left');

  }

  swipeRight() {
    // code to handle right swipe goes here
    console.log('Swiped right');
  }

  swipeUp() {
    // code to handle up swipe goes here
    console.log('Swiped up');
  }

  swipeDown() {
    // code to handle down swipe goes here
    console.log('Swiped down');
  }
}


const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('i')) {
  urlParams.delete('i');
  const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
  window.history.replaceState({}, '', newUrl);
}

function scrollToElement(id) {
  let element = document.getElementById(id);
  if (element) {
    element.scrollIntoView();
  } else {
    console.log('Element with ID "' + id + '" not found');
  }
}

function setMessage(element, type, message) {
  switch (type) {
    case 'success':
      element.style.color = 'green';
      break;
    case 'error':
      element.style.color = 'red';
      break;
    default:
      element.style.color = 'blue';
      break;
  }
  element.innerText = message;

}





function createHearts(numHearts, color) {
  for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('i');
      heart.classList.add('fas', 'fa-heart', 'heart');
      heart.style.color = color;
      document.body.appendChild(heart);
      const left = Math.random() * (window.innerWidth - 100) + 50;
      heart.style.left = `${left}px`;
      setTimeout(() => {
          heart.remove();
      }, 5000);
  }
}

// Add the CSS to the document head
const style = document.createElement('style');
style.innerHTML = `
  .heart {
      position: fixed;
      bottom: -50px;
      left: 50%;
      font-size: 30px;
      opacity: 0;
      animation: floatUp 5s linear forwards, fadeOut 1s 4s forwards;
      pointer-events: none;
      z-index:1000;
  }

  @keyframes floatUp {
      0% {
          bottom: -50px;
          opacity: 0;
          transform: translate(-10%);
      }

      50% {
          opacity: 1;
          transform: scale(4) translate(-10%);
      }

      100% {
          bottom: calc(100vh - 100px);
          transform: translate(-50%) rotate(180deg);
          opacity: 0;
      }
  }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function() {
  // List of colors to use
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange'];

  // Function to get a random color from the list
  function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
  }

  // Select all elements with the class 'likes'
  const elements = document.querySelectorAll('.likes');

  elements.forEach(element => {
      let intervalId;

      // Mouseover event listener
      element.addEventListener('mouseover', function() {
          intervalId = setInterval(() => createHearts(5, getRandomColor()), 1000);
      });

      // Mouseout event listener
      element.addEventListener('mouseout', function() {
          clearInterval(intervalId);
      });
  });
});
