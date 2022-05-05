var i=0;
function zapisz()
{
    var item = {};
    item.nazwa = document.getElementById("nazwa").value;
    item.czas = document.getElementById("czas").value;
    item.liczba = document.getElementById("liczba").value;
    var lista = JSON.parse(localStorage.getItem('lista'));
    if (lista===null) lista=[];
    lista.push(item);
    localStorage.setItem('lista', JSON.stringify(lista));
    console.log(item);
}
function wyswietl()
{
    var lancuch="";
    var lista = JSON.parse(localStorage.getItem('lista'));
    var el=document.getElementById('list'); 
    if(localStorage.length===0)
        alert("Lista jest pusta");
    else
    {
        for(var i=0; i<lista.length; i++)
        {
            lancuch+="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+lista[i].nazwa+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+lista[i].czas+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+lista[i].liczba+'<br />';
        }
    el.innerHTML=lancuch;
    }
}
function usun()
{
    localStorage.clear();
    window.location.reload();
}
function edytuj()
{
    var lista = JSON.parse(localStorage.getItem('lista'));
    var el=document.getElementById('edycja').value;
    lista[el].nazwa = document.getElementById("nazwa").value;
    lista[el].czas = document.getElementById("czas").value;
    lista[el].liczba = document.getElementById("liczba").value;
    localStorage.setItem('lista', JSON.stringify(lista));
    console.log(lista[el].nazwa);
    wyswietl();
}
function usunjedno()
{
    var lista = JSON.parse(localStorage.getItem('lista'));
    var el=document.getElementById('usun').value;
    if (confirm("Usunąć element z listy?")) lista.splice(el,1);
    localStorage.setItem('lista', JSON.stringify(lista));
    wyswietl();
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


