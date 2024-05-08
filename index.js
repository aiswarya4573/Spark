//document.querySelector("button").setAttribute("href","login.html");
window.open('login.html','_blank');
window.open('enter.html','_blank');
window.addEventListener('popstate',function(event){
    window.history.back();

});