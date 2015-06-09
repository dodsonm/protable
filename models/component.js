var mongoose = require('mongoose');

// Component ---------------------------------------
componentSchema = mongoose.Schema({
    name: {type: String},
    files: [fileSchema]
    //, tasks: [taskSchema],
    // surveys: [surveySchema]

});
exports.componentSchema = componentSchema;
mongoose.model('Component', componentSchema);
//========================================/Component

// File -------------------------------------
fileSchema = mongoose.Schema({
    name: String,
    path: String,
    type: String
});
exports.fileSchema = fileSchema;
mongoose.model('File', fileSchema);
//======================================/File
