import React, { useState } from  'react'
import './App.css'

function App() {
    const [value, setValue] = useState('');

    return (
      <div className="container">
        <div className="calculator">
            <form action="">
                <div className='display'>
                
                   <input type= "text" value={value} /> 
                </div>
                <div>
                    <input type ="button" value="AC"onclick={e => setValue('')} />
                    <input type ="button" value="DE"onclick={e => setValue(value.slice(0, -1))}/>
                    <input type ="button" value="." onclick={e => setValue(value + e.target.value)}/>
                    <input type ="button" value="/" onclick={e => setValue(value + e.target.value)} />
                </div>
                <div>
                    <input type ="button" value="7" onclick={e => setValue(value + e.target.value)} /> 
                    <input type ="button" value="8" onclick={e => setValue(value + e.target.value)} />
                    <input type ="button" value="9" onclick={e => setValue(value + e.target.value)} />
                    <input type ="button" value="*" onclick={e => setValue(value + e.target.value)} />
                </div>
                <div>
                    <input type ="button" value="4" onclick={e => setValue(value + e.target.value)} />
                    <input type ="button" value="5" onclick={e => setValue(value + e.target.value)} />
                    <input type ="button" value="6" onclick={e => setValue(value + e.target.value)} />
                    <input type ="button" value="+" onclick={e => setValue(value + e.target.value)} />
                </div>
                <div>
                    <input type ="button" value="1" onclick={e => setValue(value + e.target.value)} />
                    <input type ="button" value="2" onclick={e => setValue(value + e.target.value)}/>
                    <input type ="button" value="3" onclick={e => setValue(value + e.target.value)}/>
                    <input type ="button" value="-" onclick={e => setValue(value + e.target.value)}/>

                </div>
                <div>
                    <input type ="button" value="00" onclick={e => setValue(value + e.target.value)} />
                    <input type ="button" value="0" onclick={e => setValue(value + e.target.value)} />
                    <input type ="button" value="=" className= 'equal' onClick={e => setValue(eval(value))} />
                    
                </div>

            </form>

        </div>
        

      </div>  

    )
}

export default App