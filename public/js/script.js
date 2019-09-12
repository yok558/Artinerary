const filterButtonPrice = document.getElementsByClassName('btn-filter-category');
const filterButtonCategory = document.getElementsByClassName('category');
console.log(filterButtonPrice);

function listenerButtonPrice() {
  for (let i = 0; i < filterButton.length; i++) {
    filterButton[i].addEventListener('click', async e => {
      e.preventDefault();
      let priceValue = e.target.value;
      return priceValue;
    });
  }
}

function listenerButtonCategory() {
  for (let i = 0; i < filterButton.length; i++) {
    filterButton[i].addEventListener('click', async e => {
      e.preventDefault();
      let priceValue = e.target.value;
      return priceValue;
    });
  }
}

listenerButton();
