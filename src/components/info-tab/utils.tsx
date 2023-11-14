import { AsteroidsTable } from "../asteroids-table";
import { IconButton } from "../icon-button";
import { AsteroidIcon, MinerIcon, PlanetIcon } from "../icons";
import { MinersTable } from "../miners-table";
import { PlanetsTable } from "../planets-table";

export function getTabItems(data: any, currKey: string) {
    return [
        {
            label: <IconButton isSelected={currKey === '0'}><><MinerIcon />Miners</></IconButton>,
            key: '0',
            children: <MinersTable miners={data.miners} />,
        }, {
            label: <IconButton isSelected={currKey === '1'}><><AsteroidIcon />Asteroid</></IconButton>,
            key: '1',
            children: <AsteroidsTable asteroids={data.asteroids} />,
        }, {
            label: <IconButton isSelected={currKey === '2'}><><PlanetIcon />Planets</></IconButton>,
            key: '2',
            children: <PlanetsTable planets={data.planets} />,
        },]
}
