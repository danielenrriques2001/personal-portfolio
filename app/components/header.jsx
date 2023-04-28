import { Link } from "@remix-run/react"

function Header() {
    return (
        <header className="header">

            
            <div>
                
            <h1 className="title">
                
                Unlocking the power of 
                <span className="title-word" >code</span> like a 
                <span className="title-word">true wizard🧙</span>
                , I take your project to the 
                <span className="title-word">next level!</span>
                <p>(Yes, it's a mix of harry potter and coding Terminology)</p>
            </h1>

            <div className="container container__header-links">

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
                
                    <img src="https://img.icons8.com/material-rounded/24/null/download--v1.png" alt="resume logo"/>

                </Link>                
              
               
               

            </div>
            
            </div>

           

            

            <div>
                
            </div>

           
            <div class="custom-shape-divider-bottom-1682704396">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
          
        </header>   
    )
}

export default Header