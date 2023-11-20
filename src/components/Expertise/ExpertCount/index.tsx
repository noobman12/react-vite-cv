type Props = { expertCount: number };

export default function index({ expertCount = 0 }: Props) {
  const List = [];
  for (let i = 1; i <= 5; i++) {
    List.push(
      <div
        className={
          "w-[10px] h-[10px] rounded-full d-block " +
          (expertCount >= i
            ? "bg-orange-500 text-orange-500"
            : "bg-slate-50 text-white")
        }
      ></div>
    );
  }
  return (
    <div className='flex gap-2'>
      {List.map((item) => {
        return item;
      })}
    </div>
  );
}
