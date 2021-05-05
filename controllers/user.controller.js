const UserModel = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;



module.exports.userInfo = (req, res) => {
    console.log(req.params);
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)
    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unknow : ' + err);
    }).select('-password');
};

module.exports.updateComment = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)

    try{
        await UserModel.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    comment: req.body.comment
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ message: err });
            }
        )
    } catch (err) {
        return res.status(500).send({ message: err });
    }
}

module.exports.deleteUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)

    try{
        await UserModel.remove({ _id: req.params.id}).exec();
        res.status(200).json({ message: "Successfully deleted. "});
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}