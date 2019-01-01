export default class Recipe {
    constructor(
			_id = null,
        userId = null,
        title = null,
        numberOfEaters = null,
        description = null,
        isPublic = null,
        image = null,
        date = null,
        duration = null,
        stapes = [],
        ingredients = []
    ) {
        this.isPublic = isPublic
        this.description = description
        this.numberOfEaters = numberOfEaters
        this.title = title
        this.id = _id
        this.image = image
        this.date = date
        this.duration = duration
        this.stapes = stapes
        this.ingredients = ingredients
        this.userId = userId
    }

    static createFromJson = (recipes) => {
        return recipes.map(({
            _id, houseId, title, numberOfEaters, description, isPublic, image, date, duration, stapes, ingredients
        }) => {
            return new Recipe(
                _id, houseId, title, numberOfEaters, description, isPublic, image, date, duration, stapes, ingredients
            )
        })
    }
}