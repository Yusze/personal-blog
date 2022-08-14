import React, { Fragment, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { Breadcrumb, Layout, Menu, Row, Col, List, Avatar, BackTop} from 'antd';
import Icon, {
  FolderOpenOutlined,
  CalendarOutlined,
  UpOutlined
} from '@ant-design/icons';
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Intro from '../components/Intro/index.js'
import servicePath from '../config/apiURL'
import CustomMenu from '../components/customMenu';
import {PandaIcon} from '../components/costumIcon';

const { Header, Content, Footer, Sider } = Layout;

export default function Home(list) {
  const renderer = new marked.Renderer()

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartlists: true,
    highLight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })
  const [myList, setMyList] = useState(list.data)
  return (
    <Layout
      style={{
        minHeight: '100vh',
        backgroundColor:'#fff',
        margin:'0px'
      }}
    >
      <Header style={{width:"100%", height:"20%", backgroundColor:'#1890ff'}}>
        <Intro />
      </Header>
    
      <Layout>
        <Header style={{backgroundColor:'#fff'}}>
          <CustomMenu></CustomMenu>
        </Header>
        <Content style={{backgroundColor:'#fff'}}>
          <Row className='comm-main' type='flex' justify='center'>
            <Col className='comm-left' xs={24} sm={24} md={16} lg={16} xl={14}>
              <div className='icon-box'>
                  <PandaIcon
                    style={{
                    fontSize: '24px',
                  }}
                  /> 
                  <span className='icon-title'>The most recent:</span> 
              </div>
               <List
                 itemLayout='vertical'
                 dataSource={myList}
                 renderItem={(item) => (
                    <List.Item>
                        <div className='list-title'>
                          <Link href={{pathname: '/detailed', query: { id: item.id }}}>
                            <a>{item.title}</a>
                          </Link>
                        </div>
                        <div className='list-icon'>
                            <span className='date'><CalendarOutlined />&nbsp;{ item.add_time}</span>
                            <span className='type'><FolderOpenOutlined />&nbsp;{ item.typeName}</span>
                        </div>
                        <div className='list-context' dangerouslySetInnerHTML={{__html:marked(item.introduction)}}></div>
                    </List.Item>
                  )}
                />
           </Col>
          </Row>
        </Content>
      </Layout>
      <BackTop>
        <div className='back2top'><UpOutlined /></div>
      </BackTop>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then(
      (response) => {
        resolve(response.data);
      }
    )
  })
  return await promise;

}
