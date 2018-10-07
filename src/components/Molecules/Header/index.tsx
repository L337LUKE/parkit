import React, { SFC, Fragment } from 'react';
import { Box } from '../../Atoms';
import defaultStyles, { boxStyle } from './styles';

interface IHeaderProps {}

const Header: SFC<IHeaderProps> = () => (
    <Fragment>
        <Box className={boxStyle.className} component="header">
            <h1 className="h4">Technical Test</h1>
        </Box>
        {boxStyle.styles}
        <style jsx>{defaultStyles}</style>
    </Fragment>
);

export default Header;
