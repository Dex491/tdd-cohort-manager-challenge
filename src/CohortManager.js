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
}

module.exports = CohortManager
