class Plant {
    constructor(db, data) {
        this.db = db;
        this.data = data;
    }

    async searchPlant() {
        let result=await this.db.Plant.find({ nameVN: { '$regex': this.data.filter, '$options': "i" } })
        .limit(5)
        return result;
    }

    async getInfo() {
        let result=await this.db.Plant.findById(this.data.id)
        return result;
    }
    
    async addPlant() {
        const plant = this.data;
        return await this.db.Plant.create(plant)
    }
}

module.exports = {
    Plant
};
