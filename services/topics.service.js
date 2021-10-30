const topics = [
    {
        topicId: 1,
        coursetopicId: 1,
        name: 'Topic 1',
        description: 'Topic 1 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 2,
        coursetopicId: 1,
        name: 'Topic 2',
        description: 'Topic 2 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 3,
        coursetopicId: 1,
        name: 'Topic 3',
        description: 'Topic 3 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 4,
        coursetopicId: 1,
        name: 'Topic 4',
        description: 'Topic 4 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 5,
        coursetopicId: 1,
        name: 'Topic 5',
        description: 'Topic 5 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 6,
        coursetopicId: 1,
        name: 'Topic 6',
        description: 'Topic 6 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 7,
        coursetopicId: 1,
        name: 'Topic 7',
        description: 'Topic 7 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 8,
        coursetopicId: 1,
        name: 'Topic 8',
        description: 'Topic 8 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 9,
        coursetopicId: 1,
        name: 'Topic 9',
        description: 'Topic 9 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 10,
        coursetopicId: 1,
        name: 'Topic 10',
        description: 'Topic 10 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 11,
        coursetopicId: 2,
        name: 'Topic 11',
        description: 'Topic 11 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 12,
        coursetopicId: 2,
        name: 'Topic 12',
        description: 'Topic 12 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 13,
        coursetopicId: 2,
        name: 'Topic 13',
        description: 'Topic 13 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 14,
        coursetopicId: 2,
        name: 'Topic 14',
        description: 'Topic 14 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 15,
        coursetopicId: 2,
        name: 'Topic 15',
        description: 'Topic 15 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 16,
        coursetopicId: 2,
        name: 'Topic 16',
        description: 'Topic 16 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 17,
        coursetopicId: 2,
        name: 'Topic 17',
        description: 'Topic 17 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 18,
        coursetopicId: 2,
        name: 'Topic 18',
        description: 'Topic 18 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 19,
        coursetopicId: 2,
        name: 'Topic 19',
        description: 'Topic 19 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 20,
        coursetopicId: 2,
        name: 'Topic 20',
        description: 'Topic 20 description',
        createdAt: '2019-01-01',
    },
    {
        topicId: 21,
        coursetopicId: 3,
        name: 'Topic 21',
        description: 'Topic 21 description',
        createdAt: '2019-01-01',
    }
]

const sections = [
    {
        sectionId: 1,
        topicId: 1,
        name: 'Section 1',
    },
    {
        sectionId: 2,
        topicId: 1,
        name: 'Section 2',
    },
    {
        sectionId: 3,
        topicId: 1,
        name: 'Section 3',
    },
    {
        sectionId: 4,
        topicId: 1,
        name: 'Section 4',
    },
    {
        sectionId: 5,
        topicId: 1,
        name: 'Section 5',
    },
    {
        sectionId: 6,
        topicId: 1,
        name: 'Section 6',
    },
    {
        sectionId: 7,
        topicId: 1,
        name: 'Section 7',
    },
    {
        sectionId: 8,
        topicId: 1,
        name: 'Section 8',
    },
    {
        sectionId: 9,
        topicId: 1,
        name: 'Section 9',
    },
    {
        sectionId: 10,
        topicId: 1,
        name: 'Section 10',
    },
    {
        sectionId: 11,
        topicId: 2,
        name: 'Section 11',
    },
    {
        sectionId: 12,
        topicId: 2,
        name: 'Section 12',
    },
    {
        sectionId: 13,
        topicId: 2,
        name: 'Section 13',
    },
    {
        sectionId: 14,
        topicId: 2,
        name: 'Section 14',
    },
    {
        sectionId: 15,
        topicId: 2,
        name: 'Section 15',
    },
    {
        sectionId: 16,
        topicId: 2,
        name: 'Section 16',
    },
    {
        sectionId: 17,
        topicId: 2,
        name: 'Section 17',
    },
    {
        sectionId: 18,
        topicId: 2,
        name: 'Section 18',
    },
    {
        sectionId: 19,
        topicId: 2,
        name: 'Section 19',
    },
    {
        sectionId: 20,
        topicId: 2,
        name: 'Section 20',
    },
    {
        sectionId: 21,
        topicId: 3,
        name: 'Section 21',
    }
]

export const getTopicsForCourseId = (courseId) => {
    return topics.filter(topic => topic.coursetopicId === courseId)
}

export const getSectionsForTopic = (topicId) => {
    return sections.filter(section => section.topicId === topicId);
}