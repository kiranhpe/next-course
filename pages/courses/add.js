import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Select from "react-select";
import { InputText } from "../../ui-kit/input-text";

import styles from "./course.module.scss";

export const AddCourse = () => {
    const router = useRouter()

  const [authors, setAuthors] = React.useState([]);
  const [categories, setCategories] = React.useState([
    {
      value: "web",
      label: "Web",
    },
    {
      value: "mobile",
      label: "Mobile",
    },
    {
      value: "network",
      label: "Network",
    },
  ]);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [previewVideoUrl, setPreviewVideoUrl] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [students, setStudents] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleVideoUrlChange = (e) => {
    setPreviewVideoUrl(e.target.value);
  };

  const handleAuthorIdChange = (e) => {
    setAuthor(e.value);
  };

  const handleCategoryChange = (e) => {
    console.log(e.value);
    setCategory(e.value);
  };

  const handleStudentsChange = (e) => {
    setStudents(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(
      name,
      description,
      price,
      previewVideoUrl,
      author,
      category,
      students,
      duration
    );
    e.preventDefault();
    axios
      .post("/api/courses", {
        name,
        description,
        price,
        previewVideoUrl,
        author,
        category,
        students,
        duration,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);

        router.push("/courses");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get("/api/authors").then((res) => {
      const authors = res.data.map((x) => {
        return {
          value: x._id,
          label: x.name,
        };
      });
      setAuthors(authors);
    });
  }, []);
  return (
    <div className={styles.formContainer}>
      <form>
        <InputText placeholder="Course name" onTextChange={handleNameChange} />
        <br />
        <InputText
          placeholder="Course description"
          onTextChange={handleDescriptionChange}
        />{" "}
        <br />
        <InputText
          placeholder="Course duration"
          onTextChange={handleDurationChange}
        />{" "}
        <br />
        <InputText
          placeholder="Course price"
          onTextChange={handlePriceChange}
        />{" "}
        <br />
        <InputText
          placeholder="Course preview url"
          onTextChange={handleVideoUrlChange}
        />{" "}
        <br />
        <InputText
          placeholder="Number of  students"
          onTextChange={handleStudentsChange}
        />
        <br />
        <Select options={categories} onChange={handleCategoryChange} placeholder="Select Category" />
        <br /> <br />
        <Select options={authors} onChange={handleAuthorIdChange} placeholder="Select Author"/>
        <br /> <br />
        <input type="submit" value="Add Course" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default AddCourse;
