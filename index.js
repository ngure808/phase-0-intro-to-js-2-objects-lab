// Write your solution in this
const employee = {
    name : "Sam",
    streetAddress : "11 Brodway Street",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value}
}
updateEmployeeWithKeyAndValue(employee, "name", "Ryan")

function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee.streetAddress = "12 Broadway"
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue()

function deleteFromEmployeeByKey(employee, key){
    return {...employee, [key]: undefined}
}
deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}