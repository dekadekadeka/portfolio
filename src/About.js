import React from 'react';
import pic from './images/about-me2.jpg'
import { FaLinkedin, FaGithub, FaMediumM, FaTwitter } from 'react-icons/fa'

const About = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="about-me-info">
                <article className="pic">
                    <img src={pic} alt="Deka"/>
                </article>
                <article className="info">
                    <p>I first discovered coding and web development back in 1999, when the internet was still wild
                        and there were few options beyond HTML and the original vanilla JavaScript.
                    </p>
                    <p>
                        I re-discovered this wonderful world in January of 2019, and it was nothing like how it was when
                        I left it about 15 years prior. I studied on my own at first, and in April 22, 2019 I joined
                        Flatiron School here in Atlanta, GA to learn full-stack web development.
                    </p>
                    <p>
                        My background in government security and hospitality gives me a unique perspective on the 
                        intricacies, attention to detail, and general mentality needed to code effectively. My personal
                        hobbies, which include sewing, knitting, and crochet, have a lot in common with coding. The learning 
                        process is almost identical (Google, Youtube, and A LOT of repetitive practice) and in my experience,
                        they all stimulate the same parts of the brain and offer similar challenges.
                    </p>
                    <p>
                        I enjoy coding for the freedom of choice it gives me in creating applications and in life.
                        It opens up opportunities I would not have otherwise. It opened up a whole new world for me.
                    </p>
                    <p>
                        The greatest thing I've ever done was pursue web development.
                    </p>
                <div className="social">
                    <a href="https://github.com/dekadekadeka/"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/renee-deka-ambia-96731773/"><FaLinkedin/></a>
                    <a href="https://medium.com/@dekadekadeka"><FaMediumM/></a>
                    <a href="https://twitter.com/dekadekadeka/"><FaTwitter/></a>
                </div>
                </article>
            </div>
        </div>
    );
}

export default About;
