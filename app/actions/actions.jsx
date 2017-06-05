//Next generation action generators
//---------------------------------------

export const initialize = (index, element) => {
    return {
        type : 'INITIALIZE',
        index,
        element
    }
}


export const moveHeroUp = (index) => {
    return {
        type : 'MOVE_UP',
        index
    }
}

export const moveHeroDown = (index) => {
    return {
        type : 'MOVE_DOWN',
        index
    }
}
export const moveHeroRight = (index) => {
    return {
        type : 'MOVE_RIGHT',
        index
    }
}
export const moveHeroLeft = (index) => {
    return {
        type : 'MOVE_LEFT',
        index
    }
}

export const clearHero = () => {
    return {
        type : 'CLEAR_HERO'
    }
}


