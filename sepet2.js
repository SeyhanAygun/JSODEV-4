function kart(){
    let kartt=document.getElementById("txtKart").value;
    let adres=document.getElementById("txtAdr").value;
    let kartdoğru=(Number(1234));
    kart=Number;
    

    if(kartt==kartdoğru){
        document.getElementById("kartBilgi").innerHTML="Kart Numaranız Doğru Girilmiştir"
        document.getElementById("bilgi").innerHTML= "Siparişiniz Alınmıştır Bu Adrese Gönderilecektir : " + adres
    }
    else{
        document.getElementById("kartBilgi").innerHTML="Kart Numaranız Yanlıştır"
        document.getElementById("bilgi").innerHTML= "Girilen Bilgiler Yanlıştır Tekrar Deneyiniz!"
    }
}
function Sıfırla(){
    document.getElementById("kartBilgi").innerHTML=""
    document.getElementById("bilgi").innerHTML=""
    document.getElementById("txtAd").value=""
    document.getElementById("txtSoy").value=""
    document.getElementById("txtAdr").value=""
    document.getElementById("txtKart").value=""
}