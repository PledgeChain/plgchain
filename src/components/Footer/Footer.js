import React, { Component } from 'react';

const data = {
    "img": "/img/logo.png",
    "copyright": "©2023 PledgeChain, All Rights Reserved By",
    "owner": "Pledge Foundation",
    "ownerLink": "https://pledgechain.live",
    "socialData": [
      {
        "id": 1,
        "link": "https://www.facebook.com/profile.php?id=100089626659889",
        "icon": "icon-social-facebook"
      },
      {
        "id": 2,
        "link": "https://twitter.com/Pledge4dev",
        "icon": "icon-social-twitter"
      },
      {
        "id": 3,
        "link": "https://www.linkedin.com/company/pledgechain/",
        "icon": "icon-social-linkedin"
      },
    //   {
    //     "id": 4,
    //     "link": "https://www.youtube.com/",
    //     "icon": "icon-social-youtube"
    //   },
      {
        "id": 5,
        "link": "https://www.instagram.com/pledgechain/",
        "icon": "icon-social-instagram"
      },
      {
        "id": 6,
        "link": "https://github.com/balwinder1481",
        "icon": "icon-social-github"
      },
      {
        "id": 7,
        "link": "https://t.me/pledgechain",
        "icon": "icon-paper-plane"
      },
    //   {
    //     "id": 8,
    //     "link": "https://discord.com/",
    //     "icon": "icon-social-vkontakte"
    //   },
    ],
  }

class Footer extends Component {
    state = {
        data: {},
        socialData: [],
        widgetData: []
    }
    componentDidMount(){
        this.setState({
            data: data,
            socialData: data.socialData,
            widgetData: data.widgetData,
        })
    }
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 text-center">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Logo */}
                                <a className="navbar-brand" href="/">
                                    <img src={this.state.data.img} alt="brandlogo" />
                                </a>
                                {/* Social Icons */}
                                <div className="social-icons d-flex justify-content-center my-4">
                                    {this.state.socialData.map((item, idx) => {
                                        return (
                                            <a key={`fsd_${idx}`} className="facebook" href={item.link} target="_blank">
                                                <i className={item.icon} />
                                                <i className={item.icon} />
                                            </a>
                                        );
                                    })}
                                </div>
                                {/* Copyright Area */}
                                <div className="copyright-area py-4">{this.state.data.copyright} <a href="/" target="_blank">{this.state.data.owner}</a></div>
                            </div>
                            {/* Scroll To Top */}
                            <div id="scroll-to-top" className="scroll-to-top">
                                <a href="#header" className="smooth-anchor">
                                    <i className="fa-solid fa-arrow-up" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;