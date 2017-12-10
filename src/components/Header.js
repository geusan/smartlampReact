import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component {
    
    constructor(props){
        super(props);
 
    }
    
    render() {
            
        return (
            <div>
            
            </div>
        );
    }
}

Header.propTypes = {

};

Header.defaultProps = {
    
}


const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);