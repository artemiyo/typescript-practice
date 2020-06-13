// Protected & Private & Readonly

class Department {
  constructor(
    private readonly name: string,
    private employess: string[] = []
  ) {}

  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employess.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employess.length);
    console.log(this.employess);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();
accounting.printEmployeeInformation();
