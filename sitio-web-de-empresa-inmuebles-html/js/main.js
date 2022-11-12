var menuIcon = document.querySelelctor('.menu-icon');

var ul = document.querySelelctor('.ul');

menuIcon.addEventListener('click',()=>{
if (ul.classList.contains('ativo')) {
	ul.classList.remove('ativo');
	document.querySelelctor('menu-icon img').src = 'img/menu.png';
}else{
	ul.classList.add('ativo');
	document.querySelelctor('menu-icon img').src = 'img/close.png';
}
})