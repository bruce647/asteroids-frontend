import { serviceURL } from "../constans";

export async function getAsteroids() {
    try {
        const response = await fetch(`${serviceURL}/asteroids`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching asteroids:', error);
    }
}