class TransportationCalculator {

    ASSUMPTIONS = { 
        average_waste_emissions:	691.5,
        EF_passenger_vehicle:	19.6,
        nonCO2_vehicle_emissions_ratio:	100/98.65,
    }

    calculateVehicles = (vehicles) => {
        let vehicles_efficiency_improvements = 0
        let vehicles_pounds_year = 0

        for(let vehicle of vehicles){
            if(vehicle.miles_driven > 0){

                let total_miles_driven = vehicle.miles_driven
                //if miles identifier is week, multiplies by 52 to get yearly value
                if(vehicle.miles_identifier=="Per Week") 
                    total_miles_driven *= 52

                ///applies formula calculating pounds of carbon dioxide/year
                let pounds_per_vehicle = (total_miles_driven / vehicle.miles_per_gallon) * 
                                        this.ASSUMPTIONS.EF_passenger_vehicle *
                                        this.ASSUMPTIONS.nonCO2_vehicle_emissions_ratio
                                        
                //adds up to the total
                vehicles_pounds_year += pounds_per_vehicle

                //when regular maintenance is false, accounts for efficiency improvements
                if(vehicle.regular_maintenance!='Already Done') {
                    vehicles_efficiency_improvements += pounds_per_vehicle * this.ASSUMPTIONS.vehicle_efficiency_improvements 
                }

            }
        }

        return {
            total: vehicles_pounds_year + vehicles_efficiency_improvements,
            efficiency_improvements_maintenance: vehicles_efficiency_improvements
        }
    }

}

export default TransportationCalculator