const Navlist = ({ data }) => {
  return (
    <div className="flex gap-x-4">
      {data.map((item, index) => (
        <div className="font-bold text-black/70" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
export default Navlist;
