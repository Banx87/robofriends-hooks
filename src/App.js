import React, { useState, useEffect } from 'react'
import CardList from './components/Card/CardList'
import SearchBox from './components/Card/SearchBox'
import Scroll from './components/UI/Scroll.js'
import ErrorBoundary from './components/ErrorBoundary'


function App() {
    /* constructor(props) {
        super(props)
        this.state = {
            robots: [],
            searchfield: ''
        }
    } */

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    /*  componentDidMount() {
         fetch('https://jsonplaceholder.typicode.com/users')
             .then(res => res.json())
             .then(users => this.setState({ robots: users }))
     } */

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setRobots(users))
        console.log(count)
    }, [count])

    const onSearchChange = (e) => {
        setSearchfield(e.target.value)
    }


    /*   const { robots, searchfield } = this.state */

    const filteredRobot = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (!robots.length) {
        return <h1>Goofing around</h1>
    } else {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <button onClick={() => setCount(count + 1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobot} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}


export default App
