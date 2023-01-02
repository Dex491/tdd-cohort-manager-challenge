const Cohort = require('./Cohort')

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
}

module.exports = CohortManager
