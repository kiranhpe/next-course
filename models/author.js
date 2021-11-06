import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    }
});

export const Author = mongoose.models.Author ||  mongoose.model('Author', authorSchema);