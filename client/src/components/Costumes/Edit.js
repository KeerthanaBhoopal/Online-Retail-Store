import  React from 'react'
import CostumeForm from './Form'
import axios from 'axios'
class CostumeEdit extends React.Component{
    constructor(){
        super()
        this.state={
            costume:{}
        }
    }
    handleSubmit=(formData)=>{
        axios.put(`http://localhost:3035/costume/${this.props.match.params.id}`,formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const note=response.data
           // console.log(response.data)
            this.props.history.push(`http://localhost:3035/costume/${costume._id}`)
        })
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
            this.setState({costume})
        })
        .catch((err)=>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <h2>Edit Data</h2>
                {
                    Object.keys(this.state.costume).length!==0 && <CostumeForm {...this.state.costume} handleSubmit={this.handleSubmit}/>
                }
            </div>
        )
    }
}
export default CostumeEdit