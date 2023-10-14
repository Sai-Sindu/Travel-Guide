import {PackageDetailsCard, Image, Name, Description} from './styledComponents'

const PackageItem = props => {
  const {packageDetails} = props
  const {description, name, imageUrl} = packageDetails
  return (
    <PackageDetailsCard>
      <Image src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </PackageDetailsCard>
  )
}

export default PackageItem
