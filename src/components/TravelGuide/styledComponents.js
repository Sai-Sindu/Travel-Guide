import styled from 'styled-components'

export const TravelGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef4f7;
  padding: 10px;
  height: 100vh;
`
export const TravelGuideTitle = styled.h1`
  color: #334155;
  font-size: 25px;
  font-family: 'Roboto';
  border-bottom: 2px solid #52bbf0;
`
export const TravelGuidePackageContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 90vh;
  width: 100%;
  overflow-y: auto;
`
