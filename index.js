const container = document.querySelector('.container');
const button = document.querySelector('#submit');
const okbtn = document.querySelector('#ok');
const inputs = document.querySelectorAll('input');

button.addEventListener('click', () => {
  let allFilled = true;

  inputs.forEach(input => {
    if (input.value === '') {
      allFilled = false;
    }
  });

  if (allFilled) {
    container.classList.add('active'); // Add the class to trigger the transition
  } else {
    alert('Please fill all information');
  }
});

okbtn.addEventListener('click', () => {
  container.classList.remove('active');
});
