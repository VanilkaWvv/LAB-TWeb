import { MobXProviderContext } from 'mobx-react';
import React from 'react';
import UserStore from './modifyData';

const stores = {
    UserStore: new UserStore(),
};
interface MyComponentProps {
    children: React.ReactNode;
}
export const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
    return (
        <MobXProviderContext.Provider value={stores}>
            {children}
        </MobXProviderContext.Provider>
    );
};
