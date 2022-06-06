import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reduser";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from "../common/FormControls/FormControls.module.css"


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength50 = maxLengthCreator(50)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    name={"email"}
                    component={Input}
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <Field type="text" placeholder={"Password"} name={"password"} component={Input}
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <Field type="checkbox" component={Input} name={"rememberMe"}/> Remember me
            </div>
            {props.error && <div className={styles.form_summary_error}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export type LoginPropsType = MapDispatchPropsType & MapStatePropsType

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)
