import React from 'react'
import axios from 'axios'
import CostumeForm from './Form'

class CostumeNew extends React.Component{
    handleSubmit=(formData)=>{
        
        axios.post(`http://localhost:3035/costume`, formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                this.props.history.push('/costume')
            }
        })
    }
    render(){
        return(
            <div className="container">
                <br/>
                <h3>Add Data</h3>
                <CostumeForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default CostumeNew