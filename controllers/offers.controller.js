const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.addOffer = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)

    try {
        return UserModel.findByIdAndUpdate(
            req.params.id,
            {
                $addToSet: {
                    offers: {
                        title: req.body.title,
                        company: req.body.company,
                        url: req.body.url,
                        description: req.body.description,
                        favorite: false,
                        status: 1,
                        tags: req.body.tags,
                        timestamps: new Date().getTime()
                    },
                },
            },
            { new: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                else return res.status(400).send(err);
            }
        );
    } catch (err) {
        return res.status(400).send(err);
    }
};

module.exports.updateOffer = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)

    try {
        return UserModel.findById(req.params.id, (err, docs) => {
            const theOffer = docs.offers.find((offer) =>
                offer._id.equals(req.body.offerId)
            )
            if (!theOffer) return res.status(404).send('Offer not found')
            theOffer.status = req.body.status,
            theOffer.updateAt = new Date().getTime();

            return docs.save((err) => {
                if (!err) return res.status(200).send(theOffer);
                return res.status(500).send(err)
            })
        }
        )
    } catch (err) {
        return res.status(400).send(err);
    }
}

module.exports.deleteOffer = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)

    try {
        return UserModel.findByIdAndUpdate(
            req.params.id,
            {
                $pull: {
                    offers: {
                        _id: req.body.offerId,
                    },
                },
            },
            { new: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                else return res.status(400).send(err)
            }
        );
    } catch (err) {
        return res.status(400).send(err);
    }
};

module.exports.addFavorite = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)

    try {
        return UserModel.findById(req.params.id, (err, docs) => {
            const theOffer = docs.offers.find((offer) =>
                offer._id.equals(req.body.offerId)
            )
            if (!theOffer) return res.status(404).send('Offer not found')
            theOffer.favorite = true;

            return docs.save((err) => {
                if (!err) return res.status(200).send(theOffer);
                return res.status(500).send(err)
            })
        }
        )
    } catch (err) {
        return res.status(400).send(err);
    }
}

module.exports.removeFavorite = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)

    try {
        return UserModel.findById(req.params.id, (err, docs) => {
            const theOffer = docs.offers.find((offer) =>
                offer._id.equals(req.body.offerId)
            )
            if (!theOffer) return res.status(404).send('Offer not found')
            theOffer.favorite = false;

            return docs.save((err) => {
                if (!err) return res.status(200).send(theOffer);
                return res.status(500).send(err)
            })
        }
        )
    } catch (err) {
        return res.status(400).send(err);
    }
}