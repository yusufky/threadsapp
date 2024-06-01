import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id : {type: String, required: true},
    username: {type: String, required: true, unique: true },
    name: {type: String, required: true},
    image: String,
    bio: String,
    threads: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        },//Bir kullanicinin birden fazla thread'i olabilir.
    ],
    onboarded: {
        type: Boolean,
        default: false,
    },
    communities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community'
        }//Bir kullanicinin birden fazla uyesi oldugu community olabilir.
    ]
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
//Ilk kullanista mongoose.models olmayacagi icin yeni bir tane olusturacak.

export default User;