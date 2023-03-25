import React, { Component } from 'react';

const data = {
    img: "/img/chainlogo.png",
    title: "Welcome To The PledgeChain",
    content: "PledgeChain is an innovative platform that aims to provide a secure and decentralized environment for the deployment of smart contracts, dapps, and other applications. With its ability to lock liquidity inside the blockchain itself and inbuilt swap services, PledgeChain is well-positioned to become a leading player in the blockchain space. By ensuring the security of user's funds and providing a high degree of transparency, PledgeChain is committed to building a trustworthy and reliable platform for the community.",
  }

class SectionA extends Component {
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
            <section className="secA-area p-0 mb-5" id='explore'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 card">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12 col-md-5 text-center">
                                    <img src={this.state.data.img} alt="" />
                                </div>
                                <div className="col-12 col-md-6 mt-4">
                                    <h2 className="m-0">{this.state.data.title}</h2>
                                    <p>{this.state.data.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionA;