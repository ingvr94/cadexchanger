import Video from "../shared/Video"
import CardItem from "../shared/CardItem"
import ContactBtn from "../shared/ContactBtn"


function Main() {

const title='Title'
const body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis diam et tincidunt consequat'
const headerStyle='text-5xl font-extrabold'
  return (
    <>
        <section id="hero" className="bg-gray-100 py-10 md:pt-10 md:pb-20">
            <div className="container flex flex-col items-start md:grid md:grid-cols-2 ">
                <div className="md:w-[400px] md:mb-0 mb-5">
                    <div className={`${headerStyle} mb-8`}>Most important title  on the page</div>
                    <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis diam et tincidunt consequat. Phasellus quis enim sem. Curabitur in egestas orci</div>
                </div>
                <Video />
            </div>
        </section>

        <section id='cards' className="py-5 md:py-10" >
            <div className="container flex flex-col items-center">
                <div className={`${headerStyle} mb-10 md:mb-20`}>Also very important title</div>
                <div className="grid md:grid-cols-3 md:gap-8 w-full mb-8">
                    {[...Array(6)].map((index:number)=>(
                        <CardItem title={title} body={body} key={index}/>
                    ))}
                </div>
                <ContactBtn />
            </div>
        </section>

        <section id='other' className="bg-gray-100 pt-28 pb-44" >
            <div className="container flex flex-col items-center">
                <div className={`${headerStyle} mb-10`}>Less important title</div>
                <ContactBtn />
            </div>
        </section>

    </>

  )
}

export default Main