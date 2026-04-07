// ── App state ──────────────────────────────────────────────────────────────
const ORGANIZADOR_PASS = 'cona2025';

let currentUnsub = null; // active Firestore listener

function navigate(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + screen);
  if (el) { el.classList.add('active'); window.scrollTo(0,0); }
}

// Password gate
function openPasswordGate() {
  document.getElementById('modal-password').classList.remove('hidden');
  document.getElementById('passwordInput').value = '';
  document.getElementById('passwordError').textContent = '';
  setTimeout(() => document.getElementById('passwordInput').focus(), 100);
}

function closePasswordModal() {
  document.getElementById('modal-password').classList.add('hidden');
}

function checkPassword() {
  const val = document.getElementById('passwordInput').value;
  if (val === ORGANIZADOR_PASS) {
    closePasswordModal();
    navigate('organizador');
  } else {
    const err = document.getElementById('passwordError');
    err.textContent = 'Contraseña incorrecta';
    document.getElementById('modal-password').querySelector('.modal-card').classList.add('shake');
    setTimeout(() => document.getElementById('modal-password').querySelector('.modal-card').classList.remove('shake'), 500);
  }
}

document.addEventListener('DOMContentLoaded', () => navigate('home'));
