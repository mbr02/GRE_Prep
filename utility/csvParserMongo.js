const mongoose = require("mongoose");
// const WordModel = require("../models/Word");
const WordListModel = require("../models/WordList");
const csv = require("csv-parser");
const fs = require("fs");

const csvParseMongo = async (filename) => {
  const results = [];
  fs.createReadStream(filename)
    .pipe(csv(["word", "meaning"]))
    .on("data", (data) => {
      if (data.word !== "Words") results.push(data);
    })
    .on("end", () => {
      const wordListResult = {
        WordListName: filename.slice(7, filename.lastIndexOf("csv") - 1),
        parsed: results,
      };

      //   console.log(wordListResult);

      WordListModel.insertMany(wordListResult, function (err, docs) {
        // if (!err) console.log(docs);
        if (err) {
          console.log("there is an error");
          //   console.log(err);
        }
      });
    });
};

module.exports = { csvParseMongo };
