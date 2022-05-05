function saveToSessionStorage()
{
    clear();
    document.getElementById('radioError').innerHTML = "";
    var nameValue = document.getElementById('imie').value;
    var emailValue = document.getElementById('email').value;
    var messageValue = document.getElementById('message').value;
    if (whichRadio() === 0) sessionStorage.setItem('topic', 'Zapytanie');
    if (whichRadio() === 1) sessionStorage.setItem('topic', 'Oferta');
    if (whichRadio() === 2) sessionStorage.setItem('topic', 'Inne');
    if (whichRadio() === 0) sessionStorage.setItem('topic', 'Zapytanie');
    if (document.getElementById('option1').checked) sessionStorage.setItem('option1', 'option1');
    if (document.getElementById('option2').checked) sessionStorage.setItem('option2', 'option2');
    if (document.getElementById('option3').checked) sessionStorage.setItem('option3', 'option3');
    
    if (whichSelectOption() !== null) sessionStorage.setItem('gdzie', whichSelectOption());
    else 
    {
        document.getElementById('selectError').innerHTML = "Błąd.Wybierz ponownie";
        return;
    }
    
    
    if (whichRadio() === -1) 
    {
        document.getElementById('radioError').innerHTML = "Błąd. Musisz wybrać temat";
        return;
    }
    
    sessionStorage.setItem('email', emailValue);
    sessionStorage.setItem('message', messageValue);

    loadFromSessionStorage();

}

function loadFromSessionStorage()
{
    var dane="";
    dane="Następujące dane zostaną wysłane:\n";

   dane+="Imię:"+document.getElementById('imie').value+"\n";
   dane+="Numer telefonu:"+document.getElementById('nrTel').value+"\n";
    if (sessionStorage.getItem('email')) dane+="E-mail: " + sessionStorage.getItem('email') + "\n";
    if (sessionStorage.getItem('topic')) dane+="Temat: " + sessionStorage.getItem('topic') + "\n";
    if (sessionStorage.getItem('gdzie')) dane+="Znalazłeś nas przez: " + sessionStorage.getItem('gdzie') + "\n";
    if (sessionStorage.getItem('message')) dane+="Wiadomość: " + sessionStorage.getItem('message') + "\n";
    if (sessionStorage.getItem('option1') || sessionStorage.getItem('option2') || sessionStorage.getItem('option3')) dane+="Zaznaczone checkboxy: ";
    if (sessionStorage.getItem('option1') ) dane+=sessionStorage.getItem('option1') + ", ";
    if (sessionStorage.getItem('option2') ) dane+=sessionStorage.getItem('option2') +", ";
    if (sessionStorage.getItem('option3') ) dane+=sessionStorage.getItem('option3');
    confirm(dane);

}

function whichRadio()
{
    for (i=0; i<document.getElementsByName('topic').length; i++)
    {
        if (document.getElementsByName('topic')[i].checked) return i;
    }
    return -1;
}

function whichSelectOption()
{ 
    if (document.getElementById('jakNasZnalazles').value === 'google' ) return 'Google';
    if (document.getElementById('jakNasZnalazles').value === 'youtube' ) return 'YouTube';
    if (document.getElementById('jakNasZnalazles').value === 'friends' ) return 'Znajomego';
    if (document.getElementById('jakNasZnalazles').value === 'other' ) return 'Inne';
    
    return null;
    
}

function clear()
{
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('message');
    sessionStorage.removeItem('gdzie');
    sessionStorage.removeItem('topic');
    sessionStorage.removeItem('option1');
    sessionStorage.removeItem('option2');
    sessionStorage.removeItem('option3');
    
}

function clearOptions()
{
    
        
    sessionStorage.removeItem('option1');
    sessionStorage.removeItem('option2');
    sessionStorage.removeItem('option3');
}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


