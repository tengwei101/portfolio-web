
// Initialize and add the map
function initMap() {
  // The location of WINK UTAR Office
  const kampar = { lat: 4.3387640940782335, lng: 101.13668783957284};
  // The map, centered at WINK UTAR Office
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: kampar,
  });
  // The marker, positioned at WINK UTAR Office
  const marker = new google.maps.Marker({
    position: kampar,
    map: map,
  });
}



//Set Cookies
// const cookie_box = document.getElementById('cookie_box'),
// activeBtn = document.getElementById('activeBtn');



// activeBtn.addEventListener("click", function(){
//   document.cookie = "CookieBy=WINKUTAR; expires=" + new Date(2023, 0, 1).toUTCString();
//   document.cookie = "Name=John; max-age=" + 60*60*24*30;
//   document.cookie = "LastName=Deo; max-age=" + 60*60*24*30;

//   if(document.cookie){
//     cookie_box.classList.add("hide");
//   }else{
//     alert("Cookie no set! PLease allow this site from your browser cookie setting")
//   }


// });


// acceptBtn.onclick =()=>{
//   //setting cookie for 1 month, after 1 month cookie will be expired automatically
//   document.cookie= "CookieBy=CodingNepal; max-age=" + 60*60*24*30;

//   if(document.cookie){ //if the above cookie set
//     cookieBox.classList.add("hide"); //hide cookie box once cookie set
//   }
//   else{
//     alert("Cookie can't be set!"); //if cookie can't be set then alert error message
//   }

//   //let's hide the cookie box if cookie is set and not expired
//   let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our set cookie
//   //if cookie is set the hide the cookie box else show it
//   checkCookie != 1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");

// }