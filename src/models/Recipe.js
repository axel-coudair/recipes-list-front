export default class Recipe {
    constructor(
        id = null,
        houseId = null,
        title = null,
        numberOfEaters = null,
        description = null,
        isPublic = null,
        ingredients = null
    ) {
        this.isPublic = isPublic
        this.description = description
        this.numberOfEaters = numberOfEaters
        this.title = title
        this.id = id
        this.ingredients = ingredients
        this.houseId = houseId
    }
}