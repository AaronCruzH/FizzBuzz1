const Reader = require("./../../../lib/utils/Reader");
describe("Unit Test for Reader Class",() => {
    test('Return Explorers',()=>{
        const explorers = Reader.readJsonFile("explorers.json");

        expect(explorers).not.toBeUndefined()
    });
})