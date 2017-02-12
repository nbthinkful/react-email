import React from 'react';
import MAILS from '../mails';
import Mail from './mail';


export default function MailContainer(props) {
    const mails = MAILS[props.folder];
    let content="";
    
    if (mails != undefined) {
        content = Object.keys(mails).map((id,index) => {
            let mailItem = mails[id];

            return (
                <Mail key={index} id={mailItem.id}
                    from={mailItem.from}
                    to={mailItem.to}
                    subject={mailItem.title}
                    content={mailItem.content}/>
            );
        });
    };

    return(
        <div className="content">
            <div><b>{props.folder}</b></div>
            {content}
        </div>
    );
}