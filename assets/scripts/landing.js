const entryNameInput = document.getElementById('entry_name');
const entryPasswordInput = document.getElementById('entry_password');
const entryButton = document.getElementById('entry_btn');

function handleEntry() {
  const userName = entryNameInput.value;
  const password = entryPasswordInput.value;

  if (userName === 'wyq' && password === '') {
    window.alert('think about the one you love .');
    return;
  }

  if (userName === 'wyq' && password === 'woaixws') {
    window.location.href = 'pages/birthday-cake-surprise.html';
    return;
  }

  window.alert('emm,no,have another try iris.');
}

window.addEventListener('DOMContentLoaded', () => {
  jQuery(() => {
    Victor('container', 'output');
    entryNameInput.focus();
  });

  entryButton.addEventListener('click', handleEntry);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleEntry();
    }
  });
});
