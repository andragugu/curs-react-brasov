export async function getBooks() {
    const response = await fetch('api/v1/books');
    if(response.ok) return response.json();
    throw response;

}