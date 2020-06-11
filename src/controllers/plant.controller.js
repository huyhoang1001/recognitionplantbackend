const multer = require('multer');
const uploadImage = require('../helpers/cloud.helper');
const db = require('../db');
const { PlantService } = require('../services');


const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
}).array("plant_images", 6);

const searchPlant = async (req, res) => {
    let formatData = {
        filter: req.query.filter
    }

    let plantService = new PlantService(db, formatData);
    let plants = await plantService.searchPlant();

    return res.status(200).json({
        result: {
            plants
        }
    })

}

const addPlant = async (req, res) => {
    const myFile = req.files;
    let listPathImage = [];

    for (let i = 0; i < myFile.length; i++) {
        let imageUrl = '';
        imageUrl = await uploadImage.uploadImagePlant(myFile[i], req.body.name);
        listPathImage.push(imageUrl);
    }

    let formatData = {
        name: req.body.name,
        nameVN: req.body.nameVN,
        nameScience: req.body.nameScience,
        familiar: req.body.familiar,
        location: req.body.location,
        characteristics: req.body.characteristics,
        meaning: req.body.meaning,
        images: listPathImage
    }

    let plantService = new PlantService(db, formatData);
    let plants = await plantService.addPlant();

    return res.status(200).json({
        result: {
            plants
        }
    })

}

const getInfo = async (req, res) => {
    let formatData = {
        id: req.params.id
    }

    let plantService = new PlantService(db, formatData);
    let plants = await plantService.getInfo();

    return res.status(200).json({
        result: {
            plants
        }
    })

}


module.exports = {
    searchPlant,
    addPlant,
    multerMid,
    getInfo
};
