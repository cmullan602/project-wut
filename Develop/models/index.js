const Location = require('./Location');
const Traveler = require('./Traveler');
const Trips = require('./Trips');

Location.belongsToMany(Traveler, {
    through: {
        model: Trips,
        unique: false
    }
});

Traveler.belongsToMany(Location, {
    through: {
        model: Trips,
        unique: false
    }
});
Traveler.belongsToMany(Location, {through: Trips})

module.exports = { Driver, License, Car };