let name_user = prompt('Insira o seu nome: ');

date = new Date();

time_hours = date.getHours();
time_minutes = date.getMinutes();

name_user ? document.getElementById('name_user').innerHTML = name_user : document.getElementById('name_user').innerHTML = 'Visitante';

document.getElementById('current_time').innerHTML = `${time_hours} : ${time_minutes}`;

