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

  it('should remove a named cohort', () => {
    const cohortName = 'cohort 1'
    cohortManager.createCohort(cohortName)

    const result = cohortManager.removeByName(cohortName)

    expect(cohortManager.cohorts.length).toEqual(0)
    expect(result).toBe(true)
  })

  it('should add a student to an existing cohort', () => {
    const cohortName = 'cohort 1'
    const cohort = cohortManager.createCohort(cohortName)

    const student = cohortManager.addStudentToCohort(
      cohortName,
      'Dave',
      'Revell',
      'DaveRevell@example.com',
      'Dex491'
    )

    expect(student).not.toBeNull()
    expect(student.firstName).toEqual('Dave')
    expect(student.lastName).toEqual('Revell')

    expect(cohort.students.length).toBe(1)
    expect(cohort.students.toEqual([student]))
  })
})
