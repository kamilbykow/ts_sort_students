/* eslint-disable max-len */

export interface Student {
  name: string,
  surname : string,
  age: number,
  married: boolean,
  grades: number[]
  // describe Student interface
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'averageGrade'
  // describe SortType enum
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder):Student[] {
  // write your function
  let sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents = sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case SortType.Surname:
      sortedStudents = sortedStudents.sort((a, b) => a.surname.localeCompare(b.surname));
      break;

    case SortType.Age:
      sortedStudents = sortedStudents.sort((a, b) => b.age - a.age);
      break;

    case SortType.Married:
      sortedStudents = sortedStudents.sort();
      break;

    case SortType.AverageGrade:
      sortedStudents = sortedStudents.sort((a, b) => (a.grades.reduce((x, y) => x + y) / a.grades.length) - (b.grades.reduce((x, y) => x + y) / b.grades.length));
      break;
    default:
      break;
  }

  switch (order) {
    case 'asc':
      switch (sortBy) {
        case SortType.Name:
          sortedStudents = sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
          break;

        case SortType.Surname:
          sortedStudents = sortedStudents.sort((a, b) => a.surname.localeCompare(b.surname));
          break;

        case SortType.Age:
          sortedStudents = sortedStudents.sort((a, b) => b.age - a.age);
          break;

        case SortType.Married:
          sortedStudents = sortedStudents.sort();
          break;

        case SortType.AverageGrade:
          sortedStudents = sortedStudents.sort((a, b) => (a.grades.reduce((x, y) => x + y) / a.grades.length) - (b.grades.reduce((x, y) => x + y) / b.grades.length));
          break;
        default:
          break;
      }
      break;

    case 'desc':
      switch (sortBy) {
        case SortType.Name:
          sortedStudents = sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
          break;

        case SortType.Surname:
          sortedStudents = sortedStudents.sort((a, b) => a.surname.localeCompare(b.surname));
          break;

        case SortType.Age:
          sortedStudents = sortedStudents.sort((a, b) => b.age - a.age);
          break;

        case SortType.Married:
          sortedStudents = sortedStudents.sort((a, b) => +b.married - +a.married);
          break;

        case SortType.AverageGrade:
          sortedStudents = sortedStudents.sort((a, b) => (b.grades.reduce((x, y) => x + y) / b.grades.length) - (a.grades.reduce((x, y) => x + y) / a.grades.length));
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  return sortedStudents;
}
