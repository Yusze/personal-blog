import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navmenu from './Navmenu.js';
import servicePath from '../../config/apiURL';
import '../../node_modules/antd/dist/antd.css';
import './navbar.module.css'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [navArray, setNavArray] = useState([])
  useEffect(() => {
      const fetchData = async () => {
          const result = await axios({
              method:'get',
              url: servicePath.getTypeInfo,
              header:{ 'Access-Control-Allow-Origin':'*' }
          }).then(
              (res) => {
                  return res.data.data
              }
          )
          setNavArray(result)
      }
      fetchData()
  }, []) // 后面这个方括号中放入当其改变就驱动执行前一个函数参数执行的值 当它为空时是指组件第一次挂载时才执行前面的函数

  let items = navArray.map(
    (element)=>{
      return getItem(element.typeName, element.Id, <DesktopOutlined />)
    }
  );
  return (
    <div className='content'>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Navbar;