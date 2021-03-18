// import React, { useEffect, useState } from 'react';
import React, {Component} from 'react';
import axios from 'axios';
import './Score.css'

class Score extends Component {
    constructor(){
        super();
        this.state = {
            score: []
        }
    }

    componentDidMount(){
        axios.get('/friend/score').then(res => {
            this.setState({
                score: res.data
            })
        }).catch(err => console.log(err))
    }

    addScore = (score) => {
        axios.post('/friend/score', {score}).then(res => {
            this.setState({
                score: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        return(
        <div className="survey">
            <form className="form">
                <ul>
                    <li className="radio">
                        <label>Cool:</label>
                        <span>1</span>
                        <input name="Cool" value="1" type="radio" className="seal-type"></input>
                        <input name="Cool" value="3" type="radio" className="seal-type"></input>
                        <input name="Cool" value="2" type="radio" className="seal-type"></input>
                        <input name="Cool" value="4" type="radio" className="seal-type"></input>
                        <input name="Cool" value="5" type="radio" className="seal-type"></input>
                        <input name="Cool" value="6" type="radio" className="seal-type"></input>
                        <input name="Cool" value="7" type="radio" className="seal-type"></input>
                        <input name="Cool" value="8" type="radio" className="seal-type"></input>
                        <input name="Cool" value="9" type="radio" className="seal-type"></input>
                        <input name="Cool" value="10" type="radio" className="seal-type"></input>
                        <span>10</span>
                    </li>
                </ul>
                {/* </form>
                <form> */}
                <ul>
                    <li className="radio">
                        <label>Hot:</label>
                            <span>1</span>
                            <input name="Hot" value="1" type="radio" className="seal-type"></input>
                            <input name="Hot" value="2" type="radio" className="seal-type"></input>
                            <input name="Hot" value="3" type="radio" className="seal-type"></input>
                            <input name="Hot" value="4" type="radio" className="seal-type"></input>
                            <input name="Hot" value="5" type="radio" className="seal-type"></input>
                            <input name="Hot" value="6" type="radio" className="seal-type"></input>
                            <input name="Hot" value="7" type="radio" className="seal-type"></input>
                            <input name="Hot" value="8" type="radio" className="seal-type"></input>
                            <input name="Hot" value="9" type="radio" className="seal-type"></input>
                            <input name="Hot" value="10" type="radio" className="seal-type"></input>
                            <span>10</span>
                    </li>
                </ul>
                {/* </form>
                <form> */}
                <ul>
                    <li className="radio">
                        <label>Smart:</label>
                            <span>1</span>
                            <input name="Smart" value="1" type="radio" className="seal-type"></input>
                            <input name="Smart" value="2" type="radio" className="seal-type"></input>
                            <input name="Smart" value="3" type="radio" className="seal-type"></input>
                            <input name="Smart" value="4" type="radio" className="seal-type"></input>
                            <input name="Smart" value="5" type="radio" className="seal-type"></input>
                            <input name="Smart" value="6" type="radio" className="seal-type"></input>
                            <input name="Smart" value="7" type="radio" className="seal-type"></input>
                            <input name="Smart" value="8" type="radio" className="seal-type"></input>
                            <input name="Smart" value="9" type="radio" className="seal-type"></input>
                            <input name="Smart" value="10" type="radio" className="seal-type"></input>
                            <span>10</span>
                    </li>
                </ul>
                {/* </form>
                <form> */}
                <ul>
                    <li className="radio">
                        <label>Funny:</label>
                            <span>1</span>
                            <input name="Funny" value="1" type="radio" className="seal-type"></input>
                            <input name="Funny" value="2" type="radio" className="seal-type"></input>
                            <input name="Funny" value="3" type="radio" className="seal-type"></input>
                            <input name="Funny" value="4" type="radio" className="seal-type"></input>
                            <input name="Funny" value="5" type="radio" className="seal-type"></input>
                            <input name="Funny" value="6" type="radio" className="seal-type"></input>
                            <input name="Funny" value="7" type="radio" className="seal-type"></input>
                            <input name="Funny" value="8" type="radio" className="seal-type"></input>
                            <input name="Funny" value="9" type="radio" className="seal-type"></input>
                            <input name="Funny" value="10" type="radio" className="seal-type"></input>
                            <span>10</span>
                    </li>
                </ul>
                {/* </form> */}
                {/* <form> */}
                <ul>
                    <li className="radio">
                        <label>Athletic:</label>
                            <span>1</span>
                            <input name="Athletic" value="1" type="radio" className="seal-type"></input>
                            <input name="Athletic" value="2" type="radio" className="seal-type"></input>
                            <input name="Athletic" value="3" type="radio" className="seal-type"></input>
                            <input name="Athletic" value="4" type="radio" className="seal-type"></input>
                            <input name="Athletic" value="5" type="radio" className="seal-type"></input>
                            <input name="Athletic" value="6" type="radio" className="seal-type"></input>
                            <input name="Athletic" value="7" type="radio" className="seal-type"></input>
                            <input name="Athletic" value="8" type="radio" className="seal-type"></input>
                            <input name="Athletic" value="9" type="radio" className="seal-type"></input>
                            <input name="Athletic" value="10" type="radio" className="seal-type"></input>
                            <span>10</span>
                    </li>
                </ul>
                <input className="submitBtn" type="submit"></input>
            </form>
        </div>
        )
    }
}

// const Score = () => {
//     const [score, setScore] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:4000/friend/score').then((res) => {
//             console.log(res.data)
//             setScore(res.data)
//         })
//     }, [score]);

    // return <div>
    //     <form>
    //         <ul>
    //             <li className="radio">
    //                 <label>Cool:
    //                     <span>1</span>
    //                     <input name="radio-buttons" value="1" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="2" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="3" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="4" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="5" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="6" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="7" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="8" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="9" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="10" type="radio" className="seal-type"></input>
    //                     <span>10</span>
    //                 </label>
    //             </li>
    //         </ul>
    //         <ul>
    //             <li className="radio">
    //                 <label>Hot:
    //                     <span>1</span>
    //                     <input name="radio-buttons" value="1" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="2" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="3" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="4" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="5" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="6" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="7" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="8" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="9" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="10" type="radio" className="seal-type"></input>
    //                     <span>10</span>
    //                 </label>
    //             </li>
    //         </ul>
    //         <ul>
    //             <li className="radio">
    //                 <label>Smart:
    //                     <span>1</span>
    //                     <input name="radio-buttons" value="1" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="2" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="3" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="4" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="5" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="6" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="7" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="8" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="9" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="10" type="radio" className="seal-type"></input>
    //                     <span>10</span>
    //                 </label>
    //             </li>
    //         </ul>
    //         <ul>
    //             <li className="radio">
    //                 <label>Funny:
    //                     <span>1</span>
    //                     <input name="radio-buttons" value="1" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="2" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="3" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="4" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="5" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="6" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="7" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="8" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="9" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="10" type="radio" className="seal-type"></input>
    //                     <span>10</span>
    //                 </label>
    //             </li>
    //         </ul>
    //         <ul>
    //             <li className="radio">
    //                 <label>Athletic:
    //                     <span>1</span>
    //                     <input name="radio-buttons" value="1" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="2" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="3" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="4" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="5" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="6" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="7" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="8" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="9" type="radio" className="seal-type"></input>
    //                     <input name="radio-buttons" value="10" type="radio" className="seal-type"></input>
    //                     <span>10</span>
    //                 </label>
    //             </li>
    //         </ul>
    //         <input type="submit"></input>
    //     </form>
    // </div>
// }

export default Score;