const container = document.querySelector('.wrapper');
const header = document.querySelector('.header--title')
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let touchStartX = 0;
let touchEndX = 0;
let index = 0;
let id;
let array = []; //IndependenceContent.json에 있는 데이터를 배열로 가져올예정

if(localStorage.getItem('id')){
  id = localStorage.getItem('id');
  let IndeName = localStorage.getItem('IndeName');
  console.log(id,IndeName);
  header.textContent = IndeName;
}


container.addEventListener('click', (e)=>{
  console.log(e.target.dataset.index);
});


// 좌측 화살표 눌렀을 때 이전 이미지 보이기
next.addEventListener('click',()=>{
  nextImage();
})

// 우측 화살표 눌렀을 때 다음 이미지 보이기
prev.addEventListener('click',()=>{
  prevImage();
})

container.addEventListener('touchstart',(e)=>{
  touchStartX = e.changedTouches[0].pageX;
});

container.addEventListener('touchend',(e)=>{
  touchEndX = e.changedTouches[0].pageX;
  moveImage();
});


//functions
function loaditems() {
  return fetch('data/IndependenceContent.json')
  .then(response => response.json())
  .then(function(json) {
    array = json.items
        .filter(item => item.id == id) //전역정보로 넘긴 id에 해당하는 인물만 추려서;//json에서 가져온 데이터를 배열에 넣기
    return json.items;
  })
}

function displayitems(items) {
  // const container = document.querySelector('.wrapper');
  // container.innerHTML = items
  //   .filter(item => item.id == id) //전역정보로 넘긴 id에 해당하는 인물만 추려서
  //   .map(item => createHTMLString(item))
  //   .join(''); //배열로 합치기
  // console.log(array[1]);
  container.innerHTML = createHTMLString(array[0]);
}

function createHTMLString(index) {
  // return `
  if(array.length == 1){

    container.innerHTML = `
    <div class="item">
      <img src="${array[index].url}" data-index="${array[index].serial}">
    </div>
      `;
    }
    else {
    container.innerHTML = `
    <div class="item">
      <img src="${array[index].url}" data-index="${array[index].serial}">
      <div class="progress">${array[index].serial+1}</div>
    </div>
      `;
  }
    // data-index를 부여함으로써, 몇번째 버튼인지 알 수 있다.
  }


  function moveImage(){
    let gap = touchEndX - touchStartX;
    if (gap > 30){ //터치가 좌에서 우측으로
      prevImage();
    }else if (gap < -30){ //터치가 우에서 좌측으로
      nextImage();
    }
  }
  
  function prevImage() {
    if(index === 0){
      index = array.length;
    }
    index--;
    // console.log(index);
    createHTMLString(index);
  }
  
  function nextImage() {
    index++;
    if(index === array.length){
      index = 0;
    }
    // console.log(index);
    createHTMLString(index);
  }
  

//main
loaditems()
.then(items => {
  // displayitems(items);
  createHTMLString(0);
  //독립운동가 사진이 한개일 경우 좌우 화살표 숨김
  if(array.length == 1){
    prev.style.display = 'none';
    next.style.display = 'none';
  }
})
.catch(console.log);
