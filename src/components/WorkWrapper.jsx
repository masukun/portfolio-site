import React from "react";
import portfolioImg1 from '../assets/img/image3.png'
import portfolioImg2 from '../assets/img/image4.png'
import portfolioImg3 from '../assets/img/image5.png'

const WorkWrapper = () => {
    return (
        <>
            <div class="work-wrapper">
                <div class="container">
                    <h1 class="main-logo"><a id="works">Works</a></h1>
                    <p>過去の制作物の一部をご紹介します。</p>
                    <div class="work-contents">
                        <a href="https://masukun.github.io/anime-portfolio-site/"><img src={portfolioImg1}></img></a>
                        <a href="https://masukun.github.io/quiz-portfolio-site/"><img src={portfolioImg2}></img></a>
                        <a href="https://gerenn.com/"><img src={portfolioImg3}></img></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkWrapper;