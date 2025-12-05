// Simple Borrow & Return simulation
function borrowBook(bookName) {
    alert(`You have borrowed "${bookName}" successfully!`);
}

function returnBook(bookName) {
    alert(`You have returned "${bookName}" successfully!`);
}

// Simple search functionality for books page
const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll('#books-table tbody tr');
        rows.forEach(row => {
            const title = row.cells[0].textContent.toLowerCase();
            const author = row.cells[1].textContent.toLowerCase();
            row.style.display = title.includes(filter) || author.includes(filter) ? '' : 'none';
        });
    });
}
