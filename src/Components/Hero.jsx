import heroimg from "../assets/hero.png"
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";


export default function Hero()
{
    const config = {
        subtitle :"Frontend developer(React & Javascript) ",
        social:{
            twitter:"https://x.com/",
            instagram:"https://www.instagram.com/",
            linkedin:"https://in.linkedin.com/"

        }

        
    }
    return <section id="Home" className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
<div className="md:w-1/2 flex flex-col">
<h1 className="  text-white text-6xl font-higher">Hi, <br /> Im  Arun <span className="text-black font-bold">KK</span>
        <p className="text-2xl" >{config.subtitle}</p>
         </h1>
         <div className="flex py-10  ">
<a href={config.social.twitter} className="pr-5 hover:text-white"  ><AiOutlineTwitter size={30}/></a>
<a href={config.social.instagram} className="pr-5 hover:text-white"><AiOutlineInstagram size={30}/></a>
<a href={config.social.linkedin} className="pr-5 hover:text-white "><AiOutlineLinkedin size={30}/></a>
         </div>
</div>

       
        
        <img className="md:w-1/3 " src={heroimg} alt="Portfolio" />
    </section>


}