# Domain Model

| Objects | Properties | Function | Input | Scenario | Output |
| ------- | ---------- | -------- | ----- | -------- | ------ |
| CohortManager - class | cohorts [Cohort] | createCohort() | String: cohortName | Given input already exists | return null/throw error 'given name already exists, choose another'
||||| No input given | return null/throw error 'no name given'
||||| Given input doesn't already exist | Creates a new cohort with given input as name (in an array called cohorts?)
||| searchByName() | String: cohortName | Given input doesn't exist | return null/throw error 'given name cannot be found'
||||| No input given | return null/throw error 'no name given'
||||| Given input exists | return cohort (object?)
||| removeByName() | String: cohortName | Given input doesn't exist | return null/throw error 'given name cannot be found'
||||| No input given | return null/throw error 'no name given'
||||| Given input exists | remove identified cohort from array, then display cohorts after removing cohort
||| addStudentToCohort() | String: cohortName, student: Student | A given input doesn't exist | return null/throw error 'one of the given values cannot be found'
||||| No input given | return null/throw error 'no name/value given'
||||| Given inputs exist | Given student is added into the cohort (object?) within cohorts (array?)
||| removeStudentFromCohort() | String: cohortName, student: Student | A given input doesn't exist | return null/throw error 'one of the given values cannot be found'
||||| No input given | return null/throw error 'no name/value given'
||||| Given inputs exist | display student to be removed, then remove student from cohort in cohorts
Cohort - class | String: cohortName | getName() | N/A | Name has to exist (as a cohort cannot be made without a name) | return cohortName
||| getStudent() | String: id | Given input doesn't exist | return null/throw error 'given student id cannot be found'
||||| No input given | return null/throw error 'no student id given'
||||| Given student id is found | return Student
Student - class | Integer: id String: firstName String: lastName String: gitUser String: email
