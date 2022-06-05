import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reduser";

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
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export type LoginPropsType = MapDispatchPropsType

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

export default connect(null, {login})(Login)
