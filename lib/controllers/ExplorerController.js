const ExplorerService = require('./../services/ExplorerService')
const FizzbuzzService = require('./../services/FizzbuzzService')
const Reader = require('./../utils/Reader')

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        return ExplorerService.filterByMission(explorers,mission)
    }
    static getExplorersUsernamesByMission(mission){
        return  this.getExplorersByMission(mission).map((explorer)=>explorer.githubUsername)
    }
    static getExplorersAmonutByMission(mission){
        return this.getExplorersByMission(mission).length
    }
}

module.exports = ExplorerController