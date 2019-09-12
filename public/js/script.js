const filterButtonPrice = document.getElementsByClassName('price');
const filterButtonCategory = document.getElementsByClassName('category');

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
