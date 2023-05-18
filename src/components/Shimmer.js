const Shimmer = () => {
  return (
    <div className="shrimmer-container">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shrimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
