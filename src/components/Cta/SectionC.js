import React, { Component } from 'react';
const data = {
    img: "/img/sol.png",
    title: "Solution!",
    content: "So, came to decision that we need a solution in the blockchain itself that there should be a certain amount of liquidity kept locked by nature with safe mathematical so that investor as well as team, both should be beneficed. There we need a mechanism where from token or assets initial sale to public trading there should be a maintained system by blockchain itself with keeping safe the investor. Especially the project which want to serve crypto asset as investment and want people to trade its asset on any public Dex or exchange. We need to modify the nature of smart contract, especially written for taking investment purpose to make crypto space safer and bring people in.",
  }

class SectionC extends Component {
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
            <section className="secC-area p-0 mb-5" id='solution'>
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

export default SectionC;