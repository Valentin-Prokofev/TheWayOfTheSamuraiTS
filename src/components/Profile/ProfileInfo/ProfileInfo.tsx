import React from 'react';
import style from "./ProfileInfo.module.css";

type ProfileInfoPropsType = {
    name: string
    age: string
    city: string
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <>
            <section className={style.user_account}><img className={style.user_photo}
                                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwvqXSZyFyfebAfdXYnV5N_fmHzZggXi3hg&usqp=CAU"
                                                         alt=""/>
                <div className={style.user_description}>
                    <div className={style.user_name}>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={style.user_date}>
                        <span>{props.age}</span>
                        <p>{props.city}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

