import { getAuthorByID } from "./authors.service";

const courses = [
  {
    courseId: 1,
    name: "Angular",
    category: "web, REST",
    description:
      "Angular is a platform that makes it easy to build applications with the web.",
    isTopRated: true,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 190,
    rating: 4.0,
    students: 2300,
    previewVideoUrl: "https://www.youtube.com/watch?v=W-3s5_fhFNE",
    author: 1,
  },
  {
    courseId: 2,
    name: "React",
    category: "web, REST",
    description: "React is a JavaScript library for building user interfaces.",
    isTopRated: true,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 222,
    rating: 4.5,
    students: 3000,
    previewVideoUrl: "https://www.youtube.com/watch?v=N3AkSS5hXMA",
    author: 2,
  },
  {
    courseId: 3,
    name: "Vue",
    category: "web, REST",
    description:
      "Vue.js is a progressive framework for building user interfaces.",
    isTopRated: true,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 300,
    rating: 5.0,
    students: 2000,
    previewVideoUrl: "https://www.youtube.com/watch?v=W-3s5_fhFNE",
    author: 1,
  },
  {
    courseId: 4,
    name: "Nextjs",
    category: "web, REST",
    description: "Next.js is a framework for building modern web applications.",
    isTopRated: true,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 444,
    rating: 1.0,
    students: 1000,
    previewVideoUrl: "https://www.youtube.com/watch?v=W-3s5_fhFNE",
    author: 4,
  },
  {
    courseId: 5,
    name: "Express",
    category: "web, REST",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    isTopRated: true,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 555,
    rating: 4.5,
    students: 2000,
    previewVideoUrl: "https://www.youtube.com/watch?v=W-3s5_fhFNE",
    author: 2,
  },
  {
    courseId: 6,
    name: "MongoDB",
    category: "database, REST",
    description: "No Sql DB for documents storage",
    isTopRated: false,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 666,
    rating: 4.5,
    students: 2000,
    previewVideoUrl: "https://www.youtube.com/watch?v=W-3s5_fhFNE",
    author: 3,
  },
  {
    courseId: 7,
    name: "Nodejs",
    category: "server, REST",
    description:
      "Deserunt sint sunt proident nisi nulla consectetur labore adipisicing commodo.",
    isTopRated: false,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 777,
    rating: 4.5,
    students: 2000,
    previewVideoUrl: "https://www.youtube.com/watch?v=W-3s5_fhFNE",
    author: 3,
  },
  {
    courseId: 8,
    name: "Python",
    category: "server, REST",
    description:
      "Dolore elit cillum esse do aute reprehenderit amet amet cillum magna.",
    isTopRated: false,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 888,
    rating: 4.5,
    students: 2000,
    previewVideoUrl: "https://www.youtube.com/watch?v=W-3s5_fhFNE",
    author: 2,
  },
  {
    courseId: 9,
    name: "Sql server",
    category: "database, REST",
    description: "Id adipisicing amet adipisicing anim voluptate.",
    isTopRated: false,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 999,
    rating: 4.5,
    students: 2000,
    previewVideoUrl: "https://www.youtube.com/watch?v=-EPMOaV7h_Q",
    author: 1,
  },
];

export const getCourses = () => {
  return attachAuthor(courses);
};

export const getCourseById = (id) => {
  return attachAuthor(courses.find((course) => course.courseId === id));
};

export const getCoursesBycategory = (category) => {
  return attachAuthor(courses.filter((course) => course.category === category));
};

export const getCoursesByRating = (rating) => {
  return attachAuthor(courses.filter((course) => course.rating === rating));
};

export const getCoursesByPriceRange = (min, max) => {
  return attachAuthor(
    courses.filter((course) => course.price >= min && course.price <= max)
  );
};

export const searchCoursesByName = (name) => {
  return attachAuthor(
    courses.filter((course) =>
      course.name.toLowerCase().includes(name.toLowerCase())
    )
  );
};

const attachAuthor = (course) => {
  if (Array.isArray(course)) {
    return course.map((item) => {
      const author = getAuthorByID(item.author);
      return { ...item, authorName:author.name };
    });
  } else {
    const author = getAuthorByID(course.author);
    return { ...course, authorName:author.name };
  }
};
