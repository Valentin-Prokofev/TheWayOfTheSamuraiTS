import React, {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from 'react'
import styles from './FormControls.module.css'
import {WrappedFieldProps} from "redux-form/lib/Field";

type DefaultTextareaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type TextareaPropsType = DefaultTextareaPropsType & WrappedFieldProps

export const Textarea: React.FC<TextareaPropsType> = ({ input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div><textarea {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

type InputPropsType = DefaultInputPropsType & WrappedFieldProps

export const Input: React.FC<InputPropsType> = ({ input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>

            <div><input {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}