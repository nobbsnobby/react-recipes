import React from 'react';
import './styles.css';

import { Query } from 'react-apollo';
import { GET_ALL_RECIPES } from '../../queries';

const App = () =>
    <div className='App'>
        <h1>Home</h1>
        <Query
            query={GET_ALL_RECIPES}
        >
            {({ loading, error, data }) => {
                if (loading) return <div>Loading...</div>;
                if (error) return <div>Error</div>;
                console.log(data);
                return (
                    <div>Done</div>);
            }}
        </Query>
    </div>;


export default App;