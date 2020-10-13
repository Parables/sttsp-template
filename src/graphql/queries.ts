export let ALL_BOOKS = `
      {
        allBooks {
          _id
          title
          cover
          author
          inStock
          createdAt
          updatedAt
        }
      }    `;

export let ALL_COURSES = `
{
  allCourses {
    _id
    title
    courseCode
    creditHours
    books {
      _id
    }
    lecturers {
      _id
    }
  }
}
    `;

export let ALL_PROGRAMMES = `
 {
  allProgrammes{
    _id
    title
    programmeCode
    startLevel
    endLevel
    certification
    details{
      level
      semesters{
        session
        courses{
          _id
        }          
        }
    }
  }
}
    `;

export let ALL_STUDENTS = `
      {
  allStudents{
    _id
    avartar
    academicYear
    applicationID
    examsNumber
      currentlevel
    programme{
     _id
    }
     surname
    otherNames
    dob
    gender
    contact{
      phoneNumbers
      emails
      addresses
    }
 
    booksGiven{
      level
      books{
        _id
      }
    }
  }
}
    `;

export let ALL_LECTURERS = `
      {
  allLecturers{
    _id
    avartar
    surname
    otherNames
    dob
    gender
    contact{
      phoneNumbers
      emails
      addresses
    }
  }
}
    `;