
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from 'react';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
        <Link
          style={{ textDecoration: match ? "none" : "none" , color: match? "white" : "rgb(26, 24, 24)", padding:"12px" , backgroundColor: match? "rgb(255, 65, 141)" : "transparent" , }}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
};

export default CustomLink;