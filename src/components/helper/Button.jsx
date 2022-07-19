const Button = ({ children, href }) => {
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
