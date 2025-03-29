let data = JSON.parse(localStorage.getItem('crudData')) || [];
let currentEditIndex = null;

const form = document.getElementById('dataForm');
const tableBody = document.querySelector('#dataTable tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    if (currentEditIndex !== null) {
        // Edit existing data
        data[currentEditIndex] = { name, age };
        currentEditIndex = null;
    } else {
        // Add new data
        data.push({ name, age });
    }
    
    // Save to localStorage
    localStorage.setItem('crudData', JSON.stringify(data));
    
    form.reset();
    renderTable();
});

function renderTable() {
    tableBody.innerHTML = '';
    
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td class="actions">
                <button class="edit-btn" onclick="editData(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteData(${index})">Delete</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

function editData(index) {
    const item = data[index];
    document.getElementById('name').value = item.name;
    document.getElementById('age').value = item.age;
    currentEditIndex = index;
}

function deleteData(index) {
    data.splice(index, 1);
    // Update localStorage after deleting data
    localStorage.setItem('crudData', JSON.stringify(data));
    renderTable();
}

// Render table when the page first loads
renderTable();

// Theme management
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Save theme preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Apply saved theme on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Call applySavedTheme when the page loads
applySavedTheme();
