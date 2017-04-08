
import React, { Component , PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  Image
} from 'react-native';

  const styles = {
     contet:{
      justifyContent:'center',
      alignItems:'center',
      height:60,

    },
    container:{
      marginTop:30,
      backgroundColor:'#55D49D'
    },
    child:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    contetText:{
      color:'#FFF',
      fontSize:22
    },
    childText:{
      color:'#FFF',
      fontSize:18
    }

  };

export default class toggleItem extends Component {


  static propTypes = {
     childHeight: React.PropTypes.number.isRequired,
     style:React.PropTypes.object,
     expandedDuration: React.PropTypes.number,
     fadeInDuration: React.PropTypes.number,
     fadeOutDuration: React.PropTypes.number,
     callback:React.PropTypes.func,
   };

   static defaultProps = {
     childHeight: 50,
     contet: 
      <View style={styles.contet}>
        <Text style={styles.contetText}>Show me someting!</Text>
        <Image source={require('./down-arrow.png')} style={{width:20, height:20}} />
      </View>,
     child: <View style={styles.child}><Text style={styles.childText}>Hello World!</Text></View>,
     style: styles.container,
     expandedDuration:400,
     fadeInDuration:400,
     fadeOutDuration: 500
   };


  constructor(props) {

    super(props);
     this.state = {
      expanded:false,
      height:new Animated.Value(1),
      opacity:new Animated.Value(0)
    }
  }


  _callback(expanded){
      this.props.callback(expanded)
  }
 
  componentDidMount(){
    console.log("sad")      
  }



  toggle(){
    if(!this.state.expanded){
        Animated.timing(
          this.state.height,
          {
            toValue: this.props.childHeight ? this.props.childHeight : pro,
            duration: this.props.expandedDuration
          }
        ).start()
           Animated.timing(
          this.state.opacity,
          {
            toValue: 1,
            delay:300,
            duration:this.props.fadeInDuration
          }
        ).start()
    }else{
        Animated.timing(
          this.state.height,
          {
            toValue: 0,
            duration:this.props.expandedDuration
          }
        ).start()
           Animated.timing(
          this.state.opacity,
          {
            toValue: 0,
            delay:0,
            duration:this.props.fadeOutDuration
          }
        ).start()
    }

    this.setState({
      expanded: !this.state.expanded
    })

    if(this.props.callback){
        this._callback(this.state.expanded)
    }
    

  }

  render() {
    return (
       <View style={this.props.style}>
          <TouchableWithoutFeedback onPress={() => this.toggle()}>
           <View>{this.props.contet}</View>
          </TouchableWithoutFeedback>
             <Animated.View style={{
                    opacity:this.state.opacity,
                    height: this.state.height,
                    }}
                    >
                      {this.props.child}
            </Animated.View>
        </View>
    );
  }
}






