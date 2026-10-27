// Quote form -> opens WhatsApp. Everything else on the site works without JavaScript.
var WA="2347010319584";
var f=document.getElementById("quote-form");
if(f)f.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(f);
var m="Hi Stiiles, I'd like a quote.\nName: "+d.get("name")+"\nProduct: "+d.get("product")+"\nQuantity: "+d.get("qty")+"\nDeadline: "+(d.get("date")||"-")+"\nNotes: "+(d.get("notes")||"-");
window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(m),"_blank","noopener");});
