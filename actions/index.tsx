import {SEARCH, FILTER, SORTBY, SORTBYOPT, FILTEROPT} from './types'

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