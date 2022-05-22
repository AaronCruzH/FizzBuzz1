const ExplorerController = require('./../../../lib/controllers/ExplorerController')
describe("Unit Test para ExplorerController",()=>{
    test("Obtener Explorers por mission",()=>{

        const missionExplorers = ExplorerController.getExplorersByMission("node")
        expect(missionExplorers).not.toBeUndefined()
        expect(ExplorerController.getExplorersAmonutByMission("node")).toBe(10)

       //expect(missionExplorers.array.forEach(explorer => explorer.mission)).toBe("node");
    })
})