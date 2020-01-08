export const ADD_BOOK = 'ADD_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'

let nextBookId = 0

export const addBook = title => ({
    type: ADD_BOOK,
    title,
    id: nextBookId++
})

export const deleteBook = id => ({
    type: DELETE_BOOK,
    id
})