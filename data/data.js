export const USER = 'USER';

export function createUser() {

}

export function findById(items, id) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function getUser() {
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

export function setUser() {
    const userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}

export function addToDo() {


}