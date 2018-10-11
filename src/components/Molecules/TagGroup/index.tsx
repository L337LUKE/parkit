import React, { Fragment, SFC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Tag } from '../../Atoms';

interface ITagGroup {
    tags: string[];
    limit?: number;
}

const StyledTag = styled(Tag)`
    margin-bottom: 0.357142857em;

    & + & {
        margin-left: 10px;
    }
`;

const TagLine = styled.span`
    vertical-align: top;
    margin-right: 0.714285714em;
    font-size: 0.875em;
`;

const TagGroup: SFC<ITagGroup> = ({ tags, limit = 3 }) => {
    if (typeof tags === 'undefined' || tags.length <= 0) return;

    return (
        <div>
            <TagLine>tags: </TagLine>
            {tags.slice(0, limit).map((tag, index) => (
                <StyledTag key={index}>
                    <Link
                        href={{
                            pathname: '/tag',
                            query: {
                                tag: encodeURIComponent(tag)
                            }
                        }}
                    >
                        <a>{tag}</a>
                    </Link>
                </StyledTag>
            ))}
        </div>
    );
};

export default TagGroup;
