const menuIcon = document.getElementById('menu'),
  menu = document.getElementById('side-menu'),
  exitMenu = document.getElementById('close-icon')

menuIcon.onclick = ()=>{
  if (menu && menu.classList.contains('inactive')) {
    menu.setAttribute('class', 'active')
}


}
document.body.onclick = (e)=>{
  if(menu.classList.contains('active' ) && !e.target.closest('#side-menu') && !e.target.closest('#menu')){
    menu.setAttribute('class', 'inactive');
  }
}
exitMenu.onclick = ()=>{
    menu.setAttribute('class', 'inactive')
}