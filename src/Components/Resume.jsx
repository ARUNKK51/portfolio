import resumeimg from "../assets/resume.jpg"
export default function Resume()
{
    const config =
    {
        Link :"../assets/ARUNKK-4.pdf"
    }

    return <section id="Resume" className="flex flex-col md:flex-row bg-secondary px-5">
<div className="md:w-1/2 flex justify-center md:justify-end py-5">
<img className="w-[300px]" src={resumeimg} alt="" />
</div>
<div className="md:w-1/2 flex justify-center">
<div className="flex flex-col justify-center  text-white">
<h1 className="text-4xl border-b-blue-500 border-b-2 w-[140px] mb-5 font-bold">Resume</h1>
<p className="pb-5">You can view my resume <a className="btn" href={config.Link}>Download</a></p>


</div>

</div>



    </section>
}
