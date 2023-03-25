import React, { Component } from 'react';

const initData = {
    // sub_heading: "PledgeChain",
    heading: "A Blockchain Project To Secure Users",
    content: "PledgeChain is coming to users interest and make cryptospace more secure and safe",
    intro_img: "/img/intro.png",
}

class Hero extends Component {
    state = {
        initData: {}
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <section className="hero-section mb-4">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-6 col-lg-9 text-center">
                        {/* Hero Content */}
                        <div className="hero-content">
                        <div className="intro text-center mb-5">
                            {/* <span className="intro-text" style={{fontSize: "30px"}}>{this.state.initData.sub_heading}</span> */}
                            <div className="col-12 col-md-12 col-xl-12 text-center mt-5">
                                    <img src={this.state.initData.intro_img} alt="pledgechain" style={{height: "100px", width: "100px"}} />
                                </div>
                            <h1 className="mt-4">{this.state.initData.heading}</h1>
                            <p>{this.state.initData.content}</p>
                        </div>
                        {/* Buttons */}
                        <div className="button-group">
                            <a className="btn btn-bordered active smooth-anchor" href="#explore"><i className="icon-note mr-4" />Know More</a>
                            <a className="btn btn-bordered active d-inline-block" href="https://pledgechain.gitbook.io/pledge-protocol-whitepaper/" target="_blank" rel="noreferrer"><i className="icon-paper-plane mr-2" />WhitePaper</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;