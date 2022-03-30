import React from "react"
import ReactDOM from "react-dom"

export default function Header() {
     return (
          <div className = "header">
               <img src = "./images/lythmass.jpg" />
               <div className = "names">
                    <h1>Lythmass</h1>
                    <h3>React Developer</h3>
                    <h5>@lythmass</h5>
               </div>
               <button>Email</button>
          </div>
     )
}
