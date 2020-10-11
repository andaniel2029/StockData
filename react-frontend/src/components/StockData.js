import React, {useState, useEffect, useRef} from 'react';
import "semantic-ui-css/semantic.min.css"
import '../App.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { Label, List, Message, Header, Form, Input, Button, Radio, Grid, Container, Menu, Sidebar, Icon, Accordion, Segment,  Checkbox, Select } from "semantic-ui-react"
import AccordionExampleMenu from './AccordionExampleMenu'
import { createCandleStickChart } from './charts/candleStickChart.js'
import { createVolumeBarChart } from './charts/volumeBarChart.js'
import { createEarningsChart } from './charts/earningChart.js'
import { createStockPriceLineChart } from './charts/stockPriceLineChart';
import { createMomentumIndicatorsChart } from './charts/momentumIndicatorsChart'

export const StockData = () => {
	var currentDate = new Date();
	var dateOffset = (24*60*60*1000) * 182; 
	var newDate = currentDate.setTime(currentDate.getTime() - dateOffset);
	
	const [startDate, setStartDate] = useState(currentDate);
	const [endDate, setEndDate] = useState(new Date());
	const [ticker, setTicker] = useState('AAPL');
	const [financials, setFinancials] = useState([])
	const [earnings, setEarnings] = useState([])
	const [activeItemDateMenu, setActiveItemDateMenu] = useState('');
	const [activeFinancialsMenuItem, setActiveFinancialsMenuItem] = useState()
	const [activeEarningsMenuItem, setActiveEarningsMenuItem] = useState()

	const [stockData, setStockData] = useState([]);
    const [displayPriceChart, setDisplayPriceChart] = useState(true)
    
	const [displayRSIcheckbox, setDisplayRSIcheckbox] = useState(true)
	const [NforRSI, setNforRSI] = useState(10)
    const [activeRSIAccodianMenuItem, setRSIActiveAccordionMenuItem] = useState(-1)

	const [displayTSIcheckbox, setDisplayTSIcheckbox] = useState(false)
	const [rForTSI, setrForTSI] = useState(25)
    const [sForTSI, setsForTSI] = useState(13)
    const [activeTSIAccodianMenuItem, setTSIActiveAccordionMenuItem] = useState(-1)

	const [displayUOCheckbox, setDisplayUOCheckbox] = useState(false)
	const [sForUO, setsForUO] = useState(7)
	const [mForUO, setmForUO] = useState(14)
	const [lenForUO, setlenForUO] = useState(28)
	const [wsForUO, setwsForUO] = useState(4)
	const [wmForUO, setwmForUO] = useState(2)
    const [wlForUO, setwlForUO] = useState(1)
    const [activeUOAccodianMenuItem, setUOActiveAccordionMenuItem] = useState(-1)
    
    const [displayStochCheckbox, setDisplayStochCheckbox] = useState(false)
    const [nForStoch, setNForStoch] = useState(14)
    const [d_nForStoch, setd_nForStoch] = useState(3)
    const [activeStochAccodianMenuItem, setStochActiveAccordionMenuItem] = useState(-1)

    const [displayStochSignalCheckbox, setDisplayStochSignalCheckbox] = useState(false)
    const [nForStochSignal, setNForStochSignal] = useState(14)
    const [d_nForStochSignal, setd_nForStochSignal] = useState(3)
    const [activeStochSignalAccodianMenuItem, setStochSignalActiveAccordionMenuItem] = useState(-1)

    const [displayWR, setDisplayWR] = useState(false)
    const [lbpForWR, setLBPForWR] = useState(14)
    const [activeWRAccodianMenuItem, setWRActiveAccordionMenuItem] = useState(-1)

    const [displayAO, setDisplayAO] = useState(false)
    const [sForAO, setSForAO] = useState(5)
    const [lenForAO, setLenForAO] = useState(34)
    const [activeAOAccodianMenuItem, setAOActiveAccordionMenuItem] = useState(-1)

    const [displayKama, setDisplayKama] = useState(false)
    const [nForKama, setNForKama] = useState(10)
    const [pow1ForKama, setPow1ForKama] = useState(2)
    const [pow2ForKama, setPow2ForKama] = useState(30)
    const [activeKamaAccodianMenuItem, setKamaActiveAccordionMenuItem] = useState(-1)

    const [displayROC, setDisplayROC] = useState(false)
    const [nForROC, setNForROC] = useState(12)
    const [activeROCAccodianMenuItem, setROCActiveAccordionMenuItem] = useState(-1)

    const [displayEMA, setDisplayEMA] = useState(false)
    const [nForEMA, setNForEMA] = useState(12)
    const [activeEMAAccodianMenuItem, setEMAActiveAccordionMenuItem] = useState(-1)

    const [displaySMA, setDisplaySMA] = useState(false)
    const [nForSMA, setNforSMA] = useState(12)
    const [activeSMAAccordionMenuItem, setActiveSMAAccordionMenuItem] = useState(-1)
    
    const [displayMACD, setDisplayMACD] = useState(false)
    const [nSlowForMACD, setNslowForMACD] = useState(26)
    const [nFastForMACD, setNfastForMACD] = useState(12)
    const [activeMACDAccordionMenuItem, setActiveMACDAccordionMenuItem] = useState(-1)

    const [displayMACDsignal, setDisplayMACDsignal] = useState(false)
    const [nSlowForMACDsignal, setNslowForMACDsignal] = useState(26)
    const [nFastForMACDsignal, setNfastForMACDsignal] = useState(12)
    const [nSignForMACDsignal, setNsignForMACDsignal] = useState(9)
    const [activeMACDsignalAccordionMenuItem, setActiveMACDsignalAccordionMenuItem] = useState(-1)

    const [displayADX, setDisplayADX] = useState(false)
    const [nForADX, setNforADX] = useState(14)
    const [activeADXAccordionMenuItem, setActiveADXAccordionMenuItem] = useState(-1)

    const [displayADXpos, setDisplayADXpos] = useState(false)
    const [nForADXpos, setNforADXpos] = useState(14)
    const [activeADXposAccordionMenuItem, setActiveADXposAccordionMenuItem] = useState(-1)

    const [displayADXneg, setDisplayADXneg] = useState(false)
    const [nForADXneg, setNforADXneg] = useState(14)
    const [activeADXnegAccordionMenuItem, setActiveADXnegAccordionMenuItem] = useState(-1)

    const [displayVIpos, setDisplayVIpos] = useState(false)
    const [nForVIpos, setNforVIpos] = useState(14)
    const [activeVIposAccordionMenuItem, setActiveVIposAccordionMenuItem] = useState(-1)

    const [displayVIneg, setDisplayVIneg] = useState(false)
    const [nForVIneg, setNforVIneg] = useState(14)
    const [activeVInegAccordionMenuItem, setActiveVInegAccordionMenuItem] = useState(-1)
    
    const [displayTRIX, setDisplayTRIX] = useState(false)
    const [nForTRIX, setNforTRIX] = useState(14)
    const [activeTRIXAccordionMenuItem, setActiveTRIXAccordionMenuItem] = useState(-1)

    const [displayMassIndex, setDisplayMassIndex] = useState(false)
    const [nForMassIndex, setNforMassIndex] = useState(9)
    const [n2ForMassIndex, setN2forMassIndex] = useState(25)
    const [activeMassIndexAccordionMenuItem, setActiveMassIndexAccordionMenuItem] = useState(-1)

    const [displayCCI, setDisplayCCI] = useState(false)
    const [nForCCI, setNforCCI] = useState(20)
    const [cForCCI, setCforCCI] = useState(0.015)
    const [activeCCIAccordionMenuItem, setActiveCCIAccordionMenuItem] = useState(-1)

    const [displayDPO, setDisplayDPO] = useState(false)
    const [nForDPO, setNforDPO] = useState(20)
    const [activeDPOAccordionMenuItem, setActiveDPOAccordionMenuItem] = useState(-1)

    const [displayIchimuku, setDisplayIchimoku] = useState(false)
    const [n1ForIchimoku, setN1forIchimoku] = useState(9)
    const [n2ForIchimoku, setN2forIchimoku] = useState(26)
    const [visualForIchimoku, setVisualForIchimoku] = useState(false)
    const [activeIchimokuAccordionMenuItem, setActiveIchimokuAccordionMenuItem] = useState(-1)
    
    const [displayAIup, setDisplayAIup] = useState(false)
    const [nForAIup, setNforAIup] = useState(25)
    const [activeAIupAccordionMenuItem, setActiveAIupAccordionMenuItem] = useState(-1)

    const [displayAIdown, setDisplayAIdown] = useState(false)
    const [nForAIdown, setNforAIdown] = useState(25)
    const [activeAIdownAccordionMenuItem, setActiveAIdownAccordionMenuItem] = useState(-1)
    
	const earningsChartNode = useRef(null);
	const showVolumeNode = useRef(null);
	const stockPriceLineChartNode = useRef(null);
    const momentumIndicatorsChartNode = useRef(null);

	if (stockData.length < 1 && earnings.length < 1){
		getAndSetStockData(ticker,startDate,endDate)
		//getAndSetEarnings(ticker)
	}
console.log(displayMACD)

	useEffect(() => {
		if (stockData.length > 0) {
			//createStockPriceLineChart(stockData,stockPriceLineChartNode,displayPriceChart);
            createTrendIndicatorsChartFunction(stockData,stockPriceLineChartNode,displayPriceChart,displayEMA,displayAIdown,displayAIup,displayIchimuku,displayDPO,displayCCI,displaySMA,displayMACD,displayMACDsignal,displayADX,displayADXpos,displayADXneg,displayVIpos,displayVIneg,displayTRIX,displayMassIndex);
            createVolumeBarChart(stockData,showVolumeNode);
			createMomentumIndicatorsChartFunction(stockData,momentumIndicatorsChartNode)
		}

		if (earnings.length > 0) {
			//console.log(earnings)
			//createEarningsChart(earnings,earningsChartNode)
		}
	},[stockData,displayRSIcheckbox,NforRSI,displayTSIcheckbox,rForTSI,sForTSI,displayUOCheckbox,sForUO,mForUO,lenForUO,wsForUO,wmForUO,wlForUO,displayStochCheckbox,nForStoch,d_nForStoch,,displayStochSignalCheckbox,nForStochSignal,d_nForStochSignal,displayWR,lbpForWR,displayAO,sForAO,lenForAO,displayKama,nForKama,pow1ForKama,pow2ForKama,displayROC,nForROC,displayPriceChart,displayEMA,displayAIdown,displayAIup,displayIchimuku,displayDPO,displayCCI,displaySMA,displayMACD,displayMACDsignal,displayADX,displayADXpos,displayADXneg,displayVIpos,displayVIneg,displayTRIX,displayMassIndex])


	function convertDatesToString(initialDate) {
		const convertedDate = String(initialDate.getFullYear())+"-"+String(initialDate.getMonth() + 1)+"-"+String(initialDate.getDate())
		return convertedDate
	}

	function getAndSetStockData(stockTicker,theStartDate,theEndDate) {

		const startDateConverted = convertDatesToString(theStartDate) 
		const endDateConverted = convertDatesToString(theEndDate) 
		fetch("/get_stock_data/"+stockTicker+"/"+startDateConverted+"/"+endDateConverted).then(response => 
			response.json().then(data => {
				if (stockData.length < 1) {
					createStockPriceLineChart(data,stockPriceLineChartNode,displayPriceChart);
					createVolumeBarChart(data,showVolumeNode);
					createMomentumIndicatorsChartFunction(data,momentumIndicatorsChartNode);
				}
				setStockData(data);

			})
		)
	}

	function getAndSetFinancials(stockTicker) {
		fetch("/get_financial_data/"+stockTicker).then(response => 
			response.json().then(data => {
				setFinancials(data)
			}))
	}

	function getAndSetEarnings(stockTicker) {
		fetch("/get_earnings_data/"+stockTicker).then(response => 
			response.json().then(data => {
				if (earnings.length < 1) {
					createEarningsChart(data,earningsChartNode)
				}
				setEarnings(data)
			}))
	}

	function handleStartDateClick(date) {
		if (date !== startDate) {
			setStartDate(date)
			
		}
		getAndSetStockData(ticker,date,endDate)
		getAndSetFinancials(ticker);
		getAndSetEarnings(ticker);
	}
	
	function handleDateClick(minusDays, name) {
		setActiveItemDateMenu(name)
		
		var currentDate = new Date();
		var dateOffset = (24*60*60*1000) * minusDays; 
		var newDate = currentDate.setTime(currentDate.getTime() - dateOffset);
		setStartDate(currentDate);
		getAndSetStockData(ticker,currentDate,endDate) 
		getAndSetFinancials(ticker);
		getAndSetEarnings(ticker);
	}

	function handleEndDateClick(date) {
		setEndDate(date)
		getAndSetStockData(ticker,startDate,date) 
		getAndSetFinancials(ticker);
		getAndSetEarnings(ticker);

	}

	function handleTickerFormSubmit() {
		getAndSetStockData(ticker,startDate,endDate) 
		getAndSetFinancials(ticker);
		getAndSetEarnings(ticker);
	}

    const handlePriceClickLine = (event, {value}) => setDisplayPriceChart(true)
    const handlePriceClickCandle = (event, {value}) => setDisplayPriceChart(false)


    function createTrendIndicatorsChartFunction(data, stockPriceLineChartNode) {
        console.log(displayMACD)
        const SMAparameters = {'displaySMA':displaySMA,'nForSMA':nForSMA}
        const MACDparameters = {'displayMACD':displayMACD,'nSlow':nSlowForMACD,'nFast':nFastForMACD}
        const MACDsignalparameters = {'displayMACDsignal':displayMACDsignal,'nSlow':nSlowForMACDsignal,'nFast':nFastForMACDsignal,'nSign':nSignForMACDsignal}
        const EMAparameters = {'displayEMA':displayEMA,'nForEMA':nForEMA}
        const ADXparameters = {'displayADX':displayADX,'nForADX':nForADX}
        const ADXposparameters = {'displayADXpositive':displayADXpos,'nForADXpositive':nForADXpos}
        const ADXnegparameters = {'displayADXnegative':displayADXneg,'nForADXnegative':nForADXneg}
        const VIposparameters = {'displayVIpositive':displayVIpos,'nForVIpositive':nForVIpos}
        const VInegparameters = {'displayVInegative':displayVIneg,'nForVInegative':nForVIneg}
        const TRIXparameters = {'displayTRIX':displayTRIX,'nForTRIX':nForTRIX}
        const MIparameters = {'displayMassIndex':displayMassIndex,'nForMassIndex':nForMassIndex,'n2ForMassIndex':n2ForMassIndex}
        const CCIparameters = {'displayCCIcheck':displayCCI,'nForCCI':nForCCI,'cForCCI':cForCCI}
        const DPOparameters = {'displayDPO':displayDPO,'nForDPO':nForDPO}
        const Ichicomkuparameters = {'displayIchimoku':displayIchimuku,'n1ForIchimoku':n1ForIchimoku,'n2ForIchimoku':n2ForIchimoku,'visualForIchimoku':visualForIchimoku}
        const AIupparameters = {'AIupChecked':displayAIup,'nForAIup':nForAIup}
        const AIdownparameters = {'AIdownChecked':displayAIdown,'nForAIdown':nForAIdown}
  
        if (data.length > 1) {
            fetch('/calculate_Trend_Indicators/', {
				method: 'POST', // or 'PUT'
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify([data,SMAparameters,MACDparameters,MACDsignalparameters,EMAparameters,ADXparameters,ADXposparameters,ADXnegparameters,VIposparameters,VInegparameters,TRIXparameters,MIparameters,CCIparameters,DPOparameters,Ichicomkuparameters,AIupparameters,AIdownparameters]),
				})
				.then(response => response.json())
				.then(dataForTrendfromAPI => {
					createStockPriceLineChart(dataForTrendfromAPI,stockPriceLineChartNode,displayPriceChart,displayEMA,displayAIdown,displayAIup,displayIchimuku,displayDPO,displayCCI,displaySMA,displayMACD,displayMACDsignal,displayADX,displayADXpos,displayADXneg,displayVIpos,displayVIneg,displayTRIX,displayMassIndex)
				})
				.catch((error) => {
				console.error('Error:', error);
				});
        }else{
			createStockPriceLineChart(data,stockPriceLineChartNode,displayPriceChart,displayEMA);
		}
    }

	function createMomentumIndicatorsChartFunction(data,momentumIndicatorsChartNode) {
		
		const RSIparameters = {'N':NforRSI}
		const TSIparameters = {'displayTSI':displayTSIcheckbox,'rTSI':rForTSI,'sTSI':sForTSI}
		const UOparameters = {'displayUO':displayUOCheckbox,'sForUO':sForUO,'mForUO':mForUO,'lenForUO':lenForUO,'wsForUO':wsForUO,'wmForUO':wmForUO,'wlForUO':wlForUO}
		const StochParameters = {'displayStoch':displayStochCheckbox,'nForStoch':nForStoch,'d_nForStoch':d_nForStoch}
		const StochSignalParameters = {'displayStochSignal':displayStochSignalCheckbox,'nForStochSignal':nForStochSignal,'d_nForStochSignal':d_nForStochSignal}
        const WRParameters = {'displayWR':displayWR,'lbpForWR':lbpForWR}
        const AOParameters = {'displayAO':displayAO,'sForAO':sForAO,'lenForAO':lenForAO}
        const KamaParameters = {'displayKama':displayKama,'nForKama':nForKama,'pow1ForKama':pow1ForKama,'pow2ForKama':pow2ForKama}
        const ROCParameters = {'displayROC':displayROC,'nForROC':nForROC}
        //console.log(ROCParameters)
		if (data.length > 1){
			fetch('/calculate_Momentum_Indicators/', {
				method: 'POST', // or 'PUT'
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify([data,RSIparameters,TSIparameters,UOparameters,StochParameters,StochSignalParameters,WRParameters,AOParameters,KamaParameters,ROCParameters]),
				})
				.then(response => response.json())
				.then(dataForMomfromAPI => {
					createMomentumIndicatorsChart(dataForMomfromAPI,momentumIndicatorsChartNode,displayRSIcheckbox,displayTSIcheckbox,displayUOCheckbox,displayStochCheckbox,displayStochSignalCheckbox,displayWR,displayAO,displayKama,displayROC)
				})
				.catch((error) => {
				console.error('Error:', error);
				});
		}else{
			createMomentumIndicatorsChart(data,momentumIndicatorsChartNode,displayRSIcheckbox,displayTSIcheckbox,displayUOCheckbox,displayStochCheckbox,displayStochSignalCheckbox,displayWR,displayAO,displayKama,displayROC)
		}
    }
 

	const momentumNtradingDayOptions = [
		{ key: 'one', text: '1', value: 1 },
		{ key: 'two', text: '2', value: 2 },
		{ key: 'three', text: '3', value: 3 },
		{ key: 'four', text: '4', value: 4 },
		{ key: 'five', text: '5', value: 5 },
		{ key: 'six', text: '6', value: 6 },
		{ key: 'seven', text: '7', value: 7 },
		{ key: 'eight', text: '8', value: 8 },
		{ key: 'nine', text: '9', value: 9 },
		{ key: 'ten', text: '10', value: 10 },
		{ key: 'eleven', text: '11', value: 11 },
		{ key: 'twelve', text: '12', value: 12 },
		{ key: 'thirteen', text: '13', value: 13 },
		{ key: 'fourteen', text: '14', value: 14 },
		{ key: 'fifteen', text: '15', value: 15 },
		{ key: 'sixteen', text: '16', value: 16 },
		{ key: 'seventeen', text: '17', value: 17 },
		{ key: 'eighteen', text: '18', value: 18 },
		{ key: 'ninteen', text: '19', value: 19 },
		{ key: 'twenty', text: '20', value: 20 },
		{ key: 'twentyone', text: '21', value: 21 },
		{ key: 'twentytwo', text: '22', value: 22 },
		{ key: 'twentythree', text: '23', value: 23 },
		{ key: 'twentyfour', text: '24', value: 24 },
		{ key: 'twentyfive', text: '25', value: 25 },
		{ key: 'twentysix', text: '26', value: 26 },
		{ key: 'twentyseven', text: '27', value: 27 },
		{ key: 'twentyeight', text: '28', value: 28 },
		{ key: 'twentynine', text: '29', value: 29 },
        { key: 'thirty', text: '30', value: 30 },
        { key: 'thirtyone', text: '31', value: 31 },
		{ key: 'thirtytwo', text: '32', value: 32 },
		{ key: 'thirtythree', text: '33', value: 33 },
		{ key: 'thirtyfour', text: '34', value: 34 },
		{ key: 'thirtyfive', text: '35', value: 35 }
	]
	  
    

    const RSIcontentPanel = (
        <Grid columns='equal'>
            <Grid.Column>
                <br/>Period in Trading Days (n):
            </Grid.Column>
            <Grid.Column width={4}>
                <Form.Field
                    control={Select}
                    options={momentumNtradingDayOptions}
                    placeholder='10'
                    compact
                    onChange ={(e,selectedOption) => {
                        setNforRSI(selectedOption.value)
                        }}
                />
            </Grid.Column>
        </Grid>
    )

    const TSIcontentPanel = (
        
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>EMA Smoothing Period (r):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='25'
                        compact
                        onChange ={(e,selectedOption) => {
                            setrForTSI(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>EMA Smoothing Period for Smoothed Mom (s)
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='13'
                        compact
                        onChange ={(e,selectedOption) => {
                            setsForTSI(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>        
    )

    const UOcontentPanel = (

        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Short Period (s): 
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='7'
                        compact
                        onChange ={(e,selectedOption) => {
                            setsForUO(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Medium Period (m): 
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='14'
                        compact
                        onChange ={(e,selectedOption) => {
                            setmForUO(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Long Period (l)
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='28'
                        compact
                        onChange ={(e,selectedOption) => {
                            setlenForUO(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Weight of Short BP Average (ws):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='4'
                        compact
                        onChange ={(e,selectedOption) => {
                            setwsForUO(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>'Weight of Medium BP Average (wm):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='2'
                        compact
                        onChange ={(e,selectedOption) => {
                            setwmForUO(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Weight of Long BP Average (wl):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='1'
                        compact
                        onChange ={(e,selectedOption) => {
                            setwlForUO(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const StochcontentPanel = (

        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Period of Trading Days:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                    control={Select}
                    options={momentumNtradingDayOptions}
                    placeholder='14'
                    compact
                    onChange ={(e,selectedOption) => {
                        setNForStoch(selectedOption.value)
                        }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Simple Moving Average Period:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                    control={Select}
                    options={momentumNtradingDayOptions}
                    placeholder='3'
                    compact
                    onChange ={(e,selectedOption) => {
                        setd_nForStoch(selectedOption.value)
                    }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
    )                    

    const StochSignalcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Period of Trading Days:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                    control={Select}
                    options={momentumNtradingDayOptions}
                    placeholder='14'
                    compact
                    onChange ={(e,selectedOption) => {
                        setNForStochSignal(selectedOption.value)
                        }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Simple Moving Average Period:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                    control={Select}
                    options={momentumNtradingDayOptions}
                    placeholder='3'
                    compact
                    onChange ={(e,selectedOption) => {
                        setd_nForStochSignal(selectedOption.value)
                    }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )      
    
    
    const WRcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Lookback Period:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                    control={Select}
                    options={momentumNtradingDayOptions}
                    placeholder='14'
                    compact
                    onChange ={(e,selectedOption) => {
                        setLBPForWR(selectedOption.value)
                        }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const AOcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Short Period (s):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='5'
                        compact
                        onChange ={(e,selectedOption) => {
                            setSForAO(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Long Period (l):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='34'
                        compact
                        onChange ={(e,selectedOption) => {
                            setLenForAO(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const KamacontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Periods for Efficiency Ratio (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='10'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNForKama(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Periods for Fast EMA Constant:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='2'
                        compact
                        onChange ={(e,selectedOption) => {
                            setPow1ForKama(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Periods for Slow EMA Constant:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='30'
                        compact
                        onChange ={(e,selectedOption) => {
                            setPow2ForKama(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const ROCcontentPanel = (

        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='12'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNForROC(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const level1MomentumMenuPanels = [
        { key: 'RSI', title: 'Relative Strength Index', content: {as: RSIcontentPanel}, index: 0 },
        { key: 'TSI', title: 'True Strength Index', content: {as: TSIcontentPanel}, index: 1 },
        { key: 'UO', title: 'Ultimate Oscillator', content: {as: UOcontentPanel}, index: 2 },
        { key: 'Stoch', title: 'Stochastic Oscillator', content: {as: StochcontentPanel}, index: 3 },
        { key: 'StochSignal', title: 'Stochastic Oscillator Signal', content: {as: StochSignalcontentPanel}, index: 4 },
        { key: 'WR', title: 'Williams %R', content: {as: WRcontentPanel}, index: 5 },
        { key: 'AO', title: 'Awesome Oscillator', content :{as: AOcontentPanel}, index: 6 },
        { key: 'Kama', title: 'Kaufmans Adaptive Moving Average', content: {as: KamacontentPanel}, index: 7 },
        { key: 'ROC', title: 'Rate-of-Change (ROC) indicator', content: {as: ROCcontentPanel}, index: 8 },
    ]

    const Level1MomentumContent = (
        <div className="no-padding">
          {/* <Accordion.Accordion panels={level1MomentumMenuPanels} onTitleClick={handleMomentumItemClick(e,itemProps)} value={activeIndex} /> */}
          <Accordion.Accordion panels={level1MomentumMenuPanels} className='no-padding'/>
        </div>
    )

    const EMAcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='12'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNForEMA(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const SMAcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='12'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforSMA(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const MACDcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Slow Periods:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='26'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNslowForMACD(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Fast Periods:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='12'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNfastForMACD(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const MACDSignalcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Slow Periods:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='26'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNslowForMACDsignal(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Fast Periods:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='12'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNfastForMACDsignal(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>N Sign:
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='12'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNsignForMACDsignal(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const ADXcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='14'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforADX(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )


    const ADXposcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='14'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforADXpos(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const ADXnegcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='14'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforADXneg(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
 
    
    const VIposcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='14'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforVIpos(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
    
    const VInegcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='14'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforVIneg(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

  
    const TRIXcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='14'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforTRIX(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )


    const MassIndexcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n1):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='9'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforMassIndex(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n2):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='25'
                        compact
                        onChange ={(e,selectedOption) => {
                            setN2forMassIndex(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    
    const CCIcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='20'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforCCI(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    const DPOcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='20'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforDPO(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    
    const IchimukucontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n1):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='9'
                        compact
                        onChange ={(e,selectedOption) => {
                            setN1forIchimoku(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n2):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='26'
                        compact
                        onChange ={(e,selectedOption) => {
                            setN2forIchimoku(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

  
    const AIupcontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='25'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforAIup(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
    
  
    const AIdowncontentPanel = (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <br/>Number of Periods (n):
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Field
                        control={Select}
                        options={momentumNtradingDayOptions}
                        placeholder='25'
                        compact
                        onChange ={(e,selectedOption) => {
                            setNforAIdown(selectedOption.value)
                            }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )



    const level1TrendMenuPanels = [
        { key: 'EMA', title: 'Exponential Moving Average (EMA)', content: EMAcontentPanel, index: 0 },
    ]
    
    const Level1TrendContent = (
        <div className="no-padding">
          <Accordion.Accordion panels={level1TrendMenuPanels} className='no-padding'/>
        </div>
    )

    const rootPanels = [
            { key: 'panel-1-Momentum', title: 'Momentum Indicators', content: { content: Level1MomentumContent } },
            { key: 'panel-1-Trend', title: 'Trend Indicators', content: { content: Level1TrendContent } },
        ]

    const RSIAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} defaultChecked onClick={(event) => {
                                event.stopPropagation()
                                setDisplayRSIcheckbox(!displayRSIcheckbox)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Relative Strength Index</h5>
            </Grid.Column>
        </Grid>
    )

    const TSIAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayTSIcheckbox(!displayTSIcheckbox)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>True Strength Index</h5>
            </Grid.Column>
        </Grid>
    )

    const UOAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayUOCheckbox(!displayUOCheckbox)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Ultimate Oscillator</h5>
            </Grid.Column>
        </Grid>
    )

    const StochAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayStochCheckbox(!displayStochCheckbox)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Stochastic Oscillator</h5>
            </Grid.Column>
        </Grid>
    )

    const StochSignalAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayStochSignalCheckbox(!displayStochSignalCheckbox)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Stochastic Oscillator Signal</h5>
            </Grid.Column>
        </Grid>
    )

    const WRAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayWR(!displayWR)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Williams %R</h5>
            </Grid.Column>
        </Grid>
    )

    const AOAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayAO(!displayAO)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Awesome Oscillator</h5>
            </Grid.Column>
        </Grid>
    )
    const KamaAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayKama(!displayKama)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Kaufmans Adaptive Moving Average</h5>
            </Grid.Column>
        </Grid>
    )

    const ROCAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayROC(!displayROC)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Rate-of-Change (ROC) indicator</h5>
            </Grid.Column>
        </Grid>
    )

    const EMAAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayEMA(!displayEMA)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Exponential Moving Average</h5>
            </Grid.Column>
        </Grid>
    )
    const SMAAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplaySMA(!displaySMA)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Simple Moving Average</h5>
            </Grid.Column>
        </Grid>
    )
    const MACDAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayMACD(!displayMACD)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Moving Average Convergence Divergence (MACD)</h5>
            </Grid.Column>
        </Grid>
    )
    const MACDsignalAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayMACDsignal(!displayMACDsignal)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Moving Average Convergence Divergence Signal</h5>
            </Grid.Column>
        </Grid>
    )
    const ADXAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayADX(!displayADX)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Average Directional Movement Index (ADX)</h5>
            </Grid.Column>
        </Grid>
    )
    const ADXposAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayADXpos(!displayADXpos)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Average Directional Movement Index (ADX) Positive</h5>
            </Grid.Column>
        </Grid>
    )
    const ADXnegAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayADXneg(!displayADXneg)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Average Directional Movement Index (ADX) Negative</h5>
            </Grid.Column>
        </Grid>
    )
    const VIposAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayVIpos(!displayVIpos)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Vortex Indicator (VI) Postive</h5>
            </Grid.Column>
        </Grid>
    )
    const VInegAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayVIneg(!displayVIneg)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Vortex Indicator (VI) Negative</h5>
            </Grid.Column>
        </Grid>
    )
    const TRIXAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayTRIX(!displayTRIX)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Trix (TRIX)</h5>
            </Grid.Column>
        </Grid>
    )
    const MassIndexAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayMassIndex(!displayMassIndex)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Mass Index (MI)</h5>
            </Grid.Column>
        </Grid>
    )
    const CCIAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayCCI(!displayCCI)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Commodity Channel Index (CCI)</h5>
            </Grid.Column>
        </Grid>
    )
    const DPOAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayDPO(!displayDPO)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Detrended Price Oscillator (DPO)</h5>
            </Grid.Column>
        </Grid>
    )
    const IchimukuAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayIchimoku(!displayIchimuku)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Tenkan-sen (Conversion Line)</h5>
            </Grid.Column>
        </Grid>
    )
    const AIupAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayAIup(!displayAIup)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Aroon Up Indicator (AI)</h5>
            </Grid.Column>
        </Grid>
    )
    const AIdownAccordionTitle = (
        <Grid columns='equal'>
            <Grid.Column width={2}>
                    <Checkbox borderless index={1} onClick={(event) => {
                                event.stopPropagation()
                                setDisplayAIdown(!displayAIdown)
                            }}>
                    </Checkbox>
            </Grid.Column>
            <Grid.Column>
                <h5>Aroon Down Indicator (AI)</h5>
            </Grid.Column>
        </Grid>
    )
  
    //console.log(stockData)
	return (
		<div>
            <Grid celled>
                <Grid.Column width = {4}>
                    <Grid.Row stretched>
                        <Form>
                            <Input 
                                placeholder="Add ticker ex) APPL" 
                                value={ticker}
                                name='ticker'
                                onChange={(e) => setTicker(e.target.value)}
                                isClearable
                            />
                            <Button animated primary onClick={handleTickerFormSubmit}>
                                <Button.Content visible>Go!</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                            </Button>
                        </Form>
                    </Grid.Row>
                        <br/>
                    <Grid.Row>
                            
                        <Menu widths={4}>
                            <Menu.Item
                            name='5d'
                            active={activeItemDateMenu === '5d'}
                            onClick={() => handleDateClick(8, '5d')}
                            >
                            5 d
                            </Menu.Item>
                            <Menu.Item
                            name='1m'
                            active={activeItemDateMenu === '1m'}
                            onClick={() => handleDateClick(30, '1m')}
                            >
                            1 m
                            </Menu.Item>
                            
                            <Menu.Item
                            name='6m'
                            active={activeItemDateMenu === '6m'}
                            onClick={() => handleDateClick(180, '6m')}
                            >
                            6 m
                            </Menu.Item>
                            
                            <Menu.Item
                            name='1y'
                            active={activeItemDateMenu === '1y'}
                            onClick={() => handleDateClick(365, '1y')}
                            >
                            1 y
                            </Menu.Item>
                            
                        </Menu>
                         
                    </Grid.Row>
                    <br/>
                    <Grid.Row>
                        <Header as='h4'>Custom Dates</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <br/>Start:
                        <DatePicker 
                            selected={startDate} 
                            maxDate={new Date()} 
                            onChange={date => handleStartDateClick(date)}
                            placeholderText='MM/DD/YYYY'
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown />
                        <br/>End:
                        <DatePicker 
                            selected={startDate} 
                            maxDate={new Date()} 
                            onChange={date => handleStartDateClick(date)}
                            placeholderText='MM/DD/YYYY'
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown />
                    </Grid.Row>
                    <Grid.Row>
                    <br/> 
                    <br/>
                   
                        <Form>
                            <Form.Field>
                                
                                <Button toggle active={displayPriceChart} onClick={handlePriceClickLine}>
                                    Line Chart
                                </Button>
                                <Button toggle active={!displayPriceChart} onClick={handlePriceClickCandle}>
                                    Candle Stick
                                </Button>
                            </Form.Field>
                        </Form>
                        
                      
                        
                    </Grid.Row>
                    <br/><br/>
                    <Grid.Row stretched>
                        <div id="accordionIndicators">
                            <Header as='h2'>Momentum</Header>
                        <Accordion as={Menu} vertical fluid borderless>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeRSIAccodianMenuItem === 0}
                                    content={RSIAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setRSIActiveAccordionMenuItem(index.index === activeRSIAccodianMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeRSIAccodianMenuItem === 0} content={RSIcontentPanel} />

                            </Menu.Item>

                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeTSIAccodianMenuItem === 0}
                                    content={TSIAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setTSIActiveAccordionMenuItem(index.index === activeTSIAccodianMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeTSIAccodianMenuItem === 0} content={TSIcontentPanel} />
                            </Menu.Item>

                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeUOAccodianMenuItem === 0}
                                    content={UOAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setUOActiveAccordionMenuItem(index.index === activeUOAccodianMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeUOAccodianMenuItem === 0} content={UOcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeAOAccodianMenuItem === 0}
                                    content={AOAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setAOActiveAccordionMenuItem(index.index === activeAOAccodianMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeAOAccodianMenuItem === 0} content={AOcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeStochAccodianMenuItem === 0}
                                    content={StochAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setStochActiveAccordionMenuItem(index.index === activeStochAccodianMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeStochAccodianMenuItem === 0} content={StochcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeStochSignalAccodianMenuItem === 0}
                                    content={StochSignalAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setStochSignalActiveAccordionMenuItem(index.index === activeStochSignalAccodianMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeStochSignalAccodianMenuItem === 0} content={StochSignalcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeWRAccodianMenuItem === 0}
                                    content={WRAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setWRActiveAccordionMenuItem(index.index === activeWRAccodianMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeWRAccodianMenuItem === 0} content={WRcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeKamaAccodianMenuItem === 0}
                                    content={KamaAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setKamaActiveAccordionMenuItem(index.index === activeKamaAccodianMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeKamaAccodianMenuItem === 0} content={ROCcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeROCAccodianMenuItem === 0}
                                    content={ROCAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setROCActiveAccordionMenuItem(index.index === activeROCAccodianMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeROCAccodianMenuItem === 0} content={ROCcontentPanel} />
                            </Menu.Item>
                        </Accordion>
                        </div>
                    </Grid.Row>
                    <Grid.Row stretched>
                        <div id="accordionIndicators">
                            <Header as='h2'>Trend</Header>
                        <Accordion as={Menu} vertical fluid borderless>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeSMAAccordionMenuItem === 0}
                                    content={SMAAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveSMAAccordionMenuItem(index.index === activeSMAAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeSMAAccordionMenuItem === 0} content={SMAcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeMACDAccordionMenuItem === 0}
                                    content={MACDAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveMACDAccordionMenuItem(index.index === activeMACDAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeMACDAccordionMenuItem === 0} content={MACDcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeEMAAccodianMenuItem === 0}
                                    content={EMAAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setEMAActiveAccordionMenuItem(index.index === activeEMAAccodianMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeEMAAccodianMenuItem === 0} content={EMAcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeMACDsignalAccordionMenuItem === 0}
                                    content={MACDsignalAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveMACDsignalAccordionMenuItem(index.index === activeMACDsignalAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeMACDsignalAccordionMenuItem === 0} content={MACDSignalcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeADXAccordionMenuItem === 0}
                                    content={ADXAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveADXAccordionMenuItem(index.index === activeADXAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeADXAccordionMenuItem === 0} content={ADXcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeADXposAccordionMenuItem === 0}
                                    content={ADXposAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveADXposAccordionMenuItem(index.index === activeADXposAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeADXposAccordionMenuItem === 0} content={ADXposcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeADXnegAccordionMenuItem === 0}
                                    content={ADXnegAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveADXnegAccordionMenuItem(index.index === activeADXnegAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeADXnegAccordionMenuItem === 0} content={ADXnegcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeVIposAccordionMenuItem === 0}
                                    content={VIposAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveVIposAccordionMenuItem(index.index === activeVIposAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeVIposAccordionMenuItem === 0} content={VIposcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeVInegAccordionMenuItem === 0}
                                    content={VInegAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveVInegAccordionMenuItem(index.index === activeVInegAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeVInegAccordionMenuItem === 0} content={VInegcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeTRIXAccordionMenuItem=== 0}
                                    content={TRIXAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveTRIXAccordionMenuItem(index.index === activeTRIXAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeTRIXAccordionMenuItem === 0} content={TRIXcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeMassIndexAccordionMenuItem=== 0}
                                    content={MassIndexAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveMassIndexAccordionMenuItem(index.index === activeMassIndexAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeMassIndexAccordionMenuItem === 0} content={MassIndexcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeCCIAccordionMenuItem=== 0}
                                    content={CCIAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveCCIAccordionMenuItem(index.index === activeCCIAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeCCIAccordionMenuItem === 0} content={CCIcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeDPOAccordionMenuItem=== 0}
                                    content={DPOAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveDPOAccordionMenuItem(index.index === activeDPOAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeDPOAccordionMenuItem === 0} content={DPOcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeIchimokuAccordionMenuItem=== 0}
                                    content={IchimukuAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveIchimokuAccordionMenuItem(index.index === activeIchimokuAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeIchimokuAccordionMenuItem === 0} content={IchimukucontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeAIupAccordionMenuItem=== 0}
                                    content={AIupAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveAIupAccordionMenuItem(index.index === activeAIupAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeAIupAccordionMenuItem === 0} content={AIupcontentPanel} />
                            </Menu.Item>
                            <Menu.Item borderless>
                                <Accordion.Title
                                    active={activeAIdownAccordionMenuItem=== 0}
                                    content={AIdownAccordionTitle}
                                    index={0}
                                    borderless
                                    onClick={(e,index) => {
                                        setActiveAIdownAccordionMenuItem(index.index === activeAIdownAccordionMenuItem ? -1 : index.index)
                                        }}
                                />
                                <Accordion.Content borderless active={activeAIdownAccordionMenuItem === 0} content={AIdowncontentPanel} />
                            </Menu.Item>
                        </Accordion>
                        </div>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width = {12}>
                    <React.Fragment>
                        <svg ref={stockPriceLineChartNode}></svg>
                    </React.Fragment>
                    <React.Fragment>
                        <svg ref={momentumIndicatorsChartNode}></svg>
                    </React.Fragment>
                    <React.Fragment>
                        <svg ref={showVolumeNode}></svg>
                    </React.Fragment>
                    
                    <Accordion>                          
                        <Accordion.Title
                            onClick={() => {
                                setActiveEarningsMenuItem(!activeEarningsMenuItem)
                            }}
                        >
                            <h3>Earnings {activeEarningsMenuItem ? "-" : "+"}</h3>
                        </Accordion.Title>
                        <Accordion.Content active={activeEarningsMenuItem}>
                            <React.Fragment>
                                <svg ref={earningsChartNode}></svg>
                            </React.Fragment>
                        </Accordion.Content>
                        <Accordion.Title
                            onClick={() => {
                                setActiveFinancialsMenuItem(!activeFinancialsMenuItem)
                            }}
                        >
                            <h3>Financials {activeFinancialsMenuItem ? "-" : "+"}</h3>
                        </Accordion.Title>
                        <Accordion.Content active={activeFinancialsMenuItem}>{Object.keys(financials).map(function(key,index) {
                                if (financials.length > 0) {
                                return(
                                <Segment.Group>
                                    <Segment.Group horizontal>
                                        <Segment>Gross Profit (M$): {financials[key].grossProfit}</Segment>
                                        <Segment>Operating Revenue (M$): {financials[key].operatingRevenue}</Segment>
                                        <Segment>Total Revenue (M$): {financials[key].totalRevenue}</Segment>
                                    </Segment.Group>
                                    <Segment.Group horizontal>
                                        <Segment>Total Assets (M$): {financials[key].totalAssets}</Segment>
                                        <Segment>Total Liabilities (M$): {financials[key].totalLiabilities}</Segment>
                                        <Segment>Total Cash (M$): {financials[key].totalCash}</Segment>
                                    </Segment.Group>
                                    <Segment.Group horizontal>
                                        <Segment>Net Income (M$): {financials[key].netIncome}</Segment>
                                        <Segment>Research and Development (M$): {financials[key].researchAndDevelopment}</Segment>
                                        <Segment>Cash Flow (M$): {financials[key].cashFlow}</Segment>
                                    </Segment.Group>
                                    <Segment.Group horizontal>
                                        <Segment>Total Debt (M$): {financials[key].totalDebt}</Segment>
                                        <Segment>Short Term Debt (M$): {financials[key].shortTermDebt}</Segment>
                                        <Segment>Long Term Debt (M$): {financials[key].longTermDebt}</Segment>
                                    </Segment.Group>
                                </Segment.Group>
                            )}}
                            )}
                        </Accordion.Content>
                    </Accordion>
                </Grid.Column>
            </Grid>    
        </div>	
	);
} 