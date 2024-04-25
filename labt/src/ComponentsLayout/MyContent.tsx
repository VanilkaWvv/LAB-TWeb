import {Breadcrumb, theme} from "antd";
import {Layout} from "antd";
import React from "react";
import {items} from "./MyHeader";
import CustomForm from "../ComponentForm/CustomForm";
import MyUser from "../User/MyUser";
import UserInfo from "../User/SignUpUser";

const {Content} = Layout;

interface MyContentProps {
    selectedItem: string;
}

const MyContent = ({ selectedItem }: MyContentProps) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const selectedCard = items.find((item) => item.key.toString() === selectedItem);

    return(
        <Content style={{ padding: '0 48px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>uwu</Breadcrumb.Item>
                <Breadcrumb.Item>site</Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >{selectedItem === 'local'? (
                    <UserInfo/>
                ):
                selectedItem === 'user'? (
                <MyUser/>
                ):
                selectedItem === 'form' ? (
                <CustomForm />
            ) : (
                <>
                    <h2>Number of card: {selectedCard?.date.NumberOfCard}</h2>
                    <p>Date of Expire: {selectedCard?.date.DateOfExpire}</p>
                    <p>Name of Owner: {selectedCard?.date.NameOfOwner}</p>
                    <p>CVC: {selectedCard?.date.CVC}</p>
                </>
            )}
            </div>
        </Content>
    );
}
export default MyContent;
