import React, { useState,useEffect } from 'react'
import './RandomQuote.css'
import twitter_icon from '../Assets/twitter-2935414_1280.webp'
import { FaQuoteLeft,FaQuoteRight } from 'react-icons/fa'

var colors=['#054A91','#3E7CB1','#81a4cd','#dbe4ee','#f17300']
const RandomQuote = () => {

    const [quote,setQuote]=useState({text: 'The way to get started is to quit talking and begin doing',author:'Walt Disney'});
    const getQuote=()=>{
        fetch('https://type.fit/api/quotes')
        .then(res=>res.json())
        .then(data=>{setQuote(data[Math.floor(Math.random()*data.length)])})
    }

    const [color,setColor]=useState('blue')
    const getColor=()=>{
        const ranColor=colors[Math.floor(Math.random()*colors.length)]
        setColor(ranColor)
    }
    useEffect(()=>{
        document.body.style.background=color;
        document.getElementById("text").style.color=color;
        document.getElementById("author").style.color=color;
        document.getElementById("new-quote").style.background=color;
        
    },[color])

    function get(){
        getQuote();
        getColor();
    }
  return (
    <div id='quote-box'>
        <div id='text'><FaQuoteLeft style={{marginRight:"20px"}}/>{quote.text}<FaQuoteRight style={{marginLeft:"20px"}}/></div>
        <div id='author'>-{quote.author.split(', ')[0]}</div>
        <div className="bottom">
            <div className="icon">
               <a href={`https://twitter.com/intent/tweet?text=${quote.text}-${quote.author.split(', ')[0]}`} id="tweet-quote" target="_blank" rel="noreferrer noopener" title='Tweet this quote!'>
                <img src={twitter_icon} alt="" /></a>
            </div>
            <div className="button">
            <button id='new-quote' onClick={get} >New Quote</button>
            </div>
        </div>
    </div>
  )
}


export default RandomQuote