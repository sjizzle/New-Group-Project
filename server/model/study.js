let mongoose = require('mongoose');
// Create a Survey Model
let surveyModel = mongoose.Schema({
    Name: String,
    Major: String,
    Year: String,
    Grad: String,
    Career: String,
    },
    {
        collection: "study"
    }

);
module.exports = mongoose.model('Survey', surveyModel);
