const { ContributeService } = require('../services');
const db = require('../db');

const create = async (req, res) => {
    let formatData = {
        nameVN: req.body.nameVN,
        nameScience: req.body.nameScience,
        familiar: req.body.familiar,
        location: req.body.location,
        characteristics: req.body.characteristics,
        meaning: req.body.meaning,
        comment: req.body.comment,
        contributedBy: req.user.data._id,
        postContributed: req.body.postContributed
    }

    const contributeService = new ContributeService(db, formatData);

    let contribute = await contributeService.create();
    return res.status(200)
        .json({
            message: "contributed was successful",
            result: {
                contribute
            }
        })
}

module.exports = {
    create
};

