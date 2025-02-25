import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './sidebar.css'
import { Context } from '../../Context/Context'
const Sidebar = () => {

    const [extend, setextend] = useState(false);
    const { prevPrompt, input, onSent, setRecentPrompt,newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        await onSent(prompt)
    }
    return (
        <div className="sidebar">
            <div className="top">

                <img onClick={() => setextend(prev => !prev)} className="menu" src={assets.menu_icon} alt="" />
                <div onClick={newChat} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extend ? <h4>New Chat</h4> : null}
                </div>
                {extend ? <div className="recent">
                    {prevPrompt.length>0?<h3 className='recent-box'>Recent</h3>:null}
                    {prevPrompt && prevPrompt.map((item, index) => {
                        return (
                            <div onClick={()=>loadPrompt(item)}className="recent_message">
                                <img  src={assets.message_icon} alt="" />
                                <p>{item}...</p>
                            </div>
                        )
                    })}

                </div> : null}
            </div>
            <div className="bottom">
                <div className="help bottom-prop">
                    <img src={assets.question_icon} alt="" />
                    {extend ? <p>help</p> : null}
                </div>
                <div className="activity bottom-prop">
                    <img src={assets.history_icon} alt="" />
                    {extend ? <p>Actitvity</p> : null}
                </div>
                <div className="setting bottom-prop">
                    <img src={assets.setting_icon} alt="" />
                    {extend ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar