const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Add this line to import Schema
const EnterpriseUserSchema = new mongoose.Schema({
    EnterpriseID: {
        type: Schema.Types.ObjectId,
        ref: "Enterprise",
        require: true
    },
    username: { type: String },
    email: { type: String },
    phone: { type: String },
    isDelete: {
        type: Boolean,
        default: false
    }
    // Other relevant fields for EnterpriseUser entity
}, { timestamps: true });

const EnterpriseUserModel = mongoose.model('EnterpriseUser', EnterpriseUserSchema);

module.exports = EnterpriseUserModel;
