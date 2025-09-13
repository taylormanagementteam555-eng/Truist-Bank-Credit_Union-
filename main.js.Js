// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // ===========================
  // Clickable cards on landing
  // ===========================
  const checkingCard = document.getElementById('checking');
  const savingsCard = document.getElementById('savings');
  const onlineCard = document.getElementById('online');
  const customerCard = document.getElementById('customer-service');

  if (checkingCard) checkingCard.addEventListener('click', () => window.location.href = 'dashboard.html');
  if (savingsCard) checkingCard.addEventListener('click', () => window.location.href = 'dashboard.html');
  if (onlineCard) onlineCard.addEventListener('click', () => window.location.href = 'dashboard.html');
  if (customerCard) customerCard.addEventListener('click', () => window.location.href = 'admin.html#customer-service');

  // ===========================
  // Dashboard welcome message
  // ===========================
  const welcomeMsg = document.getElementById('welcome-msg');
  if (welcomeMsg) welcomeMsg.textContent = 'Welcome to UNICO Bank PLC!';

  // ===========================
  // LocalStorage for balances
  // ===========================
  const checkingBalanceEl = document.getElementById('checking-balance');
  const savingsBalanceEl = document.getElementById('savings-balance');

  // Initialize balances if not already
  if (!localStorage.getItem('checkingBalance')) localStorage.setItem('checkingBalance', 1500);
  if (!localStorage.getItem('savingsBalance')) localStorage.setItem('savingsBalance', 5000);

  function updateBalances() {
    if (checkingBalanceEl) checkingBalanceEl.textContent = `$${localStorage.getItem('checkingBalance')}`;
    if (savingsBalanceEl) savingsBalanceEl.textContent = `$${localStorage.getItem('savingsBalance')}`;
  }

  updateBalances();

  // ===========================
  // Send Money Form
  // ===========================
  const sendForm = document.getElementById('send-money-form');
  if (sendForm) {
    sendForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let amount = parseFloat(document.getElementById('send-amount').value);
      let currentChecking = parseFloat(localStorage.getItem('checkingBalance'));

      if (amount > 0 && amount <= currentChecking) {
        localStorage.setItem('checkingBalance', currentChecking - amount);
        alert(`$${amount} sent successfully!`);
        updateBalances();
      } else {
        alert('Invalid amount or insufficient funds.');
      }
      sendForm.reset();
    });
  }

  // ===========================
  // Receive Money Form
  // ===========================
  const receiveForm = document.getElementById('receive-money-form');
  if (receiveForm) {
    receiveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let amount = parseFloat(document.getElementById('receive-amount').value);
      let currentChecking = parseFloat(localStorage.getItem('checkingBalance'));

      if (amount > 0) {
        localStorage.setItem('checkingBalance', currentChecking + amount);
        alert(`$${amount} received successfully!`);
        updateBalances();
      } else {
        alert('Invalid amount.');
      }
      receiveForm.reset();
    });
  }

});