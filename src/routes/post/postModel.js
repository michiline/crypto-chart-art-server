import mongoose from 'mongoose'

const Schema = mongoose.Schema
const postSchema = new Schema({
  url: {
    type: String
  },
  nodes: [{
    name: String,
    data: String
  }],
})

export default mongoose.model('Post', postSchema)
