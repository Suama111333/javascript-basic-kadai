const Btn = document.getElementById('btn');

const Text = document.getElementById('text');

Btn.addEventListener('click', () => {
   
    const Text2 = document.createElement('h2');
   
    Text.textContent = 'ボタンをクリックしました！';

    Text.appendChild(Text2);
});

