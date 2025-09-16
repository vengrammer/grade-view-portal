

function CardForDashBoard({title,data}){
    return(<>
        <div className="w-screen  flex flex-col border md:w-[15rem] h-[10rem] dark:bg-zinc-700 rounded m-2">
            <span className="pl-3 text-zinc-300">{title}</span>
            <span className="m-auto text-2xl font-bold">{data}</span>
        </div>
        
    </>)
}
export default CardForDashBoard