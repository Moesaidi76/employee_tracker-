const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllEmployees() {
    console.log("help");
    //join on 3 different tables, all employee info, role's salary(?), and manager
    return this.connection.query(
      "SELECT*FROM employee;"
    );
  }
  //view functions
  viewEmployees() {
    return this.connection.query("SELECT * FROM employee;");
  }

  viewRoles() {
    return this.connection.query("SELECT * FROM role;");
  }

  viewDepartments() {
    return this.connection.query("SELECT * FROM department;");
  }

  //add functions
  addEmployees(newperson) {
    return this.connection.query("INSERT INTO employee SET ?", newperson);
  }

  addRoles(newrole) {
    return this.connection.query("INSERT INTO role SET ?", newrole);
  }

  addDepartments(newdepartment) {
    return this.connection.query("INSERT INTO department SET ?", newdepartment);
  }



  // update functions

  updateEmployeesRole(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }

  updateEmployeesManager(employeeId, managerId) {
    return this.connection.query(
      "UPDATE employee SET manager_id = ? WHERE id = ?",
      [managerId, employeeId]
    );
  }

      updateRoles() {
        return this.connection.query("SELECT * FROM role;");
      }

      updateDepartments() {
        return this.connection.query("SELECT * FROM department;");
      }

      //remove functions
      deleteEmployees() {
        return this.connection.query("SELECT * FROM employee;");
      }

      deleteRoles() {
        return this.connection.query("SELECT * FROM role;");
      }

      deleteDepartments() {
        return this.connection.query("SELECT * FROM department;");
      }
}

module.exports = new DB(connection);