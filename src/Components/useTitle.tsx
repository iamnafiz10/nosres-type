import {useEffect} from 'react';

const UseTitle = (title: unknown) => {
    useEffect(() => {
        document.title = `Nosres - ${title}`;
    }, [title]);
};

export default UseTitle;