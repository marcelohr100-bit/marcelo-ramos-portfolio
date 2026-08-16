(() => {
  'use strict';
  const nav=document.querySelector('#nav');
  const button=document.querySelector('#menu-button');
  const skip=document.querySelector('#skip-link');
  const year=document.querySelector('#year');
  if(year) year.textContent=new Date().getFullYear();
  if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('nav-open');button.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('nav-open');button.setAttribute('aria-expanded','false');}));}
  if(skip){skip.addEventListener('click',()=>{const main=document.querySelector('#main'); if(main){main.focus();main.scrollIntoView({block:'start'});}})}
})();
