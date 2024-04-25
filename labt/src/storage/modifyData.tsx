import { makeAutoObservable } from 'mobx';
import { saveToLocalStorage, getFromLocalStorage } from './LocalStorage';

interface User {
    username: string;
    password: string;
}

class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this);
        this.user = getFromLocalStorage('user');
    }

    setUser(user: User) {
        this.user = user;
        saveToLocalStorage('user', user);
    }
}

export default new UserStore();
