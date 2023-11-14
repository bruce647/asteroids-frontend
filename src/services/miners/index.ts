import { serviceURL } from "../constans";

export async function getMiners() {
    try {
        const response = await fetch(`${serviceURL}/miners`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching miners:', error);
    }
}

export async function getMinersByPlanetId(planetId: string) {
    try {
        const response = await fetch(`${serviceURL}/miners?planetId=${planetId}`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching miners:', error);
    }
}

export async function getMinerHistory(minerId: string) {
    try {
        const response = await fetch(`${serviceURL}/history/${minerId}`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching miners:', error);
    }
}

export async function addMiner(name: string, planetId: string) {
    try {
        const response = await fetch(`${serviceURL}/miners`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            //TODO Leava some attributes as staic for now
            body: JSON.stringify({ name, planetId, minerals: 100, status: 0, miningSpeed: 100, travelSpeed: 200, carryCapacity: 1000, angle: 10, x: 100, y: 100 }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const newMiner = await response.json();
        return newMiner;
    } catch (error) {
        console.error('Error adding miner:', error);
    }
}