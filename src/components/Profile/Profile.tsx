import React from 'react';
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <>
            <article className={style.content}>
                <img className={style.img_article}
                     src="https://ic.pics.livejournal.com/zdorovs/16627846/985307/985307_original.jpg" alt="view"/>
                <section className={style.user_account}>
                    <img className={style.user_photo}
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwvqXSZyFyfebAfdXYnV5N_fmHzZggXi3hg&usqp=CAU"
                         alt=""/>
                    <div className={style.user_description}>
                        <div className={style.user_name}>
                            <h3>User Name</h3>
                        </div>
                        <div className={style.user_data}>
                            <p>User data Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minima, veniam?
                                Fuga
                                illum ipsum rem!</p>
                        </div>
                    </div>

                </section>
                <MyPosts/>
            </article>
        </>
    );
};
