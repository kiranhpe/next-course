import { Section } from "../models/section";

export const addSection = async(section) => {
    return  Section.create(section);
};

export const getSections = async() => {
    return Section.find();
}

export const getSection = async(id) => {
    return Section.findById(id);
}

export const getSectionsForTopic = async(topicId) => {
    console.log(topicId);
    return Section.find({topic: topicId});
}
