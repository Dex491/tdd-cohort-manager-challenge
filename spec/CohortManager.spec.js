const CohortManager = require('./../src/CohortManager')
// const Student = require('./../src/Student')

describe('Cohort Manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('should create a named cohort', () => {
    const cohortName = 'cohort 1'

    const cohort = cohortManager.createCohort(cohortName)

    expect(cohort.name).toEqual(cohortName)
  })

  it('should throw an error if no name is given when a cohort is created', () => {
    expect(() => cohortManager.createCohort(null)).toThrowError(
      'No cohort name given'
    )
  })
})
