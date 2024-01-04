import React, { FC } from "react";
import {Icon24PhoneAddOutline,} from '@vkontakte/icons';
import styles from './MessageContainer.module.css';


interface IContainer<T> {
    item : T[]
    itemNode: (item : T) => React.ReactNode
}

const MessageContainer : FC<IContainer> = ({item}) => {
    return (
        <>
        <div className={styles.container}>
            
        </div>
        </>
    )
}
 
export default MessageContainer;