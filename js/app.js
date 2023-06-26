const search = document.querySelector('.search-find')
const searchBtn = document.querySelector('.btn-find')
const nav = document.querySelector('nav ul')

addEventListener('click', (e) =>{
    console.log(e.target.parentNode.classList.contains('btn-find') )
    if(
        !e.target.classList.contains('search-find') &&
        !(e.target.classList.contains('btn-find') || e.target.parentNode.classList.contains('btn-find') )
    ){
        search.classList.remove('reveal')
        searchBtn.style.display = 'flex'
        nav.style.display = 'flex'
    }else{
        search.classList.add('reveal')
        searchBtn.style.display = 'none'
        nav.style.display = 'none'
    }
})
