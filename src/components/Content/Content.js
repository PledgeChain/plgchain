import React, { Component } from 'react';

const data = {
    sub_heading: "How To Do ?",
    heading: "How To Participate",
    workData: [
      {
        id: 1,
        icon: "icons icon-screen-tablet text-effect",
        title: "Go to Pledge Swap",
        content: "Go to Pledge swap and connect your wallet by opening it in dapp browser. You need some matic in your wallet to purchase $PLG."
      },
      {
        id: 2,
        icon: "icons icon-wallet text-effect",
        title: "Connect Wallet",
        content: "Connect your wallet and choose Polygon chain."
      },
      {
        id: 3,
        icon: "icons icon-shuffle text-effect",
        title: "Swap Matic with $PLG",
        content: "Input Value in input space and click buy. Complete your Buy request in your wallet and You can see $PLG inside your wallet after transaction succeed."
      },
      {
        id: 4,
        icon: "icons icon-rocket text-effect",
        title: "Start Staking",
        content: "Now when you have $PLG in your wallet, you may stake your $PLG for staking rewards and referral activities to increase your rewards."
      }
    ]
  }

class Content extends Component {
    state = {
        data: {},
        workData: [],
    }
    componentDidMount(){
        this.setState({
            data: data,
            workData: data.workData
        });
    }
    render() {
        return (
            <section className="content-area">
                <div className="container" id='howto'>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="content intro">
                            <span className="intro-text">{this.state.data.sub_heading}</span>
                            <h2>{this.state.data.heading}</h2>
                            <p>{this.state.data.excerpt}</p>
                            <ul className="list-unstyled items mt-5">
                                {this.state.workData.map((item, idx) => {
                                    return (
                                        <li key={`cd_${idx}`} className="item">
                                            {/* Content List */}
                                            <div className="content-list d-flex align-items-center">
                                                <div className="content-icon">
                                                <span className={item.featured}>
                                                    <i className={item.icon} />
                                                </span>
                                                </div>
                                                <div className="content-body ml-4">
                                                <h3 className="m-0">{item.title}</h3>
                                                <p className="mt-3">{item.content}</p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* Blockchain Animation */}
                            <div className="wrapper-animation d-none d-md-block">
                                <div className="blockchain-wrapper">
                                    <div className="pyramid">
                                        <div className="square">
                                            <div className="triangle" />
                                            <div className="triangle" />
                                            <div className="triangle" />
                                            <div className="triangle" />
                                        </div>
                                    </div>
                                    <div className="pyramid inverse">
                                        <div className="square">
                                            <div className="triangle" />
                                            <div className="triangle" />
                                            <div className="triangle" />
                                            <div className="triangle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;