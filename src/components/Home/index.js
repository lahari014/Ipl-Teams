// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data)
    const {teams} = data
    console.log(teams)
    const updatedData = await teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedData)
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return isLoading ? (
      <div className="container">
        <div className="team-container" data-testid="loader">
          <Loader type="Oval" color="black" height={50} width={50} />
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="card1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        <ul className="list-container">
          {teamsList.map(each => (
            <TeamCard details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
