import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Section = mongoose.models.Section || mongoose.model('Section', sectionSchema);