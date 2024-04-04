import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
// import keazonBooksImage from './KeazoNBOOKS.png';

function Title()
{
    return (
        <div className='title'>Top 15 Movies of All Time</div>
    );
}
// function Choice()
// {
//     return(
//         <div className='opts'>
//             <div id='filt'>Filter By Genre</div>
//             <div className='choices'>
//                 <button>Drama</button>
//                 <button>Crime</button>
//                 <button>Action</button>
//                 <button>Fantasy</button>
//                 <button>Western</button>
//                 <button>Science Fiction</button>
//             </div>
//         </div>
//     );
// }



ReactDOM.render(<Title/>,document.getElementById('Head'));
// ReactDOM.render(<Choice/>,document.getElementById('Opt'));
ReactDOM.render(<App />, document.getElementById('result'));