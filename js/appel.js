function appele()
{
var liens = document.getElementsByTagName('a');
for (var i = 0 ; i < liens.length; ++i) {
    // boucle de verifier tous les elements (liens) qui ont une class compose
    // lui viser directement element class compose
if (liens[i].className == 'compose'){
    liens[i].href = "tel:+33761234725";
    liens[i].onclick= function(){
        window.location(this.href);
        return false;
    }
}
}
}
window.onload= appele();