function loadItems() {
  return fetch('data/history.json')
  .then(response => response.json())
  .then(json => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.wrapper');
  // const html = items.map(item => createHTMLString(item)).join('');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
  
}

function createHTMLString(item) {
  return `
  <li><span class="year">${item.year}</span>
  <span class="content">
  ${item.contents}
  </span>
</li>
  `;
}

//main
loadItems() 
.then(items => {
  displayItems(items);
})
.catch(console.log);