const deepCopy = (item) => {
    const copy = (item) => {
        let interiorCopy
        switch(item.constructor){
            case Object:{
                interiorCopy = {}
                break;
            }
            case Array:{
                interiorCopy = []
                break;
            }
            default:{
                return item
            }
        }

        for(let key in item){
            interiorCopy[key] = copy(item[key])
        }

        return interiorCopy
    }

    return copy(item)
}

export default deepCopy