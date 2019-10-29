import "./Redux1.css";
import React from "react";
import { Table } from 'antd';
import { Typography,Layout} from 'antd';



function template() {
  const { Column } = Table;
  const { Title ,Paragraph} = Typography;
  const {  Content } = Layout;

  const { data } = this.props;

  return (
       <Layout className="layout">
          <Content style={{ padding: '0 50px' }}>
                
       < Title level={2}>Redux library</Title>
                       <Paragraph>
                       Redux is a   library for managing the state of  application.It is like a global object which holds information that you use for various purposes.</Paragraph>
                       <Paragraph>
Example:-  The below data in table i had stored in Redux store in the json format. That is not a hard coded data or data fetching from the Database, you can assured this in my GitHub Code.
                     </Paragraph>
     
      
      <Table dataSource={data}>
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
      
      </Table>
      </Content>

</Layout>
  );
};

export default template;
