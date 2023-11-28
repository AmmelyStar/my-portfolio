import './style.css'
import icon from './../btnGitHub/gitHub-black.svg'

const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
                    <img src={icon} alt=""/>
                    GitHub repo
        </a>
     );
}
 
export default BtnGitHub;