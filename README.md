# Simple CRUD Application

A basic CRUD (Create, Read, Update, Delete) application built using HTML, CSS, and JavaScript with localStorage for data persistence.

## Features

- **Create**: Add new data entries with name and age
- **Read**: View all stored data in a table format
- **Update**: Edit existing data entries
- **Delete**: Remove data entries
- **Data Persistence**: Uses browser's localStorage to save data between sessions

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- localStorage API

## How to Use

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Use the form to:
   - Add new data: Enter name and age, then click "Add Data"
   - Edit data: Click the "Edit" button next to the entry you want to modify
   - Delete data: Click the "Delete" button next to the entry you want to remove

## File Structure

project-folder/
│
├── index.html        # Main HTML file
├── style.css         # CSS styles
└── script.js         # JavaScript functionality

## LocalStorage Details

- Data is stored in the browser's localStorage under the key 'crudData'
- Data persists even after closing the browser
- Data is stored in JSON format

## Future Improvements

- Add data validation
- Implement search/filter functionality
- Add confirmation dialogs for delete operations
- Improve UI/UX design
- Add error handling

## License

This project is open-source and available under the MIT License.
