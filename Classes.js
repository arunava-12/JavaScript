const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define Contact class
class Contact {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}

// Array to store address entries
const addressEntries = [];

// Function to add a new entry
function addEntry() {
  rl.question('Enter name: ', (name) => {
    rl.question('Enter phone number: ', (phoneNumber) => {
      const entry = new Contact(name, phoneNumber);
      addressEntries.push(entry);
      console.log('Entry added successfully!');
      showMenu();
    });
  });
}

// Function to view all entries
function viewEntries() {
  console.log('Address Directory:');
  addressEntries.forEach((entry) => {
    console.log(`${entry.name}: ${entry.phoneNumber}`);
  });
  showMenu();
}

// Function to show menu options
function showMenu() {
  console.log('\n1. Add new entry');
  console.log('2. View all entries');
  console.log('3. Exit');

  rl.question('Choose an option (1-3): ', (choice) => {
    switch (choice) {
      case '1':
        addEntry();
        break;
      case '2':
        viewEntries();
        break;
      case '3':
        console.log('Exiting...');
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please choose again.');
        showMenu();
        break;
    }
  });
}

// Start the program
console.log('Welcome to the Address Directory!');
showMenu();
