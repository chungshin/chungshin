
let array = []; //IndependenceMenu.json에 있는 데이터를 배열로 가져올예정
let array2 = []; //IndependenceMenu.json에 있는 데이터를 배열로 가져올예정
const button = document.querySelector('.thumbnails')
const grad = document.querySelector('.graduate')


button.addEventListener('click', (e)=>{
  const key = e.target.dataset.index;
  const IndeName = array[key].name;
  console.log("id",key,IndeName);
  localStorage.setItem("id",key);
  localStorage.setItem("IndeName",IndeName);
  // window.open("IndependenceContent.html","_blank")

  if (typeof (window.open) == "function")
  { window.open("IndependenceContent.html"); 
  } else { window.location.href = "IndependenceContent.html";
  }

});

//functions
function loadthumbnails() {
  return fetch('data/IndependenceMenu.json')
  .then(response => response.json())
  // .then(json => json.thumbnails);
  .then(function(json) {
    array = json.thumbnails;//json에서 가져온 데이터를 배열에 넣기
    return json.thumbnails;
  })
}

function loadGraduates() {
  return fetch('data/IndependenceMenu.json')
  .then(response => response.json())
  .then(function(json) {
    array2 = json.items;//json에서 가져온 데이터를 배열에 넣기
    return json.items;
  })
}

function displaythumbnails(thumbnails) {
  const container = document.querySelector('.thumbnails');
  container.innerHTML = thumbnails.map(thumbnail => createHTMLString(thumbnail)).join('');
}

function displayGraduates(graduates) {
  const graduateList = document.querySelector('.graduate__list');
  grad.innerHTML = graduates.map(graduate => createGraduateList(graduate)).join('');
}

function createHTMLString(thumbnail) {
  return `
  <li class="thumbnail">
    <img src="${thumbnail.url}">
    <p>${thumbnail.name}</p>
    <div class="TransparentButton" data-index="${thumbnail.id}"></div>
    </li>
    `;
    // data-index를 부여함으로써, 몇번째 버튼인지 알 수 있다.
  }

function createGraduateList(graduate) {
  // const nameList = graduate.명단.split(',');
  // const nameListItem = document.querySelector('.graduate__content');
  // let ul = document.createElement('ul');
  // ul.classList.add = "graduate__content"
  // for( let i=0; i<nameList.length; i++){
  //   let li = document.createElement('li');
  //   li.innerHTML = `${nameList[i]}`;
  //   ul.append(li);
  // }

  // nameListItem.innerHTML = nameList.map(item=>`<li>${item}</li>`).join();
  // const ull = nameListItem
  // console.log(ul);
  return `
  <li class="graduate__list">
  <div class="graduate__title">${graduate.졸업기수}</div>
  <div class="graduate__content">${graduate.명단}</div>
  </li>
  `
  }
  // <div class="graduate__content">${graduate.명단}</div>
    
  

//main
loadthumbnails()
.then(thumbnails => {
  displaythumbnails(thumbnails);
})
.catch(console.log);

// 졸업기수별 독립운동가
// loadGraduates()
// .then(graduates => {
//   displayGraduates(graduates);
//   console.log(graduates)
// })
// .catch(console.log);
