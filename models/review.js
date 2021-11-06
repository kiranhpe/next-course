import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
});

export const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);