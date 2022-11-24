//import neccesary files
import Paragraph from './Para'
import Lists from './list-features'
import ProsCons from './proscons'



//this function is rendered from index.js
//here export default is used to make this function available for other files.
export default function App() {
        return (
                <div>
                        <Paragraph/>
                        <Lists/>
                        <ProsCons/>
                </div>
        )
}
