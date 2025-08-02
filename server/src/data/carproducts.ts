export interface ProductItem {
  id: string;
  title: string;
  image: string;
  price: number;
}

export interface YearGroup {
  year: string;
  products: ProductItem[];
}

export interface ModelGroup {
  model: string;
  years: YearGroup[];
}

export interface MakeGroup {
  make: string;
  models: ModelGroup[];
}


export const products: MakeGroup[] = [
  {
    make: "Toyota",
    models: [
      {
        model: "Corolla",
        years: [
          {
            year: "2025",
            products: [
              {
                id: "toyota-corolla-2025-1",
                title: "Toyota Corolla 2025",
                image: "https://i.ytimg.com/vi/BJfbAhDwMqw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdzBFboUFDhmOx5V_TfiwCb-MAKg",
                price: 150.900,
              },
              {
                id: "toyota-corolla-2025-2",
                title: "Toyota Corolla 2025",
                image: "https://i.ytimg.com/vi/wWpwMfuVYYQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD78llW3AI6D-RUhXLv_eFVZES2gw",
                price: 130.000,
              },
              {
                id: "toyota-corolla-2025-3",
                title: "Toyota Corolla 2025",
                image: "https://tashdata.s3.me-south-1.amazonaws.com/public/dooz/UploadedFiles/e404f478-5ea8-4111-81a7-5fde0af83fd8.jpeg",
                price: 123.900,
              },
              {
                id: "toyota-corolla-2025-4",
                title: "Toyota Corolla 2025",
                image: "https://biauto.it/wp-content/uploads/toyota-corolla.webp",
                price: 135.700,
              },
              {
                id: "toyota-corolla-2025-5",
                title: "Toyota Corolla 2025",
                image: "https://scout.customerscout.net/Gallery/IMAGES/2025/Toyota/Corolla-Cross/2025ToyotaCorollaCross-exterior-01.jpg",
                price: 140.700,
              },
              {
                id: "toyota-corolla-2025-6",
                title: "Toyota Corolla 2025",
                image: "https://fuelcarmagazine.com/wp-content/uploads/2024/02/Toyota-Corolla-Cross-2025.jpg",
                price: 150.700,
              },
              {
                id: "toyota-corolla-2025-7",
                title: "Toyota Corolla 2025",
                image: "https://img.ltn.com.tw/Upload/auto/page/2023/11/22/231122-24346-1-vPnOJ.jpeg",
                price: 160.700,
              },
              {
                id: "toyota-corolla-2025-8",
                title: "Toyota Corolla 2025",
                image: "https://i.ytimg.com/vi/RH79VLEZ4x8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBrxDUYl2wPzG_yfO0PehA1Koyz9g",
                price: 170.500,
              },
            ],
          },
          {
            year: "2024",
            products: [
              {
                id: "toyota-corolla-2024-1",
                title: "Toyota Corolla 2024",
                image: "https://di-uploads-pod13.dealerinspire.com/andersontoyota/uploads/2023/09/back-in-black-toyota-corolla-nightshade-edition-returns-for-2024-2-1024x576.jpg",
                price: 110.900,
              },
              {
                id: "toyota-corolla-2024-2",
                title: "Toyota Corolla 2024",
                image: "https://carbike360-ae.s3.me-central-1.amazonaws.com/2024_Toyota_Corolla_6787517b31.png",
                price: 120.200,
              },
              {
                id: "toyota-corolla-2024-3",
                title: "Toyota Corolla 2024",
                image: "https://ymimg1.b8cdn.com/resized/article/9194/pictures/12398549/listing_main_2024_Toyota_Corolla_front_three_quarter.jpg",
                price: 105.700,
              },
              {
                id: "toyota-corolla-2024-4",
                title: "Toyota Corolla 2024",
                image: "https://static.overfuel.com/photos/60/256581/image-1.webp",
                price: 115.700,
              },
              {
                id: "toyota-corolla-2024-5",
                title: "Toyota Corolla 2024",
                image: "https://flagshipdrive.com/wp-content/uploads/2024/05/2024-toyota-corolla-active-sport-www.flagshipdrive.com_.jpg",
                price: 117.700,
              },
              {
                id: "toyota-corolla-2024-6",
                title: "Toyota Corolla 2024",
                image: "https://assets.autobuzz.my/wp-content/uploads/2024/12/04141501/2024-Toyota-Corolla-Cross-Hybrid-Electric-Launch-KLIMS-1.jpg",
                price: 132.200,
              },
              {
                id: "toyota-corolla-2024-7",
                title: "Toyota Corolla 2024",
                image: "https://images.carexpert.com.au/cms/v1/media/2024-02-2024-toyota-corolla-sedan-zr-hybridhero-16x9-1.jpg",
                price: 145.700,
              },
              {
                id: "toyota-corolla-2024-8",
                title: "Toyota Corolla 2024",
                image: "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/mobile/gallery/toyota-corolla-altis-hybrid-review-road-test-front-quarter-exterior-philippines-5de4a59f318b3.jpg",
                price: 128.400,
              },
            ],
          },
        ],
      },
      {
        model: "Camry",
        years: [
          {
            year: "2025",
            products: [
              {
                id: "toyota-camry-2025-1",
                title: "Toyota Camry 2025",
                image: "https://s1.cdn.autoevolution.com/images/news/fully-redesigned-2025-toyota-camry-shines-brightly-in-the-ai-designed-spotlight-222451_1.jpg",
                price: 150.900,
              },
              {
                id: "toyota-camry-2025-2",
                title: "Toyota Camry 2025",
                image: "https://rpmweb.ca/medias/Toyota-Camry-2025-LA-2.jpg",
                price: 130.000,
              },
              {
                id: "toyota-camry-2025-3",
                title: "Toyota Camry 2025",
                image: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.580xw:0.489xh;0.137xw,0.397xh&resize=1200:*",
                price: 123.900,
              },
              {
                id: "toyota-camry-2025-4",
                title: "Toyota Camry 2025",
                image: "https://i.ytimg.com/vi/rdBd4EGRrU4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA3ZPFmOvLaBTfO1Ix4-g_VW2Ffsw",
                price: 135.700,
              },
              {
                id: "toyota-camry-2025-5",
                title: "Toyota Camry 2025",
                image: "https://i.ytimg.com/vi/-LTdAEXVDIQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsNvOatx_dzJ6bgnZNvr0GVbaOJA",
                price: 140.700,
              },
              {
                id: "toyota-camry-2025-6",
                title: "Toyota Camry 2025",
                image: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg",
                price: 150.700,
              },
              {
                id: "toyota-camry-2025-7",
                title: "Toyota Camry 2025",
                image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/11344/1733916451269/rear-right-side-48.jpg",
                price: 160.700,
              },
              {
                id: "toyota-camry-2025-8",
                title: "Toyota Camry 2025",
                image: "https://www.topgear.com/sites/default/files/2024/06/2025_Camry_XLE_AWD_OceanGem_012.jpg",
                price: 170.500,
              },
            ],
          },
          {
            year: "2024",
            products: [
              {
                id: "toyota-camry-2024-1",
                title: "Toyota Camry 2024",
                image: "https://di-uploads-pod13.dealerinspire.com/andersontoyota/uploads/2023/09/back-in-black-toyota-corolla-nightshade-edition-returns-for-2024-2-1024x576.jpg",
                price: 110.900,
              },
              {
                id: "toyota-camry-2024-2",
                title: "Toyota Camry 2024",
                image: "https://carbike360-ae.s3.me-central-1.amazonaws.com/2024_Toyota_Corolla_6787517b31.png",
                price: 120.200,
              },
              {
                id: "toyota-camry-2024-3",
                title: "Toyota Camry 2024",
                image: "https://ymimg1.b8cdn.com/resized/article/9194/pictures/12398549/listing_main_2024_Toyota_Corolla_front_three_quarter.jpg",
                price: 105.700,
              },
              {
                id: "toyota-camry-2024-4",
                title: "Toyota Camry 2024",
                image: "https://static.overfuel.com/photos/60/256581/image-1.webp",
                price: 115.700,
              },
              {
                id: "toyota-camry-2024-5",
                title: "Toyota Camry 2024",
                image: "https://flagshipdrive.com/wp-content/uploads/2024/05/2024-toyota-corolla-active-sport-www.flagshipdrive.com_.jpg",
                price: 117.700,
              },
              {
                id: "toyota-camry-2024-6",
                title: "Toyota Camry 2024",
                image: "https://assets.autobuzz.my/wp-content/uploads/2024/12/04141501/2024-Toyota-Corolla-Cross-Hybrid-Electric-Launch-KLIMS-1.jpg",
                price: 132.200,
              },
              {
                id: "toyota-camry-2024-7",
                title: "Toyota Camry 2024",
                image: "https://images.carexpert.com.au/cms/v1/media/2024-02-2024-toyota-corolla-sedan-zr-hybridhero-16x9-1.jpg",
                price: 145.700,
              },
              {
                id: "toyota-camry-2024-8",
                title: "Toyota Camry 2024",
                image: "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/mobile/gallery/toyota-corolla-altis-hybrid-review-road-test-front-quarter-exterior-philippines-5de4a59f318b3.jpg",
                price: 128.400,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    make: "MercedesBenz",
    models: [
      {
        model: "S-Class",
        years: [
          {
            year: "2025",
            products: [
              {
                id: "mercedes-benz-2025-1",
                title: "Mercedes Benz 2025",
                image: "https://vehicle-images.dealerinspire.com/a518-11001115/W1K6G8CB4SA319762/72c6212d419bfdef172a0a1c1f428e97.png",
                price: 200.900,
              },
              {
                id: "mercedes-benz-2025-2",
                title: "Mercedes Benz 2025",
                image: "https://vehicle-images.dealerinspire.com/b958-11001096/W1K6G8CB4SA319423/fe66720c9d1bfd0c15ea96f14cd17c31.jpg",
                price: 200.000,
              },
              {
                id: "mercedes-benz-2025-3",
                title: "Mercedes Benz 2025",
                image: "https://vehicle-images.dealerinspire.com/0318-11001096/W1K6G8CB7SA324650/492101357bc31e3846ba6a1a6231678c.jpg",
                price: 150.900,
              },
              {
                id: "mercedes-benz-2025-4",
                title: "Mercedes Benz 2025",
                image: "https://vehicle-images.dealerinspire.com/dfea-18003032/W1K6G8CB0RA271543/8fa9a32ce1d5f9b741886654d79e41b0.jpg",
                price: 135.700,
              },
              {
                id: "mercedes-benz-2025-5",
                title: "Mercedes Benz 2025",
                image: "https://www.edmunds.com/assets/m/for-sale/da-w1k6g7gb9sa322404/img-1-600x400.jpg",
                price: 140.700,
              },
              {
                id: "mercedes-benz-2025-6",
                title: "Mercedes Benz 2025",
                image: "https://www.edmunds.com/assets/m/for-sale/a3-w1k6g8cb8sa315973/img-1-600x400.jpg",
                price: 150.700,
              },
              {
                id: "mercedes-benz-2025-7",
                title: "Mercedes Benz",
                image: "https://i.ytimg.com/vi/Ph0d0OyJd8g/maxresdefault.jpg",
                price: 160.700,
              },
              {
                id: "mercedes-benz-2025-8",
                title: "Mercedes Benz 2025",
                image: "https://i.ytimg.com/vi/l5qfs4KqKP8/mqdefault.jpg",
                price: 170.500,
              },
            ],
          },
        
        ],
      },
      {
        model: "CLS",
        years: [
          {
            year: "2025",
            products: [
              {
                id: "mercedes-cls-2025-1",
                title: "Mercedes CLS 2025",
                image: "https://content.homenetiol.com/2000292/2201973/0x0/6fc029397d7a48fba9a8fe1223879633.jpg",
                price: 150.900,
              },
              {
                id: "mercedes-cls-2025-2",
                title: "Mercedes CLS 2025",
                image: "https://s1.cdn.autoevolution.com/images/news/2024-mercedes-cls-celebrates-virtual-debut-with-an-amg-twist-218001_1.jpg",
                price: 130.000,
              },
              {
                id: "mercedes-cls-2025-3",
                title: "Mercedes CLS 2025",
                image: "https://images.carexpert.com.au/resize/800/-/cms/v1/media/2024-mercedes-benz-cls-class-primary-image.jpg",
                price: 123.900,
              },
              {
                id: "mercedes-cls-2025-4",
                title: "Mercedes CLS 2025",
                image: "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2023-05-08-at-4-32-27-pm-64595c8ee4a9b.png?crop=0.962671905697446xw:1xh;center,top&resize=1200:*",
                price: 135.700,
              },
              {
                id: "mercedes-cls-2025-5",
                title: "Mercedes CLS 2025",
                image: "https://www.autorro.sk/wp-content/uploads/2024/06/1_Mercedes-CLS-1-scaled.jpg",
                price: 140.700,
              },
              {
                id: "mercedes-cls-2025-6",
                title: "Mercedes CLS 2025",
                image: "https://image.stern.de/7888938/t/f9/v2/w1440/r0/-/06--artikel21888bild01jpg---51558c03f97e5cff.jpg",
                price: 150.700,
              },
              {
                id: "mercedes-cls-2025-7",
                title: "Mercedes CLS 2025",
                image: "https://www.carstyling.gr/wp-content/uploads/2022/06/10225_6.jpg",
                price: 160.700,
              },
              {
                id: "mercedes-cls-2025-8",
                title: "Mercedes CLS 2025",
                image: "https://prestigecarcenter.fi/media/2024/10/172794538571069.jpg",
                price: 170.500,
              },
            ],
          },
          {
            year: "2024",
            products: [
              {
                id: "mercedes-cls-2024-1",
                title: "Mercedes CLS 2024",
                image: "https://cloud.leparking.fr/2024/10/02/18/01/mercedes-cls-nou-mercedes-benz-cls-2024-104-125-eur-100-km-autovit-ro-gris_9186351466.jpg",
                price: 110.900,
              },
              {
                id: "mercedes-cls-2024-2",
                title: "Mercedes CLS 2024",
                image: "https://pictures.dealer.com/m/mercedesbenzofnapervillemb/1437/1c4c27351faa8391adf5e57ce8c58623x.jpg?impolicy=resize&w=414",
                price: 120.200,
              },
              {
                id: "mercedes-cls-2024-3",
                title: "Mercedes CLS 2024",
                image: "https://s1.cdn.autoevolution.com/images/news/gallery/2024-mercedes-cls-looks-stunning-in-unofficial-renderings-too-bad-it-wont-happen_3.jpg",
                price: 105.700,
              },
              {
                id: "mercedes-cls-2024-4",
                title: "Mercedes CLS 2024",
                image: "https://external-preview.redd.it/another-sedan-bites-the-dust-mercedes-benz-cls-ends-v0-Ifj0m99rFNNqXVgnPhLGOOD6MoQoXR3anE50RfiPIgA.jpg?width=640&crop=smart&auto=webp&s=1158e2f65ac18c9d8e12ba2640444697b32a8c7d",
                price: 115.700,
              },
              {
                id: "mercedes-cls-2024-5",
                title: "Mercedes CLS 2024",
                image: "https://automanager.blob.core.windows.net/wmphotos/042615/bbca787f7f88410d84e40ad99ea38022/e49d5a84cf_1280.jpg",
                price: 117.700,
              },
              {
                id: "mercedes-cls-2024-6",
                title: "Mercedes CLS 2024",
                image: "https://cloud.leparking.fr/2024/02/01/09/23/mercedes-cls-mercedes-benz-cls-450-1-main-malus-inclus-amg-360-cam-garantie-mercedes-2025-rouge_9003063986.jpg",
                price: 132.200,
              },
              {
                id: "mercedes-cls-2024-7",
                title: "Mercedes CLS 2024",
                image: "https://www.meinauto.de/pics/wpimages/2023/01/21C0304_022.jpg",
                price: 145.700,
              },
              {
                id: "mercedes-cls-2024-8",
                title: "Mercedes CLS 2024",
                image: "https://jesmb.de/wp-content/uploads/2021/04/mercedes-cls-mopf1.jpg",
                price: 128.400,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    make: "BMW",
    models: [
      {
        model: "8 Series",
        years: [
          {
            year: "2025",
            products: [
              {
                id: "8 series-2025-1",
                title: "BMW 8-Series 2025",
                image: "https://www.thesupercarblog.com/wp-content/uploads/2018/12/2019-bmw-8-series-coupe-m850i-by-manhart-02.jpg",
                price: 200.900,
              },
              {
                id: "8 series-2025-2",
                title: "BMW 8-Series 2025",
                image: "https://assets.autobuzz.my/wp-content/uploads/2021/06/28153237/2021-BMW-Japan-840i-Frozen-Black-11.jpg",
                price: 200.000,
              },
              {
                id: "8 series-2025-3",
                title: "BMW 8-Series 2025",
                image: "https://i.redd.it/1gisangidp151.jpg",
                price: 150.900,
              },
              {
                id: "8 series-2025-4",
                title: "BMW 8-Series 2025",
                image: "https://assets.autobuzz.my/wp-content/uploads/2021/06/28153228/2021-BMW-Japan-840i-Frozen-Black-9.jpg",
                price: 135.700,
              },
              {
                id: "8 series-2025-5",
                title: "BMW 8-Series 2025",
                image: "https://imgd.aeplcdn.com/664x374/cw/ec/41406/BMW-8-Series-Rear-view-164821.jpg?wm=0&q=80",
                price: 140.700,
              },
              {
                id: "8 series-2025-6",
                title: "BMW 8-Series 2025",
                image: "https://i.ytimg.com/vi/JnpFvkacNQg/sddefault.jpg",
                price: 150.700,
              },
              {
                id: "8 series-2025-7",
                title: "BMW 8-Series 2025",
                image: "https://i.ytimg.com/vi/oYbMom6faHU/maxresdefault.jpg",
                price: 160.700,
              },
              {
                id: "8 series-2025-8",
                title: "BMW 8-Series 2025",
                image: "https://i.ytimg.com/vi/2HKI_zlk1X4/maxresdefault.jpg",
                price: 170.500,
              },
            ],
          },
        
        ],
      },
      {
        model: "CLS",
        years: [
          {
            year: "2025",
            products: [
              {
                id: "mercedes-cls-2025-1",
                title: "Mercedes CLS 2025",
                image: "https://content.homenetiol.com/2000292/2201973/0x0/6fc029397d7a48fba9a8fe1223879633.jpg",
                price: 150.900,
              },
              {
                id: "mercedes-cls-2025-2",
                title: "Mercedes CLS 2025",
                image: "https://s1.cdn.autoevolution.com/images/news/2024-mercedes-cls-celebrates-virtual-debut-with-an-amg-twist-218001_1.jpg",
                price: 130.000,
              },
              {
                id: "mercedes-cls-2025-3",
                title: "Mercedes CLS 2025",
                image: "https://images.carexpert.com.au/resize/800/-/cms/v1/media/2024-mercedes-benz-cls-class-primary-image.jpg",
                price: 123.900,
              },
              {
                id: "mercedes-cls-2025-4",
                title: "Mercedes CLS 2025",
                image: "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2023-05-08-at-4-32-27-pm-64595c8ee4a9b.png?crop=0.962671905697446xw:1xh;center,top&resize=1200:*",
                price: 135.700,
              },
              {
                id: "mercedes-cls-2025-5",
                title: "Mercedes CLS 2025",
                image: "https://www.autorro.sk/wp-content/uploads/2024/06/1_Mercedes-CLS-1-scaled.jpg",
                price: 140.700,
              },
              {
                id: "mercedes-cls-2025-6",
                title: "Mercedes CLS 2025",
                image: "https://image.stern.de/7888938/t/f9/v2/w1440/r0/-/06--artikel21888bild01jpg---51558c03f97e5cff.jpg",
                price: 150.700,
              },
              {
                id: "mercedes-cls-2025-7",
                title: "Mercedes CLS 2025",
                image: "https://www.carstyling.gr/wp-content/uploads/2022/06/10225_6.jpg",
                price: 160.700,
              },
              {
                id: "mercedes-cls-2025-8",
                title: "Mercedes CLS 2025",
                image: "https://prestigecarcenter.fi/media/2024/10/172794538571069.jpg",
                price: 170.500,
              },
            ],
          },
          {
            year: "2024",
            products: [
              {
                id: "mercedes-cls-2024-1",
                title: "Mercedes CLS 2024",
                image: "https://cloud.leparking.fr/2024/10/02/18/01/mercedes-cls-nou-mercedes-benz-cls-2024-104-125-eur-100-km-autovit-ro-gris_9186351466.jpg",
                price: 110.900,
              },
              {
                id: "mercedes-cls-2024-2",
                title: "Mercedes CLS 2024",
                image: "https://pictures.dealer.com/m/mercedesbenzofnapervillemb/1437/1c4c27351faa8391adf5e57ce8c58623x.jpg?impolicy=resize&w=414",
                price: 120.200,
              },
              {
                id: "mercedes-cls-2024-3",
                title: "Mercedes CLS 2024",
                image: "https://s1.cdn.autoevolution.com/images/news/gallery/2024-mercedes-cls-looks-stunning-in-unofficial-renderings-too-bad-it-wont-happen_3.jpg",
                price: 105.700,
              },
              {
                id: "mercedes-cls-2024-4",
                title: "Mercedes CLS 2024",
                image: "https://external-preview.redd.it/another-sedan-bites-the-dust-mercedes-benz-cls-ends-v0-Ifj0m99rFNNqXVgnPhLGOOD6MoQoXR3anE50RfiPIgA.jpg?width=640&crop=smart&auto=webp&s=1158e2f65ac18c9d8e12ba2640444697b32a8c7d",
                price: 115.700,
              },
              {
                id: "mercedes-cls-2024-5",
                title: "Mercedes CLS 2024",
                image: "https://automanager.blob.core.windows.net/wmphotos/042615/bbca787f7f88410d84e40ad99ea38022/e49d5a84cf_1280.jpg",
                price: 117.700,
              },
              {
                id: "mercedes-cls-2024-6",
                title: "Mercedes CLS 2024",
                image: "https://cloud.leparking.fr/2024/02/01/09/23/mercedes-cls-mercedes-benz-cls-450-1-main-malus-inclus-amg-360-cam-garantie-mercedes-2025-rouge_9003063986.jpg",
                price: 132.200,
              },
              {
                id: "mercedes-cls-2024-7",
                title: "Mercedes CLS 2024",
                image: "https://www.meinauto.de/pics/wpimages/2023/01/21C0304_022.jpg",
                price: 145.700,
              },
              {
                id: "mercedes-cls-2024-8",
                title: "Mercedes CLS 2024",
                image: "https://jesmb.de/wp-content/uploads/2021/04/mercedes-cls-mopf1.jpg",
                price: 128.400,
              },
            ],
          },
        ],
      },
    ],
  },
];
