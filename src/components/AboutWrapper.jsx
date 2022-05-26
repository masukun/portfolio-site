import React from "react";
import profileImg from '../assets/img/IMG_3648.JPG';

const AboutWrapper = () => {
    return (
        <>
            <div className="about-wrapper">
                <div className="container">
                    <h1 className="main-logo"><a id="about">about</a></h1>
                    <div className="contents">
                        <div className="myphoto">
                            <img src={profileImg}></img>
                        </div>
                        <div className="about-text">
                            <p className="name">山野　涼晴<span className="name2">Yamano Ryosei</span></p>
                            
                            <p class="main-text">三重県出身。愛知県の名城大学に通う大学1回生。2021年5月上旬に、コロナウイルスによる自粛期間を通してWeb制作を学び始めました。モノづくりを通して人に喜んでもらうこと、お役に立てることを目指してます。言語はHTML,CSS,Javascript,php,Wordpressを使うことが出来ます。</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutWrapper;