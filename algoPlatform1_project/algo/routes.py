from flask import render_template, url_for, jsonify, flash, redirect, request
from algoPlatform1_project import app, db
import os, json
from datetime import datetime
import pyEX as p
import pandas as pd
from iexfinance.stocks import get_historical_data, Stock
import ta
from ta.volatility import BollingerBands
from ta.momentum import RSIIndicator, TSIIndicator, uo
from algoPlatform1_project.models import User, Post, Watchlist, OHLC_JSONdata
from flask_login import login_user, current_user, logout_user, login_required

IEX_secret_api_key = os.environ.get('IEX_CLOUD_SECRET_API_KEY')
IEX_api_key =  os.environ.get('IEX_CLOUD_API_KEY') 

from flask import Blueprint
algo = Blueprint('algo',__name__)

# @algo.route("/create_algo", methods=['GET'])
# def create_algo():
#     sym = "TSLA"  # This is not case-sensitive
#     tickers = ['MSFT',
#                'AAPL']
#     tickers = ','.join(tickers)
#     endpoints = 'chart'
#     data_range = '1d' 
#     HTTP_request = f'https://cloud.iexapis.com/stable/stock/market/batch?symbols={tickers}&types={endpoints}&range={data_range}&token={IEX_api_key}'
#     IEX_data = pd.read_json(HTTP_request)
#     IEX_data_head = IEX_data.tail()
#     return render_template('old_index.html',head=IEX_data_head)


@algo.route("/get_stock_data/<ticker>/<startDate>/<endDate>", methods=['GET'])
def get_stock_data(ticker,startDate,endDate):

    startDateForAPItemp = startDate.split('-')
    startDateForAPI = datetime(int(startDateForAPItemp[0]),int(startDateForAPItemp[1]),int(startDateForAPItemp[2]))

    endDateForAPItemp = endDate.split('-')
    endDateForAPI = datetime(int(endDateForAPItemp[0]),int(endDateForAPItemp[1]),int(endDateForAPItemp[2]))
    # print(start.date())
    # end = datetime.fromtimestamp(endDate)
    # print(end.date())

    # start = datetime(StartYear,StartMonth,StartDay)
    # end = datetime(EndYear,EndMonth,EndDay)

    def getDBdata(start,end):
        queriedData = OHLC_JSONdata.query.all()
        out = []
        trigger = False
        for i in range(len(queriedData)):
            startDateForDBobjectTemp = queriedData[i].AAPL['date'].split('-')
            startDateForDBobject = datetime(int(startDateForDBobjectTemp[0]),int(startDateForDBobjectTemp[1]),int(startDateForDBobjectTemp[2]))
            #if (queriedData[i].AAPL['date'] == startDate) or (startDateForAPI <= startDateForDBobject):
            if startDateForAPI <= startDateForDBobject:
                trigger = True
            if queriedData[i].AAPL['date'] == endDate:
                trigger = False   
            # if (int(queriedData[i].AAPL['date'][0:4]) == StartYear) and (int(queriedData[i].AAPL['date'][5:7]) == StartMonth) and (int(queriedData[i].AAPL['date'][8:]) == StartDay):
            #     trigger = True
            # if (int(queriedData[i].AAPL['date'][0:4]) == EndYear) and (int(queriedData[i].AAPL['date'][5:7]) == EndMonth) and (int(queriedData[i].AAPL['date'][8:]) == EndDay):
            #     trigger = False
            if trigger:
                out.append(queriedData[i].AAPL)
        return out

    def flatten_json(stockData):
        out = []
        for i in stockData:
            out2 = {}
            out2['date']=i
            for j in stockData[i]:
                out2[j] = stockData[i][j]
            out.append(out2) 
        return out
    
    if ticker == 'AAPL':
        Historical_Data = getDBdata(startDate,endDate)
    else:
        historicalData = get_historical_data(ticker, start=startDateForAPI.date(), end=endDateForAPI.date(), token=IEX_api_key)
        Historical_Data = flatten_json(historicalData)

    #historicalData = get_historical_data(ticker, start=start.date(), end=end.date(), token=IEX_api_key)
    #Historical_Data = flatten_json(historicalData)
    #print(ticker)
    #print(Historical_Data)
    # historicalData = get_historical_data(ticker, start=startDateForAPI.date(), end=endDateForAPI.date(), token=IEX_api_key)
    # Historical_Data = flatten_json(historicalData)
    #initiallyCommitData(Historical_Data)
    df = pd.DataFrame(Historical_Data)
    df = ta.utils.dropna(df)
    # print('This is historical data')
    # print(Historical_Data)
    # indicator_bb = BollingerBands(close=df["close"], n=20, ndev=2)
    # #df = ta.add_all_ta_features(df, open="open", high="high", low="low", close="close", volume="volume")

    # # Add Bollinger Bands features
    # df['bb_bbm'] = indicator_bb.bollinger_mavg()
    # df['bb_bbh'] = indicator_bb.bollinger_hband()
    # df['bb_bbl'] = indicator_bb.bollinger_lband()

    # # Add Bollinger Band high indicator
    # df['bb_bbhi'] = indicator_bb.bollinger_hband_indicator()

    # # Add Bollinger Band low indicator
    # df['bb_bbli'] = indicator_bb.bollinger_lband_indicator()

    # # Add Width Size Bollinger Bands
    # df['bb_bbw'] = indicator_bb.bollinger_wband()

    # # Add Percentage Bollinger Bands
    # df['bb_bbp'] = indicator_bb.bollinger_pband()

    # # Add RSI Indicator
    indicator_RSI = RSIIndicator(close=df["close"],n=10)
    df['rsi'] = indicator_RSI.rsi()


    df.fillna(0, inplace=True)
    
    # return (json.dumps(Historical_Data)) 
    return (json.dumps(df.to_dict('records')))

def initiallyCommitData(data):
    for i in range(len(data)):
        dateTemp =  data[i]['date'].split('-')
        data[i]['date'] = str(int(dateTemp[0]))+'-'+str(int(dateTemp[1]))+'-'+str(int(dateTemp[2]))
        # data[i]['date'] = datetime.fromisoformat(data[i]['date']).timestamp() 
        addedData = OHLC_JSONdata(AAPL=data[i])
        db.session.add(addedData)
        db.session.commit()


@algo.route("/get_financial_data/<ticker>", methods=['GET'])
def get_fianancial_data(ticker):

    stock = Stock(ticker, token=IEX_api_key)
    financials = stock.get_financials()
    # print(earnings)

    # def divideByMillion(financialParameter,newFinancials):
    #     newFinancials[0][financialParameter] = newFinancials[0][financialParameter]/1000000

    # financialParameters = ('grossProfit','operatingRevenue','totalRevenue','totalAssets','totalLiabilities','totalCash','netIncome','cashFlow','totalDebt','shortTermDebt','longTermDebt')

    financials[0]['grossProfit'] = financials[0]['grossProfit']/1000000
    financials[0]['operatingRevenue'] = financials[0]['operatingRevenue']/1000000
    financials[0]['totalRevenue'] = financials[0]['totalRevenue']/1000000
    financials[0]['totalAssets'] = financials[0]['totalAssets']/1000000
    financials[0]['totalLiabilities'] = financials[0]['totalLiabilities']/1000000
    financials[0]['totalCash'] = financials[0]['totalCash']/1000000
    financials[0]['netIncome'] = financials[0]['researchAndDevelopment']/1000000
    financials[0]['cashFlow'] = financials[0]['cashFlow']/1000000
    financials[0]['totalDebt'] = financials[0]['totalDebt']/1000000
    financials[0]['shortTermDebt'] = financials[0]['shortTermDebt']/1000000
    financials[0]['longTermDebt'] = financials[0]['longTermDebt']/1000000
    return (json.dumps(financials))

@algo.route("/get_earnings_data/<ticker>", methods=['GET'])
def get_earnings_data(ticker):
    stock = Stock(ticker, token=IEX_api_key)
    earnings = stock.get_earnings(last=4)
    company = stock.get_company()
    return(json.dumps(earnings))


# @algo.route("/calculate_Momentum_Indicators_temp/", methods=['GET','POST'])
# def calculate_Momentum_Indicators_temp():
#     JSON_sent = request.get_json()   
#     list_temp = JSON_sent
#     print('\n\n\n This is the length of the list sent \n\n\n',len(list_temp))
#     #[data,RSIparameters,TSIparameters,UOparameters] = list_temp
#     print('\n\n\n This is the list sent \n\n\n', list_temp) 
#     print('\n\n\n This is the RSI Parameters \n\n\n', list_temp[1])
#     print('\n\n\n This is the TSI Parameters \n\n\n', list_temp[2])
#     print('\n\n\n This is the UO Parameters \n\n\n', list_temp[3])

@algo.route("/calculate_Momentum_Indicators/", methods=['GET','POST'])
def calculate_Momentum_Indicators():
    
    JSON_sent = request.get_json() 
    df = pd.DataFrame(JSON_sent[0])
    
    # RSI
    nForRSI = JSON_sent[1]['N']
    
    # TSI
    TSIchecked = JSON_sent[2]['displayTSI']
    TSIr = int(JSON_sent[2]['rTSI'])
    TSIs = int(JSON_sent[2]['sTSI'])

    # Ultimate Ossilator
    # print('This is display uo \n',JSON_sent[3]['displayUO'])
    UOchecked = JSON_sent[3]['displayUO']
    sForUO = int(JSON_sent[3]['sForUO'])
    mForUO = int(JSON_sent[3]['mForUO'])
    lenForUO = int(JSON_sent[3]['lenForUO'])
    wsForUO = float(JSON_sent[3]['wsForUO'])
    wmForUO = float(JSON_sent[3]['wmForUO'])
    wlForUO = float(JSON_sent[3]['wlForUO'])

    print("\n\n\n THis si the UO data \n\n\n",JSON_sent[3])

    indicator_RSI = RSIIndicator(close=df["close"], n=nForRSI)
    df['rsi'] = indicator_RSI.rsi()
    # print('\n\n\n This is DF adding RSI \n\n\n',df)

    if TSIchecked:
        print('\n\n TSI is working as a boolean \n\n')
        indicator_TSI = TSIIndicator(close=df["close"], r=TSIr, s=TSIs)
        df['tsi'] = indicator_TSI.tsi()
    
    if UOchecked:
        print('\n\n UO is working as a boolean \n\n')
        indicator_UO = uo(high=df['high'],low=df['low'],close=df['close'],s=sForUO,m=mForUO,len=lenForUO,ws=wsForUO,wm=wmForUO,wl=wlForUO)
        df['UO'] = indicator_UO
        #print('\n\n\n This is the UO last object \n\n\n',df['UO'][(len(df['UO'])-1)][_uo])
        # for property, value in vars(df['UO'][(len(df['UO'])-50)]).items():
        #     print(property, ":", value)
    #print('\n\n\n This is DF with Mom Para \n\n\n',df)
    df.fillna(0, inplace=True)
    #print('\n\n\n This is DF after dropping Mom Para \n\n\n',df)
    export_df = df.drop(columns=['open', 'high', 'low', 'close', 'volume'])
    print('The export df \n',export_df)
    return (json.dumps(export_df.to_dict('records')))







    
# @algo.route("/get_stock_data/<ticker>/<int:StartYear>/<int:StartMonth>/<int:StartDay>/<int:EndYear>/<int:EndMonth>/<int:EndDay>", methods=['GET'])
# def get_stock_data(ticker,StartYear,StartMonth,StartDay,EndYear,EndMonth,EndDay):
    
#     start = datetime(StartYear,StartMonth,StartDay)
#     end = datetime(EndYear,EndMonth,EndDay)

#     def getDBdata(start,end):
#         queriedData = OHLC_JSONdata.query.all()
#         out = []
#         trigger = False
#         print(trigger)
#         for i in range(len(queriedData)):
#             print('this is the start day')
#             print(EndDay)
#             print('This is the end dat')
#             print(int(queriedData[i].AAPL['date'][8:]))
#             print(trigger)
#             if (int(queriedData[i].AAPL['date'][0:4]) == StartYear) and (int(queriedData[i].AAPL['date'][5:7]) == StartMonth) and (int(queriedData[i].AAPL['date'][8:]) == StartDay):
#                 trigger = True
#             if (int(queriedData[i].AAPL['date'][0:4]) == EndYear) and (int(queriedData[i].AAPL['date'][5:7]) == EndMonth) and (int(queriedData[i].AAPL['date'][8:]) == EndDay):
#                 trigger = False
#             if trigger:
#                 out.append(queriedData[i].AAPL)
#         return out

#     def flatten_json(stockData):
#         out = []
#         for i in stockData:
#             out2 = {}
#             out2['date']=i
#             for j in stockData[i]:
#                 out2[j] = stockData[i][j]
#             out.append(out2) 
#         return out
    
#     if ticker == 'AAPL':
#         Historical_Data = getDBdata(start,end)
#     else:
#         historicalData = get_historical_data(ticker,start=start, end=end, token=IEX_api_key)
#         Historical_Data = flatten_json(historicalData)

#     df = pd.DataFrame(Historical_Data)
#     df = ta.utils.dropna(df)
#     print('This is historical data')
#     print(Historical_Data)
#     indicator_bb = BollingerBands(close=df["close"], n=20, ndev=2)
#     #df = ta.add_all_ta_features(df, open="open", high="high", low="low", close="close", volume="volume")

#     # Add Bollinger Bands features
#     df['bb_bbm'] = indicator_bb.bollinger_mavg()
#     df['bb_bbh'] = indicator_bb.bollinger_hband()
#     df['bb_bbl'] = indicator_bb.bollinger_lband()

#     # Add Bollinger Band high indicator
#     df['bb_bbhi'] = indicator_bb.bollinger_hband_indicator()

#     # Add Bollinger Band low indicator
#     df['bb_bbli'] = indicator_bb.bollinger_lband_indicator()

#     # Add Width Size Bollinger Bands
#     df['bb_bbw'] = indicator_bb.bollinger_wband()

#     # Add Percentage Bollinger Bands
#     df['bb_bbp'] = indicator_bb.bollinger_pband()

#     # Add RSI Indicator
#     indicator_RSI = RSIIndicator(close=df["close"],n=10)
#     df['rsi'] = indicator_RSI.rsi()


#     df.fillna(0, inplace=True)
#     # print('This is the Data Frame with RSI')
#     # print(df)
#     #return (json.dumps(Historical_Data)) 
#     return (json.dumps(df.to_dict('records')))

# def initiallyCommitData(data):
#     for i in range(len(data)):
#         addedData = OHLC_JSONdata(AAPL=data[i])
#         db.session.add(addedData)
#         db.session.commit()

    