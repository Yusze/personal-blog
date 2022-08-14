import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import styles from './intro.module.css'


export default function Intro(props) {
    return (
        <div className={styles.person}>
            <div className={styles.name}>
                <span>Yusi's Blog</span>
            </div>
            <div className={styles.motto}>Self-challenge and Can-do attitude</div>
        </div>
    );
}