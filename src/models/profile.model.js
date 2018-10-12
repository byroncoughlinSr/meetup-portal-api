// profile-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const profile = new Schema(
    {
      username: { type: String, required: true },
      fullname: {type: String, required: true  },
      link: {type: String}
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model("profile", profile);
};
