let nextBookId = 0

export const activateGeod = geod => ({
    type: 'ACTIVATE_GEOD',
    geod,
});

export const closeGeod = () => ({
    type: 'CLOSE_GEOD',
});

export const addBook = title => ({
    type: 'ADD_BOOK',
    title,
    id: nextBookId++
})

export const deleteBook = id => ({
    type: 'DELETE_BOOK',
    id
})