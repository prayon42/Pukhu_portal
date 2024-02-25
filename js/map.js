// script.js
const map = L.map('map').setView([27.6750, 85.4298], 15); // Set initial map center and zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const jsonData = [
        {
            "Latitude": 27.6762294,
            "Longitude": 85.4381186,
            "Altitude": 1293.900024,
            "Name_of_the_Pond": "Kamalpokhari",
            "Site_location_name": "Kamalbinayak",
            "Site_ID": "PPKM1",
            "pH": 11.5,
            "Temperature": 21.9,
            "Electrical_Conductivity_EC": 57
        },
        {
            "Latitude": 27.6758439,
            "Longitude": 85.4369955,
            "Altitude": 1293.800049,
            "Name_of_the_Pond": "Lamgal pukhu",
            "Site_location_name": "Kamalbinayak",
            "Site_ID": "PPLP2",
            "pH": 9.56,
            "Temperature": 24.1,
            "Electrical_Conductivity_EC": 217
        },
        {
            "Latitude": 27.6754481,
            "Longitude": 85.4353416,
            "Altitude": 1281.950684,
            "Name_of_the_Pond": "Kwathandou pukhu",
            "Site_location_name": "Kwathandou",
            "Site_ID": "PPKP3",
            "pH": 9.23,
            "Temperature": 20.9,
            "Electrical_Conductivity_EC": 288
        },
        {
            "Latitude": 27.6767964,
            "Longitude": 85.4352295,
            "Altitude": 1294.599976,
            "Name_of_the_Pond": "Gwanga pukhu",
            "Site_location_name": "Muldhoka",
            "Site_ID": "PPGP4",
            "pH": 11.6,
            "Temperature": 17.6,
            "Electrical_Conductivity_EC": 178
        },
        {
            "Latitude": 27.6757215,
            "Longitude": 85.4339015,
            "Altitude": 1291.099976,
            "Name_of_the_Pond": "Bekhal Pukhu",
            "Site_location_name": "Bekhal",
            "Site_ID": "PPBP5",
            "pH": 9.03,
            "Temperature": 20.6,
            "Electrical_Conductivity_EC": 479
        },
        {
            "Latitude": 27.674123,
            "Longitude": 85.4334466,
            "Altitude": 1289.599976,
            "Name_of_the_Pond": "Naag pokhari",
            "Site_location_name": "Naagpokhari",
            "Site_ID": "PPNP6",
            "pH": 8.14,
            "Temperature": 20.1,
            "Electrical_Conductivity_EC": 642
        },
        {
            "Latitude": 27.6738863,
            "Longitude": 85.4345524,
            "Altitude": 1285.400024,
            "Name_of_the_Pond": "Yatachhen pukhu",
            "Site_location_name": "Yatachhen",
            "Site_ID": "PPYP7",
            "pH": 11.5,
            "Temperature": 19.7,
            "Electrical_Conductivity_EC": 275
        },
        {
            "Latitude": 27.6745452,
            "Longitude": 85.4378867,
            "Altitude": 1285.700073,
            "Name_of_the_Pond": "Garud kunda",
            "Site_location_name": "Garunkunda",
            "Site_ID": "PPGP8",
            "pH": 8.82,
            "Temperature": 18.7,
            "Electrical_Conductivity_EC": 131
        },
        {
            "Latitude": 27.6734012,
            "Longitude": 85.4384632,
            "Altitude": 1285.400024,
            "Name_of_the_Pond": "Chayamasigh pukhu",
            "Site_location_name": "Chayamasigh",
            "Site_ID": "PPCP9",
            "pH": null,
            "Temperature": null,
            "Electrical_Conductivity_EC": null
        },
        {
            "Latitude": 27.6719896,
            "Longitude": 85.4366455,
            "Altitude": 1285.5,
            "Name_of_the_Pond": "Jella pukhu",
            "Site_location_name": "Jella",
            "Site_ID": "PPJP10",
            "pH": 7.77,
            "Temperature": 16.5,
            "Electrical_Conductivity_EC": 549
        },
        {
            "Latitude": 27.6714323,
            "Longitude": 85.4348296,
            "Altitude": 1280,
            "Name_of_the_Pond": "Khacha Pukhu",
            "Site_location_name": "Jella",
            "Site_ID": "PPKP11",
            "pH": 9.33,
            "Temperature": 17,
            "Electrical_Conductivity_EC": 1045
        },
        {
            "Latitude": 27.6722314,
            "Longitude": 85.4144361,
            "Altitude": 1272.059692,
            "Name_of_the_Pond": "Nhu pukhu",
            "Site_location_name": "Sainik Awasiya",
            "Site_ID": "PPNP1",
            "pH": 9,
            "Temperature": 20.2,
            "Electrical_Conductivity_EC": 226
        },
        {
            "Latitude": 27.6720347,
            "Longitude": 85.4195814,
            "Altitude": 1280.771484,
            "Name_of_the_Pond": "Siddha Pokhari",
            "Site_location_name": "Siddha Pokhari",
            "Site_ID": "PPSP2",
            "pH": 10.7,
            "Temperature": 21.7,
            "Electrical_Conductivity_EC": 110
        },
        {
            "Latitude": 27.6712259,
            "Longitude": 85.421632,
            "Altitude": 1283,
            "Name_of_the_Pond": "Bhajya pukhu",
            "Site_location_name": "BMC Campus",
            "Site_ID": "PPBP3",
            "pH": 8.3,
            "Temperature": 24.1,
            "Electrical_Conductivity_EC": 391
        },
        {
            "Latitude": 27.6728509,
            "Longitude": 85.4232363,
            "Altitude": 1291,
            "Name_of_the_Pond": "Na pukhu",
            "Site_location_name": "Itachhen",
            "Site_ID": "PPNP4",
            "pH": 11.4,
            "Temperature": 22.5,
            "Electrical_Conductivity_EC": 188
        },
        {
            "Latitude": 27.6712937,
            "Longitude": 85.4248289,
            "Altitude": 1299.599976,
            "Name_of_the_Pond": "Tekha pukhu",
            "Site_location_name": "Bharwacho",
            "Site_ID": "PPTP5",
            "pH": 10.1,
            "Temperature": 21.8,
            "Electrical_Conductivity_EC": 183
        },
        {
            "Latitude": 27.6699337,
            "Longitude": 85.4253778,
            "Altitude": 1296.200073,
            "Name_of_the_Pond": "Degamana pukhu",
            "Site_location_name": "Bansagopal",
            "Site_ID": "PPMK6",
            "pH": 10,
            "Temperature": 18.2,
            "Electrical_Conductivity_EC": 586
        }   
]

function addMarkersToMap(data) {
    data.forEach(entry => {
        const { Latitude, Longitude, Name_of_the_Pond, Site_location_name, pH, Temperature, Electrical_Conductivity_EC } = entry;

        const marker = L.marker([Latitude, Longitude]).addTo(map)
            .bindPopup(`
                <strong>${Name_of_the_Pond}</strong><br>
                Site Location: ${Site_location_name}<br>
                pH: ${pH !== null ? pH : 'N/A'}<br>
                Temperature: ${Temperature !== null ? Temperature : 'N/A'}<br>
                EC: ${Electrical_Conductivity_EC !== null ? Electrical_Conductivity_EC : 'N/A'}
            `);
    });
}

// Call the function to add markers to the map
addMarkersToMap(jsonData);

// Function to calculate distance between two points using Turf.js
function calculateDistance(point1, point2) {
    const from = turf.point([point1.longitude, point1.latitude]);
    const to = turf.point([point2.longitude, point2.latitude]);

    const options = { units: 'kilometers' }; // You can change the units as needed

    return turf.distance(from, to, options);
}

// HTML form event listener
document.getElementById('distanceForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const pond1Name = document.getElementById('pond1').value;
    const pond2Name = document.getElementById('pond2').value;

    const pond1 = jsonData.find(entry => entry.Name_of_the_Pond === pond1Name);
    const pond2 = jsonData.find(entry => entry.Name_of_the_Pond === pond2Name);

    if (pond1 && pond2) {
        const distance = calculateDistance(pond1, pond2);

        // Display the distance on the page
        document.getElementById('distanceResult').innerHTML = `Distance between ${pond1Name} and ${pond2Name}: ${distance.toFixed(2)} kilometers`;
    } else {
        alert('Invalid pond names. Please select valid pond names.');
    }
});
// Assuming jsonData is defined globally or in the same scope

function populateDropdowns() {
    const pond1Select = document.getElementById('pond1');
    const pond2Select = document.getElementById('pond2');

    jsonData.forEach(entry => {
        const pondName = entry.Name_of_the_Pond;

        const option1 = document.createElement('option');
        option1.value = pondName;
        option1.text = pondName;
        pond1Select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = pondName;
        option2.text = pondName;
        pond2Select.appendChild(option2);
    });
}

// Call the function to populate dropdowns when the page loads
document.addEventListener('DOMContentLoaded', function () {
    populateDropdowns();

});

