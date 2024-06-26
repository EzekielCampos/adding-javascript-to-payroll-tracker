// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  // Array that will hold all the objects 
let employeesArray = [];

  // This variable will be used to give the user an option in the while loop to add more employees
  let askUser = confirm("Would you like enter an employee?");
// This loop will continue until the user no longer wants to add an employee
  while (askUser){
    const addFirstName = prompt("Enter First Name");
    
    const addLastName = prompt("Enter Last Name");

    let addSalary = prompt("Enter your salary");

    // Checks to see if a number was inputted, if not default be set to zero
    if(isNaN(addSalary)){
      addSalary = 0;
    }
    // Object will hold a persons information to be placed into the array
  employeesArray.push({firstName:addFirstName, lastName:addLastName, salary:addSalary});
  
  askUser = confirm("Would you like to enter another employee?");

  }


return employeesArray;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {


  let totalSalary = 0;

  for(const employee of employeesArray){
  //  Converts salary from a string to a number to be calculated
    let num = parseInt(employee.salary);
    totalSalary += num;
  }

  const avgSalary= Math.round(totalSalary/employeesArray.length);

  return console.log(`Average salary between all employees is $${avgSalary}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // Will generate a random number within the range of the array length
  let index = Math.floor(Math.random() * employeesArray.length);
  // This variable will hold a random employee information by using the Math methods
  const randomEmployee = employeesArray[index];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
