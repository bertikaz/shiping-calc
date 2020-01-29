import cities from "./cities";

export default [
    {
        id: 1,
        cityFromId: cities[0].id,
        cityFromName: cities[0].name,
        cityToId: cities[1].id,
        cityToName: cities[1].name,
        distance: 800
    },
    {
        id: 2,
        cityFromId: cities[0].id,
        cityFromName: cities[0].name,
        cityToId: cities[2].id,
        cityToName: cities[2].name,
        distance: 1200
    },
    {
        id: 3,
        cityFromId: cities[0].id,
        cityFromName: cities[0].name,
        cityToId: cities[2].id,
        cityToName: cities[2].name,
        distance: 2200
    },
    {
        id: 4,
        cityFromId: cities[0].id,
        cityFromName: cities[0].name,
        cityToId: cities[3].id,
        cityToName: cities[3].name,
        distance: 300
    },
    {
        id: 5,
        cityFromId: cities[0].id,
        cityFromName: cities[0].name,
        cityToId: cities[4].id,
        cityToName: cities[4].name,
        distance: 800
    }

];
