// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '12 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
      const newEmployee ={...employee};
    newEmployee[key] = value;
    return newEmployee;
}
 const newEmployee = updateEmployeeWithKeyAndValue(
    employee, 'streetAddress', '11 Broadway'
 );

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
 }
 const newEmployees = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 'streetAddress', '11 Broadway'
 );

function deleteFromEmployeeByKey(employee, key){
    const newEmployee ={...employee};
    delete newEmployee[key];
    return newEmployee
}
const obj = deleteFromEmployeeByKey(employee, 'name');

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key];
    return employee;
}
const newObj = destructivelyDeleteFromEmployeeByKey(employee,'name');