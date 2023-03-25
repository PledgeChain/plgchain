import React, { Component } from 'react';

const initData = {
    img: "/img/thumb_2.png",
    blockchain: "/img/ethereum.png",
    title: "Metaverse",
    reg_date: "2022-11-30",
    raise: "100k",
    val: "2.8M",
    allocation: "$0",
    progress: "25%",
    mecha: "0/100,069 MECHA",
    busd: "0 BUSD",
    actionBtn: "Claim Token",
    video_img: "/img/thumb_6.png",
    video_icon: "fa-solid fa-play",
    video_link: "https://www.youtube.com/watch?v=fzBTvDraO5U"
}
const data = {
        id: "1",
        img: "/img/nplgch.png",

}

const summaryData = {
    title: "Project Summary",
    content_1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    content_2: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
}

const overviewData = {
    title: "Project Overview",
    list_heading: "Lorem ipsum dolor sit",
    content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
}

const tokenmetricsData = {
    title: "Token Information",
    content: "Here is our complete information of Pledge Token"
}

const roadmapData = {
    title: "Roadmap",
    content_1: "Here is our complete roadmap of Pledge ecosystem development and production phases happening",
}

const socialData = [
    {
        id: "1",
        link: "twitter",
        icon: "fab fa-twitter"
    },
    {
        id: "2",
        link: "telegram",
        icon: "fab fa-telegram"
    },
    {
        id: "3",
        link: "globe",
        icon: "fas fa-globe"
    },
    {
        id: "4",
        link: "discord",
        icon: "fab fa-discord"
    }
]

const overviewList = [

//     TOKEN NAME PLEDGE
// TOKEN SYMBOL $PLG
// TOKEN LOGO PLG
// BLOCKCHAIN Matic
// INITIAL SUPPLY 1000000 $PLG
// MAX SUPPLY 210000000 $PLG
// SUPPLY MECHANISM MINT AND SUPPLY
// $PLG Contract Address
    {
        id: "1",
        title: "TOKEN NAME:",
        content: "PLEDGE",
    },
    {
        id: "2",
        title: "TOKEN SYMBOL:",
        content: "$PLG",
    },
    {
        id: "3",
        title: "BLOCKCHAIN:",
        content: "POLYGON",
    },
    {
        id: "4",
        title: "CIRCULATING SUPPLY:",
        content: "16,000 $PLG",
    },
    {
        id: "5",
        title: "MAX SUPPLY:",
        content: "210000000 $PLG",
    },
    {
        id: "6",
        title: "SUPPLY MECHANISM:",
        content: "SWAP MINTING",
    },
    {
        id: "7",
        title: "$PLG Contract Address",
        content: "0x036392E6E21920aC9B864512eC7aeA7A8353ff56",
    },
]

const tokenList = [
    {
        id: "1",
        title: "Dec 2021✅:",
        content: "Research And Use Cases Of Pledge Chain",
    },
    {
        id: "2",
        title: "Apr 2022✅:",
        content: "Token Contract Deployed To TestNet",
    },
    {
        id: "3",
        title: "May 2022✅:",
        content: "Swap Contract Deployed to TestNet",
    },
    {
        id: "4",
        title: "Jun 2022✅:",
        content: "Stake Contract Deployed to TestNet",
    },
    {
        id: "5",
        title: "Jul 2022✅:",
        content: "Frontend For Token Swap Designed",
    },
    {
        id: "6",
        title: "Aug 2022✅:",
        content: "Frontend for Stake application Designed",
    },
    {
        id: "7",
        title: "Sep 2022✅:",
        content: "Beta testing for platform Started",
    },
    {
        id: "8",
        title: "Dec 2021✅:",
        content: "Research And Use Cases Of Pledge Chain",
    },
    {
        id: "9",
        title: "Apr 2022✅:",
        content: "Token Contract Deployed To TestNet",
    },
    {
        id: "10",
        title: "May 2022✅:",
        content: "Swap Contract Deployed to TestNet",
    },
    {
        id: "11",
        title: "Jun 2022✅:",
        content: "Stake Contract Deployed to TestNet",
    },
    {
        id: "12",
        title: "Jul 2022✅:",
        content: "Frontend For Token Swap Designed",
    },
    {
        id: "13",
        title: "Aug 2022✅:",
        content: "Frontend for Stake application Designed",
    },
    {
        id: "14",
        title: "Sep 2022✅:",
        content: "Beta testing for platform Started",
    },
    {
        id: "15",
        title: "Nov 2022✅:",
        content: "All known Bugs fixed and test completed on TestNet",
    },
    {
        id: "16",
        title: "Dec 2022✅:",
        content: "Token, Swap and Stake Dapps Deployed to Polygon Chain",
    },
    {
        id: "17",
        title: "Jan 2023✅:",
        content: "Promotional activities started by Core Team",
    },
    {
        id: "18",
        title: "Coming Next🔲:",
        content: "Token Information Update on Polygon Scan",
    },
    {
        id: "19",
        title: "Coming Next🔲:",
        content: "Token information update on CoinMarketCap",
    },
    {
        id: "20",
        title: "Coming Next🔲:",
        content: "Token information Update on CoinGecko",
    },
    {
        id: "21",
        title: "Coming Next🔲:",
        content: "Core Team Token Locking",
    },
    {
        id: "22",
        title: "Coming Next🔲:",
        content: "Development Team Token Locking",
    },
    {
        id: "23",
        title: "Coming Next🔲:",
        content: "Marketing Team Token Locking",
    },
    {
        id: "24",
        title: "Coming Next🔲:",
        content: "Token Listing to a Centralized Exchange",
    },
    {
        id: "25",
        title: "Coming Next🔲:",
        content: "PledgeChain TestNet Launch",
    },
    {
        id: "26",
        title: "Coming Next🔲:",
        content: "Invitation to developers Builders and bug hunters to deploy and test Chain",
    },
    {
        id: "27",
        title: "Coming Next🔲:",
        content: "Stress Level testing of Chain",
    },
    {
        id: "28",
        title: "Coming Next🔲:",
        content: "Mainnet PledgeChain Launch",
    },
    {
        id: "29",
        title: "Coming Next🔲:",
        content: "Pledge Token Migration and Deploy as Native coin",
    },
    {
        id: "30",
        title: "Coming Next🔲:",
        content: "Invitation to developers Builders and bug hunters to deploy and test Chain",
    },
    {
        id: "31",
        title: "Coming Next🔲:",
        content: "Stress Level testing of Chain",
    },
    {
        id: "32",
        title: "Coming Next🔲:",
        content: "Mainnet PledgeChain Launch",
    },
    {
        id: "33",
        title: "Coming Next🔲:",
        content: "Pledge Token Migration and Deploy as Native coin",
    }
]


class ProjectSingle extends Component {
    state = {
        data: {},
        initData: {},
        summaryData: {},
        overviewData: {},
        tokenmetricsData: {},
        roadmapData: {},
        socialData: [],
        overviewList: [],
        tokenList: []
    }
    componentDidMount(){
        this.setState({
            data: data,
            initData: initData,
            summaryData: summaryData,
            overviewData: overviewData,
            tokenmetricsData: tokenmetricsData,
            roadmapData: roadmapData,
            socialData: socialData,
            overviewList: overviewList,
            tokenList: tokenList
        });
    }
    render() {
        return (
            <section  className="item-details-area" >
                <div className="container">
                    <div className="row justify-content-between">
                        
                        <div className="col-12 col-lg-12 items mt-0 mt-lg-0 proS-area p-0" id="roadmap">
                            <div className="card project-card single-item-content no-hover item ml-lg-12">
                                <h3 className="m-0">{this.state.roadmapData.title}</h3>
                                <p>{this.state.roadmapData.content_1}</p>
                                {/* Token Content */}
                                <div className="table-responsive">
                                    <table className="table token-content table-borderless text-white">
                                        <tbody>
                                            {this.state.tokenList.map((item, idx) => {
                                                return (
                                                    <tr key={`tdl_${idx}`}>
                                                        <td style={{width: '47%'}}>{item.title}</td>
                                                        <td>{item.content}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card project-card single-item-content no-hover item ml-lg-12" id="tokeninfo" >
                                <h3 className="m-0">{this.state.tokenmetricsData.title}</h3>
                                <p>{this.state.tokenmetricsData.content}</p>
                                {/* Token Content */}
                                <div className="table-responsive">
                                    <table className="table token-content table-borderless  text-white">
                                        <tbody>
                                            {this.state.overviewList.map((item, idx) => {
                                                return (
                                                    <tr key={`tdl_${idx}`}>
                                                        <td style={{width: '47%'}}>{item.title}</td>
                                                        <td>{item.content}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSingle;