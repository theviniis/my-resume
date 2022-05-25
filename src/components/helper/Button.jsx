const Button = ({ children, name, href, color }) => {
  if (href)
    return (
      <a href={href}>
        <button className='btn'>
          <span>{children}</span>
        </button>
      </a>
    );

  return (
    <button className='btn'>
      <span>{children}</span>
    </button>
  );
};

export default Button;
