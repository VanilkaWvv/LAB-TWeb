import React, { useState } from 'react';
import {Breadcrumb, Button, Form, Input, Layout, Menu, theme} from 'antd';

const { Item: MenuItem } = Menu;
const { Header, Content, Footer } = Layout;

const cardNumbers = ['9834 5678 1234 8765', '5432 1098 2468 7531', '7890 4321 5678 9012'];
const names = ['John Smith', 'Alice Johnson', 'Bob Williams', 'Emily Davis'];
const expirations = ['01/23', '04/25', '09/22', '12/26'];
const cvcNumbers = ['123', '456', '789', '321'];

const items = new Array(3).fill(null).map((_, index) => ({
    key: (index + 1).toString(),
    NrCard: `Card ${index + 1}`,
    NumberOfCard: cardNumbers[Math.floor(Math.random() * cardNumbers.length)],
    DateOfExpire: expirations[Math.floor(Math.random() * expirations.length)],
    NameOfOwner: names[Math.floor(Math.random() * names.length)],
    CVC: cvcNumbers[Math.floor(Math.random() * cvcNumbers.length)],
}));

const CustomForm: React.FC = () => {
    // Add your form logic here
    const onFinish = (values: any) => {
        // Handle form submission logic
        console.log('Form submitted with values:', values);
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item label="Card Number" name="cardNumber" rules={[{ required: true, message: 'Please enter Card Number' }]}>
                <Input placeholder="Enter Card Number" />
            </Form.Item>
            <Form.Item label="Expiry Date" name="expiryDate" rules={[{ required: true, message: 'Please enter Expiry Date' }]}>
                <Input placeholder="Enter Expiry Date" />
            </Form.Item>
            <Form.Item label="CVC" name="cvc" rules={[{ required: true, message: 'Please enter CVC' }]}>
                <Input placeholder="Enter CVC" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
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
