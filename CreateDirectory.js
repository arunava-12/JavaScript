const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Address directory object to store data
const addressDirectory = {};

// Function to add a new entry
function addEntry() {
  rl.question('Enter name: ', (name) => {
    rl.question('Enter phone number: ', (phoneNumber) => {
      addressDirectory[name] = phoneNumber;
      console.log('Entry added successfully!');
      showMenu();
    });
  });
}

// Function to view all entries
function viewEntries() {
  console.log('Address Directory:');
  for (const [name, phoneNumber] of Object.entries(addressDirectory)) {
    console.log(`${name}: ${phoneNumber}`);
  }
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
