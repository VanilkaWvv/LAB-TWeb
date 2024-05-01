import {Layout} from "antd";
import React, {useState, useEffect} from "react";
import MyHeader from "./ComponentsLayout/MyHeader";
import MyContent from "./ComponentsLayout/MyContent";
import MyFooter from "./ComponentsLayout/MyFooter";
import { MyComponent } from './storage/StoreProvider';
import { getFromLocalStorage, saveToLocalStorage } from './storage/LocalStorage';

const App: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState('1');
    useEffect(() => {
        let users = getFromLocalStorage('users');
        if (!users) {
            users = [
                { username: 'user1', password: 'password1' },
                { username: 'user2', password: 'password2' },
            ];
            saveToLocalStorage('users', users);
        }
    }, []);
    return (
        <MyComponent>
            <Layout>
                <MyHeader selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                <MyContent selectedItem={selectedItem}/>
                <MyFooter/>
            </Layout>
        </MyComponent>
    );
};
export default App;
