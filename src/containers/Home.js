import React from 'react';
import {Paper} from 'material-ui';
import {Button} from 'components';
import {connect} from 'react-redux';

import {RaisedButton, Slider} from 'material-ui';

import {
    setColorAllRequest,
    setBrightnessRequest,
    setAnimationRequest
} from 'actions/master';

class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state ={
            red:0,
            green:0,
            blue:0,
            brightness:255,
        }
        
        this.handleRed = this.handleRed.bind(this)
        this.handleGreen = this.handleGreen.bind(this)
        this.handleBlue = this.handleBlue.bind(this)
        this.handleBrightness = this.handleBrightness.bind(this)
    }
    
    
    handleRed(e, red){ this.setState({red}) }
    handleGreen(e, green){ this.setState({green}) }
    handleBlue(e, blue){ this.setState({blue}) }
    handleBrightness(e, brightness){ this.setState({brightness}) }
    
    
    handleSetAllColor(e){
        const {red, green, blue} = this.state
        this.props.setColorAllRequest(red, green,blue).then(() => {
            alert(""+red+","+green+","+blue+" color")
        })
    }
    
    handleSetBrightness(e){
        const {brightness} = this.state
        this.props.setBrightnessRequest(brightness).then(()=>{
            alert(brightness + " brightness")
        })
    }
    
    handleSetMode(mode){
        this.props.setModeRequest(mode).then(() => {
            alert(mode)
        })
    }
   
   
    render() {
      
        return (
            <div style={{minHeight:"100%",margin:30}} className="row center">
                <h4>색상 조절(전체)</h4>
               <Slider style={{backgroundColor:"rgb("+this.state.red+",0,0)"}} value={this.state.red} onChange={this.handleRed} min={0} max={255} step={1}/>
               <Slider style={{backgroundColor:"rgb(0,"+this.state.green+",0)"}} value={this.state.green} onChange={this.handleGreen} min={0} max={255} step={1}/>
               <Slider style={{backgroundColor:"rgb(0,0,"+this.state.blue+")"}} value={this.state.blue} onChange={this.handleBlue} min={0} max={255} step={1}/>
               
               <RaisedButton style={{height:36}} containerElement="label" icon={<div style={{display:"inline",position:"relative",margin:1,minHeight:34,minWidth:34,backgroundColor:"rgb("+this.state.red+","+this.state.green+","+this.state.blue+")"}}></div>} fullWidth={false} onTouchTap={this.handleSetAllColor.bind(this)} >
                <div className="row" style={{margin:0}}>
                    <div className="col"><span style={{color:"black"}}>색바꾸기</span></div>
                    <div className="col" style={{borderRadius:4,margin:3,minHeight:30,minWidth:30,backgroundColor:"rgb("+this.state.red+","+this.state.green+","+this.state.blue+")"}}></div>
                </div>
               </RaisedButton>
               
               <h4>밝기 조절</h4>
               <Slider style={{backgroundColor:"rgb("+this.state.brightness+","+this.state.brightness+","+this.state.brightness+")"}} value={this.state.brightness} onChange={this.handleBrightness} min={0} max={255} step={1}/>
               <RaisedButton label={parseInt(this.state.brightness/2.55) + "% 밝기 바꾸기"} fullWidth={false} onTouchTap={this.handleSetBrightness.bind(this)}/>
               
               <br />
               <br />
               <h4>모션</h4>
               <RaisedButton style={{margin:4}} label="색상바뀌는 모션" fullWidth={false} onTouchTap={this.handleSetMode.bind(this,"colorWipe")}/>
               <RaisedButton style={{margin:4}} label="빨리가는 션" fullWidth={false} onTouchTap={this.handleSetMode.bind(this,"theaterChase")}/>
               <RaisedButton style={{margin:4}} label="레인보우 모션" fullWidth={false} onTouchTap={this.handleSetMode.bind(this,"rainbow")}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setColorAllRequest: (r,g,b) => {
            return dispatch(setColorAllRequest(r,g,b))
        },
        setBrightnessRequest: (n) => {
            return dispatch(setBrightnessRequest(n))
        },
        setModeRequest: (mode) => {
            return dispatch(setAnimationRequest(mode))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);