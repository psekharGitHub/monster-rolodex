/** What this function means ?
 *  getData is going to receive some type 'T' and this type 'T' is what this function is going to
 *  return inside of a promise
 */
export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}