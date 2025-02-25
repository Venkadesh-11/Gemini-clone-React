import React from 'react'
import { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
const Main = () => {

    const { onSent, recentPrompt, showResult, loading, input, setInput, resultData } = useContext(Context);
    return (
        <div className='main'>
            <div className="nav">
                <h1>Gemini</h1>
                <img src={assets.user_icon} alt="" />
            </div>

            {!showResult ?
                <div className="main-container">
                    <div className="hello-card">
                        <h1> <span>Hello, Friend</span></h1>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <p>give me fun facts about space exploration</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>briefly summarize the plot of a classic film you love</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>improve the readability of following code</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>What's a fun fact about social media?</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                    </div>
                </div>
                : <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>


                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading ?
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                    </div>
                </div>
            }

            <div className="main-bottom">
                <div className="search">
                    <input onChange={(event) => setInput(event.target.value)} value={input} type="text" placeholder='Ask anything' />
                    <div className='bottom-img'>
                        {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                    </div>
                </div>
                <p>I can make mistakes. Check important info.</p>
            </div>


        </div>

    )
}

export default Main