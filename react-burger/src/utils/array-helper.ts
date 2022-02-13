import {TIngredientForConstructor} from "./types";

export function insertToArr(arr:Array<any>, index:number, newItem:TIngredientForConstructor) {
    return [...arr.slice(0, index), newItem, ...arr.slice(index)]
}

export function removeFromArray(arr:Array<any>, index:number) {
    const arr1 = [...arr].splice(0, index)
    const arr2 = [...arr].splice(index + 1)
    return [...arr1, ...arr2]
}

export function changeOrder(arr:Array<any>, dragIndex:number, hoverIndex:number) {
    // const dragIndex = arr.findIndex(item => item === 'x')
    const dragItem = arr[dragIndex]
    const result = [...arr];
    const resultWithoutOldItem = removeFromArray(result, dragIndex)
    //const hoverIndex = resultWithoutOldItem.findIndex(item => item === 'c')
    return insertToArr(resultWithoutOldItem, hoverIndex, dragItem)
}


