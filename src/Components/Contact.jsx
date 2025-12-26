
export default function Contact()
{
    const config =
    {
        Email:"kkarun51@gmail.com",
        Phone:"+91 951413658"
    }

    return <section id="Contact" className="flex flex-col bg-primary px-5 py-32">

<div className="w-full flex justify-center">
<div className="flex flex-col items-center  text-white">
<h1 className="text-4xl border-b-blue-900 border-b-2 w-[140px] mb-5 font-bold">Contact</h1>
<p className="font-higher"> If you want to discuss more in  details , please contact me</p>
<p className="py-2 px-5"><span className="font-bold">Email:</span>{config.Email}</p>
<p className="py-2  px-5"><span className="font-bold">Phone:</span>{config.Phone}</p>



</div>

</div>



    </section>
}