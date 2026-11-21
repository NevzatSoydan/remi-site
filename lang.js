(function(){var d=document.documentElement,b=document.getElementById('lang');
var s=(navigator.language||'tr').toLowerCase().indexOf('tr')===0?'tr':'en';
function set(l){d.lang=l;b.textContent=l==='tr'?'English':'Türkçe'}
set(s);b.addEventListener('click',function(){set(d.lang==='tr'?'en':'tr')})})();
