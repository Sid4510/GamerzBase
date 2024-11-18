
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const eventSchema=new Schema({
    title :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    information:{
        type:String,
    },
    endDate: {
        type: Date,
        required: true,
        index: { expires: '0s' }, // TTL: Automatically delete after 'endDate'
      },
      likes: { type: Number, default: 0 },
      likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }],
      imageUrl: {
        type: String,
        trim: true,
        default: '',
      }
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;