const Cohort = require('./Cohort')
const Student = require('./Student')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(cohortName) {
    if (!cohortName) throw new Error('No cohort name given')

    const cohort = new Cohort(cohortName)
    this.cohorts.push(cohort)
    return cohort
  }

  removeByName(cohortName) {
    let removed = false
    this.cohorts.forEach(() => {
      let i = 0
      if (this.cohorts[i].name === cohortName) {
        this.cohorts.splice(i, 1)
        removed = true
      }
      i++
    })
    return removed
  }

  getCohort(cohortName) {
    this.cohorts.forEach((cohort) => {
      if (cohort.name === cohortName) return cohort
    })
    return null
  }

  addStudentToCohort(cohortName, firstName, lastName, email, github) {
    const cohort = this.getCohort(cohortName)
    let student = null

    if (cohort) {
      this.previousId += 1
      student = new Student(this.previousId, firstName, lastName, email, github)
      if (!cohort.addStudent(student)) student = null
      else this.previousId -= 1
    }
    return student
  }
}

module.exports = CohortManager
