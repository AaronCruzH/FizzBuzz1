// Clase anterior con la que obtenemos los explorers
const Reader = require("./../../../lib/utils/Reader");
const ExplorerService = require('./../../../lib/services/ExplorerService')

describe("Test Unit para ExplorerService",()=>{
    test("Filtracion de Explorers",()=>{
        const explorers = Reader.readJsonFile("explorers.json");

        // Aplicación del ExplorerService sobre la lista de explorers
        const explorersMission=ExplorerService.filterByMission(explorers, "node");
        const explorersAmount=ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        const explorersNames=ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        expect(explorersMission).not.toBeUndefined()
        expect(explorersAmount).toBe(10)
        expect(explorersNames).not.toBeUndefined()
    })
})
