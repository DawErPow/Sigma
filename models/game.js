const mongoose = require('mongoose');
const userModel = require('./user');
const categoryModel = require('./category');
const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    image: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: categoryModel
    }]
});

gameSchema.statics.findGameByCategory = function(category) {
    return this.find({})
      .populate({
        path: "categories",
        match: { name: category } 
      })
      .populate({
        path: "users",
        select: "-password"
      })
      .then(games => {
        return games.filter(game => game.categories.length > 0);
      });
  };

module.exports = mongoose.model('game', gameSchema);