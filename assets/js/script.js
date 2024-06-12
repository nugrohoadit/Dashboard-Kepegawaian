// Ambil semua tombol edit
var editButtons = document.querySelectorAll('.edit-button');

// Ambil form pop up
var modal = document.getElementById('edit-form');

// Ambil elemen-elemen input di dalam form pop up
var fullNameInput = document.getElementById('full-name');
var departmentInput = document.getElementById('department');
var phoneNumberInput = document.getElementById('phone-number');
var genderInput = document.getElementById('gender');

// Loop melalui setiap tombol edit
editButtons.forEach(function(button) {
  // Tambahkan event listener pada setiap tombol edit
  button.addEventListener('click', function() {
    // Ambil baris tabel terkait
    var row = button.closest('tr');

    // Isi form pop up dengan data dari baris tabel yang sesuai
    fullNameInput.value = row.cells[0].textContent;
    departmentInput.value = row.cells[1].textContent;
    phoneNumberInput.value = row.cells[2].textContent;
    genderInput.value = row.cells[3].textContent;

    // Tampilkan form pop up
    modal.style.display = 'block';
  });
});

// Tambahkan event listener pada tombol close
document.querySelector('.close').addEventListener('click', function() {
  modal.style.display = 'none';
});

// Tambahkan event listener pada saat form pop up disubmit
document.getElementById('edit-data-form').addEventListener('submit', function(event) {
  // Lakukan aksi pengeditan data di sini (misalnya, AJAX request)

  // Tutup form pop up
  modal.style.display = 'none';

  // Hindari form untuk melakukan submit ke halaman baru
  event.preventDefault();
});
