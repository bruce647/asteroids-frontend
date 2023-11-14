import { serviceURL } from "../constans";

export async function getPlanets() {
    try {
        const response = await fetch(`${serviceURL}/planets`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching planets:', error);
    }
}