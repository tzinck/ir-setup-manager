var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var fr2Schema = new Schema({
    title: String,
    fileName: String,
    car: String,
    track: String,
    tiresAndAero: {
        tires: {
            leftFront: {
                coldPressure: Number,
                lastHotPressure: Number,
                lastTempO: Number,
                lastTempM: Number,
                lastTempI: Number
            },
            rightFront: {
                coldPressure: Number,
                lastHotPressure: Number,
                lastTempO: Number,
                lastTempM: Number,
                lastTempI: Number
            },
            leftRear: {
                coldPressure: Number,
                lastHotPressure: Number,
                lastTempO: Number,
                lastTempM: Number,
                lastTempI: Number
            },
            rightRear: {
                coldPressure: Number,
                lastHotPressure: Number,
                lastTempO: Number,
                lastTempM: Number,
                lastTempI: Number
            }
        },
        frontAero: {
            wingFlapAngle: Number
        },
        rearAero: {
            wingFlapAngle: Number
        },
        aeroCalculator: {
            frontRideHeightAtSpeed: Number,
            rearRideHeightAtSpeed: Number,
            frontDownforce: Number,
            downForceToDrag: Number
        }
    },
    chassis: {
        front: {
            springRate: Number,
            bumpStiffness: Number,
            reboundStiffness: Number,
            brakePressureBias: Number,
            crossWeight: Number
        },
        leftFront: {
            cornerWeight: Number,
            rideHeight: Number,
            pushrodLength: Number,
            camber: Number,
            toeIn: Number
        },
        rightFront: {
            cornerWeight: Number,
            rideHeight: Number,
            pushrodLength: Number,
            camber: Number,
            toeIn: Number
        },
        leftRear: {
            cornerWeight: Number,
            rideHeight: Number,
            pushrodLength: Number,
            springRate: Number,
            bumpStiffness: Number,
            reboundStiffness: Number,
            camber: Number,
            toeIn: Number
        },
        rightRear: {
            cornerWeight: Number,
            rideHeight: Number,
            pushrodLength: Number,
            springRate: Number,
            bumpStiffness: Number,
            reboundStiffness: Number,
            camber: Number,
            toeIn: Number
        },
        rear: {
            fuelLevel: Number,
            antiRollBar: String,
            arbPreload: Number,
            seventhGearRatio: String,
            finalDriveOption: String,
            diffPreload: Number,
            diffRampAngles: String
        }
    }
});

var Setup = mongoose.model('fr2Setup', fr2Schema);
module.exports = Setup;