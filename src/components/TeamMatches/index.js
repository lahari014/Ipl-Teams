// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {teams: [], url: '', matches: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const teamBannerUrl = data.team_banner_url
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updatedRecentMatches = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      url: teamBannerUrl,
      matches: updatedLatestMatchDetails,
      teams: updatedRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {url, matches, teams, isLoading} = this.state
    return isLoading ? (
      <div className="team-container" data-testid="loader">
        <Loader type="Oval" color="black" height={50} width={50} />
      </div>
    ) : (
      <div className="team-container">
        <img src={url} alt="team banner" className="image" />
        <LatestMatch details={matches} key={matches.id} />
        <ul className="recent-container">
          {teams.map(each => (
            <MatchCard data={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
