const readline = require('readline');

(() => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  class Contact {
    constructor(name, phoneNumber) {
      this.name = name;
      this.phoneNumber = phoneNumber;
    }
  }

  const addressEntries = [];

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

  function viewEntries(...properties) {
    console.log('Address Directory:');
    addressEntries.forEach((entry) => {
      if (properties.length === 0) {
        console.log(`${entry.name}: ${entry.phoneNumber}`);
      } else {
        const filteredProperties = Object.keys(entry)
          .filter((key) => properties.includes(key))
          .map((key) => `${key}: ${entry[key]}`);
        console.log(filteredProperties.join(', '));
      }
    });
    showMenu();
  }

  function showMenu() {
    console.log('\n1. Add new entry');
    console.log('2. View all entries');
    console.log('3. View all entries with specific properties');
    console.log('4. Exit');

    rl.question('Choose an option (1-4): ', (choice) => {
      switch (choice) {
        case '1':
          addEntry();
          break;
        case '2':
          viewEntries();
          break;
        case '3':
          rl.question('Enter properties to view (comma-separated): ', (input) => {
            const properties = input.split(',').map((prop) => prop.trim());
            viewEntries(...properties);
          });
          break;
        case '4':
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

  console.log('Welcome to the Address Directory!');
  showMenu();
})();
