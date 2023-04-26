import { Link } from "@remix-run/react"

function Header() {
    return (
        <header className="header">

            <div class="custom-shape-divider-bottom-1682511048">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div>
                
            <h3>Daniel Mercedes</h3>

            <h1 className="title">
                
                Unlocking the power of 
                <span className="title-word" >code</span> like a 
                <span className="title-word">true wizard🧙</span>
                , I take your project to the 
                <span className="title-word">next level!</span>
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