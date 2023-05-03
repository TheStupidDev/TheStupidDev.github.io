function googleTranslateElementInit() {
            new google.translate.TranslateElement(
                {pageLanguage: 'en'},
                'google_translate_element'
            );
        }


/*
function hideElem(elemID) {
  var x = document.getElementById(elemID);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function checkMobile(){
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  console.log("mobile")
  alert("Lu lagi make HP yaakann?\n\nPerlu gw note untuk sekarang design webnya di HP masih agak jelek yaa (beberapa gambar & element diapus dan/atau masih kurang rapi), lagi gw usahain untuk bikin jadi responsive biar di HP juga rapi. \n\n(P.S: Kalo mau liat versi originalnya bisa pencet 'desktop site' lewat browser lu). \n\nMakacii..");
  hideElem("tentang_gw")
}
else{
  console.log("pc");
  hideElem("tentang_gw_mobile")
 }
}



P.S: onload="checkMobile()"
*/
