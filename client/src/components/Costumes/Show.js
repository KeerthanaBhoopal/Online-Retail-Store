import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Table} from 'reactstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'

class CostumeShow extends React.Component{
constructor(){
    super()
        this.state={
            costume:[]
    }
}
componentDidMount(){
    const id=this.props.match.params.id
    axios.get(`http://localhost:3035/costume/${id}`, {
        headers: {
            'x-auth': localStorage.getItem('authToken')
        }
    })
    .then(response=>{
        const costume=response.data
        //console.log(costume)
        this.setState({costume})
    })

}
    render(){
        console.log(this.state.costume.category?this.state.costume.category.name:"null", 'show1')
        return(
            // <Container>
            <div className="container">
                <br/>
                 <h2>Costumes Show</h2>
                 <Table className="table table-hover">
                   <thead>
                       <tr key={1}>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                       </tr>
                   </thead>
                   <tbody>
                       {/* {
                           this.state.costume.map((n,i)=>{
                               return (
                                <tr>
                                    <td>{i}</td>
                                    <td>{n.name}</td>
                                    <td>{n.description}</td>
                                    {/* <td>{this.state.costume.category}</td> */}
                                {/* </tr>
                               )
                            
                           })
                       } */}
                           <tr>
                               <td>1</td>
                               <td>{this.state.costume.name}</td>
                               <td>{this.state.costume.description}</td>
                               <td>{this.state.costume.category?this.state.costume.category.name:"null"}</td>
                           </tr>
                       
                   </tbody>
                   </Table>
              {/*  <h1>Notes Show</h1>
                <p>{this.state.note.title}--{this.state.note.description}</p>
        <Link to={`/notes/edit/${this.props.match.params.id}`}>Edit</Link>
              <Link to="/notes">back</Link>*/}
              <Link className="badge badge-pill badge-primary" to={`/costume/edit/${this.props.match.params.id}`}>Edit</Link>
              <Link className="badge badge-pill badge-primary" to="/costume">back</Link>
         </div>
        
        )
    }

}
export default CostumeShow