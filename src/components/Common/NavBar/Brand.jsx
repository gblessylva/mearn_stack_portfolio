import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Brand = ()=> {
    return(

         <BrandH1>
            <Link className="brand" to="/">
                GBLESSYLVA
            </Link>             
        </BrandH1>
    )
}
export default Brand

const BrandH1 = styled.a`
color:white;
padding-left:150px;
font-size:18px;
&:hover {
    color: red;
  }
`