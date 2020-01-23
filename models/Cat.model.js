const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const catSchema = new Schema({

    name: {
        type: String,
        required: true
    }, 
    age: {
        type: Number,
        min: 0,
        max: 30
    }, 
    color : {
        type: String,
        minlength: 3,
        maxlength: 15,
    },
    toys: [
        {
            type: String, 
            minlength: 2
        }
    ], 
    country: {
        type: String,
        match: /^[A-Z] [A-Z]$/
    }, 
    photoUrl: {
        type: String,
        match: /^https?:\/\//,
        default: 
        'https://boygeniusreport.files.wordpress.com/2015/06/funny-cat.jpg?quality=98&strip=all'
    }
})

const Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;