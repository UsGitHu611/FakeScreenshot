import React, { FC } from "react";
import style from './MessageContainer.module.css';
import MessageItem from "../MessageItem/MessageItem";

interface IContainer<T> {
    item : T[]
    itemNode: (item : T) => React.ReactNode
}

const MessageContainer : FC<IContainer> = ({item}) => {
    return ( 
        <div>
            <MessageItem/>
        </div>
    )
}
 
export default MessageContainer;