import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Table, Button } from 'reactstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'
class CostumeList extends React.Component{
    constructor(){
        super()
        this.state={
            costumes:[]
        }
    }
    componentDidMount(){

        axios.get('http://localhost:3035/costume', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const costumes=response.data
            this.setState({costumes})
            console.log(costumes)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    handleRemove=(id)=>{
        axios.delete(`http://localhost:3035/costume/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            this.setState((prevState)=>({
                costumes:prevState.costumes.filter(costume=>costume._id!==response.data._id)
               
            }))

        })
    }
    
    render(){
       
        return(
            // <Container>
            <div className="col-md-8">
                <h1>Listing notes-{this.state.costumes.length}</h1>
               <Table className="table table-hover">
                   <thead>
                       <th>Sl.No</th>
                       <th>Name</th>
                       <th>Description</th>
                       <th>Category</th>
                       <th>Detail</th>
                       <th>Remove</th>
                   </thead>
                   <tbody>
                   {this.state.costumes.map((cos,i)=>{
                       console.log(cos.category.name, 'costume')
                       return (
                           <tr>
                               <td>{i+1}</td>
                               <td>{cos.name}</td>
                               <td>{cos.description}</td>
                               <td>{cos.category.name}</td>
                               <td><Link to={`/costume/${cos._id}`}><Button color="success">Show</Button>{' '}</Link></td>
                               <td> <button className="btn btn-danger" onClick={()=>{this.handleRemove(cos._id)}}>Remove</button>{' '}</td>
                           </tr>
                       )
                   })}
                   </tbody>
               </Table>
               {/*
                <ul>
                    {this.state.notes.map(note=>{
                        return <li key={note._id}>{note.title}
                        <Link to={`/notes/${note._id}`}>Show</Link>
                        <button onClick={()=>{this.handleRemove(note._id)}}>Remove</button>
                    
                        </li>
                    })}
                </ul>
                */}
                <br/>
                <Link to="costume/new">Add Notes</Link>
            </div>
             // </Container> 
        )
    }

}
export default CostumeList