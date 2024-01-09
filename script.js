document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const itemsContainer = document.getElementById('items');
  
    input.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        const inputValue = input.value.trim();
  
        if (inputValue !== '') {
          addItem(inputValue);
          input.value = ''; 
        }
      }
    });
  
    itemsContainer.addEventListener('click', function (event) {
      const clickedItem = event.target;
      if (clickedItem.tagName === 'LI') {
        toggleItem(clickedItem);
      }
    });
  
    function addItem(text) {
      const newItem = document.createElement('li');
      newItem.textContent = text;
      itemsContainer.appendChild(newItem);
    }
  
    function toggleItem(item) {
      item.classList.toggle('done');
    }
  });
  