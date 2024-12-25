const categories = document.querySelectorAll('#categories .item');
console.log(`у списку ${categories.length} категорії.`);
categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemCount = category.querySelectorAll('ul li').length;
  console.log(`категорія: ${title}`);
  console.log(`кількість елементів: ${itemCount}`);
});


const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];
const ingredientsList = document.getElementById('ingredients');
const items = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li
});
ingredientsList.append(...items);


const images = [
    {
      url:
        'https://3dnews.ru/assets/external/illustrations/2024/10/18/1112705/Silent_Hill_2_2024_screenshot_onpage_2.jpg',
      alt: 'img1',
    },
    {
      url:
        'https://mezha.media/wp-content/uploads/2024/10/Silent-Hill-History-00-900x600.jpg',
      alt: 'img2',
    },
    {
      url:
        'https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/13f75b0da6b9c25ba572dab41bda8ca8.jpg',
      alt: 'img3',
    },
  ];
  
  const gallery = document.querySelector('#gallery');
  
  const markup = images
    .map(
      ({ url, alt }) =>
        `<li class="gallery-item">
           <img src="${url}" alt="${alt}" class="gallery-image">
         </li>`
    )
    .join(''); 
  gallery.insertAdjacentHTML('beforeend', markup);
  gallery.classList.add('gallery');
  

  let counterValue = 0;
  const valueEl = document.getElementById('value');
  const incrementBtn = document.querySelector('[data-action="increment"]');
  const decrementBtn = document.querySelector('[data-action="decrement"]');

  const increment = () => {
    counterValue += 1;
    updateValue();

  }
  const decrement = () => {
    counterValue -= 1;
    updateValue(); 
  };
  const updateValue = () => {
    valueEl.textContent = counterValue;
  }
  incrementBtn.addEventListener('click', increment);
  decrementBtn.addEventListener('click', decrement)