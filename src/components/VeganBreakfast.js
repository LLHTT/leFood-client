import { useState } from 'react'
import '../style/VeganBreakfast.css'
import VeganIntro from '../images/vegan3.jpg'
import VeganItem from './VeganItem'
import veganItems from '../data/veganItems'

function VeganBreakfast() {
    const [veganFoodItem, setVeganFoodItem] = useState(veganItems)

    return (
        <div id="vegan">
            <div className="vegan__panel">
                <h1>Vegan Breakfast</h1>
            </div>
            <div className="vegan__intro">
                <div className="vegan__intro__left">
                    <h2>Vegan Diet Basics & How to Get Started </h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <p>Learn more: <a href="https://www.eatingwell.com/article/292024/ultimate-guide-to-the-vegan-diet/" target="_blank" rel="noopener noreferrer">Ultimate Guide to the Vegan Diet</a></p>
                </div>
                <div className="vegan__intro__right">
                    <img src={VeganIntro} alt="vegan diet" />
                </div>
            </div>
            <div className="vegan__foods">
                <h2>What to Eat on a Vegan Diet</h2>
                <p>When you don't have the time or energy to cook, or even go out to eat, you can choose from dozens and dozens of convenient and delicious vegan foods.</p>
                <VeganItem veganFoodItem={veganFoodItem}/>
            </div>
        </div>
    )
}

export default VeganBreakfast
