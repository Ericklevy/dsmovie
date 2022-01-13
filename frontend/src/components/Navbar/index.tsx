import {ReactComponent as GitIcon} from 'assets/img/github.svg';
import './style.css';

function Navbar(){


    return (
        <header>
      <nav className='container'>
          <div className='dsmovie-nav-content'>
          <h1>Dsmovie</h1>
            <a href="https://github.com/Ericklevy">
                <div className='dsmovie-contact-container'>
   
                <GitIcon />
                <p className="dsmovie-contact-link">/Ericklevy</p>

           
                </div>
            </a>
          </div>
        
      </nav>
    </header>


    );
}

export default Navbar;