
export default function Button() {
        const name = "click me";
        return <div>
                <label className= 'class'>Enter Name:  </label>
                <input type = 'text' /><br/>
                <input type ='submit' style={{backgroundColor: 'lightblue', margin: '3px'}}/><br/>
                <button style={{backgroundColor: 'lightblue'}}>
                {name}
                </button>
        </div>
}
