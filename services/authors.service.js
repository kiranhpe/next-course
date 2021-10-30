const authors = [
  { authorId: 1, name: "Dave" },
  { authorId: 2, name: "Sammy" },
  { authorId: 3, name: "Mike" },
  { authorId: 4, name: "Robert" },
];

export const getAuthorByID = (id) => {
  return authors.find((author) => author.authorId === id);
};

export const getAuthors = () => {
  return authors;
};
