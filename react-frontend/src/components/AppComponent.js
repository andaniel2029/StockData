import React, {useState} from 'react'
import { Provider } from 'react-redux'
import '../App.css'
import store from '../redux/store'
import { Grid, Accordion, Header, Icon} from "semantic-ui-react"
import SelectTickerContainer from './SelectTickerContainer'
import SelectDatesFromMenuContainer from './SelectDatesFromMenuContainer'
import SelectCustomDatesContainer from './SelectCustomDatesContainer'
import SelectLineOrCandleContainer from './SelectLineOrCandleContainer'
import LineCandleGraphContainer from './LineCandleGraphContainer'
import VolumeGraphContainer from './VolumeGraphContainer'
import CompanyFinancialsContainer from './CompanyFinancialContainer'

import MomentumMenuContainer from './MomentumMenuContainer'
import TrendMenuContainer from './TrendMenuContainer'
import MomentumGraphContainer from './MomentumGraphContainer'
import PopularMenuContainer from './PopularMenuContainer'
import EarningContainer from './EarningContainer'
import VolatilityMenuContainer from './VolatilityMenuContainer'
import HeaderTickerPriceContainer from './HeaderTickerPriceContainer'
import PostFormContainer from './PostFormContainer'
import setAuthorizationToken from '../utils/setAuthorizationToken'

function AppComponent () {
  const [activePopularAccodian, setPopularAccordion] = useState(0)
  const [activeMomentumAccodian, setMomentumAccordion] = useState(-1)
  const [activeTrendAccodian, setTrendAccordion] = useState(-1)
  const [activeVolatilityAccodian, setVolatilityAccordion] = useState(-1)

  setAuthorizationToken(localStorage.jwtToken)

  return (
    <Provider store={store}>
        <Grid celled inverted>
          <Grid.Column width = {4} inverted>
            <Grid.Row stretched color='black'>
              <SelectTickerContainer /><br/>
              <SelectDatesFromMenuContainer /><br/>
              <SelectCustomDatesContainer /><br/>
              <SelectLineOrCandleContainer /><br/>
              <Grid.Row color='black' inverted stretched>
              <Accordion inverted stretched fitted color='black'>
                <Accordion.Title
                  inverted
                  active={activePopularAccodian === 0}
                  index={0}
                  borderless
                  onClick={(e,index) => {
                      setPopularAccordion(index.index === activePopularAccodian ? -1 : index.index)
                      }}>
                    <Header as='h3' textAlign='left' inverted><Icon name='dropdown' />Popular</Header>
                </Accordion.Title>
                <Accordion.Content borderless active={activePopularAccodian === 0} >{<PopularMenuContainer />}</Accordion.Content>
                <Accordion.Title
                  inverted
                  active={activeMomentumAccodian === 0}
                  index={0}
                  borderless
                  onClick={(e,index) => {
                      setMomentumAccordion(index.index === activeMomentumAccodian ? -1 : index.index)
                      }}>
                    <Header as='h3' textAlign='left' inverted><Icon name='dropdown' />Momentum</Header>
                </Accordion.Title>
                <Accordion.Content borderless active={activeMomentumAccodian === 0} >{<MomentumMenuContainer />}</Accordion.Content>
                <Accordion.Title
                  inverted
                  active={activeTrendAccodian=== 1}
                  index={1}
                  borderless
                  onClick={(e,index) => {
                      setTrendAccordion(index.index === activeTrendAccodian ? -1 : index.index)
                      }}>
                    <Header as='h3' textAlign='left' inverted><Icon name='dropdown' />Trend</Header>
                </Accordion.Title>
                <Accordion.Content borderless active={activeTrendAccodian === 1} >{<TrendMenuContainer />}</Accordion.Content>
                <Accordion.Title
                  inverted
                  active={activeVolatilityAccodian=== 1}
                  index={1}
                  borderless
                  onClick={(e,index) => {
                      setVolatilityAccordion(index.index === activeVolatilityAccodian ? -1 : index.index)
                      }}>
                    <Header as='h3' textAlign='left' inverted><Icon name='dropdown' />Volatility</Header>
                </Accordion.Title>
                <Accordion.Content borderless active={activeVolatilityAccodian === 1} >{<VolatilityMenuContainer />}</Accordion.Content>
              </Accordion>
              </Grid.Row>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width = {12}>
            <HeaderTickerPriceContainer /><br />
            <LineCandleGraphContainer /><br/>
            <VolumeGraphContainer/><br/>
            <MomentumGraphContainer/><br />
            <PostFormContainer/><br />
            <CompanyFinancialsContainer/><br />
            <EarningContainer/><br />
            
          </Grid.Column>
        </Grid>
        
        
      
    </Provider>
  )
}

export default AppComponent