import React, { Component } from 'react';

const initData = {
    sub_heading: "Creative",
    heading: "Our Team",
    btn: "View Leaderboard"
}

const data = [
    {
        id: "1",
        img: "/img/team_1.png",
        name: "BSingh Wadhra",
        designation: "HODT",
        facebook: "https://facebook.com/balwinder1481/",
        instagram: "https://www.instagram.com/balwinder_1481/",
        twitter: "https://twitter.com/Balwind95679030",
        linkedin: "https://www.linkedin.com/in/bsinghwadhra/",
        facebookIcon: "icon-social-facebook",
        instagramIcon: "icon-social-instagram",
        twitterIcon: "icon-social-twitter",
        linkedinIcon: "icon-social-linkedin"

    },
    {
        id: "2",
        img: "/img/team_2.png",
        name: "Sonu Charan",
        designation: "Project Manager",
        facebook: "https://www.facebook.com/sonu1899",
        instagram: "https://instagram.com/sonucharanch",
        twitter: "https://twitter.com/SonuCharan0306",
        linkedin: "https://www.linkedin.com/in/sonu-charan0306/",
        facebookIcon: "icon-social-facebook",
        instagramIcon: "icon-social-instagram",
        twitterIcon: "icon-social-twitter",
        linkedinIcon: "icon-social-linkedin"
    },
    {
        id: "3",
        img: "/img/team_3.png",
        name: "Sameep Singh",
        designation: "Front-End Designer",
        facebook: "https://www.facebook.com/profile.php?id=100026165521279",
        instagram: "https://instagram.com/king_universe85?igshid=ZDdkNTZiNTM",
        twitter: "https://twitter.com/MrSam5103737409",
        linkedin: "https://www.linkedin.com/in/mr-sam-547231263",
        facebookIcon: "icon-social-facebook",
        instagramIcon: "icon-social-instagram",
        twitterIcon: "icon-social-twitter",
        linkedinIcon: "icon-social-linkedin"
    },
    {
        id: "4",
        img: "/img/team_4.png",
        name: "Arun Singh",
        designation: "Graphics Designer",
        facebook: "https://www.facebook.com/profile.php?id=100057873066869&mibextid=ZbWKwL",
        instagram: "https://instagram.com/itz_ashh69",
        twitter: " https://twitter.com/Ashwin_1331",
        linkedin: "https://www.linkedin.com/in/ashwin-singh-7996a7259",
        facebookIcon: "icon-social-facebook",
        instagramIcon: "icon-social-instagram",
        twitterIcon: "icon-social-twitter",
        linkedinIcon: "icon-social-linkedin"
    },
    {
        id: "5",
        img: "/img/team_5.png",
        name: "Arham Hasan",
        designation: "Analyst",
        facebook: "https://facebook.com/balwinder1481/",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        facebookIcon: "icon-social-facebook",
        instagramIcon: "icon-social-instagram",
        twitterIcon: "icon-social-twitter",
        linkedinIcon: "icon-social-linkedin"
    }
]

const socialData = [
    {
        id: "1",
        icon: "icon-social-facebook"
    },
    {
        id: "2",
        icon: "icon-social-twitter"
    },
    // {
    //     id: "3",
    //     icon: "icon-social-linkedin"
    // },
    // {
    //     id: "4",
    //     icon: "icon-social-reddit"
    // }
]

class Team extends Component {
    state = {
        initData: {},
        data: [],
        socialData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data,
            socialData: socialData
        });
    }
    render() {
        return (
            <section className="team-area p-0 mb-4" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                            <div className="intro-content">
                                <span className="intro-text">Creative</span>
                                <h3 className="mt-3 mb-0">Our Team</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-slides">
                        <div className="swiper-container slider-min items">
                            <div className="swiper-wrapper">
                                {/* Single Slide */}
                                {this.state.data.map((item, idx) => {
                                    return (
                                        <div key={`td_${idx}`} className="swiper-slide item">
                                            {/* Team Card */}
                                            <div className="card team-card text-center">
                                            <a className="team-photo d-inline-block">
                                                <img className="mx-auto" src={item.img} alt="team" />
                                            </a>
                                            {/* Team Content */}
                                            <div className="team-content mt-3">
                                                <a>
                                                <h4 className="mb-0">{item.name}</h4>
                                                </a>
                                                <span className="d-inline-block mt-2 mb-3">{item.designation}</span>
                                                {/* Social Share */}
                                                <div className="social-share">
                                                    <ul className="d-flex justify-content-center list-unstyled">
                                                                <li>
                                                                    <a href={item.facebook} mr-2>
                                                                        <i className={item.facebookIcon} />
                                                                    </a>
                                                                    <a style={{marginLeft: '11px'}} href={item.instagram}>
                                                                        <i className={item.instagramIcon} />
                                                                    </a>
                                                                    <a style={{marginLeft: '11px'}} href={item.twitter} mr-2>
                                                                        <i className={item.twitterIcon} />
                                                                    </a>
                                                                    <a style={{marginLeft: '11px'}} href={item.linkedin}>
                                                                        <i className={item.linkedinIcon} />
                                                                    </a>
                                                                </li>   
                                                    </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;