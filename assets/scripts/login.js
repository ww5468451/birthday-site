function requestFullScreen() {
  const element = document.documentElement;
  const requestMethod =
    element.requestFullscreen ||
    element.webkitRequestFullscreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullscreen;

  if (requestMethod) {
    requestMethod.call(element);
    return;
  }

  if (typeof window.ActiveXObject !== 'undefined') {
    const wscript = new window.ActiveXObject('WScript.Shell');
    if (wscript !== null) {
      wscript.SendKeys('{F11}');
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const wrapper = document.querySelector('.wrapper');
  const userNameInput = document.getElementById('userName');
  const passwordInput = document.getElementById('pwd');

  form.addEventListener('submit', (event) => {
    const userName = userNameInput.value;
    const password = passwordInput.value;

    if (userName === '123' && password === '123') {
      event.preventDefault();
      jQuery(form).fadeOut(500);
      wrapper.classList.add('form-success');
      requestFullScreen();
      window.setTimeout(() => {
        window.location.href = 'birthday-cake.html';
      }, 2000);
      return;
    }

    event.preventDefault();
    window.alert('Wrong Password');
  });
});
