const envelope = document.querySelector('#envelope');
if (envelope) {
  envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    document.querySelector('#hint').textContent = 'la carta está lista';
    window.setTimeout(() => { window.location.href = 'carta.html'; }, 1050);
  });
}
