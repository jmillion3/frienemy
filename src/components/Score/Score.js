import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Score = () => {
    const [score, setScore] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/profile/score').then((res) => {
            setScore(res.data)
        })
    }, [score]);

    return <div>
        <form>
            <ul>
                <li className="radio">
                    <label>Cool:
                        <span>1</span>
                        <input name="radio-buttons" value="1" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="2" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="3" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="4" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="5" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="6" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="7" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="8" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="9" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="10" type="radio" className="seal-type"></input>
                        <span>10</span>
                    </label>
                </li>
            </ul>
            <ul>
                <li className="radio">
                    <label>Hot:
                        <span>1</span>
                        <input name="radio-buttons" value="1" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="2" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="3" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="4" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="5" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="6" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="7" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="8" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="9" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="10" type="radio" className="seal-type"></input>
                        <span>10</span>
                    </label>
                </li>
            </ul>
            <ul>
                <li className="radio">
                    <label>Smart:
                        <span>1</span>
                        <input name="radio-buttons" value="1" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="2" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="3" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="4" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="5" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="6" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="7" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="8" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="9" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="10" type="radio" className="seal-type"></input>
                        <span>10</span>
                    </label>
                </li>
            </ul>
            <ul>
                <li className="radio">
                    <label>Funny:
                        <span>1</span>
                        <input name="radio-buttons" value="1" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="2" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="3" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="4" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="5" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="6" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="7" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="8" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="9" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="10" type="radio" className="seal-type"></input>
                        <span>10</span>
                    </label>
                </li>
            </ul>
            <ul>
                <li className="radio">
                    <label>Athletic:
                        <span>1</span>
                        <input name="radio-buttons" value="1" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="2" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="3" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="4" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="5" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="6" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="7" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="8" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="9" type="radio" className="seal-type"></input>
                        <input name="radio-buttons" value="10" type="radio" className="seal-type"></input>
                        <span>10</span>
                    </label>
                </li>
            </ul>
            <input type="submit"></input>
        </form>
    </div>
}

export default Score;