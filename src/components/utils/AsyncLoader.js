import React from 'react';
import Loadable from 'react-loadable';
import PageLoader from './PageLoader';

class AsyncLoader {
    static load(pathCallback) {
        const { importPath } = pathCallback;
        return Loadable({
            loader: () => importPath,
            loading() {
                return <PageLoader />
            }
        });
    }
}

export default AsyncLoader;
