import React from 'react';
import styles from './intro.module.css'

export default function Intro(props) {
    return (
        <div className={styles.person}>
            <img src='../../images/background.jpg'/>
            <div className={styles.name}>
                <span>Yusi Chen</span>
                <wbr /> | <wbr />
                <ruby>
                    <rb>陈</rb>
                    <rp>(</rp>
                    <rt>chén</rt>
                    <rp>)</rp>
                </ruby> 
                <ruby>
                    <rb>雨</rb>
                    <rp>(</rp>
                    <rt>yǔ</rt>
                    <rp>)</rp>
                </ruby>
                <ruby>
                    <rb>思</rb>
                    <rp>(</rp>
                    <rt>sī</rt>
                    <rp>)</rp>
                </ruby> 
            </div>
            <div className={styles.motto}>Act now and run fast</div>
        </div>
    );
}