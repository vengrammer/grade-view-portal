function CardForDashBoard({ title, data }) {
  return (
    <div className="flex flex-col border md:w-[15rem] h-[10rem] border-zinc-800 dark:bg-zinc-700 rounded-2xl  m-2">
      <span className="pl-3 text-zinc-600 dark:text-zinc-300">{title}</span>
      <span className="m-auto text-2xl font-bold">{data}</span>
    </div>
  );
}
export default CardForDashBoard;
