import PurchasesCard from "./PurchasesCard"

const Purchases = () => {

          
              const  datas = [
                  {
                        "id": 340,
                        "operatorId": 340,
                        "name": "9Mobile (Etisalat) Nigeria",
                        "bundle": false,
                        "data": false,
                        "destinationCurrencySymbol": "₦",
                        "minAmount": 50,
                        "maxAmount": 50000,
                        "localMinAmount": null,
                        "localMaxAmount": null,
                        "country": {
                        "isoName": "NG",
                        "name": "Nigeria"
                        },
                        "fx": {
                        "rate": 0.9158,
                        "currencyCode": "NGN"
                        },
                        "logoUrls": 
                        "https://s3.amazonaws.com/rld-operator/a6c9c490-39fa-47c0-a63a-b4a4d1d4dbe5-size-3.png",
                  },
                  {
                      "id": 645,
                      "operatorId": 645,
                      "name": "9Mobile (Etisalat) Nigeria Data",
                      "bundle": false,
                      "data": true,
                      "pin": false,
                      "destinationCurrencySymbol": "₦",
                      "mostPopularAmount": 110001,
                      "mostPopularLocalAmount": null,
                      "minAmount": null,
                      "maxAmount": null,
                      "country": {
                        "isoName": "NG",
                        "name": "Nigeria"
                      },
                      "fx": {
                        "rate": 0.9158,
                        "currencyCode": "NGN"
                      },
                      "logoUrls": 
                        "https://s3.amazonaws.com/rld-operator/a6c9c490-39fa-47c0-a63a-b4a4d1d4dbe5-size-3.png",
                      "fixedAmounts": [
                        50,
                        100,
                        200,
                        500,
                        1000,
                        1200,
                        1500,
                        2000,
                        4000,
                        5000,
                        10000,
                        15000,
                        27500,
                        55000,
                        84992,
                        110001
                      ],
                      "fixedAmountsDescriptions": {
                        "50.00": "Daily 25MB validity 24 hours",
                        "100.00": "Daily 100MB validity 24 hours",
                        "200.00": "650MB validity 24 hours",
                        "500.00": "500MB validity 30 days",
                        "1000.00": "1.5GB validity 30 days",
                        "1200.00": "2GB validity 30 days",
                        "1500.00": "7GB validity 7 days",
                        "2000.00": "4.5GB validity 30 days",
                        "4000.00": "11GB validity 30 days",
                        "5000.00": "15GB validity 30 days",
                        "10000.00": "40GB validity 30 days",
                        "15000.00": "75GB validity 30 days",
                        "27500.00": "30GB validity 90 days",
                        "55000.00": "60GB validity 180 days",
                        "84992.00": "100GB validity 100 days",
                        "110001.00": "120GB validity 365 days"
                      },
                      
                  },
                  {
                    "id": 342,
                    "operatorId": 342,
                    "name": "Airtel Nigeria",
                    "bundle": false,
                    "data": false,
                    "destinationCurrencySymbol": "₦",
                    "minAmount": 50,
                    "maxAmount": 199999,
                    "localMinAmount": null,
                    "localMaxAmount": null,
                    "country": {
                      "isoName": "NG",
                      "name": "Nigeria"
                    },
                    "fx": {
                      "rate": 0.9158,
                      "currencyCode": "NGN"
                    },
                    "logoUrls":  
                      "https://s3.amazonaws.com/rld-operator/2acbfe97-ef3e-4cce-906f-8681fed03b2d-size-3.png",
                    "fixedAmounts": [],
                    "fixedAmountsDescriptions": {},
                    "localFixedAmounts": [],
                    "localFixedAmountsDescriptions": {},
    
                  },
                  {
                    "id": 646,
                    "operatorId": 646,
                    "name": "Airtel Nigeria Data",
                    "bundle": false,
                    "data": true,
                    "destinationCurrencySymbol":"₦",
                    "minAmount": null,
                    "maxAmount": null,
                    "localMinAmount": null,
                    "localMaxAmount": null,
                    "country": {
                      "isoName": "NG",
                      "name": "Nigeria"
                    },
                    "fx": {
                      "rate": 0.9158,
                      "currencyCode": "NGN"
                    },
                    "logoUrls": 
                      "https://s3.amazonaws.com/rld-operator/2acbfe97-ef3e-4cce-906f-8681fed03b2d-size-3.png",
                    "fixedAmounts": [
                      49.99,
                      99,
                      199.03,
                      299.02,
                      499,
                      999,
                      1199,
                      1499.01,
                      1999,
                      2499.01,
                      2999.02,
                      3999.01,
                      4999,
                      8000,
                      9999,
                      14999,
                      19999.02
                    ],
                    "fixedAmountsDescriptions": {
                      "49.99": "Data 40MB (1 day)",
                      "99.00": "Data 75MB (1 day)",
                      "199.03": "Data 200MB (3 days)",
                      "299.02": "Data 350MB (7 days)",
                      "499.00": "Data 750MB (14 days)",
                      "999.00": "Data 1.5GB (30 days)",
                      "1199.00": "Data 2GB (30 Days)",
                      "1499.01": "Data 3GB (30 Days)",
                      "1999.00": "Data 4.5GB (30 days)",
                      "2499.01": "Data 6GB (30 Days)",
                      "2999.02": "Data 10GB (30 days)",
                      "3999.01": "Data 11GB (30 Days)",
                      "4999.00": "Data 20GB (30 days)",
                      "8000.00": "Data 25GB (30 Days)",
                      "9999.00": "Data 40GB (30 days)",
                      "14999.00": "Data 75GB (30 days)",
                      "19999.02": "Data 120GB (30 Days)"
                    },
                  },
                  {
                    "id": 344,
                    "operatorId": 344,
                    "name": "Glo Nigeria",
                    "bundle": false,
                    "data": false,
                    "destinationCurrencySymbol": "₦",
                    "minAmount": 50,
                    "maxAmount": 200000,
                    "localMinAmount": null,
                    "localMaxAmount": null,
                    "country": {
                      "isoName": "NG",
                      "name": "Nigeria"
                    },
                    "fx": {
                      "rate": 0.9158,
                      "currencyCode": "NGN"
                    },
                    "logoUrls":
                      "https://s3.amazonaws.com/rld-operator/18416726-e966-4ed0-b352-f02e9e9ff9db-size-3.png",
                    
                    "fixedAmounts": [],
                    "fixedAmountsDescriptions": {},
                    "localFixedAmounts": [],
                    "localFixedAmountsDescriptions": {},
                  },
                  {
                    "id": 931,
                    "operatorId": 931,
                    "name": "Glo Nigeria Bundle",
                    "bundle": false,
                    "data": true,
                    "destinationCurrencySymbol": "₦",
                    "minAmount": null,
                    "maxAmount": null,
                    "localMinAmount": null,
                    "localMaxAmount": null,
                    "country": {
                      "isoName": "NG",
                      "name": "Nigeria"
                    },
                    "fx": {
                      "rate": 0.87242,
                      "currencyCode": "NGN"
                    },
                    "logoUrls":
                      "https://s3.amazonaws.com/rld-operator/18416726-e966-4ed0-b352-f02e9e9ff9db-size-3.png",
                    
                    "fixedAmounts": [
                      25,
                      50,
                      100,
                      200,
                      1500,
                      30000,
                      36000,
                      50000,
                      60000,
                      75000,
                      100000
                    ],
                    "fixedAmountsDescriptions": {
                      "25.00": "WTF_N25 100MB (1 day)",
                      "50.00": "TelegramN50 50MB (7 days)",
                      "100.00": "InstagramN100 125MB (30 days)",
                      "200.00": "Sunday_200 1.25GB (1 day)",
                      "1500.00": "Special_1500 7GB (7 days)",
                      "30000.00": "GloMega30000_auto 225GB (30 days)",
                      "36000.00": "GloMega36000_auto 300GB (30 days)",
                      "50000.00": "GloMega50000_auto 425GB (90 days)",
                      "60000.00": "GloMega60000_auto 525GB (120 days)",
                      "75000.00": "GloMega75000_auto 675GB (120 days)",
                      "100000.00": "GloMega100000_auto 1TB (365 days)"
                    },
                    "localFixedAmounts": [],
                    "localFixedAmountsDescriptions": null,
                   
                  },
                  {
                    "id": 647,
                    "operatorId": 647,
                    "name": "Glo Nigeria Data",
                    "bundle": false,
                    "data": true,
                    "destinationCurrencySymbol": "₦",
                    "minAmount": null,
                    "maxAmount": null,
                    "localMinAmount": null,
                    "localMaxAmount": null,
                    "country": {
                      "isoName": "NG",
                      "name": "Nigeria"
                    },
                    "fx": {
                      "rate": 0.9158,
                      "currencyCode": "NGN"
                    },
                    "logoUrls": 
                      "https://s3.amazonaws.com/rld-operator/18416726-e966-4ed0-b352-f02e9e9ff9db-size-3.png",
                    "fixedAmounts": [
                      10,
                      11,
                      12,
                      13,
                      14,
                      15,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22,
                      50,
                      1500,
                      20000
                    ],
                    "fixedAmountsDescriptions": {
                      "10.00": "Data 150MB (1 day)",
                      "11.00": "Data 350MB (2 days)",
                      "12.00": "Data 1.35GB (14 days)",
                      "13.00": "Data 2.9GB (30 days)",
                      "14.00": "Data 5.8GB (30 days)",
                      "15.00": "Data 7.7GB (30 days)",
                      "16.00": "Data 10GB (30 days)",
                      "17.00": "Data 13.25GB (30 days)",
                      "18.00": "Data 18.25GB (30 days)",
                      "19.00": "Data 29.5GB (30 days)",
                      "20.00": "Data 50GB (30 days)",
                      "21.00": "Data 93GB (30 days)",
                      "22.00": "Data 119GB (30 days)",
                      "50.00": "Data 50MB (1 day)",
                      "1500.00": "Data 4.1GB (30 days)",
                      "20000.00": "Data 138GB (30 day)"
                    },
                   
                  },
                  {
                    "id": 932,
                    "operatorId": 932,
                    "name": "Glo Nigeria VOT PIN Service",
                    "bundle": false,
                    "data": false,
                    "destinationCurrencySymbol": "₦",
                    "minAmount": 5,
                    "maxAmount": 50000,
                    "localMinAmount": null,
                    "localMaxAmount": null,
                    "country": {
                      "isoName": "NG",
                      "name": "Nigeria"
                    },
                    "fx": {
                      "rate": 0.87242,
                      "currencyCode": "NGN"
                    },
                    "logoUrls": 
                      "https://s3.amazonaws.com/rld-operator/18416726-e966-4ed0-b352-f02e9e9ff9db-size-3.png",
                    
                    "fixedAmounts": [],
                    "fixedAmountsDescriptions": {},
                  },
                  {
                    "id": 341,
                    "operatorId": 341,
                    "name": "MTN Nigeria",
                    "bundle": false,
                    "data": false,
                    "destinationCurrencySymbol": "₦",
                    "minAmount": 50,
                    "maxAmount": 200000,
                    "localMinAmount": null,
                    "localMaxAmount": null,
                    "country": {
                      "isoName": "NG",
                      "name": "Nigeria"
                    },
                    "fx": {
                      "rate": 0.9158,
                      "currencyCode": "NGN"
                    },
                    "logoUrls": 
                      "https://s3.amazonaws.com/rld-operator/cc553249-f52a-4b86-9dc4-68dda963b1b3-size-3.png",
                    
                    "fixedAmounts": [],
                    "fixedAmountsDescriptions": {},
                  },
                  {
                    "id": 346,
                    "operatorId": 346,
                    "name": "MTN Nigeria Bundles",
                    "bundle": true,
                    "data": false,
                    "destinationCurrencySymbol": "₦",
                    "minAmount": null,
                    "maxAmount": null,
                    "localMinAmount": null,
                    "localMaxAmount": null,
                    "country": {
                      "isoName": "NG",
                      "name": "Nigeria"
                    },
                    "fx": {
                      "rate": 0.9158,
                      "currencyCode": "NGN"
                    },
                    "logoUrls":
                      "https://s3.amazonaws.com/rld-operator/ab2de6e9-40be-4a33-916c-1cd2018b6727-size-3.png",
                    "fixedAmounts": [
                      500,
                      1000,
                      2000,
                      5000,
                      10000
                    ],
                    "fixedAmountsDescriptions": {
                      "500.00": "MTN\t750MB\t7 days Xtradata 500",
                      "1000.00": "MTN\t1500MB\t30 days Xtradata 1000",
                      "2000.00": "MTN\t1500MB\t30 days Xtradata 1000",
                      "5000.00": "MTN\t15000MB\t30 days Xtradata 5000",
                      "10000.00": "MTN\t30000MB\t30 days Xtradata 10000"
                    },
                    
                  },
                  {
                    "id": 345,
                    "operatorId": 345,
                    "name": "MTN Nigeria Data",
                    "bundle": false,
                    "data": true,
                    "destinationCurrencySymbol": "₦",
                    "minAmount": null,
                    "maxAmount": null,
                    "localMinAmount": null,
                    "localMaxAmount": null,
                    "country": {
                      "isoName": "NG",
                      "name": "Nigeria"
                    },
                    "fx": {
                      "rate": 0.9158,
                      "currencyCode": "NGN"
                    },
                    "logoUrls": 
                      "https://s3.amazonaws.com/rld-operator/55a96d7c-b577-4526-b6cf-38ab0449698e-size-3.png",
                    "fixedAmounts": [
                      50,
                      100,
                      150,
                      200,
                      300,
                      500,
                      1000,
                      1200,
                      1500,
                      2000,
                      2500,
                      3000,
                      3500,
                      5000,
                      10000,
                      13500,
                      15000,
                      20000,
                      30000,
                      40000,
                      50000,
                      75000,
                      100000,
                      120000,
                      250000,
                      450000
                    ],
                    "fixedAmountsDescriptions": {
                      "50.00": "Data 50MB (24 hours)",
                      "100.00": "DataPlan 100MB Daily (24 Hours)",
                      "150.00": "Data 160MB (30 Days)",
                      "200.00": "Data 200MB (2 Days)",
                      "300.00": "Data 350MB (7 Days)",
                      "500.00": "Data 750MB (14 Days)",
                      "1000.00": "Data 1.5GB (30 days)",
                      "1200.00": "Data 2GB (30 Days)",
                      "1500.00": "Data 3GB (30 Days)",
                      "2000.00": "Data 4.5GB (30 days - All Day Plan)",
                      "2500.00": "Data 6GB (30 Days)",
                      "3000.00": "Data 8GB (30 Days)",
                      "3500.00": "Data 10GB (30 days)",
                      "5000.00": "Data 20GB (30 Days)",
                      "10000.00": "Data 40GB (30 days)",
                      "13500.00": "Data 30GB (SME Data Shares Bundle)",
                      "15000.00": "Data 75GB (30 Days)",
                      "20000.00": "Data 75GB (60 Days)",
                      "30000.00": "Data 120GB (60 Days)",
                      "40000.00": "Data 90GB (SME Data Shares Bundle)",
                      "50000.00": "Data 150GB (90 Days)",
                      "75000.00": "Data 250GB (90 Days)",
                      "100000.00": "Data 325GB (6 Months)",
                      "120000.00": "Data 400GB (1 Year)",
                      "250000.00": "Data 1000GB (1 Year)",
                      "450000.00": "Data 2000GB (1 Year)"
                    },
                    "localFixedAmounts": [],
                    "localFixedAmountsDescriptions": null,
                   
                  }
                ]
              

        

    return(
      
        <div className="container">
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-20">
            {
              datas.map((data, i) => (
                <div>
                  <PurchasesCard key={data.id} data={data} />
                </div>    
              ))
            }
              
              
            </section>

        </div>
      
    )

}



export default Purchases