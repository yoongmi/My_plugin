
// SIDEMENU 
fetch("./layout/sidemenu.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("wrap").insertAdjacentHTML('afterbegin',data)
    })
    .catch((error) => console.error("sidenav를 못 불러 왔습니다!", error))

// TOPMENU
fetch("./layout/topmenu.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("content").insertAdjacentHTML('afterbegin',data)
    })
    .catch((error) => console.error("topmenu를 못 불러 왔습니다!", error))


// quick 
const skinButton = document.querySelector('#quick li input');
const skinButtonHandle = (value)=>{
    const body = document.querySelector('body')
    body.classList.value = value
}

// mo > nav
const navToggle = ()=>{
    const nav = document.getElementById('nav').classList;
    const body = document.querySelector('body')

    if(nav.contains('open')){
        nav.remove('open')
        body.classList.remove('overflow-hidden')
    }else{
        nav.add('open')
        body.classList.add('overflow-hidden')
    }
    
}