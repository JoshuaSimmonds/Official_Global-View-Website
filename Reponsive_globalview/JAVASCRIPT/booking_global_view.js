        document.addEventListener('DOMContentLoaded', function(){
        const departureAirports =[
            "Select an airport", //The blank option
            "",
             "London Gatwick, United Kingdom (LGW)",
             "London Heathrow, United Kingdom (LHR)",
             "Birmingham, United Kingdom (BHX)",
             "Manchester, United Kingdom (MAN)"
        ];
    
        const destinations = {
            countries: [
         "Select a destination", //The blank option
         "",
         "Caribbean", 
         "",
         "Montego Bay, Jamaica (MBJ)",
         "Kingston, Jamaica (KIN)",
         "Bridgetown, Barbados (BGI)",
         "Nassau, Bahamas (NAS)",
         "",

         "North America", 
         "",
         "MiamI, USA (MIA);",
         "New York, (JFK)",
         "Toronto, Canada (YYZ)",
         "",
         "South America", 
         "",
         "Lima, Peru (LIM)",
         "Bogota; Colombia(BOG)",
         "Rio de Janeiro, Brazil (RIO)",
         "",

        "Africa",
        "",
        "Cape Town, South Africa (CPT)",
        "Nairobi, Kenya (NBO)",
        "Zanzibar, Tanzania (ZNZ)",
        "",
         
        "Asia",
        "",
        "Kuala Lumpur, Malaysia (KUL)",
         "Bali, Indonesia (DPS)",
         "Bangkok, Thailand (BKK)",
         "",

         "Europe",
         "",
         "Paris, France (CDG",
         "Athens, Greece (ATH)",
         "Berlin, Germany (BER)",
         "",
            ]
        };
    
// Add options to select dropdowns


        function populateDropdowns() {
            const fromSelect = document.getElementById("from");
            const toSelect = document.getElementById("to");
    



    //Adding options in the airport dropdown

            departureAirports.forEach(airport => {
                const option = document.createElement("option");

                //Add airport option
                option.value = airport; 

                //Showcase airports
                option.textContent = airport; // Display text as airport name
                fromSelect.appendChild(option);
            });
    
             //Adding options in the destinations dropdown
            for (const key in destinations) {
                destinations[key].forEach(destination => {
                    const option = document.createElement("option");

                //Adding airport code destinations
                    option.value = destination.code; 

                    //Showcase destinations
                    option.textContent = destination; 
                    toSelect.appendChild(option);
                });
            }
        }
    
//Call functions to populate drop down options
        populateDropdowns();
    });