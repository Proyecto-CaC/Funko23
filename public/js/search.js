document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');
    const items = document.querySelectorAll('.shop__item');
    const searchInput = searchForm.querySelector('input[name="buscar"]');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Muestra/oculta según el término de búsqueda
        items.forEach((item) => {
            const itemName = item.querySelector('.card-item__name').textContent.toLowerCase();
            const itemLicence = item.querySelector('.card-item__licence').textContent.toLowerCase();

            if (itemName.includes(searchTerm) || itemLicence.includes(searchTerm)) {
                item.style.display = 'block'; // Muestra elemento
            } else {
                item.style.display = 'none'; // Oculta elemento que no coincide
            }
        });
    });
});

// Busqueda de listado de productos
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.form__admin');
    const input = document.querySelector('.search__input');
    const tableRows = document.querySelectorAll('.listado_products tbody tr');

    input.addEventListener('input', function () {
        const searchTerm = input.value.toLowerCase();

        tableRows.forEach(function (row) {
            const id = row.querySelector('.id').textContent.toLowerCase();
            const sku = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            const productName = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
            const licence = row.querySelector('td:nth-child(4)').textContent.toLowerCase(); 
            const category = row.querySelector('td:nth-child(5)').textContent.toLowerCase();

            const match = id.includes(searchTerm) || sku.includes(searchTerm) || productName.includes(searchTerm) || licence.includes(searchTerm) || category.includes(searchTerm);

            if (match) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    });
});