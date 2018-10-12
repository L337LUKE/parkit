import React, { SFC } from 'react';
import Link from 'next/link';
import { ITagGroup } from './types';
import { TagLine, StyledTag } from './styles';

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
