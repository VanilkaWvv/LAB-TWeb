import {Layout} from "antd";
import React, {useState} from "react";
import MyHeader from "./ComponentsLayout/MyHeader";
import MyContent from "./ComponentsLayout/MyContent";
import MyFooter from "./ComponentsLayout/MyFooter";
const App: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState('1');
  return (
      <Layout>
          <MyHeader selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          <MyContent selectedItem={selectedItem} />
        <MyFooter/>
      </Layout>
  );
};
export default App;