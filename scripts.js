const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const toast = document.getElementById('toast');

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = input.value;
  if (inputValue === '') return;

  const novaLi = `
  <li class="items">
          <div class="checkbox">
            <div class="checkbox-false">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="15"
                  height="15"
                  rx="5.5"
                  fill="white"
                />
                <rect
                  x="1"
                  y="1"
                  width="15"
                  height="15"
                  rx="5.5"
                  stroke="#D1D5DB"
                />
              </svg>
            </div>
            <div class="checkbox-true">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="15"
                  height="15"
                  rx="5.5"
                  fill="#CA3884"
                />
                <rect
                  x="1"
                  y="1"
                  width="15"
                  height="15"
                  rx="5.5"
                  stroke="#CA3884"
                />
                <path
                  d="M5 9.5L6.75 11.25L12 5.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input type="checkbox" name="ok" id="ok" />
          </div>
          <span>${inputValue}</span>
          <button class="remove">
            <img src="./assets/icons/trash.svg" alt="" />
          </button>
        </li>`

  ul.insertAdjacentHTML('beforeend', novaLi);

  input.value = '';

})


ul.addEventListener('click', e => {
  if (e.target.closest('.remove')) {
    const item = e.target.closest('li');
    item.remove();
    toastMessage()
  }
});

toast.addEventListener('click', e => {
  if (e.target.closest('.remove')) {
    toast.classList.remove('show');
  }
});


function toastMessage() {
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}