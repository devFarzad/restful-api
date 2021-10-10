const mongose = require('mongoose');
const Schema = mongose.Schema;
const bcrypt = require('bcrypt');

var mongoosePaginate = require('mongoose-paginate');

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin:{type:Boolean,default:false},
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
}, { timestamps: true });
UserSchema.pre('save', function (next) {
    //decrypt pass

    bcrypt.hash(this.password, 10, (err, hash) => {
        // Store hash in your password DB.
        this.password = hash;
        // console.log(this);
        next();
    });
    // console.log(this.password);


});
// UserSchema.methods.comparePassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// }
UserSchema.plugin(mongoosePaginate);

module.exports = mongose.model('User', UserSchema);
