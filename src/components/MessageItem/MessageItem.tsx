import React, { FC } from "react";

interface IMessage {
    message : string
}
 
const MessageItem : FC<IMessage> = ({message}) => {
    return ( 
        <>
        hello
        </>
    )
}
 
export default MessageItem;