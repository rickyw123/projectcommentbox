import React, {useState} from 'react'
import './Home.css'
import {AiOutlineLike} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';

const Home = () => {
    const [like, setLike] = useState(0);
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState('');
    // const [isOpenComment, setIsOpenComment] = useState([]);

    const handleLike = () => {
        setLike(like + 1);
    }
const handleSubmit = (e) => {
    e.preventDefault()
    const userInput = {
        inputanUser: input
    }
    setComments([...comments, userInput])
    setInput()
}

    return (
        <div>
            <div className="container">
                <div className="allleft">
                    <div className="post">
                        <h2>Post</h2>
                    </div>
                    <div className="leftbox">
                        <h1>Javascript forEach function doesn't work</h1> 
                        <p>Hey, I try to did forEach using Javascript to loop through an array an display all the element to my HTML view, but it doesn't show up anything, meanwhile my array is not empty. What the best solution to make Javascript array looping work fine?</p>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <AiOutlineLike onClick={handleLike} style={{fontSize: '30px', marginRight:'0px', marginLeft: '43px' ,marginBottom:'10px'}}/> 
                                <p className='like-text'>{like}</p>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FaRegComment style={{fontSize: '28px'  ,marginBottom:'10px' }}/>
                                <p>{comments.length}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="rightbox">
                    <div className="thoughts">
                        <h2>Add Your Thoughts</h2>
                    </div>
                    <div className="thoughtsbox">
                        <form onSubmit={handleSubmit}>
                            <textarea value={input} onChange={e => setInput(e.target.value)} row='50'></textarea>
                            <br/>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="comments">
                <div className="commentsh2">
                    <h2>Comments</h2>
                </div>
                <div className="commentsleft">
                    {
                        comments.map(e => (
                            <div className="single-comment">
                                <p>{e.inputanUser}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
