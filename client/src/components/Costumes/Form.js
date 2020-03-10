import React from 'react'
import axios from 'axios'
import './Costume.css'
import { FormGroup } from 'reactstrap'
//import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
//import {FacebookLoginButton} from 'react-social-login-buttons'
class CostumeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name?props.name:'',
            description:props.description?props.description:'',
            categories:[],
            category:props.category?props.category:'',
            costumeImage:props.costumeImage?props.costumeImage:''
        }
        }
        componentDidMount(){
            console.log('component Did mount')
            axios.get('http://localhost:3035/category', {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then(response=>{
                const categories=response.data
                console.log(categories)

                this.setState({categories})
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            description:this.state.description,
            category:this.state.category,
        }
        // const form=new FormData()
        // for(let key in formData){
        //     form.append(key,formData[key])
        // }
        // form.append('costumeImage',this.state.costumeImage)
         console.log(formData)

        this.props.handleSubmit(formData)
    }
    handleOnFile=(e)=>{
        console.log(e.target.files)
        this.setState({
            costumeImage:e.target.files[0]//?
        })

    }
        render(){
            console.log('render form')
            return(
                <div className=" form-group col-md-4">
                {/* <form  onSubmit={this.handleSubmit} enctype="multipart/form-data" className="Note"> */}
                <form  onSubmit={this.handleSubmit} >
                    <div>
                    <FormGroup row>
                    {/* <div className="form-group col-md-5"> */}
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" value={this.state.name} name="name" onChange={this.handleChange} id="name"/><br/>
                    {/* </div> */}
                    </FormGroup>
                    <FormGroup row>
                    {/* <div className="form-group col-md-5"> */}
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" value={this.state.description} name="description" onChange={this.handleChange} id="description"/><br/>
                  {/* <input type="file" name="noteimage" id="noteimage" onChange={this.handleOnFile}/> */}
                  {/* </div> */}
                  </FormGroup>
                  <FormGroup row>
                  {/* <div className="form-group col-md-5"> */}
                    <label htmlFor="category">Category</label>
                    <select name="category" className="form-control" value={this.state.category} onChange={this.handleChange}>
                    <option value="">select</option>   
                    {this.state.categories.map((category)=>{
                        return(
                            <option key={category._id} value={category._id}>{category.name}</option>
                        )
                    })
                }
                </select>
                {/* </div> */}
                <br/><br/><br/>
                <input className="btn btn-primary" type="submit"/>
                </FormGroup>
               
                </div>
                
                </form>
                </div>
            )
        }
    }
export default CostumeForm