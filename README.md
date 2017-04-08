# react-native-expandableview
React native expandable view npm package


# Sample Presentation Video


# Usage
npm i react-native-expandableview --save

```javascript
import ExpandableView from 'react-native-expandableview'

export default class example extends Component {
  render() {
    return (
       
       
            <ExpandableView 
              contet={<View><Text>Tap Me!</Text></View>}
              child={<View><Text>Hello!</Text></View>}
              />
            
     
    );
  }
}
 ```
 # Props
 | Prop|Defaul value|Type|Description|
 | ---      | ---       | ---      | ---       |
| contet|View, Text, Image|Renderable View|Parent element view|
| child|View, Text|Renderable View|Child element view|
| childHeight| 50 |number|Child element view´s height|
| style| - |object|Custom style|
| expandedDuration|400|number|Duration of expansion in milliseconds|
| fadeInDuration|400|number|Duration of expansion in milliseconds|
| fadeOutDuration|400|number|Fade Out duration in milliseconds|
| callback|-|callback function(state)|A callback function for tap event|




# Run example

1. clone
2. cd react-native-expandableview/example
3. npm install
4. react-native run-ios

# Contact

Twitter: @holaconstancio
