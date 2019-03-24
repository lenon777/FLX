const one = 1;
const two = 2;
const oneThousand = 1000;

function Company(company) {

    this.name = company.name;
    this.owner = company.owner;
    this.maxCompanySize = company.maxCompanySize;

    let _employeeList = [];
    let _employeeSalary = [];

    function getCurrentDate() {
        return new Date();
    }

    let _logs = `${this.name} was created in ` + getCurrentDate() + '\n';

    this.addNewEmployee = function (employee) {
        if (employee instanceof Employee) {
            if (employee.currentCompany === null) {
                employee.hire(this);
                if (_employeeList.length === this.maxCompanySize) {
                    let minSalary = Math.min.apply(null, _employeeSalary);
                    let minSalaryIndex = _employeeSalary.indexOf(minSalary);
                    _logs += `${_employeeList[minSalaryIndex].name} ` +
                        `ends working at ${this.name} in ` + getCurrentDate() + '\n';
                    _employeeList[minSalaryIndex].fire();
                    _employeeSalary.splice(minSalaryIndex, one);
                    _employeeList.splice(minSalaryIndex, one);
                    _employeeList.push(employee);
                    _employeeSalary.push(employee.salary);
                } else {
                    _employeeList.push(employee);
                    _employeeSalary.push(employee.salary);
                }

                _logs += `${employee.name} starts working at ${this.name} in ` + getCurrentDate() + '\n';
            } else {
                console.log(`${employee.name} is a worker of another company`);
            }
        } else {
            console.log('Please try to add Employee instance');
        }
    };
    this.removeEmployee = function (index) {
        if (_employeeList[index]) {
            _employeeList[index].fire();
            _logs += `${_employeeList[index].name} ends working at ${this.name} in ` + getCurrentDate() + '\n';
            _employeeList.splice(index, one);
            _employeeSalary.splice(index, one);
        } else {
            console.log('You passed incorrect data');
        }
    };
    this.getAvarageSalary = function () {
        let avarageSalary = 0;
        _employeeList.forEach((e) => {
            avarageSalary += e.salary;
        });
        return +(avarageSalary / _employeeList.length).toFixed(two);
    };
    this.getEmployees = function () {
        return _employeeList;
    };
    this.getFormattedListOfEmployees = function () {
        let formatedEmployeeList = '';
        for (let i = 0; i < _employeeList.length; i++) {
            formatedEmployeeList += `${_employeeList[i].name} -  works in ${this.name}` + ' ' +
                _employeeList[i].getWorkTimeInSeconds() + ' seconds \n';
        }

        return formatedEmployeeList;
    };
    this.getAvarageAge = function () {
        let avarageAge = 0;
        _employeeList.forEach((e) => {
            avarageAge += e.age
        });

        return +(avarageAge / _employeeList.length).toFixed(two);
    };
    this.getHistory = function () {
        return _logs;
    };
}


function Employee(employee) {
    this.name = employee.name;
    this.primarySkill = employee.primarySkill;
    this.age = employee.age;
    this.salary = employee.salary;
    this.currentCompany = null;

    let _startJob;
    let _logs = '';

    function getCurrentDate() {
        return new Date();
    }

    this.getSalary = function () {
        return this.salary;
    };

    this.setSalary = function (newSalary) {
        if (this.salary < newSalary) {
            _logs += `${this.name} change salary from ${this.salary} to ${newSalary} \n`;
            this.salary = newSalary;
        } else {
            _logs += `${this.name} try to change salary ${this.salary} to ${newSalary} \n`;
        }

    };

    this.getWorkTimeInSeconds = function () {
        if (this.currentCompany === null) {
            console.log('You dont have a job at the moment')
        } else {
            return (getCurrentDate().getTime() - _startJob.getTime()) / oneThousand;
        }
    };

    this.hire = function (company) {
        if (this.currentCompany === null) {
            this.currentCompany = company.name;
            _startJob = getCurrentDate();
            _logs += `${this.name} is hired to ${this.currentCompany} in ` + getCurrentDate() + '\n';
        } else {
            console.log(`${this.name} works in ${this.currentCompany}`)
        }
    };

    this.fire = function () {
        _logs += `${this.name} is fired from ${this.currentCompany} in ` + getCurrentDate() + '\n';
        this.currentCompany = null;
    };

    this.getHistory = function () {
        return _logs;
    };
}


// let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: 'UX'});
// let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
// let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
// let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
// let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
// let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});
//
//
//
// let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
// epam.addNewEmployee(artem);
// epam.addNewEmployee(vova);
// epam.addNewEmployee(vasyl);
// epam.addNewEmployee(ivan);
// epam.addNewEmployee(orest);
// epam.addNewEmployee(anton);
//
// console.log(epam.getHistory());
//
// epam.removeEmployee(2);
// console.log(vasyl.getHistory());
//
//
//
// console.log(epam.getAvarageSalary()); // -> 2125
// console.log(epam.getAvarageAge());  // -> 21.25
//
// epam.addNewEmployee(5, 6, 9, 5); // -> Please try to add Employee instance
//
// setTimeout(() => {
//     epam.removeEmployee(1);
//     console.log(artem.getWorkTimeInSeconds()); // -> 5.5744444444444445
// }, 5000);
//
// vova.setSalary(900);
// vova.setSalary(2200);
// console.log(vova.getHistory());



