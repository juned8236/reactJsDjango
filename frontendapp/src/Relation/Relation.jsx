import "./Relation.css";
import React from "react";
import { Typography,Layout} from 'antd';


function template() {
  const {  Content } = Layout;
  const { Title ,Paragraph} = Typography;


  return (
    <div className="relation">
    <Layout className="layout">
          <Content style={{ padding: '0 50px' }}>
                
       < Title level={2}>Object-Relational Mapping (ORM)</Title>
                       <Paragraph>
                       Object-Relational Mapping   enables us to interact with  database, like
                        to create SQL query  and  for manipulating the  database and get results.
                                              </Paragraph>
          < Title level={2}>Django Relationship</Title>
                       <Paragraph> Django support these of relation :-
                       Many-to-many relationships, 
Many-to-one relationships,
One-to-one relationships ,Example of Many to one is covered in this page     

 Author can write multiple books and one book belongs to only one author. Please login see Dashboard            </Paragraph>
< Title level={4}>Username: demo   </Title>
< Title level={4}>Password: demo123456    </Title>
 <a href="https://juned8236.herokuapp.com/dashboard"> Click here to Login </a>


    
      </Content>

</Layout>

    </div>
  );
};

export default template;
