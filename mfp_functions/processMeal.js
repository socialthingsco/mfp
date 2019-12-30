const convertToNumber = require('./helper-utils').convertToNum;


const ItemType = {
    Meal: 'Meal',
    Food: 'Food',
    Nutrition: 'Nutrition',
}

exports.processItems = (items) => {
    if (items.length == 0) {
        return [];
    }

    const indexOfBreakfast = items.findIndex((item) => {
        return item.data == 'Breakfast'
    });

    const indexOfLunch = items.findIndex((item) => {
        return item.data == 'Lunch'
    });

    const indexOfDinner = items.findIndex((item) => {
        return item.data == 'Dinner'
    });

    const indexOfCardiovascular = items.findIndex((item) => {
        return item.data == 'Cardiovascular'
    });

    let breakfast = [];
    let lunch = [];
    let dinner = [];

    if (indexOfBreakfast != -1) {
        // They ate something for breakfast   
        for (var i = indexOfBreakfast + 1; i < (indexOfLunch != -1 ? Math.min(indexOfLunch, indexOfCardiovascular) : indexOfCardiovascular); i += 9) {
            const food     = items[i].data;
            const calories = items[i + 1].data
            const carbs    = items[i + 2].data
            const fat      = items[i + 3].data
            const protein  = items[i + 4].data
            const cholesterol  = items[i + 5].data
            const sodium   = items[i + 6].data
            const sugar   = items[i + 7].data
            const fiber    = items[i + 8].data
            const breakfastItem = {
                food,
                calories,
                carbs,
                fat,
                protein,
                cholesterol,
                sodium,
                sugar,
                fiber,
            }
            breakfast.push(breakfastItem);
            console.log(`BREAKFAST: ${food} - ${calories} calories - ${carbs} carbs - ${fat} fat - ${protein} protein - ${cholesterol} cholesterol - ${sodium} sodium - ${sugar} sugar - ${fiber} fiber`)
        }
    }

    if (indexOfLunch != -1) {
        // They ate something for breakfast   
        for (var i = indexOfLunch + 1; i < (indexOfDinner != -1 ? Math.min(indexOfDinner, indexOfCardiovascular) : indexOfCardiovascular); i += 9) {
            const food     = items[i].data;
            const calories = items[i + 1].data
            const carbs    = items[i + 2].data
            const fat      = items[i + 3].data
            const protein  = items[i + 4].data
            const cholesterol  = items[i + 5].data
            const sodium   = items[i + 6].data
            const sugar   = items[i + 7].data
            const fiber    = items[i + 8].data
            const lunchItem = {
                food,
                calories,
                carbs,
                fat,
                protein,
                cholesterol,
                sodium,
                sugar,
                fiber,
            }
            lunch.push(lunchItem);
            console.log(`LUNCH: ${food} - ${calories} calories - ${carbs} carbs - ${fat} fat - ${protein} protein - ${cholesterol} cholesterol - ${sodium} sodium - ${sugar} sugar - ${fiber} fiber`)
        }
    }

    if (indexOfDinner != -1) {
        // They ate something for breakfast   
        for (var i = indexOfDinner + 1; i < Math.min(indexOfCardiovascular); i += 9) {
            const food     = items[i].data;
            const calories = items[i + 1].data
            const carbs    = items[i + 2].data
            const fat      = items[i + 3].data
            const protein  = items[i + 4].data
            const cholesterol  = items[i + 5].data
            const sodium   = items[i + 6].data
            const sugar   = items[i + 7].data
            const fiber    = items[i + 8].data
            const dinnerItem = {
                food,
                calories,
                carbs,
                fat,
                protein,
                cholesterol,
                sodium,
                sugar,
                fiber,
            }
            dinner.push(dinnerItem);
            console.log(`DINNER: ${food} - ${calories} calories - ${carbs} carbs - ${fat} fat - ${protein} protein - ${cholesterol} cholesterol - ${sodium} sodium - ${sugar} sugar - ${fiber} fiber`)
        }
    }

    return {
        breakfast,
        lunch,
        dinner,
    }
};

function typeOfItem(item) {
    if (item == 'Breakfast' || item == 'Lunch' || item == 'Dinner') {
        return ItemType.Meal 
    }


}