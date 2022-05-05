function pokazDane()
{
    dane="Następujące dane zostaną wysłane:\n";
    dane+="Imię:"+document.getElementById('imie').value+"\n";
    dane+="Nazwisko:"+document.getElementById('nazwisko').value+"\n";
    dane+="Email:"+document.getElementById('email').value+"\n";
    dane+="Telefon:"+document.getElementById('tel').value+"\n";
    dane+="Data Uroczystości:"+document.getElementById('data').value+"\n";
    dane+="Komentarz:"+document.getElementById('komentarz').value+"\n";
    if (window.confirm(dane)) return true;
    else return false;
}

function storage()
{
    var kontakt={};
    kontakt.imie=document.getElementById('imie').value;
    kontakt.nazwisko=document.getElementById('nazwisko').value;
    kontakt.email=document.getElementById('email').value;
    kontakt.tel=document.getElementById('tel').value;
    kontakt.data=document.getElementById('data').value;
    kontakt.komentarz=document.getElementById('komentarz').value;
    
    var wiadomosc=JSON.parse(localStorage.getItem('wiadomosc'));
    if (wiadomosc===null) wiadomosc=[];
    wiadomosc.push(kontakt); //dodaje obiekt kontakt do wiadomosci
    localStorage.setItem('wiadomosc',JSON.stringify(wiadomosc)); //zapisuje nową wiadomosc
}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


