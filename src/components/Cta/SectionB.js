import React, { Component } from 'react';
const data = {
    img: "/img/g4109.png",
    title: "What the Problem is ?",
    content: "In this scenario, I have learned about the blockchain has many advantages as well as disadvantages. For example, if I buy a crypto asset or token by following the hype from the social media and later I came to know that project scammed. In another seen I invested in other project by knowing that it has enough liquidity on a Dex or on an exchange. After days passed I came to know that liquidity got removed by project founder and we have nothing to do.",

  }

class SectionB extends Component {
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
            <section className="secB-area p-0 mb-5" id='problem'>
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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionB;