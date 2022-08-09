import { Avatar, Divider } from 'antd'
import {GithubOutlined, WechatOutlined, WeiboOutlined} from '@ant-design/icons'
import ImageAvatar from '../../public/images/avatar.jpg'

export default function Author () {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src='../../images/avatar.jpg' /></div>
            <div className='author-introduction'>
                Act Now! Run fast!
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className='account'/>
                <Avatar size={28} icon={<WechatOutlined />} className='account'/>
                <Avatar size={28} icon={<WeiboOutlined />} className='account'/>
            </div>
        </div>
    )
}