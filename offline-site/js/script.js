let pass = document.querySelectorAll("._pas");
let show_btn = document.querySelectorAll('.show_password_button');
for (let i = 0; i < show_btn.length; i++) {
  show_btn[i].addEventListener('click', () => {
    if (show_btn[i].getAttribute('vision') == 'true') {
      show_btn[i].setAttribute('class', 'fa fa-eye-slash');
      show_btn[i].setAttribute('vision', 'false');
      for (let j = 0; j < pass.length; j++) {
        pass[j].setAttribute('type', 'text');
      }
    } else {
      show_btn[i].setAttribute('vision', 'true');
      show_btn[i].setAttribute('class', 'fa fa-eye');
      for (let j = 0; j < pass.length; j++) {
        pass[j].setAttribute('type', 'password');
      }

    }
  });
}

// Copy to clipboard function
function copyText(input_id) {
  let copyText = document.getElementById(input_id);
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  // alert('you Copied something..');
}

//Replacing urls in valid anchor tag
function replaceURLs(message) {
  if (!message) return;

  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return message.replace(urlRegex, function (url) {
    var hyperlink = url;
    if (!hyperlink.match('^https?:\/\/')) {
      hyperlink = 'http://' + hyperlink;
    }
    return '<a href="' + hyperlink + '" target="_blank" rel="noopener noreferrer">' + url + '</a>'
  });
}

// A function to extract only file name from a url
function extractLastName(path) {
  let parts = path.split('/');
  return parts[parts.length - 1];
}

// Copy to clipborad function
function copyStringToClipboard(str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('text copied to the clipboard');
}

// A function to show the modal box and hide all 'modal' class name box
function showBox(id_of_box) {
  let mdl = document.querySelector('#' + id_of_box);
  if (!mdl) {
    showToast('No element Found');
    return;
  }

  let mdbt = document.querySelectorAll('.modal');
  if (mdl.style.display == 'none') {
    for (let i = 0; i < mdbt.length; i++) {
      mdbt[i].style.display = 'none';

    }
    mdl.style.removeProperty('display');

  } else {
    mdl.style.display = 'none';

  }

}

// Targeting modal class and hide on click
const modals = document.querySelectorAll('.modal');
window.onclick = (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};


// To refresh captcha all over the website
let refreshCaptcha = document.querySelectorAll('.refresh-captcha');
let imageCaptcha = document.querySelectorAll('.captcha-image');
for (let i = 0; i < refreshCaptcha.length; i++) {
  refreshCaptcha[i].onclick = () => {
    for (let j = 0; j < imageCaptcha.length; j++) {
      imageCaptcha[i].src = '/asset/captcha/?' + Date.now();
    }
  }
}

//  Preventing drag just give classname no-drag
let noDrag = document.querySelectorAll('.no-drag');
for (let n = 0; n < noDrag.length; n++) {
  noDrag[n].addEventListener("mousedown", function (event) {
    event.preventDefault();
  });
  noDrag[n].addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
  noDrag[n].addEventListener("click", function (event) {
    event.preventDefault();
  });
}

// Script to download file by it's Url
function downloadFile(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    var urlCreator = window.URL || window.webkitURL;
    var fileUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement('a');
    tag.href = fileUrl;
    tag.download = getFileNameFromUrl(url);
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  };
  xhr.send();
}

function getFileNameFromUrl(url) {
  var anchor = document.createElement('a');
  anchor.href = url;
  return anchor.pathname.split('/').pop();
}


function showToast(message, dismissible = false, type = 'default', options = {}) {
  const {
    bg = '#333',
    color = '#fff',
    position = 'bottom',
    duration = 5000,
  } = options;

  // Create a new element to host the Shadow DOM
  const host = document.createElement('div');

  // Attach a Shadow Root to the host element
  const shadowRoot = host.attachShadow({ mode: 'open' });

  // Get the document object associated with the Shadow DOM
  const shadowDoc = shadowRoot.ownerDocument;

  // Create the toast element inside the Shadow DOM
  const toast = shadowDoc.createElement('div');
  toast.classList.add('toast');

  // Set the background color and text color based on the type and provided options
  switch (type) {
    case 'success':
      toast.style.backgroundColor = 'rgba(92, 184, 92, 0.9)';
      toast.style.color = color;
      break;
    case 'error':
      toast.style.backgroundColor = 'rgba(217, 83, 79, 0.9)';
      toast.style.color = color;
      break;
    case 'warning':
      toast.style.backgroundColor = 'rgba(240, 173, 78, 0.9)';
      toast.style.color = color;
      break;
    case 'info':
      toast.style.backgroundColor = 'rgba(91, 192, 222, 0.9)';
      toast.style.color = color;
      break;
    default:
      toast.style.backgroundColor = bg;
      toast.style.color = color;
  }

  // Set the message text
  const messageElement = shadowDoc.createElement('span');
  messageElement.textContent = message;
  toast.appendChild(messageElement);

  // Create the cancel button if dismissible is true
  if (dismissible) {
    const cancelButton = shadowDoc.createElement('button');
    cancelButton.textContent = '✖';
    cancelButton.style.marginLeft = '10px';
    cancelButton.style.backgroundColor = 'transparent';
    cancelButton.style.border = 'none';
    cancelButton.style.color = 'inherit';
    cancelButton.style.cursor = 'pointer';
    toast.appendChild(cancelButton);
  }

  // Add the toast to the Shadow DOM
  shadowRoot.appendChild(toast);

  // Add the host element to the document body
  document.body.appendChild(host);

  // Position the toast
  host.style.position = 'fixed';
  host.style.left = '50%';
  host.style[position] = '20px';
  host.style.transform = 'translateX(-50%)';
  host.style.zIndex = '99999';

  // Apply styles to the toast
  toast.style.padding = '16px';
  toast.style.borderRadius = '5px';
  toast.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  toast.style.fontFamily = 'Arial, sans-serif';
  toast.style.fontSize = '16px';
  toast.style.maxWidth = '400px';
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.justifyContent = dismissible ? 'space-between' : 'center';
  toast.style.opacity = '0';
  toast.style.transform = position === 'bottom' ? 'translateY(100%)' : 'translateY(-100%)';
  toast.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';

  // Add animation and transparency
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 100);

  // Remove the toast after the specified duration
  const timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = position === 'bottom' ? 'translateY(100%)' : 'translateY(-100%)';
    setTimeout(() => {
      host.remove();
    }, 300);
  }, duration);

  // Cancel the timer and remove the toast if the cancel button is clicked
  if (dismissible) {
    clearTimeout(timer);
    const cancelButton = toast.querySelector('button');
    cancelButton.addEventListener('click', () => {
      clearTimeout(timer);
      toast.style.opacity = '0';
      toast.style.transform = position === 'bottom' ? 'translateY(100%)' : 'translateY(-100%)';
      setTimeout(() => {
        host.remove();
      }, 300);
    });
  }
}


// function showToast(message) {
//   // create a new div element for the toast
//   const toast = document.createElement('div');

//   // set the message as the innerHTML of the toast
//   toast.innerHTML = message;

//   // set the CSS styles for the toast
//   toast.style.position = 'fixed';
//   toast.style.bottom = '20px';
//   toast.style.left = '50%';
//   toast.style.transform = 'translateX(-50%)';
//   toast.style.backgroundColor = '#333';
//   toast.style.color = '#fff';
//   toast.style.padding = '16px';
//   toast.style.borderRadius = '5px';
//   toast.style.opacity = '0';
//   toast.style.transition = 'opacity 0.3s';

//   // append the toast to the body element
//   document.body.appendChild(toast);

//   // fade in the toast
//   setTimeout(function() {
//     toast.style.opacity = '1';
//   }, 100);

//   // fade out the toast after 3 seconds
//   setTimeout(function() {
//     toast.style.opacity = '0';
//     // remove the toast from the DOM after it fades out
//     setTimeout(function() {
//       toast.parentNode.removeChild(toast);
//     }, 300);
//   }, 3000);
// }


// CODE FOR SHARE MODAL

document.addEventListener('DOMContentLoaded', (event) => {
  const shareModal = document.getElementById('share-modal');
  const closeModal = document.getElementById('close-modal');
  const copyLinkButton = document.getElementById('copy-link');
  const facebookShare = document.getElementById('facebook-share');
  const whatsappShare = document.getElementById('whatsapp-share');
  const instagramShare = document.getElementById('instagram-share');
  const twitterShare = document.getElementById('twitter-share');
  const linkedinShare = document.getElementById('linkedin-share');

  function skyShare(url) {
    shareModal.style.display = 'flex';
    facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    whatsappShare.href = `https://wa.me/?text=${encodeURIComponent(url)}`;
    instagramShare.href = `https://www.instagram.com/?url=${encodeURIComponent(url)}`;
    twitterShare.href = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}`;
    linkedinShare.href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`;

    copyLinkButton.onclick = () => {
      navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    };
  }

  closeModal.onclick = () => {
    shareModal.style.display = 'none';
  }

  window.onclick = (event) => {
    if (event.target === shareModal) {
      shareModal.style.display = 'none';
    }
  }

  window.skyShare = skyShare;
});
