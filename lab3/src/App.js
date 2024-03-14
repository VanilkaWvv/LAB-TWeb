import React, { useState } from 'react';
import {Breadcrumb, Button, Form, Input, Layout, Menu, theme} from 'antd';

const { Item: MenuItem } = Menu;
const { Header, Content, Footer } = Layout;

const generateRandomCardNumber = () => {
    let cardNumber = '';
    for (let i = 0; i < 16; i++) {
        cardNumber += Math.floor(Math.random() * 10);
        if ((i + 1) % 4 === 0 && i !== 15) {
            cardNumber += ' ';
        }
    }
    return cardNumber;
};
const generateRandomDateOfExpire = () => {
    let expireDate = '';
    expireDate += Math.floor(Math.random() * 2);
    if (expireDate === '1') expireDate += Math.floor(Math.random() * 2); else expireDate +=Math.floor(Math.random()*9)+1;
    expireDate += '/';
    expireDate += Math.floor(Math.random()*10)
    expireDate += Math.floor(Math.random()*10)
    return expireDate;
}

const generateRanndomCVC = () => {
    let CVC = '';
    CVC += Math.floor(Math.random()*1000);
    if (CVC < 100 && CVC > 9) CVC += '0'; else if (CVC <9 ) CVC += '00';
    return CVC;
}

const names = ['John Smith', 'Alice Johnson', 'Bob Williams', 'Emily Davis'];

const items = new Array(4).fill(null).map((_, index) => ({
    key: (index + 1).toString(),
    NrCard: `Card ${index + 1}`,
    NumberOfCard: generateRandomCardNumber(),
    DateOfExpire: generateRandomDateOfExpire(),
    NameOfOwner: names[Math.floor(Math.random() * names.length)],
    CVC: generateRanndomCVC(),
}));

const validateCVC = (_, value) => {
    if (!value) {
        return Promise.reject('Please enter CVC');
    }
    if (!/^\d{3}$/.test(value)) {
        return Promise.reject('Please enter a valid CVC (3 digits)');
    }

    return Promise.resolve();
};

const CustomForm: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState(null);

    const onFinish = (values: any) => {
        setFormSubmitted(true);
        setFormData(values);
        // Handle form submission logic
        console.log('Form submitted with values:', values);
    };

    const handleReset = () => {
        setFormData(null);
        setFormSubmitted(false);
    };

    return (
        <div>
            <Form onFinish={onFinish}>
                <Form.Item
                    label="Card Number"
                    name="cardNumber"
                    pattern="^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$"
                    rules={[
                        { required: true, message: 'Please enter Card Number' }
                    ]}>
                    <Input style={{width: '500px'}} placeholder="Enter Card Number" />
                </Form.Item>

                <Form.Item
                    label="Expiry Date"
                    name="expiryDate"
                    pattern="^(0[1-9]|1[0-2])\/[0-9]{2}$"
                    rules={[
                        { required: true, message: 'Please enter Expiry Date' }]}>
                    <Input style={{width: '500px'}} placeholder="Enter Expiry Date" />
                </Form.Item>

                <Form.Item
                    label="CVC"
                    name="cvc"
                    rules={[
                        { required: true, message: 'Please enter CVC' },
                        {validator: validateCVC}]}>
                    <Input style={{width: '500px'}} placeholder="Enter CVC" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>

                    <Button type="default" onClick={handleReset} style={{ marginLeft: '10px' }}>
                        Reset
                    </Button>

                </Form.Item>
            </Form>

            {formSubmitted && (
                <div>
                    <h2>Form Data:</h2>
                    <p>Card Number: {formData.cardNumber}</p>
                    <p>Expiry Date: {formData.expiryDate}</p>
                    <p>CVC: {formData.cvc}</p>
                </div>
            )}
        </div>
    );
};

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [selectedItem, setSelectedItem] = useState('1');

    const handleMenuItemClick = (item: any) => {
        setSelectedItem(item.key);
    };

    const selectedCard = items.find((item) => item.key === selectedItem);

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center'}}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    selectedKeys={[selectedItem]}
                    onClick={handleMenuItemClick}
                    style={{ flex: 1, minWidth: 0}}
                >
                    {items.map(item => (
                        <MenuItem key={item.key}>{item.NrCard}</MenuItem>
                    ))}
                    <MenuItem key="form">Form</MenuItem>
                </Menu>
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>{selectedItem === 'form' ? 'Form' : 'Content'}</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {selectedItem === 'form' ? <CustomForm /> : (
                        <>
                            <h2>Number of card: {selectedCard?.NumberOfCard}</h2>
                            <p>Date of Expire: {selectedCard?.DateOfExpire}</p>
                            <p>Name of Owner: {selectedCard?.NameOfOwner}</p>
                            <p>CVC: {selectedCard?.CVC}</p>
                        </>
                    )}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default App;
