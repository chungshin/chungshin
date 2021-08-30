
let selectedTab = document.querySelector('.tab-link.current');
let selectedContent = document.querySelector(`#${selectedTab.dataset.tab}`);
const tab = document.querySelector('.tabs');


tab.addEventListener('click',(e)=>{
  let thisTab = e.target;
  // tab-link 클래스가 있는 tab을 눌렀을 때만 실행. 그 외에는 종료처리
  if(!thisTab.classList.contains("tab-link")){
    return;
  }
  // 기존의 선택된 탭의 current 클래스 해제
  selectedTab.classList.remove('current');
  selectedContent.classList.remove('current');

  // 현재 선택된 탭의 current 클래스 추가
  thisTab.classList.add('current');
  let thisContent = document.querySelector(`#${thisTab.dataset.tab}`);
  thisContent.classList.add('current');
  selectedTab = thisTab;
  selectedContent = thisContent;
});

