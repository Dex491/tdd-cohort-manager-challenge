const Cohort = require('./Cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(cohortName) {
    const cohort = new Cohort(cohortName)
    this.cohorts.push(cohort)
    return cohort
  }
}

module.exports = CohortManager
