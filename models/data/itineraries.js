let itineraries = [
    {
        citiId: '636c1e428bd9edc4d096fd53',
        name: 'Monumento a la Bandera',
        photo: ['https://www.rosario.gob.ar/web/sites/default/files/p19bic5sql13cq1h8ian8b4n972c.jpg','https://i0.wp.com/www.disfrutarosario.com/wp-content/uploads/2016/06/55506919_2131683113546519_1792906451010715648_n.jpg?fit=806%2C806&ssl=1','https://viapais.com.ar/resizer/P5PXOJijM8oUU7HfgNkHH4l3vvM=/1200x630/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/27R56VI2HJG4XFS4YKHZA3EFIU.jpg'],
        description: 'It is located in the place where Belgrano raised the Argentine flag for the first time, on the banks of the Paraná River.',
        price: 10,
        duration: 1,
        userId: '636c1d1e667bd3053f955b89',
    },
    {
        citiId: '636c1e428bd9edc4d096fd53',
        name: 'Centro Cultural Parque de España',
        photo: ['https://arquitecturadecalle.com.ar/wp-content/uploads/2012/05/Complejo-Cultural-Parque-Espa%C3%B1a1.jpg','https://ccpe.org.ar/web/wp-content/uploads/2019/07/aereaccpe.jpeg','https://ccpe.org.ar/web/wp-content/uploads/2020/03/galerias.jpg'],
        description: 'Walk in the park in Rosario City',
        price: 1,
        duration: 1,
        userId: '636c1d1e667bd3053f955b89',
    },
    {
        citiId: '636c1e428bd9edc4d096fd55',
        name: 'Qatar vs Ecuador',
        photo: ['https://visitqatar.com/content/dam/visitqatar/img/things-to-do/adventures/other-sports-and-activities/al-bayt-stadium/Al_Bayt_Stadium2.jpg/_jcr_content/renditions/medium-1280px.jpeg','https://cdn.mos.cms.futurecdn.net/FHTU3uQvdsqgvai7AD4t8M.jpg','https://images.adsttc.com/media/images/53b4/290a/c07a/8021/3200/0003/large_jpg/2014_06_21_AlBaytStadium_AlKhorCity_01.jpg?1404315894'],
        description: 'November 20, 2022 in Al Bayt Stadium for World Cup',
        price: 60,
        duration: 2,
        userId: '636c1d1e667bd3053f955b89',
    },
    {
        citiId: '636c1e428bd9edc4d096fd55',
        name: 'Argentina vs Mexico',
        photo: ['https://pbs.twimg.com/media/FLIPRt8WQAIk2xW.jpg','https://digitalhub.fifa.com/transform/ede226e4-43ff-4a4d-b476-47b31fbde53e/FIFA-Arab-Cup-Qatar-2021-December-16','https://phantom-marca.unidadeditorial.es/ec95428f8d05af00d3efe46c9e594768/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/10/16627698519959.jpg'],
        description: 'November 26, 2022 in Lusail Stadium for World Cup',
        price: 60,
        duration: 2,
        userId: '636c1d1e667bd3053f955b8a',
    },
    {
        citiId: '636c1e428bd9edc4d096fd57',
        name: 'Fontana di Trevi',
        photo: ['https://okdiario.com/img/2019/10/07/5-curiosidades-de-la-fontana-di-trevi.jpg','https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/08/29115355/trevi-2.jpg','https://img.static-kl.com/images/media/90868EFE-7943-4561-94DD36F3C01B4AFA?w=960&aspect_ratio=2:1'],
        description: 'The fountain features sculptures of the Roman god Neptune and other mythological figures, with the magnificent Palazzo Poli palace serving as a backdrop',
        price: 0,
        duration: 1,
        userId: '636c1d1e667bd3053f955b8a',
    },
    {
        citiId: '636c1e428bd9edc4d096fd57',
        name: 'St. Peter Basilica',
        photo: ['https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/55/0c.jpg','https://images.prismic.io/mystique/659698ea-b932-4e1e-98cb-9e5be5c8ddb8_st+peter%27s+basilica+9.jpg?auto=compress,format','https://a.cdn-hotels.com/gdcs/production191/d1045/8f54d1a4-b0e5-42c9-b53c-aa29919399bc.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'],
        description: 'St. Peters Basilica is the most recognizable structure in the heart of the Vatican City, and is considered among the holiest sites in Christendom',
        price: 2,
        duration: 1,
        userId: '636c1d1e667bd3053f955b8a',
    },
    {
        citiId: '636c1e428bd9edc4d096fd5e',
        name: 'Cathedral of La Plata',
        photo: ['https://cdn1.eldia.com/042019/1555475408529.jpg?cw=696&ch=733','https://pbs.twimg.com/media/FBxD_yaWYAwY_9p.jpg:large','https://cdn2.civitatis.com/argentina/la-plata/galeria/fachada-catedral-la-plata-argentina.jpg'],
        description: 'The neo-gothic cathedral of La Plata is one of the largest churches in the world. Discover its beautiful interior with this tour which includes a climb to the viewpoint of one of its towers.',
        price: 7,
        duration: 2,
        userId: '636c1d1e667bd3053f955b88',
    },
    {
        citiId: '636c1e428bd9edc4d096fd5e',
        name: 'Teatro Argentino',
        photo: ['https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/media/articles/17095/teatro-argentino-la-plata.jpg?itok=DD0oG7X-','https://www.infobrandsen.com.ar/wp-content/uploads/2022/09/teatro-argentino-1.jpg','https://media.cdn.eldestapeweb.com/eldestape/072022/1658422939784/centro-provincial-de-las-artes-teatro-argentino-drone4-1-jpg..jpg'],
        description: 'Tour of the argentine theater of La Plata',
        price: 5,
        duration: 3,
        userId: '636c1d1e667bd3053f955b88',
    },
    {
        citiId: '636c1e428bd9edc4d096fd56',
        name: 'Zipline',
        photo: ['https://www.patagoniabooking.com/images/oramedia/icon_activities/PiedrasBlancasZipline_image1_1140_1603465156.jpg','https://i0.wp.com/barilocheparabrasileiros.com.br/wp-content/uploads/2019/04/Piedras-Blancas-Bariloche-Zip-Line-Tirolesa.png?fit=730%2C485&ssl=1','https://barilocheturismo.gob.ar/images/actividades/cerros/otto/cerrootto_piedrasblancas_03.jpg'],
        description: 'Zip lining is an action-filled recreational activity that involves riding a steel cable on a protective seat or a belt between two points and generally on a mountain that exhibits spectacular sceneries.',
        price: 120,
        duration: 2,
        userId: '636c1d1e667bd3053f955b88',
    },
    {
        citiId: '636c1e428bd9edc4d096fd56',
        name: 'Magic Donas',
        photo: ['https://www.rionegro.com.ar/wp-content/uploads/2021/06/Imagen-Bche-Piedras-Blancas-10.jpg','https://bariloche.org/wp-content/uploads/2016/07/donas-cerro-catedral-bariloche.jpg','https://www.barilochense.com/suplementos/piedras-blancas/fotos/46689.jpg'],
        description: 'Activity in Cerro Catedral',
        price: 150,
        duration: 2,
        userId: '636c1d1e667bd3053f955b87',
    },
    {
        citiId: '636c1e428bd9edc4d096fd58',
        name: 'Windsor Castle',
        photo: ['https://mediaim.expedia.com/localexpert/169694/4fe79ceb-570e-4a4b-825d-44ad6fd3554f.jpg','https://assets.vogue.com/photos/5da8ce98d7fd03000824e035/master/w_2560%2Cc_limit/GettyImages-1176172540.jpg','https://www.royal.uk/sites/default/files/images/feature/windsor_crop.jpg'],
        description: 'Windsor, where you explore the lavish State Apartments and St. George’s Chapel of Windsor Castle, an official residence of Her Majesty the Queen.',
        price: 15,
        duration: 4,
        userId: '636c1d1e667bd3053f955b87',
    },
    {
        citiId: '636c1e428bd9edc4d096fd58',
        name: 'Big Bus London Tour',
        photo: ['https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/17/e9/df.jpg','https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/e2/ae/e1.jpg','https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/24/15/f8.jpg'],
        description: 'Bug Bus bus voucher at any of the stops along one of the comprehensive routes. Opt for seating on the open-air upper deck or covered lower deck, depending on the weather, and listen to live or recorded commentary depending on the route chosen.',
        price: 18,
        duration: 3,
        userId: '636c1d1e667bd3053f955b87',
    },
]

require('dotenv').config()
require('../../config/database')
const Itinerary = require('../Itinerary')

itineraries.forEach(e =>{
    Itinerary.create({
        citiId:e.citiId,
        name:e.name,
        photo:e.photo,
        description:e.description,
        price: e.price,
        duration: e.duration,
        userId:e.userId,
    })
})