import { useState } from 'react'
import '../style/CustomBreakfast.css'
import CustomImg from '../images/custom2.jpg'
import { HashLink } from 'react-router-hash-link'
import AddToCardButton from './AddToCardButton'

function CustomBreakfast() {
    // Quantity count
    const [count, setCount] = useState(1)
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }
    const minQuantity = count === 1

    return (
        <div id="custom">
            <div className="custom__panel">
                <h1>Custom Breakfast</h1>
            </div>
            <div className="custom__container">
                <div className="custom__img">
                    <img src={CustomImg} alt="" />
                </div>
                <div className="custom__action">
                    <div className="custom__content">
                        <h2>Style Your Breakfast</h2>
                        <div className="stars">
                            <svg stroke="currentColor" fill="red" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                            <svg stroke="currentColor" fill="red" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                            <svg stroke="currentColor" fill="red" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                            <svg stroke="currentColor" fill="red" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                            <svg stroke="currentColor" fill="red" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                        </div>
                        <div className="proteins">
                            <form>
                                <div className="protein-1">
                                    <label>Protein 1*</label>
                                    <select>
                                        <option selected disabled value="">--Choose Protein 1--</option>
                                        <option value="">None</option>
                                        <option value="">Egg Whites</option>
                                        <option value="">Whole Egg</option>
                                    </select>
                                </div>
                                <div className="protein-2">
                                    <label>Protein 2*</label>
                                    <select>
                                        <option selected disabled value="">--Choose Protein 2--</option>
                                        <option value="">None</option>
                                        <option value="">Brisket</option>
                                        <option value="">Chicken</option>
                                        <option value="">Steak</option>
                                    </select>
                                </div>
                                <div className="protein-side">
                                    <label>Side*</label>
                                    <select>
                                        <option selected disabled value="">--Choose Side--</option>
                                        <option value="">None</option>
                                        <option value="">Home Styled Pancakes</option>
                                        <option value="">Oatmeal</option>
                                        <option value="">Red Potatoes</option>
                                        <option value="">Sweet Potatoes</option>
                                        <option value="">Avocado</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="add-cart">
                            <div className="quantity">
                                <button 
                                    onClick={decrement} 
                                    disabled={minQuantity}      
                                    className="quantity-btn"                         
                                >-</button>
                                <input type="text" value={count} name="quantity" className="quantity-input"/>
                                <button 
                                    onClick={increment} 
                                    className="quantity-btn"
                                >+</button>
                            </div>
                            <AddToCardButton />
                        </div>
                        <div className="custom__info">
                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <p>Create your own meals and let us help you stick to your plan!</p>
                            <HashLink to="#vegan">
                                <p>Looking for vegan breakfast? Click here</p>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustomBreakfast
