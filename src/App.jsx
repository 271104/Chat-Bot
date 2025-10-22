// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import axios from 'axios';


// function App() {
//   const [count, setCount] = useState(0);

//   async function generateAnswer(){
//     console.log("Loading");
//     const response = await axios({
//       url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBu90hMOK-y_IeDuhfiHrJ5ydPf-8AbUrQ",

//       method: "post",
      
//       data: {
//         "contents": [
//           {
//             "parts": [
//               {
//                 "text": "Write a story about a magic backpack"
//               }
//             ]
//           }
//         ]
//       }
//     })
//     console.log(response);
//   }

//   return (
//     <>
//       <h1>Chat AI</h1>
//       <button onClick={ generateAnswer }>Generate Answer</button>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import "./App.css";
import axios from "axios";
import { use } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("Loading...");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBu90hMOK-y_IeDuhfiHrJ5ydPf-8AbUrQ",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          contents: [
            {
              parts: [
                {
                  text: question,
                },
              ],
            },
          ],
        },
      });
      console.log(setAnswer( response["data"]["candidates"][0]["content"]["parts"][0]["text"]));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <h1>Chat AI</h1>
      <textarea value={question} onChange={(e) => setQuestion(e.target.value)} cols="30" rows="10"></textarea>
      <button onClick={generateAnswer}>Generate Answer</button>
      <p>{answer}</p>
    </>
  );
}

export default App;
