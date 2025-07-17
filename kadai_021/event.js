const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  console.log('ボタンがクリックされました');

  setTimeout(() => {
    text.textContent = 'ボタンがクリックされました';
    console.log('ボタンがクリックされました');
  }, 2000); 
});