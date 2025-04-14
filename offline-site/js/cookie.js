// var cookie_box = document.getElementById('cookie_box'),
//   activeBtn = document.getElementById('activeBtn');


// if (getCookie('CookieBy') == 'Skytup') {
//   //All time hide the popup box
//   cookie_box.classList.add('hide');
// } else {
//   activeBtn.addEventListener('click', function () {
//     //UTC is time set by the world time standard
//     document.cookie = "CookieBy=Skytup; expires=" + new Date(2030, 0, 1).toUTCString();
//     //This cookies expires after 30 days
//     document.cookie = "Owner=Akash; max-age=" + 60 * 60 * 24 * 30;
//     if (document.cookie) {
//       //Hide the popup box
//       cookie_box.classList.add('hide');
//     } else {
//       //If we block cookie setting then show this massege
//       alert("cookie not set! Please allow this site from your browser cookie setting");
//     }

//   })
// }



function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
}
