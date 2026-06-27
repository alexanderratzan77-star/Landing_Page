document.querySelectorAll('nav a').forEach(a=>{
a.addEventListener('click',e=>{
e.preventDefault();
document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});
});
document.getElementById('formulario').addEventListener('submit',e=>{
e.preventDefault();
alert('Formulario enviado correctamente.');
});
