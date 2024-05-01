import React, { useState } from 'react';
import MyHeader from '../ComponentsLayout/MyHeader';
import MyContent from '../ComponentsLayout/MyContent';
const AccountPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState('1');

    return (
        <div>
            <MyHeader selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            <MyContent selectedItem={selectedItem} />
        </div>
    );
};

export default AccountPage;
