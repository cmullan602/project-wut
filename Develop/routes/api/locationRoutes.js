const router = require('express').Router();
const {Location, Traveller, Trip} = require('../../models');

// GET All Locations
router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET A Single Location
router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id, {
            // JOIN using Trip through table
            include: [{model: Traveller, through: Trip, as:'locatoin_travellers'}]
        });
        if (!locationData) {
            res.status(404).json({message: 'Unable to find location with this ID!'});
            return;
        }
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE A Location
router.post('/', async (req, res) => {
    try {
        const locationData = await Location.create(req.body);
        res.status(200).json(locationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE A Location
router.delete('/:id', async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id
            }
        });
    if (!locationData) {
        res.status(404).json({message: 'No location found with this ID!'});
        return;
    }
    res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;