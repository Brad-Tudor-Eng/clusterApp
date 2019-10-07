export const SEARCH:string = 'search'
export const SORTBY:string = 'sortby'
export const FILTER:string = 'filter'
export const NEXT:string = 'next'
export const PREVIOUS:string = 'previous'
export const GO_TO_INDEX:string = "goToIndex"

export enum SORTBYOPT{ RELEVANCY='relevancy', 
                    COST_LOW_TO_HIGH='costLowToHigh', 
                    COST_HIGH_TO_LOW='costHighToLow', 
                    DISTANCE="distance", 
                    DURATION="duration"
                }
export enum FILTEROPT{ CERTIFICATE= 'certificate', 
                    ASSOCIATES= 'associates', 
                    BACHLORES= 'bachlores'
                }