import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state= {
            fname: '',
            lname: '',
            mobile: '',
            email: '',
            Password: '',
            mobile_error: '',
            password_error: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleValidation= () => {
	    let isValid = true;
        const mobile= this.state.mobile;
        // const password= this.state.password;
        // const password_error

        if(mobile.length > 10 || mobile.length < 10) {
           isValid = false;
            mobile_error: 'mobile length must be 10 digit'
        }
        if(password.length >= 5 && password.length <= 10) {
	    isValid = false;
            password_error= 'Password should be between 5 to 10 characters'
        }
        else if(!password.include([a-zA-Z0-9])){
		isValid = false;
            password_error= 'Password should have at least one special character, one Capital latter, one small character, one numeric character'
        }
	    this.setState(mobile_error, password_error});
   	 return isValid;
    }

    handleSubmit = (e) => {
        e.preventDefault()
	 if (this.handleValidation()) {
        const formData= {
            fname: this.state.fname,
            lname: this.state.lname,
	    mobile: this.state.mobile,
            email: this.state.email,
            Password: this.state.password
        }
        console.log("formData",formData)
	 }		 
    }

    render() {
        
        return(
            <div className= "container">
              <form onSubmit= {this.handleSubmit}>
                  <div>
                  {/* <label htmlFor= "fname">First Name</label> */}
                <input 
                    type= "text" 
                    id= "fname" 
                    name= "fname"    
                    value= {this.state.fname}
                    onChange= {this.handleChange}
                    placeholder= "First name"
                    className= "form-control"
                    
                />
                </div>
                <br />
                <div>
                {/* <label htmlFor= "lname">Last Name</label> */}
                <input 
                    type= "text" 
                    id= "lname" 
                    name= "lname"    
                    value= {this.state.lname}
                    onChange= {this.handleChange}
                    placeholder= "last name"
                    className= "form-control"
                />
                </div>
                
                <br />
                <div>
                {/* <label htmlFor= "mobile">Mobile Number</label> */}
                <input 
                    type= "number" 
                    id= "mobile" 
                    name= "mobile"    
                    value= {this.state.mobile}
                    onChange= {this.handleChange}
                    placeholder= "mobile number"
                    className= "form-control"
                />
                <span>{this.state.mobile_error}</span>
                </div>
                
                <br />
                <div>
                {/* <label htmlFor= "email">email</label> */}
                <input 
                    type= "text" 
                    id= "email" 
                    name= "email"    
                    value= {this.state.email}
                    onChange= {this.handleChange}
                    placeholder= "email"
                    className= "form-control"
                />
                </div>
                
                <br />
                <div>
                {/* <label htmlFor= "password">Password</label> */}
                <input 
                    type= "password" 
                    id= "password" 
                    name= "password"    
                    value= {this.state.password}
                    onChange= {this.handleChange}
                    placeholder= "password"
                    className= "form-control"
                />
                <span>{this.state.password_error}</span>
                </div>
                
                <br />

                <input type= "submit" value= "register" className= "btn-color" />
		    </form>
            </div>
          )
    }
}

export default App;
