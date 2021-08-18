import React from "react";
import "./Modal.css";
import {connect} from "react-redux";
 
const Modal = (props) => {

    const hideModal = (e) =>{
        props.setAbout(false);
        props.setSkills(false);
        props.setProjects(false);
    }

    return (
        <div className={(props.conditional) ? "ModalWrapper" : "ModalHidden"} onClick={(e)=>{hideModal(e)}}>
            <div className="ModalContent" onClick={(e)=>{e.stopPropagation()}}>
                <div className="ModalTitle">
                    <h4>{props.title}</h4>
                    <hr />
                </div>
                <div className="ModalText">
                    {props.children}
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        data: state
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return {
        setAbout: (state) => { dispatch({type: "SET_ABOUT", data: state})},
        setSkills: (state) => { dispatch({type: "SET_SKILLS", data: state})},
        setProjects: (state) => {dispatch({type: "SET_PROJECTS", data: state})}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Modal);