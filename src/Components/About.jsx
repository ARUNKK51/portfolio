import aboutimg from "../assets/about.png"
export default function About()
{ 
    const config =
    {
        line1:'I build responsive, interactive web applications using modern front-end technologies. I leverage HTML, CSS, and JavaScript to architect structured layouts, develop reusable components, and ensure consistent user interfaces.',
        line2:'My hands-on experience includes developing real-world projects featuring dynamic UI behavior, robust client-side state management, routing, and API-driven data rendering. I prioritize clean code, component reusability, and cross-browser compatibility.',
        line3:'My goal is to craft web applications that achieve an optimal balance between visual clarity, performance, and usability. I continuously refine my technical approach through project-based learning, scenario-based debugging, and adopting best practices to deliver scalable and maintainable solutions'
    }

    return <section id="About" className="flex flex-col md:flex-row bg-secondary px-5">
<div className="md:w-1/2 py-5">
<img src={aboutimg} alt="" />
</div>
<div className="md:w-1/2 flex justify-center">
<div className="flex flex-col justify-center  text-white">
<h1 className="text-4xl border-b-blue-500 border-b-2 w-[170px] mb-5 font-bold">About me</h1>
<p className="pb-5">{config.line1}</p>
<p className="pb-5">{config.line2}</p>
<p className="pb-5" >{config.line3}</p>

</div>

</div>



    </section>
}