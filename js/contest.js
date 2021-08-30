const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const container = document.querySelector('.container');
let item = [];
let index = 0;
let touchStartX = 0;
let touchEndX = 0;

//main
loadItems()
.then(items => {
  displayItems(items);
  createHTMLString(index);
})
.catch(console.log);

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


// functions

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
    index = item.length;
  }
  index--;
  // console.log(index);
  createHTMLString(index);
}

function nextImage() {
  index++;
  if(index === item.length){
    index = 0;
  }
  // console.log(index);
  createHTMLString(index);
}

function loadItems(){
  return fetch('data/prize.json')
  .then(response => response.json())
  .then(json => json.Maria);
}

function displayItems(items){
  
  item = items.map(item => item);
  // console.log(item[1].Nave);
}

function createHTMLString(index) {
  const container = document.querySelector('.container');
  container.innerHTML = 
  ` <div class="title">
        <div class="prize">${item[index].Prize}</div>
        <div class="name">${item[index].Nave}</div>
      </div>
      <div class="contest-image"><img src="${item[index].url}" alt="김마리아일대기" width="95%"></div>
  `;
}