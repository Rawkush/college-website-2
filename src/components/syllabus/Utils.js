export const filterSyllabus = (syllabus, sem, { sub }) =>
  syllabus.filter((item) => item.semester === sem && item.branch === sub);
export const periodFilter = (syllabus, { period }) =>
  syllabus.filter((item) => item.period === period);
