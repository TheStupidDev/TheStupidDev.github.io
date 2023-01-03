var gw = "lagi gatau mau nambahin apa ntar gw tambahin yang keren-keren dah";


function checkMobile(){
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	console.log("mobile")
  alert("Lu lagi make HP yaakann? Perlu gw note untuk sekarang design webnya di HP masih agak jelek yaa, lagi gw usahain untuk bikin jadi responsive biar di HP juga rapi. Makacii..");
}else{
	console.log("pc")
}
}
