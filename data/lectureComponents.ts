import { ILectureComponent } from "types/lecture-component";

const lectureComponents: ILectureComponent[] = [
  {
    title: "Introduction to Data Analytics",
    slug: "intro-to-analytics",
    multipleChoiceIds: [2, 3, 4],
    pythonChallengeIds: [],
  },
  {
    title: "Introduction to Python",
    slug: "intro-to-python",
    multipleChoiceIds: [5, 6, 7],
    pythonChallengeIds: [1],
  },
  {
    title: "Data Types and Variables",
    slug: "data-types-and-variables",
    multipleChoiceIds: [8, 9, 11, 13, 14, 15, 16, 17],
    pythonChallengeIds: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    title: "Conditionals",
    slug: "conditionals",
    multipleChoiceIds: [18, 19, 20],
    pythonChallengeIds: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
  },
  {
    title: "Collections",
    slug: "collections",
    multipleChoiceIds: [21, 22, 23, 25, 26],
    pythonChallengeIds: [
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    ],
  },
  {
    title: "Loops",
    slug: "loops",
    multipleChoiceIds: [],
    pythonChallengeIds: [39, 40, 41, 42, 43],
  },
  {
    title: "Functions",
    slug: "functions",
    multipleChoiceIds: [28],
    pythonChallengeIds: [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
  },
];

export default lectureComponents;
