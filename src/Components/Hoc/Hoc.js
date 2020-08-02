import React from "react";
import Context from "../../Context";

const Hoc = () => (View) => {
  return (props) => {
    return (
    <Context.Consumer >
      {(Service)=>{
        return <View {...props} service={Service}/>
      }}
    </Context.Consumer>
    )
  }
};

export default Hoc;