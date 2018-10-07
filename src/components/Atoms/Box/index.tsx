import React, { SFC } from 'react';
import { IBoxProps } from './types';
import styles from './styles';

const Box: SFC<IBoxProps> = ({ children, component: Component, className }) => (
    <Component className={`${className} box`}>
        {children && children}
        <style jsx>{styles}</style>
    </Component>
);

Box.defaultProps = {
    className: '',
    component: 'div'
};

export default Box;
