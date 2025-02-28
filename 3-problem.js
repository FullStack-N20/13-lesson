class University {
    constructor(name) {
        this.name = name;
        this.dept = [];
    }

    createDept(deptName) {
        this.dept.push(deptName);
    }

    deleteDept(deptName) {
        this.dept = this.dept.filter(dept => dept !== deptName);
    }

    getAllDept() {
        return this.dept;
    }
}

const university = new University('TA TU');

university.createDept('CSE');
university.createDept('EEE');
university.createDept('BBA');
university.createDept('MBA');
university.createDept('LLB');

university.deleteDept('MBA');
university.deleteDept('LLB');

console.log(university.getAllDept());