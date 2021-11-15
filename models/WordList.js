const mongoose = require("mongoose");

const wordListSchema = new mongoose.Schema({
  WordListName: {
    type: String,
    trim: true,
    required: true,
  },
  parsed: [
    {
      word: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
      },
      meaning: {
        type: String,
        trim: true,
        required: true,
      },
    },
  ],
});

const WordListModel = mongoose.model("WordList", wordListSchema);

module.exports = WordListModel;
