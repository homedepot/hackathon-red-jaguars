import React , { Component } from 'react';
import Child from './child';
import axios from 'axios';



class ChildList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            children: [
            ]
         }
    }

    componentDidMount() {
        axios.get('http://localhost:3002/wish/findall')
        .then((res) => {
            console.log(res)
            this.setState({children: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    
    render() { 
        return ( <div>
            {
                this.state.children && this.state.children.map((e,i) => {
                    console.log(e.firstName, 'firstName')
                 return <Child key={i} firstName={e.firstName} lastName={e.lastName} age={e.age} homeTown={e.homeTown}/>
                })
            }
        </div> );
    }
}
 
export default ChildList;