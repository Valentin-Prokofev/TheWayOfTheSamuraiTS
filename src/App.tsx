import React from 'react';
import './App.css';

function App() {
    return (
        <div className={"app-wrapper"}>
            <header className={"header"}>
                <img className={"img_logo"} src="http://dimitrovgrad.ru/upload/medialibrary/527/gerb.jpg" alt="gerb"/>
            </header>
            <nav className={"nav"}>
                <ul>
                    <li className={"nav-link"}><a href={"#"}>Profile</a></li>
                    <li className={"nav-link"}><a href={"#"}>Messages</a></li>
                    <li className={"nav-link"}><a href={"#"}>News</a></li>
                    <li className={"nav-link"}><a href={"#"}>Music</a></li>
                    <li className={"nav-link"}><a href={"#"}>Settings</a></li>
                </ul>
            </nav>
            <article className={"content"}>
                <img className={"img_article"}
                     src="https://ic.pics.livejournal.com/zdorovs/16627846/985307/985307_original.jpg" alt="view"/>
                <section className={"user_account"}>
                    <img className={"user_photo"}
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwvqXSZyFyfebAfdXYnV5N_fmHzZggXi3hg&usqp=CAU"
                         alt=""/>
                    <div className={"user_description"}>
                        <div className={"user_name"}>
                            <h3>User Name</h3>
                        </div>
                        <div className={"user_data"}>
                            <p>User data Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minima, veniam? Fuga illum ipsum rem!</p>
                        </div>
                    </div>

                </section>
                <section className={"posts"}>
                    <div className={"new_post"}>New post</div>
                    <div className={"post1"}>Post1</div>
                    <div className={"post2"}>Post 2</div>
                    <div className={"post3"}>Post 3</div>
                </section>
            </article>
        </div>
    );
}

export default App;
