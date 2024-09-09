// mobile nav 
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

// video player palist

const vidItem = document.querySelector('.play-item');

function playlistItem(n) {
  const vidPlayer = document.getElementById("vid-item");
  let source = document.querySelector(`.vid-playlist .play-item:nth-child(${n}) img`).getAttribute("value");
  vidPlayer.setAttribute('src', `https://www.youtube.com/embed/${source}?si=YNLlJAN28EnkS1aE` );

}

const leftArrBtn = document.querySelector('.fa-angle-left');
const rightArrBtn = document.querySelector('.fa-angle-right');
const upArrBtn = document.querySelector('.fa-angle-up');
const downArrBtn = document.querySelector('.fa-angle-down');
const playlistScrollDiv = document.querySelector('.vid-playlist');


  // scroll video playlist
leftArrBtn.addEventListener('click', ()=>{
  sideScroll(playlistScrollDiv,'left',10,600,20);
})
rightArrBtn.addEventListener('click', ()=>{ 
  sideScroll(playlistScrollDiv,'right',10,600,20);
})
// upArrBtn.addEventListener('click', ()=>{ 
//   vertScroll(playlistScrollDiv,'up',10,600,20);
// })
// downArrBtn.addEventListener('click', ()=>{ 
//   vertScroll(playlistScrollDiv,'down',10,600,20);
// })


function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
function vertScroll(element,direction,speed,distance,step){
  scrollAmount = 0;
  var slideTimer = setInterval(function(){
      if(direction == 'up'){
          element.scrollTop -= step;
      } else {
          element.scrollTop += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
          window.clearInterval(slideTimer);
      }
  }, speed);
}

// view more btn blogs


function showMoreBlogs() {
  const viewMoreBlog = document.querySelectorAll('.hidden-blogs');
  for (let i = 0; i < viewMoreBlog.length; i++) {
    viewMoreBlog[i].style.display = 'block';
  }
  const viewMoreBtn = document.querySelector('.btn-view-more');
  viewMoreBtn.style.display = 'none';
}
