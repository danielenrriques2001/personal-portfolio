import { Link } from "@remix-run/react"

function Header() {
    return (
        <header className="header">
            <div>
                
            <h3>Daniel Mercedes</h3>

            <h1 className="title">
                
                Unlocking the power of 
                <span className="title-word" >code</span> like a 
                <span className="title-word">true wizard🧙</span>
                , I take your project to the 
                <span className="title-word">next level!</span>
            </h1>

            <div className="container">

                <Link
                    to={'https://github.com/danielenrriques2001'}
                    target="_blank"
                >
                    <img src="https://img.icons8.com/material-sharp/24/null/github.png" alt="github logo"/>
                </Link> 

                  <Link
                    to={'https://www.linkedin.com/in/daniel-mercedes-885616257/'}
                    target="_blank"
                >
                    <img src="/linkedin.svg" alt="linkedin logo"/>
                </Link>       

                <Link
                    to={'/lebenslauf.pdf'}
                    target="_blank"
                >
                
                    <img src="https://img.icons8.com/material-rounded/24/null/download--v1.png"/>
 
                 

                </Link>                
              
               
               

            </div>
            </div>

           

            

            <div>
                
            </div>

          
        </header>   
    )
}

export default Header