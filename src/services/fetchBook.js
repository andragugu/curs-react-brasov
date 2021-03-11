const formatDate = date =>
    `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
        date.getSeconds(),
    ).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`

export function fetchBook(id) {

    console.log(id, 'helllo');

    return window
        .fetch(`api/v1/books/${id}`)
        .then(async response => {
            const {data} = await response.json()
            if (response.ok) {
                const book = data;
                console.log(data, 'helllo')
                if (book) {
                    book.fetchedAt = formatDate(new Date())
                    return book
                } else {
                    return Promise.reject(new Error(`No book with the id "${id}"`))
                }
            } else {
                const error = {
                    message: data?.errors?.map(e => e.message).join('\n'),
                }
                return Promise.reject(error)
            }
        })
}
