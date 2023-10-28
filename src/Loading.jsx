
export default function Loading() {
    const Image = {
        hello: new URL('./assets/Hello.svg' ,import.meta.url).href
    }
  return (
    <div className='flex flex-col items-end justify-center h-full'>
        <img src={Image.hello} alt="start up hello svg " />
    </div>
  )
}
