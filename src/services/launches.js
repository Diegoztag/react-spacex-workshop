const API_URL = 'https://api.spacexdata.com/v3';

export async function getAllLaunches() {
    try {
        const response = await fetch(`${API_URL}/launches`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getLaunchByFlightNumber (FlightNumber) {
    try {
        const response = await fetch(`${API_URL}/launches/${FlightNumber}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}