const courses = [
  {
    id: 1,
    name: "Angular",
    catogory: "web",
    description:
      "Angular is a platform that makes it easy to build applications with the web.",
    isTopRated: true,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 190,
    rating: 4.0,
    students: 2300,
    author: 1
  },
  {
    id: 2,
    name: "React",
    catogory: "web",
    description: "React is a JavaScript library for building user interfaces.",
    isTopRated: true,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 222,
    rating: 4.5,
    students: 3000,
    author: 2
  },
  {
    id: 3,
    name: "Vue",
    catagory: "web",
    description:
      "Vue.js is a progressive framework for building user interfaces.",
    isTopRated: true,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 300,
    rating: 5.0,
    students: 2000,
    author: 1
  },
  {
    id: 4,
    name: "Nextjs",
    catagory: "web",
    description: "Next.js is a framework for building modern web applications.",
    isTopRated: true,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 444,
    rating: 1.0,
    students: 1000,
    author: 4
  },
  {
    id: 5,
    name: "Express",
    catagory: "web",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    isTopRated: true,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 555,
    rating: 4.5,
    students: 2000,
    author: 2
  },
  {
    id: 6,
    name: "MongoDB",
    catogory: "database",
    description: "No Sql DB for documents storage",
    isTopRated: false,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 666,
    rating: 4.5,
    students: 2000,
    author: 3
  },
  {
    id: 7,
    name: "Nodejs",
    catogory: "server",
    description: "Deserunt sint sunt proident nisi nulla consectetur labore adipisicing commodo.",
    isTopRated: false,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 777,
    rating: 4.5,
    students: 2000,
    author: 3
  },
  {
    id: 8,
    name: "Python",
    catagory: "server",
    description: "Dolore elit cillum esse do aute reprehenderit amet amet cillum magna.",
    isTopRated: false,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 888,
    rating: 4.5,
    students: 2000,
    author: 2
  },
  {
    id: 9,
    name: "Sql server",
    catogory: "database",
    description: "Id adipisicing amet adipisicing anim voluptate.",
    isTopRated: false,
    date: new Date("10/10/2019"),
    duration: 120,
    price: 999,
    rating: 4.5,
    students: 2000,
    author: 1
  },
];

const authors = [
  {id: 1, name: "Dave"},
  {id: 2, name: "Sammy"},
  {id: 3, name: "Mike"},
  {id: 4, name: "Robert"},
]


export const getCourses = () => { 
    return courses;
};

export const getCourseById = (id) => {
    return courses.find((course) => course.id === id);
}

export const getCoursesByCatogory = (catogory) => {
    return courses.filter((course) => course.catogory === catogory);
}

export const getCoursesByRating = (rating) => {
    return courses.filter((course) => course.rating === rating);
}

export const getCoursesByPriceRange = (min, max) => {
    return courses.filter((course) => course.price >= min && course.price <= max);
}

export const searchCoursesByName = (name) => {
    return courses.filter((course) => course.name.toLowerCase().includes(name.toLowerCase()));
}

export const getAuthorByID = (id) => {
    return authors.find((author) => author.id === id);
}
