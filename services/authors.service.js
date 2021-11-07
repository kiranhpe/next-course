import { Author } from "../models/author";

const authors = [
  { authorId: 1, name: "Dave" },
  { authorId: 2, name: "Sammy" },
  { authorId: 3, name: "Mike" },
  { authorId: 4, name: "Robert" },
];

export const getAuthorByID = async (id) => {
  const author = Author.findOne({ _id: id });
  return author;
};

export const getAuthors = async () => {
  return Author.find({});
};

export const addAuthor = async (author) => {
  return Author.create(author);
};
