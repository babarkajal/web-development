
/* show the pros and cons of the react. There are various pros and cons so we have to make different functions for different pros
*/
function Pros() {
        return (
                <div>
                        <h2>Advantages of ReactJS</h2>
                        <div>
                                <h3> Easy to Learn and Use </h3>
                                <p>ReactJS is much easier to learn and use. It comes with a good supply of documentation, tutorials, and training resources. Any developer who comes from a JavaScript background can easily understand and start creating web apps using React in a few days. It is the V(view part) in the MVC (Model-View-Controller) model, and referred to as ?one of the JavaScript frameworks.</p>
                        </div>

                        <div>
                                <h3>Creating Dynamic Web Applications Becomes Easier</h3>
                                <p>To create a dynamic web application specifically with HTML strings was tricky because it requires a complex coding, but React JS solved that issue and makes it easier. It provides less coding and gives more functionality. It makes use of the JSX(JavaScript Extension), which is a particular syntax letting HTML quotes and HTML tag syntax to render particular subcomponents.</p>
                        </div>


                        <div>
                                <h3>Reusable Components</h3>
                                <p>A ReactJS web application is made up of multiple components, and each component has its own logic and controls. These components are responsible for outputting a small, reusable piece of HTML code which can be reused wherever you need them. The reusable code helps to make your apps easier to develop and maintain. These Components can be nested with other components to allow complex applications to be built of simple building blocks. </p>
                        </div>


                </div>

        )
}

function Cons() {
        return (
                <div>
                        <h2>Disadvantages of ReactJS</h2>

                        <div>
                                <h3> The high pace of development</h3>
                                <p>The high pace of development has an advantage and disadvantage both. In case of disadvantage, since the environment continually changes so fast, some of the developers not feeling comfortable to relearn the new ways of doing things regularly. It may be hard for them to adopt all these changes with all the continuous updates. They need to be always updated with their skills and learn new ways of doing things.</p>
                        </div>

                        <div>
                                <h3>Poor Documentation</h3>
                                <p>It is another cons which are common for constantly updating technologies. React technologies updating and accelerating so fast that there is no time to make proper documentation. To overcome this, developers write instructions on their own with the evolving of new releases and tools in their current projects.</p>
                        </div>

                        <div>
                                <h3>View Part</h3>
                                <p>ReactJS Covers only the UI Layers of the app and nothing else. So you still need to choose some other technologies to get a complete tooling set for development in the project.</p>
                        </div>
                </div>

        )
}

//this is the main function which is default
function ProsCons() {
        return (
                <div>
                        <Pros/>
                        <Cons/>
                </div>
        )
}

export default ProsCons;
