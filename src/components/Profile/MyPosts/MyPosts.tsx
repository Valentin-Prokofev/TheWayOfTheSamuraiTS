import React from 'react';
import style from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postsData.postsData.map((post) =>
        <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    let addPost = (values: any) => { //Для контейнерной компоненты
        props.addPost(values.newMessageForMyPost)
    }

    return (
        <>
            <section className={style.my_posts}>
                <h3>My posts</h3>
                <MessageForMyPostReduxForm onSubmit={addPost}/>
                <div>
                    {postsElements}
                </div>
            </section>
        </>
    );
};

type MessageForMyPostType = {

}

const maxLength10 = maxLengthCreator(10)

const MessageForMyPost: React.FC<InjectedFormProps<MessageForMyPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newMessageForMyPost"}
                    validate={[required, maxLength10]}
                    placeholder={"Post message"}
                />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const MessageForMyPostReduxForm = reduxForm<MessageForMyPostType>({form: "myPostNewMessage"})(MessageForMyPost)
