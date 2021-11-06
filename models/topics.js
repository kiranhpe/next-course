import mongoose from 'mongoose';

const topicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,   
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Topics = mongoose.models.Topics || mongoose.model('Topics', topicsSchema);