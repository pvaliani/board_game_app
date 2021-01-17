import { useEffect, useRef, useState } from 'react';
import { getSocket } from '../../socket.io/socket';
import './Chat.css';

const TOGGLECHAT = {
    open: false,
    close: true
};

const Chat = ({ currentUser, opponentName, roomName }) => {
    const [showChat, setShowChat] = useState(false);
    const [messagesHistory, setMessagesHistory] = useState([]);
    const [message, setMessage] = useState('');
    const socket = useState(getSocket())[0];
    const [isLastUnread, setIsLastUnread] = useState(false);
    const messagesHistoryRef = useRef(messagesHistory);
    const showChatRef = useRef(showChat);
    const scrollRef = useRef();

    useEffect(() => {
        showChatRef.current = showChat;
    }, [showChat]);

    useEffect(() => {
        messagesHistoryRef.current = messagesHistory;
    }, [messagesHistory]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ 
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth' 
            });
        }
    });

    useEffect(() => {
        if (messagesHistory.length && !messagesHistory[messagesHistory.length - 1].read) {
            setIsLastUnread(true);
        }
    }, [messagesHistory]);

    useState(() => {
        socket.on('incoming-message', msg => {
            if (showChatRef.current) {
                msg.read = true;
            } else {
                msg.read = false;
            }
            const updatedMessages = [...messagesHistoryRef.current];
            updatedMessages.push(msg);
            setMessagesHistory(updatedMessages);
        });
        return () => {
            socket.off('incoming-message');
        };
    }, [])

    const messagesJSX = messagesHistory.map((msg, i) => {
        const msgClass = msg.sender === currentUser.user ? 'msg-me' : 'msg-other';
        return (
            <div className={msgClass} key={`${i}-${msg.msg}-${msg.sender}`}>{msg.msg}</div>
        );
    });

    const pressEnderHandler = e => {
        if (e.key === 'Enter') {
            sendMsgHandler();
        }
    };

    const sendMsgHandler = () => {
        if (message.trim().length === 0) {
            return;
        }
        const newMsg = { sender: currentUser.user, msg: message, read: true };
        const updatedMessages = [...messagesHistory];
        updatedMessages.push(newMsg);
        setMessagesHistory(updatedMessages);
        setMessage('');
        socket.emit('sending-message', { roomName: roomName, message: newMsg });
    };

    const toggleChatHandler = type => {
        if (type === 'close') {
            // read all messages
            const updatedHist = [...messagesHistory];
            updatedHist.forEach(msg => msg.read = true);
            setIsLastUnread(false);
            setMessagesHistory(updatedHist);
        }
        setShowChat(TOGGLECHAT[type]);
    };

    let chatJSX = (
        <div className="chat-container-minimised">
            <div className="chat-header" onClick={() => toggleChatHandler('close')}>
                <div className="chat-opponent-name">Chat</div>
                {isLastUnread && <div className="non-read-message"><div>!</div></div>}
                <div className="chat-maximise">◻️</div>
            </div>
        </div>
    );

    if (showChat) {
        chatJSX = (
            <div className="chat-container-maximised">
                <div className="chat-header" onClick={() => toggleChatHandler('open')}>
                    <div className="chat-opponent-name">{opponentName}</div>
                    <div className="chat-minimize" ></div>
                </div>
                <div className="chat-body" ref={scrollRef}>
                    {messagesJSX}
                </div>
                <div className="chat-footer">
                    <div className="chat-input-div">
                        <textarea className="chat-input" type="text" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={pressEnderHandler}> </textarea>
                    </div>
                    <div className="chat-send" onClick={sendMsgHandler} >
                        ⌲
                    </div>
                </div>
            </div>
        );
    }

    return chatJSX;
};

export default Chat;