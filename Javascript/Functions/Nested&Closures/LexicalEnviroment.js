function school(schoolName) {
  //LOCAL VARIABLE[FREE]
  let books = ["math", "english", "Science"];

  //NESTED FUNCTION WHICH MAKES USE OF OUTER VARIABLE
  function student(studentName) {
    console.log(
      "My name is ",
      studentName,
      "I have books",
      books,
      " given by school",
      schoolName
    );
  }
  return student;
}

//CALL SCHOOL
const kajal = school("Zeal College of Engineering");
kajal("Kajal"); //My name is  Kajal. I have books [ 'math', 'english', 'Science' ]  given by school Zeal College of Engineering

/**
 ** Lexical environment
 ** It stores the binding of identifier and variable(value). Lexical environment is created for every execution context which have its own environment reference and reference to global environment
 ** When we nest functions inside function, nested function has access to outer en through it's lexical environment which makes student to use school's variables even if it get returned
 ** All functions data get stored on heap section to make it available after it ends.
 ** Lexical environment pseudocode
 **     
                GlobalEn {
                        school {
                                environment: {
                                        schoolName: ""
                                        books: [ 'math', 'english', 'Science' ]
                                        student: <func>
                                }
                                outer: GlobalEn
                        }
                        student {
                            environment: {
                                       studentName:""
                                }
                                outer:school    
                        }

                }

 * ? Having reference to outer en through lexical is also called scope chain lookup 
 * And thats what makes closure to work. This is beauty of javascript
 * ? reference: https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/
 */
