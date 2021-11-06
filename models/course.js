import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    isPublished: Boolean,
    price: {
        type: Number,
    },
    duration: {
        type: Number,
        required: true,
    },
    students: {
        type: Number
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    previewVideoUrl: {
        type: String,
    },
    isTopRated: {
        type: Boolean,
        default: false,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
});

export const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
