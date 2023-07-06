const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    tokenId: String,
    userId: String,
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

const Token = model('token', schema)

module.exports = Token
