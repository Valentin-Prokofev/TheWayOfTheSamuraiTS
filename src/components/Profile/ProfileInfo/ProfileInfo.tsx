import React from 'react';
import style from "./ProfileInfo.module.css";
import my_avatar from "../../../Image/my_avatar.jpg"
import {ProfileType} from "../../../Redux/profile-page-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import logo from "../../../Image/logo.jpg";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoPropsType = {
    name: string
    age: string
    city: string
    profile: ProfileType | null
    status: string
    updateStatusProfile: () => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    console.log(props.profile)
    return (
        <>
            <section className={style.user_account}>
                {!props.profile
                    ? <>< img className={style.user_photo}
                              src={my_avatar}
                              alt="my avatar"
                    />
                        <div className={style.user_description}>
                            <div className={style.user_name}>
                                <h3>{props.name}</h3>
                            </div>
                            <div className={style.user_date}>
                                <span>{props.age}</span>
                                <p>{props.city}</p>
                            </div>
                            <ProfileStatus status={props.status} updateStatusProfile={props.updateStatusProfile}/>
                        </div>
                    </>
                    :
                    <div><img src={props.profile.photos.large !== null ? props.profile.photos.large : logo}
                            alt="userPhoto"/>
                        <ProfileStatus status={props.status} updateStatusProfile={props.updateStatusProfile}/>
                    </div>
                }
            </section>
        </>
    );
};

