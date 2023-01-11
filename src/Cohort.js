class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  addStudent(student) {
    if (!student) {
      this.students.push(student)
      return true
    }
    return false
  }
}

module.exports = Cohort
