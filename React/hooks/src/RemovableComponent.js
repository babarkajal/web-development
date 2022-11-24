import { useEffect } from "react";

function RemovableComponent() {
  useEffect(() => {
    // console.log("Mounted");
    return () => {
      //   console.log("CLEAN AFTER COMPONENT UNMOUNTING");
    };
  }, []);
  return <p>Removable Component</p>;
}

export default RemovableComponent;

/* class RemovableComponent extends React.Component {

	componentWillUnmount() {
	  console.log("CLEAN AFTER COMPONENT UNMOUNTING");
	}
	render() {
	  return <p>Removable Component</p>;
	}
  } */
