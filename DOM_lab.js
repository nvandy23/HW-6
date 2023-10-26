const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
let showingSubMenu = false

const mainEl =document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML= '<h1>SEI Rocks!</h1>'
mainEl.classList.add('flex-ctr')

const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = 100
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

let topMenu =menuLinks.forEach((link)=>{
const linkEl = document.createElement('a')
linkEl.setAttribute('href',menuLinks.href)
linkEl.innerText =link.text
topMenuEl.appendChild(linkEl)
})
  
// end of Part 1 and Start of Part 2 

 const subMenuEl = document.getElementById("sub-menu")
 subMenuEl.style.height = "100%"
 subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
 subMenuEl.classList.add("flex-around")
 subMenuEl.style.position = "absolute"
 subMenuEl.style.top = "0"

const topMenuLinks = document.querySelectorAll('a') 
topMenuEl.addEventListener('click',(evt)=>{
  evt.preventDefault()
  let currentTarget =evt.target 
  if(currentTarget.tagName !=='A'){
    return
  }
if(currentTarget.classList.contains('active')){
currentTarget.classList.remove('active')
showingSubMenu =false
subMenuEl.style.top ="0"
return
}

topMenuLinks.forEach((link)=> {
  link.classList.remove('active') 
  console.log('before clear')

})
currentTarget.classList.add('active')
})


let currentLink =menuLinks.find(function(linkObj){
  return linkObj.text ===currentTarget.textContent
})
if(currentLink.subLinks){
  showingSubMenu =true
}
else{
  showingSubMenu =false 
} 
if(showingSubMenu){
  buildSubMenu(currentLink.subLinks)
  subMenuEl.style.top ='100%'
}

 else{
  subMenuEl.style.top ='0'
  mainEl.innerHTML = '<h1>About!</h1>'
 }


 function buildSubMenu(linksArr) {
  subMenuEl.innerHTML = ""
  for(let linkObj of linksArr) {
    const newlink = document.createElement('a')
    newlink.setAttribute('href',linkObj.href)
    newlink.textContent =linkObj.text
    subMenuEl.appendChild(newlink)
  }
  

 }

subMenuEl.addEventListener('click',(evt)=>{
  evt.preventDefault()

  let currentTarget = evt.target
  if(currentTarget.tagName !=="A"){
    return
  }
  showingSubMenu =false
  subMenuEl.style.top = '0'
  topMenuLinks.forEach(function(linkEl){
    linkEl.classList.remove('active')
  })
  let pageName =currentTarget.textContent
  let pageContent =pageName[0].toUpperCase() + pageName.slice(1)
  mainEl.innerHTML =`<h1>${currentTarget.textContent}</h1>`
})

