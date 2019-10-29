import "./Home.css";
import React from "react";
import { Carousel,Typography,Layout} from 'antd';



function template() {
  const { Text,Title ,Paragraph} = Typography;
  const {  Content, Footer } = Layout;


  return (

    <div>
    <Layout className="layout">
          <Content style={{ padding: '0 50px' }}>
                < Title level={2}>Preface</Title>
                       <Paragraph>
      The technology used to develop this website  are <Text strong>Django (Python Framework) for the backend, the Django-REST-Framework (DRF), React JS (for the frontend), Redux and Postgresql Database.</Text>
      This project is set up for development and deployment by <Text strong>nginx, gunicorn and Docker. </Text> 
                     </Paragraph>
                    <Paragraph>
                    During development, we can use WSGi server of 
                    Django but for  the deployment we need Green Unicorn (Gunicorn) is a Python WSGI server that runs Python web application code. And to handle Static files of ReactJs 
                    i used Nginx and for the deployment to AWS we have to dockerize it into a container. I had deployed in Heroku app so the need of Nginx  and docker but the docker code is available in  Github.
        </Paragraph>
  <Paragraph>
        You can  <Text strong>Download </Text> this project by  Github link provided below and just run the command <Text strong>docker-compose up </Text> in the folder directory which contains a docker-compose.yml file and make sure 
  that in your system docker and docker-compose is installed. <Text strong><a href="https://github.com/juned8236/reactJsDjango"> Github </a>  </Text>
  </Paragraph>

                         
               
              <Title level={2}>Skills</Title>
              <Carousel autoplay  >
        <div>
        <img src="https://res.cloudinary.com/dmms6miol/image/upload/v1572301345/VsCode-Python-Flask-930x403_1_ip9n7j.png" width= '100%' height='225px' />
          </div>
          <img src="https://res.cloudinary.com/dmms6miol/image/upload/v1572296440/jd/django_q35iz5.jpg
" width= '100%' height='225px' />
          <div>
          <img src="https://res.cloudinary.com/dmms6miol/image/upload/v1572296443/jd/react-js_spjgsi.jpg" width= '100%' height='225px' />
          </div>
          <div>
          <img src="https://res.cloudinary.com/dmms6miol/image/upload/v1572296448/jd/web_tech_m3nxds.jpg" width= '100%' height='225px' />
          </div>      
              </Carousel>  
      </Content>

      </Layout>
      <Footer style={{ textAlign: 'center' }}>Portfolio ©2019 Created by Juned Ahmed Rizvi  Contact Number : +91 7075421108 Email Id : 2803juned@gmail.com</Footer>
    </div>
      
       
      );
    };
export default template;
