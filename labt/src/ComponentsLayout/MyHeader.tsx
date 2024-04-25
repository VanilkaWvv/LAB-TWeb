import {Layout, Menu} from 'antd';
import card from "../Component/Card";
import React from "react";
import { generateRandomCardNumber, generateRandomDateOfExpire, generateRandomCVC, names } from '../Component/GenerateRandomThings';
const { Item: MenuItem } = Menu;
const {Header} = Layout;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let listOfCard: card = {
    NumberOfCard:"",
    DateOfExpire:"",
    NameOfOwner:"",
    CVC:""
}

export const items = new Array(3).fill(null).map((_, index) => ({
    date: listOfCard ={
        NumberOfCard: generateRandomCardNumber(),
        DateOfExpire: generateRandomDateOfExpire(),
        NameOfOwner: names[Math.floor(Math.random() * names.length)],
        CVC: generateRandomCVC()
    },
    key: index + 1,
    label: `Card ${index + 1}`,
}));
interface MyHeaderProps {
    selectedItem: string;
    setSelectedItem: (item: string) => void;
}

export const MyHeader = ({ selectedItem, setSelectedItem }: MyHeaderProps) => {
    const handleMenuItemClick = (item: any) => {
        setSelectedItem(item.key);
    };
    return(
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                selectedKeys={[selectedItem]}
                onClick={handleMenuItemClick}
                style={{ flex: 1, minWidth: 0 }}
            >
                {items.map(item => (
                    <MenuItem key={item.key}>{item.label}</MenuItem>
                ))}
                <MenuItem key="form">Create Acount</MenuItem>
                <MenuItem key="user">User config</MenuItem>
                <MenuItem key="local">Local Storage</MenuItem>
            </Menu>
        </Header>
    );
}
export default MyHeader;