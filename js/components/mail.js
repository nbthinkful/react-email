import React from 'react'

export default function Mail(props) {
    return (
        <div className="mail">
            <div>{props.id}</div>
            <div>From: {props.from}</div>
            <div>To: {props.to}</div>
            <div>Subject: {props.subject}</div>
            <div>
                {props.content}
            </div>
        </div>
    )
}