// Data
import { movies , categories} from "./data.js";
// elments 
let videoTitle = document.querySelector('.play-video__title');
const activePageTitle = document.querySelector('.section-title__title')
const videoPlayer = document.querySelector('.video-player');
let video = document.querySelector('.play-video');
const searchButton = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
const closeVideo = document.querySelector('.play-video__button');
const buttonMenu = document.querySelector('.menu-button');
const modalMenu = document.querySelector('.menu');

// create element
function createElement (tagName, clasName, text, parent){
   let element = document.createElement(tagName);
   element.setAttribute('class', clasName);
   element.innerHTML = text
   parent.appendChild(element) 
   return element
}
// create image
function createImage(src, alt, parent){
    let image = document.createElement('img');
    image.setAttribute('src', src);
    image.setAttribute('alt', alt);
    parent.appendChild(image)
}
// category header
function generateCategories(activeCategoryId){
    const nav = document.querySelector('.header-nav');
    nav.innerHTML =''
    for(let category of categories){
        let className = activeCategoryId === category.id ? 'header-link active' : 'header-link'
        const a = createElement('a', className, category.title, nav);
        a.setAttribute('href', '#')
         a.addEventListener('click' , function(){
            generateCategories(category.id);
            generateCategoriesFooter(category.id);
            generateMoviesList(category.id);
            videoPlayer.classList.remove('active-video');
            videoTitle.innerHTML = '';
            video.innerHTML = '';
            videoTitle.innerHTML = '';
        })
    }
}
// category footer
function generateCategoriesFooter(activeCategoryIdF){
    const fnav = document.querySelector('.footer-nav');
    fnav.innerHTML =''
    for(let category of categories){
        let className = activeCategoryIdF === category.id ? 'header-link active' : 'header-link'
        const a = createElement('a', className, category.title, fnav);
        a.setAttribute('href', '#')
         a.addEventListener('click' , function(){
            generateCategoriesFooter(category.id);
            generateCategories(category.id);
            generateMoviesList(category.id);
        })
    }

}
// Panel movies
function generateMoviesList(activeCategoryId){
    const moviesList = document.querySelector('.movies-list')
    moviesList.innerHTML=''
    activePageTitle.innerHTML = ''
    let title = createElement('h1','section-title__title',activeCategoryId,activePageTitle);
    if(activeCategoryId === 1){
        title.innerHTML = 'Hammasi'
    }else if(activeCategoryId === 2){
        title.innerHTML = 'Kino'
    }else if(activeCategoryId === 3){
        title.innerHTML = 'Serial'
    }else if(activeCategoryId === 4){
        title.innerHTML = 'Multfilm';
    } 
    console.log(activeCategoryId);
    if(activeCategoryId===1){
        for(let movie of movies){
            let cart = createElement('div', 'movies-cart', '', moviesList);
            let movieImage = createElement('div', 'movies-cart-image', '', cart)
            createImage(movie.image, 'product image', movieImage);
            let cartContent = createElement('div', 'movies-cart__content', '', cart);
            let cartRow = createElement('div', 'movies-cart__row', '', cartContent);
            let cartLink = createElement('a', 'movies-cart__title', movie.title, cartRow);
            cartLink.setAttribute('href', '#');
            createElement('p', 'movies-cart__year',  movie.year, cartRow);
            createElement('p', 'movies-cart__subtitle', movie.subtitle, cartContent);
            let cartButton = createElement('button', 'movies-cart__button', 'Tomosha qilish', cartContent);
            // play video
            cartButton.addEventListener('click', function(){
                videoPlayer.classList.add('active-video');
                videoTitle.innerHTML = movie.title;
                video.innerHTML  = movie.video;
                console.log(movie.video);
                const moviesList = document.querySelector('.movies-list')
                moviesList.innerHTML=''
                activePageTitle.innerHTML = ''
            })
            }
    } else {
    let filteredMovies = movies.filter(item => item.category === activeCategoryId);
    for(let movies of filteredMovies){
    let cart = createElement('div', 'movies-cart', '', moviesList);
    let movieImage = createElement('div', 'movies-cart-image', '', cart)
    createImage(movies.image, 'product image', movieImage);
    let cartContent = createElement('div', 'movies-cart__content', '', cart);
    let cartRow = createElement('div', 'movies-cart__row', '', cartContent);
    let cartLink = createElement('a', 'movies-cart__title', movies.title, cartRow);
    cartLink.setAttribute('href', '#');
    createElement('p', 'movies-cart__year',  movies.year, cartRow);
    createElement('p', 'movies-cart__subtitle', movies.subtitle, cartContent);
    let cartButton = createElement('button', 'movies-cart__button', 'Tomosha qilish', cartContent);
    cartButton.setAttribute('id',movies.id);
    // play video 
    cartButton.addEventListener('click', function(){
        videoPlayer.classList.add('active-video');
        videoTitle.innerHTML = movies.title;
        video.innerHTML =  movies.video ;
        const moviesList = document.querySelector('.movies-list')
        moviesList.innerHTML=''
        activePageTitle.innerHTML = ''
    })
    }
 }
}

// search button
searchButton.addEventListener('click',function(){
    if(searchInput.classList.contains('active-search')){
        searchInput.classList.remove('active-search');
    }else{
        searchInput.classList.add('active-search');
    }
})
// menu button
buttonMenu.addEventListener('click',function(){
    if(modalMenu.classList.contains('active-modal')){
        modalMenu.classList.remove('active-modal');
        buttonMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #A5BBDC;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>'
    }else{
        modalMenu.classList.add('active-modal');
        buttonMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #A5BBDC"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>'
    }
})

// video player close
closeVideo.addEventListener('click',function(){
    videoPlayer.classList.remove('active-video');
    video.setAttribute('src','');
    generateMoviesList(1)
    generateCategories(1)
    generateCategoriesFooter(1)
})

generateMoviesList(1)
generateCategories(1)
generateCategoriesFooter(1)
