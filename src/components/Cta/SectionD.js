import React, { Component } from 'react';
const data = {
    img: "/img/logob.png",
    title: "Journey Starts Here",
    content: "In this effort we brought Pledge platform to public to demonstrate how these things could be possible in coming times. Pledge is an ecosystem where Pledge is a token deployed on polygon blockchain, Pledge Swap is a swap contract also deployed on polygon chain and Pledge Stake is a staking contract on polygon chain to stake Pledge token and earn rewards from ecosystem. When PledgeChain will be live, Pledge token will be Native coin of PledgeChain and we will merge token into it.",
  }

class SectionD extends Component {
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
            <section className="secD-area p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 card">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12 col-md-5 text-center">
                                    <img src={this.state.data.img} alt="" />
                                </div>
                                <div className="col-12 col-md-12 mt-4 mt-md-0">
                                    <h2 className="m-0">{this.state.data.title}</h2>
                                    <p>{this.state.data.content}</p>
                                </div>
                            </div>
                            <a className="cta-link" href="/apply" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionD;