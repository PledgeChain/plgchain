import React, { Component } from 'react';


const data = {
    sub_heading: "How It Works",
    heading: "How To Participate",
    img: "/img/cta_thumb.png",
    title: "Purchase $PLG Now !",
    content: "Get access to huge community and become a contributor to bring blockchain technology to next level.",
    btn: "Buy Now",
    btnIcon: "icon-rocket mr-2",
  }

class Cta extends Component {
    state = {
        data: {},
    }
    componentDidMount(){
        this.setState({
            data: data,
        });
    }
    render() {
        return (
            <section className="cta-area p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 card">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12 col-md-5 text-center">
                                    <img src={this.state.data.img} alt="" />
                                </div>
                                <div className="col-12 col-md-6 mt-4 mt-md-0">
                                    <h2 className="m-0">{this.state.data.title}</h2>
                                    <p>{this.state.data.content}</p>
                                    <a className="btn btn-bordered active d-inline-block" href="https://plgswap.live/swap" target="_blank" rel="noreferrer"><i className={this.state.data.btnIcon} />{this.state.data.btn}</a>
                                </div>
                            </div>
                            <a className="cta-link" href="https://plgswap.live/swap" target="_blank" rel="noreferrer" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;