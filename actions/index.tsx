import {SEARCH, FILTER, SORTBY, SORTBYOPT, FILTEROPT, NEXT, PREVIOUS, GO_TO_INDEX} from './types'

export const sortBy:(dispatch:any, sortByOption:SORTBYOPT)=>void = (dispatch, sortByOption) => {
    dispatch({
        type: SORTBY,
        payload: sortByOption
    })
}

export const filter:(dispatch:any, filterTerm:FILTEROPT)=>void = (dispatch, filterTerm) => {
    dispatch(
        {
            type: FILTER,
            payload: filterTerm
        }
    )
}

export const search:(dispatch:any, searchTerm:string)=>void = (dispatch, searchTerm) => {
    dispatch(
        {
            type: SEARCH,
            payload: searchTerm
        }
    )
}

export const next:(dispatch:any)=>void = (dispatch) => {
    dispatch({
        type: NEXT,
        payload: null
    })
}

export const previous:(dispatch:any)=>void = (dispatch) => {
    dispatch({
        type: PREVIOUS,
        payload: null
    })
}

export const goToIndex:(dispatch:any, index:number)=>void = (dispatch:any, index:number)=>{
    dispatch({
        type:GO_TO_INDEX,
        payload: index
    })
}