import React from 'react';
import style from "./Dialogs.module.css";
import {DialogsUsers} from "./DialogsUsers/DialogsUsers";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.messagesPage

    let dialogsUsersElements = state.dialogsUsersData.map((user) =>
        <DialogsUsers key={user.id} name={user.name} id={user.id}/>)

    let dialogsMessagesElements = state.dialogsMessagesData.map((message) =>
        <DialogsMessages
            key={message.id}
            message={message.message}
        />)

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <>
            <section className={style.section_dialogs}>
                <ul className={style.dialogs_users}>
                    {dialogsUsersElements}
                </ul>
                <ul className={style.dialogs_messages}>
                    <div>{dialogsMessagesElements}</div>
                </ul>
            </section>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </>
    );
};

type AddMessageFormType = {

}

const maxLength15 = maxLengthCreator(15)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newMessageBody"}
                    placeholder={"Enter your message"}
                    validate={[required, maxLength15]}
                />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm)



