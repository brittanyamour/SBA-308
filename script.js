// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript",
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50,
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150,
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500,
      },
    ],
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47,
      },
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150,
      },
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400,
      },
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39,
      },
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140,
      },
    },
  ];
  
  // function getLearnerData(course, assignmentGroup, submissions) {
  //   const results = [];
  
    // const example_result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0, // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833, // late: (140 - 15) / 150
    //   },
    // ];
    //   return results;
    // }
  
    // Parse submission data.
    // console.log(`Submission Data:`, submissions );
    // Check to see if the submission was late; if so, deduct 10% of the maximum possible points.
    // Find existing data for this learner, if any.
    // If the learner already has data, add the new score to the existing data.
    // Calculate the average score for each learner and remove the extra data.

  //   {
  //     // the ID of the learner for which this data has been collected
  //     "id": number,
  //     // the learner’s total, weighted average, in which assignments
  //     // with more points_possible should be counted for more
  //     // e.g. a learner with 50/100 on one assignment and 190/200 on another
  //     // would have a weighted average score of 240/300 = 80%.
  //     "avg": number,
  //     // each assignment should have a key with its ID,
  //     // and the value associated with it should be the percentage that
  //     // the learner scored on the assignment (submission.score / points_possible)
  //     <assignment_id>: number,
  //     // if an assignment is not yet due, it should not be included in either
  //     // the average or the keyed dictionary of scores
  // }
  
  
  
  //==== PUT CODE HERE =====//

 
 
  // ============ Learners ============
  // student 125 and student 132    
  
  for (let i = 0; i < LearnerSubmissions.length; i++) {
      let student = LearnerSubmissions[i];
    //   const student0 = student.learner_id[125];
    //   const student1 = student.learner_id[132]
    //   console.log(`${student.learner_id} assigment ${student.assignment_id} avg ${student.submission.score} 1: ${student.submission.score} 2: `)
      console.log(student)
    }
    
// ============ Learner Data ============    
function getLearnerData(course, ag, submissions) {
    if (AssignmentGroup.course_id != CourseInfo.id) {
        throw new Error('Does not match Course ID')
    }
    const result = []
}
    
//Check if the assignment is due
//compare today's date with due date and date turned in??
/*
if turned in date is <= due date 
break;
else - 10%
 */

// ============= Assignment grade ============
// ag[] / point_possible[]

if (AssignmentGroup.assignments.id == LearnerSubmissions.assignment_id) {
    console.log(`score (${student.submission.score} / ${AssignmentGroup.assignment.points_possible})`);
}
else {

    }
// console.log()


//     if (LearnerSubmissions.learner_id == 125) {
//         console.log((LearnerSubmissions.submission.score) / AssignmentGroup.assignments[0].points_possible)
//     }

//     function getGrade(points, maxPoints) {
//         const j = 0
//         const points = LearnerSubmissions[j].submission.score;
//         const maxPoints = AssignmentGroup[j].assignments.points_possible;
//         const ag = (points / maxPoints)
//         // const j = 0;
//         // (LearnerSubmissions[0].submission.score) / AssignmentGroup.assignments[0].points_possible
//         return (ag);
//         j++
// }
// console.log()

// ============= Weighted Avg ============
// ag1  + ag2 / maxGrade1 + maxGrade2

