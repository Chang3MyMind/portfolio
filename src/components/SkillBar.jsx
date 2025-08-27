function SkillBar({ name, value }) {
  return (
    <div>
      <div>
        <h3 className="color-text text-sm md:text-base">{name}</h3>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="slider" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

export default SkillBar;
