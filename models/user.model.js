const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema(

    {
        firstName: {
            type: String,
            required: true,
            minlength: 2,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            minlength: 2,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6
        },
        offers: {
            type: [
                {
                    title: String,
                    company: String,
                    url: String,
                    description: String,
                    status: Number,
                    favorite: Boolean,
                    tag: [String],
                    timestamp: Number,
                    updateAt: Number
                }
            ]
        },
        comment: {
            type: String,
        }
    }
)
//play fonction before save into MongoDB
userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
};


const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;