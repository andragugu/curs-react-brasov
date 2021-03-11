export function bookReducer(state, action) {
    switch (action.type) {
        case 'fetchBookPending': {
            return {
                status: 'pending', book: null, error: null
            }
        }
        case 'fetchedBookSuccess': {
            return {
                status: 'resolved', book: action.book, error: null
            }
        }
        case 'fetchedBookFailed': {
            return {
                status: 'rejected', book: null, error: action.error
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}
