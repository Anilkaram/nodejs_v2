// Example: Add a toast notification
document.addEventListener('DOMContentLoaded', () => {
  const toastEl = document.createElement('div');
  toastEl.className = 'toast align-items-center text-white bg-success position-fixed bottom-0 end-0 m-3';
  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        Dashboard loaded successfully!
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>
  `;
  document.body.appendChild(toastEl);
  new bootstrap.Toast(toastEl).show();
});