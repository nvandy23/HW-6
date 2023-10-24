const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


const mainEl =document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML= '<h1>SEI Rocks!</h1>'
mainEl.classList.add('flex-ctr')

const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = 100
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

menuLinks.forEach((link)=>{
const linkEl = document.createElement('a')
linkEl.setAttribute('href',menuLinks.href)
linkEl.innerText =link.text
topMenuEl.appendChild(linkEl)
})
  p

 