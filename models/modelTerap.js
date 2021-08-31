const fs = require('fs');
const path = require('path');

const modelTerap = {
    fileName: path.resolve(__dirname,'../data/dataTerap.json'),

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function(){
        let allTeraps = this.findAll();
        let lastTerap = allTeraps.pop();
        if(lastTerap){
            return lastTerap.id + 1;
        }else{
            return 1;
        }
    },

    findAll: function(){
        return this.getData();
    },

    findByPk: function(id){
        let allTeraps = this.findAll();
        let terapFound = allTeraps.find(oneTerap => oneTerap.id === id);
        return terapFound;
    },

    findByField: function(field, text){
        let allTeraps = this.findAll();
        let terapFound = allTeraps.find(oneTerap => oneTerap[field] === text);
        return terapFound;
    },

    create: function(terapData){
        let allTeraps = this.findAll();
        let newTerap = {
            id: this.generateId(),
            ...terapData
        };
        allTeraps.push(newTerap);
        fs.writeFileSync(this.fileName, JSON.stringify(allTeraps, null, ' '));
        return newTerap;
    },

    delete: function(id){
        let allTeraps = this.findAll();
        let finalTeraps = allTeraps.filter(oneTerap => oneTerap.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalTeraps, null, ' '));
        return true;
    }
}

module.exports = modelTerap;