import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import servicePath from '../../config/apiURL'
import '../../node_modules/antd/dist/antd.css'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined,  HeartOutlined } from '@ant-design/icons'

function CustomMenu() {
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
            console.log(result);
            setNavArray(result)
        }
        fetchData()
    }, []) // 后面这个方括号中放入当其改变就驱动执行前一个函数参数执行的值 当它为空时是指组件第一次挂载时才执行前面的函数
    
    
    const handleClick = (e) => {
        if (e.key == 0)
        {   
            console.log(e.key)
            Router.push('/') // 对应地址是/ 而不是index
        } else {
            console.log(e);
            console.log('/list?id=' + e.key);
            Router.push('/list?id=' + e.key)
        }
    }
    return (
        <div className='header'>
            <Row type='flex' justify='center'>
                <Col xs={0} sm={0} md={16} lg={16} xl={16}>
                    <Menu className="navbar" mode='horizontal' onClick={handleClick} style={{justifyContent:"center"}}>
                        <Menu.Item key="0">
                            <HomeOutlined/>
                            &nbsp;Home
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                return (
                                    <Menu.Item key={item.Id}>
                                        <HeartOutlined />
                                        &nbsp;{ item.typeName}
                                    </Menu.Item>
                                )                                
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default CustomMenu