export const selectTravelStyleOptions = [
    { 
        id: '1',
        title: 'Just Me', 
        desc: 'Solo travel adventure',
        icon: '👤',
        people: '1'
    },

     { 
        id: '2',
        title: 'A Couple', 
        desc: 'Two in tandem',
        icon: '👫',
        people: '2 people'
    },

    { 
        id: '3',
        title: 'Family', 
        desc: 'Fun family adventure',
        icon: '👨‍👩‍👧',
        people: '3-5 people'
    },
    { 
        id: '5',
        title: 'Group', 
        desc: 'Great for friends',
        icon: '🏔️',
        people: 'Over 5 people'
    }
]

export const selectBudgetOptions = [
    {
        id: '1',
        title: 'Cheap',
        desc: 'Affordable travel for cost-conscious explorers',
        icon: '💸'
    },
    {
        id: '2',
        title: 'Moderate',
        desc: 'Balanced comfort and value',
        icon: '💰'
    },
    {
        id: '3',
        title: 'Luxury',
        desc: 'Premium experiences and indulgence',
        icon: '👑'
    }
]  

export const AI_PROMPT = "Generate travel plan for location: {location}, for {noOfDays} days for {travelStyle} with a {budget} budget. Give me hotels options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating and description. Suggest itinerary with place name, place details, place image url, geo coordinates, ticket price, rating, time to travel to each location for {noOfDays} days with each day plan with best time to visit in JSON format. Use camelcase for all names. "