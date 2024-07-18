// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/sanjeev-kumar-201bb620b/"
        target="_blank"
        title="Sanjeev Kumar's Linkedin Profile"
      >
        Sanjeev Kumar
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/sanjeevk11/Foodfire-App.git"
        target="_blank"
        title="Food Fire Github Repository"
      >
        <strong>
          Food<span>Fire</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
