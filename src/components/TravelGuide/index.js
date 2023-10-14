import {Component} from 'react'

import Loader from 'react-loader-spinner'

import PackageItem from '../PackageItem'

import {
  TravelGuideContainer,
  TravelGuideTitle,
  TravelGuidePackageContainer,
} from './styledComponents'

class TravelGuide extends Component {
  state = {packageList: [], isLoading: true}

  componentDidMount() {
    this.getTravelGuidePackageList()
  }

  getTravelGuidePackageList = async () => {
    this.setState({isLoading: true})
    const travelGuidePackagesApiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(travelGuidePackagesApiUrl)
    const packageListData = await response.json()
    const updatedData = packageListData.packages.map(eachPackage => ({
      id: eachPackage.id,
      description: eachPackage.description,
      imageUrl: eachPackage.image_url,
      name: eachPackage.name,
    }))
    this.setState({packageList: updatedData, isLoading: false})
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelGuidePackageList = () => {
    const {packageList} = this.state
    return (
      <TravelGuidePackageContainer>
        {packageList.map(eachPackage => (
          <PackageItem packageDetails={eachPackage} key={eachPackage.id} />
        ))}
      </TravelGuidePackageContainer>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <TravelGuideContainer>
        <TravelGuideTitle>Travel Guide</TravelGuideTitle>
        {isLoading
          ? this.renderLoadingView()
          : this.renderTravelGuidePackageList()}
      </TravelGuideContainer>
    )
  }
}

export default TravelGuide
