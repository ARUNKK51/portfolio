import websiteimg from "/assets/instagram.png"
import websiteimg2 from "/assets/ecommerce-websites.jpg"
import websiteimg3 from "/assets/Portfolio.png"

export default function Projects()
{
    const config =
    {
        Projects:[
        {
            id:1,
            img:websiteimg,
            description:"An instagram clone built with React and Bootstrap.",
            Link:"https://insta-frontend-35qj21txr-arunkks-projects.vercel.app/"
        },
        {
            id:2,
            img:websiteimg2,
            description:"An Ecommerce Web application build using React,HTML,CSS,Javascript.",
            Link:"https://www.instagram.com/"
        },
        {
            id:3,
            img:websiteimg3,
            description:"Fully Responsive Personal Portfolio",
            Link:"https://portfolio-arunkks-projects.vercel.app/"
        }

        ]
    }
    return <section id="Project" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-1/2">
        <div className="flex flex-col py-10 px-10">
        <h1 className="text-4xl border-b-blue-900 darkblue border-b-2 w-[150px] mb-5 font-bold">Projects</h1>
        <p className="font-higher">These are Some of  my Best Projects . Built   using React, Bootstrap and TailwindCSS.</p>
        </div>
           
        </div>
        <div className="w-full ">
        <div className="flex  flex-col md:flex-row px-10 gap-5 ">
            {config.Projects.map((project)=>( 
                
                <div key={project.id} className="relative flex justify-center items-center" >
                <img className="h-[200px] w-[300px]" src={project.img} alt="" />
                <div className="project-desc flex flex-col justify-center items-center  py-5 px-5">
                    <p className="text-center  px-5 mb-10">{project.description }</p>
                   
                  <div><a className="btn" href={project.Link}>View Project</a></div>
                   
                    </div>
                    
                </div>
            ))}
            
           
        
       
       
        </div>
           
        </div>
    </section>
}